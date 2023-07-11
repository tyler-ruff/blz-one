const functions = require('firebase-functions');
const { Nuxt } = require('nuxt');

const nuxtConfig = require('./../nuxt.config.js');

const config = {
  ...nuxtConfig,
  dev: false,
  buildDir: 'nuxt',
  build: {
    publicPath: '/assets/'
  }
};

const nuxt = new Nuxt(config);

exports.ssr = functions.https.onRequest(async (req, res) => {
  await nuxt.ready();
  nuxt.render(req, res);
});