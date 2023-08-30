$(function(){
  $('.img-wrap').find('img:nth-child(1)').click(function(){
    $(this).css({'border': '5px solid #21C6AD'});
    $('.img-wrap').find('img:nth-child(2)').css({'border': 'none'})
    $('.img-wrap').find('img:nth-child(3)').css({'border': 'none'})
    // if(window.print)
    // document.write('<form><input type="image" src="./img/miro01.jpg" width="100%" height="100%" onClick="window.print()"</form>')
  });
  $('.img-wrap').find('img:nth-child(2)').click(function(){
    $(this).css({'border': '5px solid #21C6AD'});
    $('.img-wrap').find('img:nth-child(1)').css({'border': 'none'})
    $('.img-wrap').find('img:nth-child(3)').css({'border': 'none'})
  });
  $('.img-wrap').find('img:nth-child(3)').click(function(){
    $(this).css({'border': '5px solid #21C6AD'});
    $('.img-wrap').find('img:nth-child(1)').css({'border': 'none'})
    $('.img-wrap').find('img:nth-child(2)').css({'border': 'none'})
  });
  $('.print-btn').click(function(){
    window.print();
  })
  $('.false').click(function(){
    $('.sub-ball').find('img').css({'display':'none'})
    $('.main-ball').find('img').css({'display':'none'})
    $('.hide').css({'display':'block' })
  })
  $('.hide').click(function(){
    $('.sub-ball').find('img').css({'display':'block'})
    $('.main-ball').find('img').css({'display':'block'})
    $(this).css({'display':'none'})
  })
   $('.true').click(function(){
    $('.sub-ball').find('img').css({'display':'none'})
    $('.main-ball').find('img').css({'display':'none'})
    $('.hide2').css({'display':'block'})
  })   
  $('.hide2').click(function(){
    $('.sub-ball').find('img').css({'display':'block'})
    $('.main-ball').find('img').css({'display':'block'})
    $(this).css({'display':'none'})
  })
});