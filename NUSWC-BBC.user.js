// ==UserScript==
// @name          NUSWC-BBC
// @namespace     https://none.com/
// @version       0.0.1
// @description   Certificate for website of not-unwilling-supporting-white-collar 
// @grant         unsafeWindow
// @include       *://*.bbc.com/*
// @include       *://*.bbc.co.uk/*
// @require       http://libs.useso.com/js/jquery/2.1.1/jquery.min.js
// @require       https://cdn.rawgit.com/song940/multiline.js/master/multiline.js
// ==/UserScript==
//
// 我不愿意碰到那些有个人主页的人。好人不需要个人主页 是依附于靠谱的学府的 或依附于外企 或是某个企业的缔造者 是硬气的 是可持续的，坏人才需要自我标榜 是吹嘘的 是一瓶子不满半瓶子晃荡的 是爱卖弄的。
// 建一个网站来自我标榜、宣扬一些精神、彰显自我、爱卖弄、记录生活给陌生人看，仿佛一个演员演故事片给小朋友看，好人不需要这么做。他有一个坚如磐石的性格、沉稳靠谱就够了，好人是一个导演，是一个助理导演。是能够真正做事的。
// 那些流露出沉稳坚毅品格的 “个人表达” ，才是好的。在一般时候就保持神秘感。爱卖弄的宣扬个性的 “个人表达”，往往是是那些不够硬气的人才做的，他们往往没有靠谱学府 也不是企业的缔造者，同时也没有沉稳坚毅品格的个人表达  ( 哪个硬格坚毅的人 会愿意卖弄呢 愿意表现出半瓶子晃荡的特性呢 ) 
// 什么人会爱卖弄呢？这些爱卖弄的人又能卖弄出什么呢？ 这种东西是很蠢的，而且这种人往往会很爱卖弄、很咋呼，但在关键问题上又人云亦云。
// 在外企工作环境 office 的外企白领是不会这么做的，高等学府的人是不会这么做的，任何性格上沉稳坚毅八九不离十的人是不会这么做的：不用卖弄，自己已经很好了。那些卖弄的人 再怎么卖弄 自己也不行 越卖弄越不行 越‘个性宣扬的自我表达’越花里胡哨张牙舞爪越不行 
//
// 我不愿意碰到那些爱做“爱卖弄的个人表达”的人，我不愿意和个性太强的人在一起，我不愿意和爱咋呼、爱张牙舞爪的人在一起。我不愿意和花里胡哨的人在一起。我对这些爱卖弄的人，基本走马观花，没有感觉。
// 我不愿意碰到那些可能支持 ‘个性表达的个人表达好’ 的人，他们(个性表达的个人表达的人、个性表达的个人表达好者、爱卖弄的人、支持他人卖弄的人)往往自身就是泥腿子。我愿意和安静的人在一起，我愿意和沉稳的人、不卖弄的人在一起。我不愿意去那些 总有人在卖弄自己 的地方。
// 我不愿意去 ‘个性表达的个人表达好者’ 去的地方，我不愿意去人多嘈杂的地方，我不愿意看太多表演、卖弄的表达，我不愿意去 ‘个性表达的个人表达好者’ 也会去的地方(我并不是怕人多，而是怕人多了总有低素质的花里胡哨张牙舞爪的‘个性表达的个人表达好者’出现 ———— 那又会扫兴了)。我不愿意真正去 ‘支持个性表达 支持个人表达’ 的鱼龙混杂之地，我不愿意去一个总有人在卖弄风骚的地方 
// ‘爱卖弄的个人表达好者’ 是突兀的 是花里胡哨张牙舞爪的，是很可怕的。破坏氛围和感觉的就是这些‘爱卖弄的个人表达好者’ 
//
// 我不愿意碰到那些可能支持‘爱卖弄的个人表达好者’的人。我愿意和外企白领在一起，我愿意和不支持‘爱卖弄的个人表达好者’的人呢在一起。我不愿意去这些人去的地方，我不愿意去鱼龙混杂的蓝领去的地方 
// 我不愿意碰国企、民企，我愿意和外企接触。
// 我选择的网站，网站管理员应该是个白领，有素质，主动反对 ‘爱卖弄的个人表达好者’ 的氛围，反对那些带来 ‘爱卖弄的个人表达好者’ 氛围的人 ———— 这是斑竹的素质，而不是让他们和大家共存 
// 我选择的网站，网站管理员应该是个白领，有素质，主动允许一个低调白领同事说一般的话，主动反对爱卖弄的人，反对那些带来‘谁都有个性表达的权力(谁都能卖弄、谁都可以一瓶子不满半瓶子晃荡)’ ‘我当然可以个性表达我自己’ 氛围的人 ———— 这是网站管理员的素质，而不是让 爱卖弄的人 半瓶子晃荡的人 花里胡哨张牙舞爪的人 和 安静低调务实的大家共存 
// 我选择的网站，网站管理员应该是个白领，有素质，为白领服务，主动欢迎新人，疏远那些爱卖弄的人，疏远那些有国企 民企气质的人，疏远那些 ‘蓝领却没有蓝领低调务实的优点、却爱卖弄 爱花里胡哨张牙舞爪’ 的人 
// 做不到是管理者的错，强行包容那些‘爱卖弄的个人表达好者’是管理者的错 ———— 如果一个网站有 80% 的潜在 爱卖弄的个人表达好者，那这个网站的整体风格就爱卖弄的 花里胡哨张牙舞爪的，就不是白领的，这个网站上的人都是在卖弄自己，那我遇上傻逼的可能性是大大的 
// 外国人能上到 ‘完全一般交流’ 、‘碰到爱卖弄自己的可能性为零’、‘碰到爱卖弄的个人表达好者的可能性为零’ 、‘完全是白领’、‘完全没有花里胡哨张牙舞爪的人’ 的网站，是他们的选择，我也要上。
// 否则，一切好感觉都会给破坏。
//
// = = = = NUSST-BBC = = = =
//
// BBC 是一个 ‘个性表达的个人表达好者’ 不会上的网站，是 ‘花里胡哨张牙舞爪好者’ 不会上的网站。并且 BBC 管理员会主动疏远并驱逐 ‘个性表达的个人表达好者’ 
// BBC 会主动驱逐 ‘个性表达的个人表达好者’ , 不会包容、纵容爱卖弄的人，不会允许爱卖弄的言论的存在，不会允许花里胡哨张牙舞爪的言论存在。 BBC 欢迎 ‘沉稳坚毅品格的人’ 也欢迎 ‘爱保持神秘感的人’ 和 ‘一般发言的人’，给予他们友好的空间 
// BBC 的站方运营着的，是这样一个网站: a website of not-unwilling-supporting-white-collar 
// 这种‘驱逐个性表达的个人表达好者’ ‘驱逐花里胡哨张牙舞爪好者’ 的做法，是站方的智慧 
// http://www.bbc.com/zhongwen/simp/fooc/2016/04/160406_fooc_nokia_mobile
// http://zhuanlan.zhihu.com/p/20723717
// 我就是喜欢这种网站管理员对 ‘沉稳坚毅品格的人’ 的支持，提供安静的、不花哨的、不受爱卖弄者打扰的环境的支持。BBC 驱逐了‘个性表达的个人表达好者’ ‘花里胡哨张牙舞爪好者’，所以这里不会发生 ‘总有一个人在卖弄风骚’。BBC 提供了 ‘沉稳坚毅品格的人’ 妥当的不花哨的生活环境，所以读者能感受到平和、不突兀、低调务实、合群。站方这种 ‘安静者比卖弄者更有价值 人们不应该卖弄和张牙舞爪’ 的坚持, 站方这种给 ‘不爱卖弄的人’ 最大的尊重、给一般发言不被‘花里胡哨张牙舞爪的发言’压下去的观感，是很有智慧很体面的。不存在卖弄者招摇过市的空间 是 BBC 提供的最大的财富 
// 这个网站不需要自我标榜，已经很有意义了
//
// namespace1(); off 为你的提供不存在卖弄者招摇过市的空间 不存在花里胡哨张牙舞爪好者的空间，我并不认识你，只能时时刻刻提醒自己你是怎样的 

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
namespace1;
