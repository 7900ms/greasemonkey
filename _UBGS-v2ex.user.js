// ==UserScript==
// @name          UBGS-v2ex
// @namespace     https://none.com/
// @version       0.0.6
// @description   Certificate for website of unwilling-blocking-gfw-supporter
// @grant         unsafeWindow
// @include       *://*.v2ex.com/*
// @include       *://v2ex.com/*
// @require       http://libs.useso.com/js/jquery/2.1.1/jquery.min.js
// @require       https://cdn.rawgit.com/song940/multiline.js/master/multiline.js
// ==/UserScript==

// 我不愿意碰到那些可能支持gfw的人。我愿意和不支持gfw的人呢在一起。我不愿意去这些人去的地方
// 我选择的论坛，好斑竹应该有素质，主动反对 ‘支持gfw’ 的氛围，反对那些带来 ‘支持gfw’氛围的人 ———— 这是斑竹的素质，而不是让他们和大家共存 
// 做不到是斑竹的错，强行包容那些 'gfw支持者' 是斑竹的错 ———— 如果一个网站有 80% 的潜在 gfw 支持者，那我碰到傻逼的可能性是大大的
// 外国人能上到 ‘完全不支持gfw’ 、 ‘碰到gfw支持者可能性为零’ 的网站，是他们的选择，我也要上。
// 否则，一切都没有意义。

// = = = = UBGS-v2ex = = = =
// v2ex 是一个 'gfw支持者' 会上的网站。并且 v2ex 管理员并不会主动驱逐 'gfw支持者'
// v2ex 管理员基于站方利益，并不会主动驱逐 'gfw支持者', 而是包容、纵容他们的存在 
// v2ex 的站方运营着的，是这样一个网站: a website of unwilling-blocking-gfw-supporter 
// 这种‘尝试包容傻逼’的做法，是站方在自取其辱
// http://v2ex.com/t/269715 
// 我就是无法忍受这种网站管理员对 ‘gfw支持者’ unwilling-blocking 的绥靖默许。 v2ex 提供了 'gfw支持者' 自我表达的平台，这种论坛氛围、这种包容性, 这种 ‘支持gfw的人也是一种存在即合理’ , 站方这种让 ‘gfw支持者畅所欲言’ 的绥靖政策简直让人恶心 
// 这个网站再好的自我标榜，已经没有意义了
//

// namespace1(); on 为你的自甘堕落，我不会去指责你，只能时时刻刻提醒自己你是怎样的 

//

var namespace1 = function(){

//Avoid conflicts
this.$ = this.jQuery = jQuery.noConflict(true);

function test1(){
  alert('Hello world!');
};
function test2(){
  $('div').css('background-color', 'yellow');
};
function test3(){
  $('body').append("<p id='gm_1'>yo, man!</p>");
  $('#gm_1').css('background-color', 'yellow');
};
function test4(){
  $('body').prepend("<p id='gm_1'>yo, man!</p>");
  $('#gm_1').css('background-color', 'yellow');
  $('#gm_1').attr("class", "gm_1c");
  $('.gm_1c').css('color', 'white');
};
function test51(){
  $('body').prepend("<p id='gm_1'>yo, man!</p>");
  $('#gm_1').css('background-color', 'yellow');
  $('#gm_1').css('font-size', '200%');
  $('#gm_1').css('position', 'relative');
};
function test52(){
  $('body').prepend("<p id='gm_1'>yo, man!</p>");
  $('#gm_1').css('background-color', 'yellow');
  $('#gm_1').css('font-size', '200%');
  $('#gm_1').css({ position: 'absolute', top: '100px', left: '50px', width: '200px'});
};
function test53(){
  $('body').prepend("<div id='gm_1_container'></div>");
  $('#gm_1_container').append("<p>UBGS</p>");
  $('#gm_1_container').append("<p>v2ex 是一个 'gfw支持者' 会上的网站。并且 v2ex 管理员并不会主动驱逐 'gfw支持者'</p>");
  $('#gm_1_container').append("<p>v2ex 管理员基于站方利益，并不会主动驱逐 'gfw支持者', 而是包容、纵容他们的存在 </p>");
  $('#gm_1_container').append("<p>v2ex 的站方运营着的，是这样一个网站: a website of unwilling-blocking-gfw-supporter</p>");
  $('#gm_1_container').append("<p>这种‘尝试包容傻逼’的做法，是站方在自取其辱</p>");
  $('#gm_1_container p').css('background-color', 'yellow');
  $('#gm_1_container p').css('font-size', '.7em');
  $('#gm_1_container').css('background-color', 'yellow');
  $('#gm_1_container').css({ position: 'fixed', top: '100px', left: '50px', width: '300px', padding: '0 5px'});
};
function test54(){
  var lines = multiline(function(){/*
  <p id='i'>UBGS</p>
  <div id='j'><p>v2ex 是一个 'gfw支持者' 会上的网站。并且 v2ex 管理员并不会主动驱逐 'gfw支持者'</p>
  <p>v2ex 管理员基于站方利益，并不会主动驱逐 'gfw支持者', 而是包容、纵容他们的存在 </p>
  <p>v2ex 的站方运营着的，是这样一个网站: a website of unwilling-blocking-gfw-supporter</p>
  <p>这种‘尝试包容傻逼’的做法，是站方在自取其辱</p>
  <p>http://v2ex.com/t/269715 软弱</p>
  <p>我就是无法忍受这种网站管理员对 ‘和gfw支持者’ unwilling-blocking 的绥靖默许。 v2ex 提供了 'gfw支持者' 自我表达的平台，这种论坛氛围、这种包容性, 这种 ‘支持gfw的人也是一种存在即合理’ , 站方这种让 ‘gfw支持者畅所欲言’ 的绥靖政策简直让人恶心 </p>
  <p>这个网站再好的自我标榜，已经没有意义了</p></div>
  */});
  
  $('body').prepend("<div id='gm_1_container'></div>");
  $('#gm_1_container').append(lines);
  $('#gm_1_container p').css('background-color', 'yellow');
  $('#gm_1_container p').css('font-size', '.7em');
  $('#gm_1_container').css({ 'background-color': 'yellow', padding: '0 5px', width: '300px' });
  $('#gm_1_container').css({ position: 'fixed', top: '100px', left: '50px', 'z-index': '99' });
  
  $('#i').bind('click', function(){ $('#j').slideToggle() });
};

$(document).ready(function(){
  test54();
});

};
namespace1();
