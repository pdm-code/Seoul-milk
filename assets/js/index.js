$(document).ready(function(){
  $('.header .nav li a').mouseenter(function(){
    $(this).next().stop().slideDown(500);
  });

  $('.header .nav li').mouseleave(function(){
    $(this).find('.sub-menu').stop().slideUp(500);
  });

  //헤더 언어 클릭 이벤트
  $(".btn-menu .langs").on("click",function(){
    $(this).toggleClass("active");
    if($(this).hasClass("active")){
      $(".btn-menu .langs .langs-menu").slideDown();
    } else {
      $(".btn-menu .langs .langs-menu").slideUp();
    }
  });

  $('.btn-menu .langs .langs-menu a').on('click',function(){
    let _langs = $(this).text();
    $('.btn-menu .langs span').text(_langs);
  });



  // 비주얼2 클릭 이벤트
  $('.visual2 .container .about-menu a').on('click',function(){
    $('.visual2 .container .about-menu a').removeClass("active");
    $(this).addClass('active');
    
    $('.visual2 .container .bot-wrap').hide();

    let index = $(this).index();
    $('.visual2 .container .bot-wrap').eq(index).show();

    // var bgImages = [
    //   'url(../img/visual2_img1.png)',  // 첫 번째 bot-wrap의 배경 이미지
    //   'url(../img/visual2_img2.png)',  // 두 번째 bot-wrap의 배경 이미지
    //   'url(../img/visual2_img3.png)',  // 세 번째 bot-wrap의 배경 이미지
    //   'url(../img/visual2_img4.png)',  // 네 번째 bot-wrap의 배경 이미지
    //   'url(../img/visual2_img5.png)'   // 다섯 번째 bot-wrap의 배경 이미지
    // ];
    // $('.visual2').css('background', bgImages[index]);

  
  });

  //비주얼2 기본페이지 로드될때 화면
  $('.visual2 .container .bot-wrap').hide();
  $('.visual2 .container .bot-wrap').eq(0).show();

  //product 슬라이드
  let swiper = new Swiper('.productSwiper', {
    slidesPerView: 3,
    spaceBetween: 130,
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });





  // 푸터 브랜드 sns 클릭 이벤트
  $('.footer .container .footer-top .sns-btn .sns-wrap').hide();
  $('.footer .container .footer-top .sns-btn').on('click',function(){
    $(this).toggleClass('active');
    if($(this).hasClass('active')){
      $('.footer .container .footer-top .sns-btn .sns-wrap').show();
    } else {
      $('.footer .container .footer-top .sns-btn .sns-wrap').hide();
    }
  });
  // 푸터 Family Site 클릭 이벤트
  $('.footer .container .family-btn .family-wrap').hide();
  $('.footer .container .family-btn').on('click',function(){
    $(this).toggleClass('active');
    if($(this).hasClass('active')){
      $('.footer .container .family-btn .family-wrap').show();
    } else {
      $('.footer .container .family-btn .family-wrap').hide();
    }
  });

  // 헤더 메뉴 바 클릭 이벤트
  $('.header .container .btn-menu .menu-bar').on('click',function(){
    $('.site-map').toggleClass('active');
    $('.header .container .nav').hide();
  });

  $('.site-map .sec1 .close-btn').on('click',function(){
    $('.site-map').removeClass('active');
    $('.header .container .nav').show();
  });

  // 사이트맵 클릭 이벤트
  $('.sec2 .item span').on('click',function(){
    $('.sec2 .item .sub-menu').slideUp();

    if($(this).next('.sub-menu').is(':hidden')) {
      $(this).next('.sub-menu').slideDown();
    }
  });

  $('.site-map .sec3 button').on('click',function(){
    $('.site-map .sec3 button').removeClass('active');
    $(this).addClass('active');
  });

});