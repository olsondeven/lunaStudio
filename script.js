//jquery
$(document).ready(function(){
  var w = window.innerWidth-32;
  var h = window.innerHeight-32;
  console.log(h,w);
  $("div").animate({left: w,top: h},3000);
});//closing
