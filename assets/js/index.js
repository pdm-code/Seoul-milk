$(document).ready(function(){
  //헤더 nav 마우스 오버 이벤트
  $(".nav .company a").mouseenter(function(){ 
    $(".nav .company .sub-menu").stop().slideDown(500);
  });
  $(".nav .company").mouseleave(function(){ 
    $(".nav .company .sub-menu").stop().slideUp(500);
  });
  $(".nav .product a").mouseenter(function(){ 
    $(".nav .product .sub-menu").stop().slideDown(500);
  });
  $(".nav .product").mouseleave(function(){ 
    $(".nav .product .sub-menu").stop().slideUp(500);
  });
  $(".nav .management a").mouseenter(function(){ 
    $(".nav .management .sub-menu").stop().slideDown(500);
  });
  $(".nav .management").mouseleave(function(){ 
    $(".nav .management .sub-menu").stop().slideUp(500);
  });
  $(".nav .promotion a").mouseenter(function(){ 
    $(".nav .promotion .sub-menu").stop().slideDown(500);
  });
  $(".nav .promotion").mouseleave(function(){ 
    $(".nav .promotion .sub-menu").stop().slideUp(500);
  });
  $(".nav .event a").mouseenter(function(){ 
    $(".nav .event .sub-menu").stop().slideDown(500);
  });
  $(".nav .event").mouseleave(function(){ 
    $(".nav .event .sub-menu").stop().slideUp(500);
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

  $(".btn-menu .langs .langs-menu .kr").on("click",function(){
    $(".btn-menu .langs span").text("KR");
  });
  $(".btn-menu .langs .langs-menu .en").on("click",function(){
    $(".btn-menu .langs span").text("EN");
  });

  // 비주얼2 클릭 이벤트
  var obj = $(".visual2 .container .top-wrap .about-menu a");
  obj.on("click",function(){
    $(this).addClass("active");
    obj.not($(this)).removeClass("active");
  });


  

});