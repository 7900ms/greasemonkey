
// ==UserScript==
// @name          v2ex-title
// @namespace     https://none.com/
// @version       0.0.6
// @description   Certificate for website of unwilling-blocking-gfw-supporter
// @grant         unsafeWindow
// @include       *://*.v2ex.com/*
// @include       *://v2ex.com/*
// @require       http://libs.useso.com/js/jquery/2.1.1/jquery.min.js
// @require       https://cdn.rawgit.com/song940/multiline.js/master/multiline.js
// ==/UserScript==


var namespace1 = function(){

//Avoid conflicts
this.$ = this.jQuery = jQuery.noConflict(true);

function theTitle(){
//   document.title = document.title + ' - 茶话会';
//   document.title = document.title.slice(0,-7) + ' - V2茶话会';
  document.title = document.title.replace('V2EX','V2茶话会');
};
function theBanner(){
  var theB = $('#Top > div:nth-child(1) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > a:nth-child(1) > img:nth-child(1)');
  theB.attr('height', '30px');
  theB.attr('width', '94px');
  theB.attr('alt', 'V2 茶话会');
  theB.attr('src', 'http://i.imgur.com/BtTXuGU.png');
};

$(document).ready(function(){
  theTitle();
  theBanner();
});

};
namespace1();
