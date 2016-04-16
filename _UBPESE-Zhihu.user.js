// ==UserScript==
// @name          UBPESE-Zhihu
// @namespace     https://none.com/
// @version       0.0.2
// @description   Certificate for website of unwilling-blocking-private-enterprise-and-state-owned-enterprise
// @grant         unsafeWindow
// @include       *://*.zhihu.com/*
// @require       http://libs.useso.com/js/jquery/2.1.1/jquery.min.js
// @require       https://cdn.rawgit.com/song940/multiline.js/master/multiline.js
// ==/UserScript==
//
// 我不愿意碰到那些可能来自民企的人 也不感兴趣，我愿意和外企的人在一起。我愿意跳槽到外企，不愿意去私企。我喜欢外企，不喜欢私企。我更不喜欢整个国家的私企 即国企。
// 我不愿意碰到那些可能支持 ‘民企环境’ 的人。我愿意和 不喜民企、喜欢外企环境的人呢在一起，我愿意和外企的人在一起，我愿意和开放现代的外企人在一起。我不愿意去那些 总有人在职场勾心斗角 的地方 
// 我不愿意去‘觉得民企环境也不差的人’ 去的地方 （我并不是怕人多，而是怕人多了总有勾心斗角的‘宣传民企环境好者’‘民企环境支持者’出现 ———— 那又会扫兴了）。我不愿意真正去 ‘谁都要在职场努力奋斗’ 的鱼龙混杂之地，我不愿意去总有一个人在勾心斗角的地方 
// ‘民企环境支持者’ 是很可怕的。破坏氛围和感觉的就是这些‘民企环境支持者’ 
// 
// 我不愿意碰到那些 ‘民企环境支持者’。我愿意和‘觉得民企环境很差、觉得外企环境好的人’呢在一起。我不愿意去这些人去的地方 
// 我选择的网站，网站管理员应该有素质，主动反对 ‘支持民企环境作风’ ‘喜欢民企环境’ 的氛围，反对那些带来 ‘不喜欢外企’ 氛围的人 ———— 这是斑竹的素质，而不是让他们和大家共存 
// 我选择的网站，网站管理员应该有素质，主动应允好的外企人来，主动反对不好的民企的氛围，反对那些带来民企氛围的人，反对宣传‘谁都要在职场奋斗(谁有能力谁赚钱多)’ ‘我是上司当然我说的算 可以压制你’ ‘谁有能力谁厉害’ 等民企氛围的人 ———— 这是网站管理员的素质，而不是让低素质的民企人和安静听故事的大家共存 
// 做不到是管理者的错，强行包容那些‘民企环境支持者’ ‘觉得民企环境挺好的啊’的人 是管理者的错 ———— 如果一个网站有 80% 的潜在 民企环境支持者，那我遇上傻逼的可能性是大大的 
// 外国人能上到 ‘完全都是外企人’、‘完全没人支持民企氛围’、‘碰到有民企氛围的人的可能性为零’ 的网站，是他们的选择，我也要上。
// 否则，一切都没有意义。
//
// = = = = Zhihu = = = =
//
// Zhihu 是一个 ‘宣传民企环境好者’ 会上的网站，Zhihu 是一个 ‘有民企气质的人’ 会上的网站。并且 Zhihu 管理员不会主动驱逐 ‘民企环境支持者’ ‘宣传民企环境好者’ ‘有民企气质的人’ 
// Zhihu 管理员基于站方利益，并不会主动驱逐‘宣传民企环境好者’, 而是包容、纵容他们的存在，包容这种对于民企国企的种种不良作风的宣传 
// Zhihu 的站方运营着的，是这样一个网站: a website of unwilling-blocking-private-enterprise-and-state-owned-enterprise 
// 这种‘尝试包容那些宣传民企环境好的人’ ‘尝试包容有民企气质的人’ 的做法，是站方在自取其辱 
// 这种‘尝试包容秽物’的做法，是站方在自取其辱 
// https://www.zhihu.com/question/22034803/answer/92086841 
// https://www.zhihu.com/question/20419314 
// https://www.zhihu.com/question/37579329/answer/72848331 看这种东西 无论对不对 read all the bullshit 都很头疼 
// https://www.zhihu.com/question/22847320 
// 我就是无法忍受这种网站管理员对 ‘宣传民企环境好者’+‘宣传民企比外企好的人’ unwilling-blocking 的绥靖默许，zhihu 一点儿都不学好。 zhihu 提供了 ‘宣传民企环境好者’+‘宣传民企比外企好的人’+‘有民企气质的人’ 自我表达的平台，这种论坛氛围、这种包容性, 这种 ‘宣传民企环境好者 是一种合理存在，支持民企国企环境的人也是一种存在即合理’ , 站方这种让 ‘宣传民企环境好者畅所欲言’ 的绥靖政策简直让人恶心 
// 这个网站再好的自我标榜，已经没有意义了 
//
// ============================= ✄ =====================================================
//
// 我不愿意碰到那些可能来自民企的人 也不感兴趣，我愿意和外企的人在一起。我愿意跳槽到外企，不愿意去私企。我喜欢外企，不喜欢私企。我更不喜欢整个国家的私企 即国企。
// 我不愿意碰到那些可能来自 ‘民企环境’ 的人。我愿意和 不喜欢民企环境的、喜欢外企环境的人呢在一起，我愿意和外企的人在一起，我愿意和开放现代的外企人在一起。我不愿意去那些 总有人在职场勾心斗角 的地方 
// 我不愿意去‘觉得民企环境也不差的人’ 去的地方 （我并不是怕人多，而是怕人多了总有勾心斗角的‘来自民企的人’出现 ———— 那又会扫兴了）。我不愿意真正去 ‘谁都要在职场努力奋斗’ 的鱼龙混杂之地，我不愿意去总有一个人在勾心斗角的地方 
// ‘民企环境来的人’ 是很可怕的。破坏氛围和感觉的就是这些‘民企人’ 
// 
// 我不愿意碰到那些 ‘民企人’。我愿意和‘觉得民企环境很差、觉得外企环境好的人’呢在一起。我不愿意去这些人去的地方 
// 我选择的网站，网站管理员应该有素质，主动反对 ‘民企人’ 的氛围，反对那些带来 ‘民企’ 氛围的人 ———— 这是斑竹的素质，而不是让他们和大家共存 
// 我选择的网站，网站管理员应该有素质，主动应允好的外企人来，主动反对不好的民企的氛围，反对那些带来民企氛围的人，反对宣传‘谁都要在职场奋斗(谁有能力谁赚钱多)’ ‘我是上司当然我说的算 可以压制你’ ‘谁有能力谁厉害’ 等民企氛围的人 ———— 这是网站管理员的素质，而不是让低素质的民企人和安静听故事的大家共存 
// 做不到是管理者的错，强行包容那些‘民企人’ ‘觉得民企环境比外企好’的人 是管理者的错 ———— 如果一个网站有 80% 的潜在 民企人，那我遇上傻逼的可能性是大大的 
// 外国人能上到 ‘完全都是外企人’、‘完全没有民企人’、‘碰到有民企来的人的可能性为零’ 的网站，是他们的选择，我也要上。
// 否则，一切都没有意义。
//
// = = = = UBPESE-Zhihu = = = =
//
// Zhihu 是一个 ‘民企人’ 会上的网站，并且 zhihu 管理员不会主动驱逐‘民企人’
// Zhihu 管理员基于站方利益，并不会主动驱逐‘民企人’, 而是包容、纵容他们的存在，包容民企人的种种做法
// Zhihu 的站方运营着的，是这样一个网站: a website of unwilling-blocking-private-enterprise-and-state-owned-enterprise 
// 这种‘尝试包容傻逼’ 的做法，是站方在自取其辱 
// https://www.zhihu.com/question/22034803/answer/92086841 
// https://www.zhihu.com/question/20419314 
// https://www.zhihu.com/question/37579329/answer/72848331 看这种东西 无论对不对 都很头疼 
// https://www.zhihu.com/question/22847320 
// 我就是无法忍受这种网站管理员对 ‘民企人’ unwilling-blocking 的绥靖默许。zhihu 提供了民企人自我表达的平台，这种论坛氛围、这种包容性, 这种 ‘民企人、国企人也是一种存在即合理’ , 站方这种让 ‘民企人、国企人和大家一样畅所欲言’ 的绥靖政策简直让人恶心 
// 这个网站再好的自我标榜，已经没有意义了 
// namespace1(); off 为你的自甘堕落，我不会去指责你，只能时时刻刻提醒自己你是怎样的 
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
