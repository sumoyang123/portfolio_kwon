$(function(){
// OX퀴즈
$('.start-btn').click(function(){
  $('.start').css({'display':'none'})
  $('.quize').css({'display':'block'})
})
$('.answer-btn').find('div').click(function(){
  $('.quize').css({'display':'none'})
  $('.answer').css({'display':'block'})
})
$('.answer').click(function(){
  $('.start').css({'display':'block'})
  $(this).css({'display':'none'})
})
});