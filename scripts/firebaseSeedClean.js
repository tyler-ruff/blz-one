
//import * as admin from 'firebase-admin';
//import { initializeApp } from 'firebase-admin/app';
//import admin from 'firebase-admin';
//import { auth, database, firestore } from "firebase-admin";
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore, Timestamp, FieldValue, Filter } from 'firebase-admin/firestore';
import { getDatabase } from 'firebase-admin/database';
import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';

//const { auth } = admin;

//const admin = require('firebase-admin');
//const faker = require('faker');
//const { faker } = require('@faker-js/faker');
//const { v4: uuidv4 } = require('uuid');
//admin.initializeApp({ projectId });

/*
    Local dev Firebase Realtime databases
    https://blz-one-9e383-default-rtdb.firebaseio.com
    https://blz-one-9e383.firebaseio.com
*/

const firebaseAdminConfig = {
    credential: cert({
        projectId: '',
        clientEmail: '',
        privateKey: ''
    }),
    databaseURL: ``,
}

function customInitApp() {
    if (getApps().length <= 0) {
        return initializeApp(firebaseAdminConfig);
    } else {
        return getApps()[0];
    }
}

const app = customInitApp();

const realtime = getDatabase(app);
const firestore = getFirestore(app);
const auth = getAuth(app);
//const realtime = db();

if (process.env.FIRESTORE_EMULATOR_HOST) {
  const [host, port] = process.env.FIRESTORE_EMULATOR_HOST.split(":");
  firestore.settings({ host, ssl: false });
  console.log(`✅ Firestore emulator at ${host}:${port}`);
}

if (process.env.FIREBASE_DATABASE_EMULATOR_HOST) {
  const [host, port] = process.env.FIREBASE_DATABASE_EMULATOR_HOST.split(":");
  realtime.useEmulator(host, parseInt(port, 10));
  console.log(`✅ RTDB emulator at ${host}:${port}`);
}

if (process.env.FIREBASE_AUTH_EMULATOR_HOST) {
  console.log(`✅ Auth emulator at ${process.env.FIREBASE_AUTH_EMULATOR_HOST}`);
  // Admin SDK picks this up automatically
}

function getRandomInteger(min, max) {
  min = Math.ceil(min); // Ensure min is an integer
  max = Math.floor(max); // Ensure max is an integer
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomUser(uidList){
    const randomNumber = getRandomInteger(0, uidList.length - 1);
    return uidList[randomNumber].toString();
}

function truncateText(text, maxLength = 500){
  if (!text) return '';
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.substring(0, maxLength - 3)}...`;
};

async function seedAuth(){
    try{
        const userIdList = [];

        const adminUser = await auth.createUser({
            emailVerified: true,
            email: faker.internet.email({ provider: 'admin.blazed.company' }),
            displayName: 'Admin',
            password: 'password1234',
            photoURL: 'https://blazed.sirv.com/logo/Beaker-Dark.png'
        });
        userIdList.push(adminUser.uid);
        console.log(`added user: ${adminUser.uid}`);
        await firestore.collection("profiles").doc(adminUser.uid).set({
            avatar: adminUser.photoURL,
            bio: truncateText(faker.lorem.paragraphs({ min: 1, max: 3 })),
            displayName: 'Admin',
            lastOnline: 'never',
            theme: faker.color.rgb({ format: 'hex', casing: 'lower' }),
            uid: adminUser.uid
        });
       const testUsers = await Promise.all(
            [...Array(10).keys()].map(async () => {
                const user = await auth.createUser({
                    emailVerified: true,
                    email: faker.internet.email({ provider: 'test.blazed.dev' }),
                    displayName: faker.internet.displayName(),
                    password: 'password1234',
                    photoURL: faker.image.avatar()
                });

                userIdList.push(user.uid);
                console.log(`added user: ${user.uid}`);

                await firestore.collection("profiles").doc(user.uid).set({
                    avatar: user.photoURL,
                    bio: truncateText(faker.lorem.paragraphs()),
                    displayName: user.displayName,
                    lastOnline: 'never',
                    theme: faker.color.rgb({ format: 'hex', casing: 'lower' }),
                    uid: user.uid
                });

                return user.uid;
            })
        );

        return userIdList;
    } catch(error){
        console.log(error, 'auth seed failed');
        return [];
    }
    //console.log(JSON.stringify(userIdList));
}

async function seedRealtime(uidList){
    const postsRef = realtime.ref('posts');
    try{
       // Create 3 special posts
       const specialPosts = await Promise.all(
        [...Array(3).keys()].map(async () => {
            const id = uuidv4();
            const postRef = postsRef.child(`${id}`);
            const author = randomUser(uidList);
            const randomDate = faker.date.past();
            const buzzPhrasePost = faker.company.buzzPhrase();
            const adjectivePost = faker.word.adjective();

            await postRef.set({
                id: id,
                author: author,
                publishDate: randomDate.toISOString(),
                content: `Hello World! ${adjectivePost} Welcome to the AWESOME Blazed One Social Network! ${buzzPhrasePost}`,
                visibility: 'public'
            });

            // Create between 0-7 random comments
            const commentRef = realtime.ref(`posts/${id}/comments`);
            const randomCommentCountSpecial = getRandomInteger(0, 7);
            [...Array(randomCommentCountSpecial).keys()].map(async () => {
                const author = randomUser(uidList);
                const randomCommentDate = faker.date.between({ from: randomDate, to: Date.now() });
                const buzzPhraseComment = faker.company.buzzPhrase();
                const commentContent = faker.lorem.sentences({ min: 1, max: 3 });
                const adverb = faker.word.adverb();
                await commentRef.push({
                    postId: id,
                    author: author,
                    publishDate: randomCommentDate,
                    updatedDate: randomCommentDate,
                    content: `${adverb} ${commentContent} ${buzzPhraseComment}`
                }).then(async (comment) => {
                    const commentId = comment.key;
                    const commentRefNew = realtime.ref(`posts/${id}/comments/${comment.key}`);
                    await update(commentRefNew, {
                        id: commentId
                    });
                });
            });

            console.log(`added special post: ${id}`);
        })
       )
       // Create 10 random test posts
       const testPosts = await Promise.all(
            [...Array(10).keys()].map(async () => {
                const id = uuidv4();
                const postRef = postsRef.child(`${id}`);
                const author = randomUser(uidList);
                const randomDate = faker.date.past();
                const content = faker.lorem.lines({ min: 1, max: 5 });
                await postRef.set({
                    id: id,
                    author: author,
                    publishDate: randomDate.toISOString(),
                    content: content,
                    visibility: 'public'
                });
                
                // Create between 0-3 random comments
                const commentRef = realtime.ref(`posts/${id}/comments`);
                const randomCommentCountSpecial = getRandomInteger(0, 3);
                [...Array(randomCommentCountSpecial).keys()].map(async () => {
                    const author = randomUser(uidList);
                    const randomCommentDate = faker.date.between({ from: randomDate, to: Date.now() });
                    const buzzPhraseComment = faker.company.buzzPhrase();
                    const commentContent = faker.lorem.sentences({ min: 1, max: 3 });
                    const adverb = faker.word.adverb();
                    await commentRef.push({
                        postId: id,
                        author: author,
                        publishDate: randomCommentDate,
                        updatedDate: randomCommentDate,
                        content: `${adverb} ${commentContent} ${buzzPhraseComment}`
                    }).then(async (comment) => {
                        const commentId = comment.key;
                        const commentRefNew = ref(realtime, `posts/${id}/comments/${comment.key}`);
                        await update(commentRefNew, {
                            id: commentId
                        });
                    });
                });
                console.log(`added post: ${id}`);
            })
        );
        return true;
    } catch (error) {
        console.log(error, 'database seed failed');
        return false;
    }
}

async function main(){
    const uidList = await seedAuth();
    //console.log(randomUser(uidList));
    await seedRealtime(uidList);
    console.log("✅ Seeding complete!");
    process.exit(0);
    //await Promise.all(getApps().map(app => deleteApp(app)));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});