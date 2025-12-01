
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
        projectId: 'blz-one-9e383',
        clientEmail: 'firebase-adminsdk-yjgdt@blz-one-9e383.iam.gserviceaccount.com',
        privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCTUJhQHiMmSAkz\n1XtHsWcxR0VV6fJjSvOqbHjjhwYvQ2anE5UdqfvB4Ed6Ij1yEUL+zYFobA8UdsiT\nBRwwSfDe1X/ekMpfIAqfQFLx9F8w2Cc8CPW3Gja4sqnTK1ILx5gS/tqsm6l03zYN\npJR9R3bEw6tHwtx+E3SHzPcDhy8QvMSPi01qJ3ofPX+TgPXpg4Ztt3eAo8q4FLVz\nj4F5pLSL9W3Dc+AoydLhJ2H1g5HubYsbHTDpfytQuTfmu/a8oFOZ50bbUy7WN4q4\nbs20eyuE4E168Yjk63gVorRpzNV55aBXK0p4yhI/pDmHupIb97P9Vc0TQ3nOJrSu\nDeWW2m6RAgMBAAECggEAQfCGbP5Ab4c5D0mUiA/BiA5F2+H/DDDlhrhNGFM9EnTS\nAyFB0uhed3bDp8ihxmgxm8ozDaGo0lklCKH17yt5tNTOCrq2ywOVnZj2R7VB0qQ+\nU6ITEmWabuwSFiLC8+Dgkkgfa7m1jUnIcSzlBnqxj/uhtFplxc1BkPPO8XZWO+AF\nHp4pKRKSUaj0AeQbJZy9OTDWI6BeYdnZ7p5Xx8mY6dgdWMHPuRKNpCuus4pnI0q4\nqLUpOQPsvyypfNpoBcYWCExwF6OOdZxSR/UWRklTMbXEebQJWgQBhwDtmEDywuWx\novIik3Rm0cRKJPXbY7+t4k5yvyz0EaZy/c1FKEqdrQKBgQC+v5lfA/Qg/OPKVVBR\nok5CK0Enq9/WZpkGdSPJUwcEdrWbK+HC7cPOERSbVuoSSl4LXZt+gX3p6HY/vx8a\n9prFAIjJANGxH1sqVW/qTW4XedWaxoFIweijjRSpt5EZjQCkiH0PF2yNSBIdNUfP\nUG4B2yLn8og4YvWNPS3tgBxh0wKBgQDFtWMTaopFrh/1AsbxUhLrYwD3/fgG54eA\nY4ShfHvxqS91UAtydRAZyR++tgwr1x0I3nyXo8O72hBdoA1JYVlB2jsrwpR/RCY2\n94xh2awMv0sv9MbLIuuw1z+7L1pmXFTY9ueAURTSrXQJ96wedLJ2OXGszL9hlJHi\ngYO6OEXLiwKBgQCjvpBni1pP0yescm4/lcf+b2lAKAA/6dUlQPuWgMq+XzVo3lOw\nZTE4PVtmOkc3qlVvBk1MXNb9LAwOjv+hwt57jQjfG+/mT9eP0MYA6bU/O9xNQGiN\nT8BoXdzGEInj2DIcC/rnMKGD6sF6B1n8sruspjQhzwZ2+SR3uXQqtFYo9wKBgQCe\nMGyue19ZM2Ikcu1k5st2hUegJRfPxm7XnkjfwK+XA0ySq9IM6XdRemgo+pYwebSk\nhQfheMnCw0626rnWzcpR81/GurCAR7Hf5x/upvCPXnu1Sj/JBw7X9tHqXpAROK02\n0A8Yz0c+7kPbOc0ArVShXYMDxOsYE3zKY+BXHnFR0wKBgEeQLZiBwQOvrNzdMtGm\nMVvgrWDSI336qQqoydw/MACbGIRgsPXR1IQ17OIOPpccKJLAohW7pUXxNxJxnsSY\nJUEei6GhrBGOiitQCFQ12MH2Y/UJHnjJvBOAwOVDyn4h1wqgGoKNm/jxz8MPJkc/\noC2RWlK4BefXUBGCO8RKSw8R\n-----END PRIVATE KEY-----\n'.replace(/\\n/gm, "\n"),
    }),
    databaseURL: `https://blz-one-9e383-default-rtdb.firebaseio.com`,
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
            bio: truncateText(faker.lorem.paragraphs()),
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
            const author = adminUser.uid;
            const randomDate = faker.date.anytime();
            await postRef.set({
                id: id,
                author: author,
                randomDate: randomDate.toISOString(),
                content: "Hello World! Welcome to the AWESOME Blazed One Social Network!",
                visibility: 'public'
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
                const randomDate = faker.date.anytime();
                await postRef.set({
                    id: id,
                    author: author,
                    publishDate: randomDate.toISOString(),
                    content: truncateText(faker.lorem.paragraphs()),
                    visibility: 'public'
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