
let timer;
let interval = 50;

$(".pics").on("click",function(){
  let pic = $(this).children(".pic")
  let count = 0
  clearInterval(timer)
  timer = setInterval(function(){
    count++
    if(count>pic.length-1)count=0
    //console.log(count,pic.length)
    pic.removeClass("show");  
    pic.eq(count).addClass("show");
  },interval)
})

$(".pics").on("mouseout",function(){
  let pic = $(this).children(".pic")
  pic.removeClass("show");
  pic.eq(0).addClass("show");
  clearInterval(timer)
})