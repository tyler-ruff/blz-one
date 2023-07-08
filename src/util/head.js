import config from '../config/config.js';
export default function build_head(){
    const url = window.location.href;
    document.head.innerHTML += `
        <link rel="icon" sizes="192x192" href="${config.icon}?w=192&h=192">
        <link rel="apple-touch-icon" href="${config.icon}?w=180&h=180">
        <link rel="apple-touch-startup-image" href="${config.icon}?w=180&h=180">
        <link rel="license" href="${config.license}">
        <link rel="author" href="${config.humans}">
        <!-- Meta Tags -->
        <meta name="generator" content="blz-fire v2.0">
        <meta name="google" content="nositelinkssearchbox">
        <meta name="robots" content="index,follow">
        <meta name="rating" content="General">
        <meta name="msapplication-config" content="/browserconfig.xml">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="application-name" content="${config.title}">
        <meta name="application-name" content="${config.title}">
        <meta name="apple-mobile-web-app-title" content="${config.title}">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <meta name="twitter:card" content="summary">
        <meta name="twitter:site" content="@${config.twitter}">
        <meta name="twitter:url" content="${url}">
        <meta name="twitter:title" content="${config.title}">
        <meta name="twitter:description" content="${config.description}">
        <meta name="twitter:image" content="${config.icon}?w=500&h=500">
        <meta name="twitter:image:alt" content="${config.description}">
        <meta property="fb:app_id" content="${config.fbAppId}">
        <meta property="og:url" content="${url}">
        <meta property="og:type" content="website">
        <meta property="og:title" content="${config.title}">
        <meta property="og:image" content="${config.icon}?w=500&h=500">
        <meta property="og:image:alt" content="${config.description}">
        <meta property="og:description" content="${config.description}">
        <meta property="og:site_name" content="${config.title}">
        <meta property="og:locale" content="en_US">
        <meta property="article:author" content="${config.company}">
        <meta itemprop="name" content="${config.title}">
        <meta itemprop="description" content="${config.description}">
        <meta itemprop="image" content="${config.icon}?w=180&h=180">
        `;
}