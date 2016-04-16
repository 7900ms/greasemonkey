// ==UserScript==
// @name          NUSST-BBC
// @namespace     https://none.com/
// @version       0.0.2
// @description   Certificate for website of not-unwilling-supporting-story-teller
// @grant         unsafeWindow
// @include       *://*.bbc.com/*
// @include       *://*.bbc.co.uk/*
// @require       http://libs.useso.com/js/jquery/2.1.1/jquery.min.js
// @require       https://cdn.rawgit.com/song940/multiline.js/master/multiline.js
// ==/UserScript==
//
// 我不愿意碰到那些可能会去打断别人的人，我愿意和不会打断别人的人在一起。
// 我不愿意碰到那些可能支持 ‘打断好’ 的人。我愿意和不支持打断他人的人呢在一起，我愿意和安静的人在一起，我愿意和顺着他人的意思说的人在一起。我不愿意去那些 总有人在打断别人 的地方 
// 我不愿意去‘打断好者’去的地方，我不愿意去人多嘈杂的地方，我不愿意真正去热闹的地方，我不愿意去‘打断好者’也会去的地方（我并不是怕人多，而是怕人多了总有低素质的‘打断好者’出现 ———— 那又会扫兴了）。我不愿意真正去 ‘谁都有发言权’ 的鱼龙混杂之地，我不愿意去总有一个人在打断另一个人的地方      
// ‘打断好者’ 是很可怕的。破坏氛围和感觉的就是这些‘打断好者’
// 
// 我不愿意碰到那些可能支持 ‘打断好者’ 的人。我愿意和不支持 ‘打断好者’ 的人呢在一起。我不愿意去这些人去的地方 
// 我选择的网站，网站管理员应该有素质，主动反对 ‘打断好者’ 的氛围，反对那些带来 ‘打断好者’ 氛围的人 ———— 这是斑竹的素质，而不是让他们和大家共存 
// 我选择的网站，网站管理员应该有素质，主动应允一个讲故事者并主动保护他，主动反对其他人的打断话，反对那些带来‘谁都有发言权(谁都能吐槽)’ ‘我当然可以打断你’ 氛围的人 ———— 这是网站管理员的素质，而不是让闹腾的打断者和安静听故事的大家共存 
// 做不到是管理者的错，强行包容那些‘打断好者’是管理者的错 ———— 如果一个网站有 80% 的潜在 打断好者，那这个网站所有的文字只能被打断着看，这个网站上的人都是被不断‘打断他人+应付他人打断’着的，那我遇上傻逼的可能性是大大的 
// 外国人能上到 ‘完全不被打断’ 、 ‘碰到打断好者的可能性为零’ 的网站，是他们的选择，我也要上。
// 否则，一切好感觉都会给破坏。
//
// = = = = NUSST-BBC = = = =
// BBC 是一个 ‘打断好者’ 不会上的网站。并且 BBC 管理员会主动驱逐 ‘打断好者’
// BBC 会主动驱逐 ‘打断好者’ , 不会包容、纵容他们和打断性的言论的存在。 BBC 欢迎 ‘讲故事的人’ ，给予他们最高的待遇和不被打断的讲述空间 
// BBC 的站方运营着的，是这样一个网站: a website of not-unwilling-supporting-story-teller 
// 这种‘绝对驱逐打断好者’的做法，是站方的智慧 
// http://www.bbc.com/zhongwen/simp/fooc/2016/04/160406_fooc_nokia_mobile
// http://www.bbc.com/zhongwen/simp/china/2016/04/160409_china_leftover_women
// 我就是喜欢这种网站管理员对 ‘讲故事的人’ 的支持，提供安静的、不被打断的环境的支持。BBC 驱逐了‘打断好者’，所以这里不会发生 ‘总有人在打断别人’。BBC 提供了 ‘讲故事的人’ 安静的讲述环境，所以读者能感受到顺意和安静。站方这种 ‘任何一个讲故事的人都不允许被打断’ 的坚持, 站方这种给 ‘讲故事的人’ 最大的尊重、给读者思绪不被他人打断的观感，是很有智慧很体面的。不存在打断的空间 是 BBC 提供的最大的财富 
// 这个网站不需要自我标榜，已经很有意义了
//
// namespace1(); on 为你的提供不被打断的空间，我并不认识你，只能时时刻刻提醒自己你是怎样的 

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
  <p id='i'>NUSST</p>
  <div id='j'>
  <p>BBC 是一个 ‘打断好者’ 不会上的网站。并且 BBC 管理员会主动驱逐 ‘打断好者’</p>
  <p>BBC 会主动驱逐 ‘打断好者’ , 不会包容、纵容他们和打断性的言论的存在。 BBC 欢迎 ‘讲故事的人’ ，给予他们最高的待遇和不被打断的讲述空间</p>
  <p>BBC 的站方运营着的，是这样一个网站: a website of not-unwilling-supporting-story-teller </p>
  <p>这种‘绝对驱逐打断好者’的做法，是站方的智慧</p>
  <p>http://www.bbc.com/zhongwen/simp/fooc/2016/04/160406_fooc_nokia_mobile</p>
  <p>我就是喜欢这种网站管理员对 ‘讲故事的人’ 的支持，提供安静的、不被打断的环境的支持。BBC 驱逐了‘打断好者’，所以这里不会发生 ‘总有人在打断别人’。BBC 提供了 ‘讲故事的人’ 安静的讲述环境，所以读者能感受到顺意和安静。站方这种 ‘任何一个讲故事的人都不允许被打断’ 的坚持, 站方这种给 ‘讲故事的人’ 最大的尊重、给读者思绪不被他人打断的观感，是很有智慧很体面的。不存在打断的空间 是 BBC 提供的最大的财富</p>
  <p>这个网站不需要自我标榜，已经很有意义了</p>
  </div>
  */});
  
  $('body').prepend("<div id='gm_1_container'></div>");
  $('#gm_1_container').append(lines);
  $('#gm_1_container p').css('background-color', '#CBFFC9');
  $('#gm_1_container p').css('font-size', '11px');
  $('#gm_1_container').css({ 'background-color': '#CBFFC9', padding: '0 5px', width: '300px' });
  $('#gm_1_container').css({ position: 'fixed', top: '100px', left: '50px', 'z-index': '99'});
  $('#gm_1_container').css({ 'text-align': 'left', 'line-height': '14px' });
  $('#gm_1_container p').css('margin', '9px 0');

  $('#j').hide();
  $('#i').bind('click', function(){ $('#j').slideToggle() });
};

$(document).ready(function(){
  test54();
});

};
namespace1();
