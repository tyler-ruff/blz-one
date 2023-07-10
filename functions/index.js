const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const { Nuxt } = require("nuxt-start");

// Require nuxt config
const nuxtConfig = require('./../nuxt.config.js')

const config = {
    ...nuxtConfig,
    dev: false,
    buildDir: "nuxt",
};
const nuxt = new Nuxt(config);

exports.ssrapp = functions.https.onRequest(async (req, res) => {
    await nuxt.ready();
    nuxt.render(req, res);
});