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
  let obj = $(".visual2 .container .top-wrap .about-menu a");
  obj.on("click",function(){
    $(this).addClass("active");
    obj.not($(this)).removeClass("active");
  });

  // 비주얼2 메뉴 클릭 이벤트
  $('.visual2').hide();  // 모든 섹션을 숨김
    $('#v1').show();  // v1 섹션만 보이게 설정

    // about-menu 클릭 시 섹션 전환
    $('.about-menu a').click(function(e) {
        e.preventDefault();  // 기본 동작 막기
        
        // 모든 섹션 숨기기
        $('.visual2').hide();

        // 클릭한 메뉴의 인덱스 가져오기
        var index = $(this).index();

        // 해당 인덱스의 섹션 보이기
        $('.visual2').eq(index).show();

        // 모든 메뉴에서 active 클래스 제거하고, 클릭한 메뉴에 추가
        $('.about-menu a').removeClass('active');
        $(this).addClass('active');
    });

  // 슬라이드 스와이퍼
  // let swiper = new Swiper('.productSwiper', {
  //   direction: 'horizontal',
  //   loop: true,
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   slidesPerView: 3,
  //   spaceBetween: 80, 
    
  // });

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
  $('.menu-bar-page').hide();

  $('.header .container .btn-menu .menu-bar').on('click',function(){
    $(this).toggleClass('active');
    if($(this).hasClass('active')){
      $('.menu-bar-page').show(0,function(){
        $('html,body').css('overflow','hidden');
        $('.header .container .nav').hide();
      });
    } else {
      $('.menu-bar-page').hide(0,function(){
        $('html,body').css('overflow','visible');
        $('.header .container .nav').show();
      });
    };  
  });

  // 사이트맵 클릭 이벤트

  // let item = $('.sec2 .item');

  // item.on('click',function(){
  //   $(this).addClass('active');
  //   item.not($(this)).removeClass('active');

  //   if($(this).hasClass('active')){
  //     $(this).find('.sub-menu').slideDown();
  //   } else {
  //     $(this).find('.sub-menu').slideUp();
  //   }
  // });

  /* $('.sec2 .item > span').on('click', function() {
    // 모든 sub-menu를 닫음
    $('.sec2 .item .sub-menu').slideUp();
    
    // 클릭된 span 아래의 sub-menu가 닫혀 있으면 열기
    if ($(this).next('.sub-menu').is(':hidden')) {
      $(this).next('.sub-menu').slideDown();
    }
  });*/

  $('.sec2 .item span').on('click',function(){
    $('.sec2 .item .sub-menu').slideUp();

    if($(this).next('.sub-menu').is(':hidden')) {
      $(this).next('.sub-menu').slideDown();
    }
  });
});