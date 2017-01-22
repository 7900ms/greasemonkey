
// ==UserScript==
// @name          v2ex-replacer
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

function xtheHeader(){
  var theH = $('.header > a:nth-child(3)'); // https://www.v2ex.com/go/apple
  var theHx = $('.header > a:nth-child(2)'); // https://www.v2ex.com/t/336217
  var theHxx = $('span.gray:nth-child(5)'); // https://www.v2ex.com/member/hardensky
  var theHxxx= $('.header > a:nth-child(1)');//https://www.v2ex.com/signin
  theH.text('V2茶话会');
  theHx.text('V2茶话会');
  theHxx.text(theHxx.text().trim().replace(/V2EX/g,"V2茶话会"));
  theHxxx.text('V2茶话会');

};

function theReplacer(){
  $('body').html($('body').html().replace(/V2EX/g,"V2茶话会"));
};
  
function theCleaner(){
  // 未登入时的右侧欢迎栏
  // “ V2茶话会 = way to explore
  // ” V2茶话会 是一个关于分享和探索的地方 
  $('#Rightbar > div.box > div.cell > strong').css('display','none');
  $('#Rightbar > div.box > div.cell > span.fade').css('display','none');
};

$(document).ready(function(){
  theReplacer();
  theCleaner();
});

};
namespace1();
