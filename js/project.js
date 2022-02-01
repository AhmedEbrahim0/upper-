$(function(){


    $(".tabs1,.tabs2").hide();
    $(".tabs1").show();
  
  $(".btn-tabs1").click(function(){
    $(".tabs1").show();
    $(".tabs2").hide();
  })
  $(".btn-tabs2").click(function(){
    $(".tabs2").show();
    $(".tabs1").hide();
  })
  
  
    $(".tabss").hide();
    $("#item1").show();
  $(".b1 ul li ").click(function(){
    let data=$(this).attr("data");
    let x=$(`#${data}`).attr("class");
    console.log(x);
    $(`#${data}`).show();
    $(`#${data}`).siblings().hide();
  })
  
    $(".btn-tab").click(function(){
      $(this).addClass(" active-section1");
      $(this).siblings().removeClass(" active-section1")
    })
    
    $(".section1 ul li ").click(function(){
      $(this).addClass("active2-section1");
      $(this).siblings().removeClass("active2-section1")
    })
  

  AOS.init({
    duration:2000
  });



})