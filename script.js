$(function() {
  $('#nav li')
    .each(function(i){
       $(this).css('background', 'url(img/banner0'+(i+2)+'_2.jpg) no-repeat');
     })
    .find('img').hover(
       function(){
	 $(this).stop().animate({'opacity' : '0'}, 500);
       },
       function(){
	 $(this).stop().animate({'opacity' : '1'}, 1000);
       }
  );
});
