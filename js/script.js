/* 
	Author: Kyle Brumm
*/

$(document).ready(function() {

	$(document).foundation();

  $('.student-work li').magnificPopup({
    delegate: 'a',
    type:'image',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    }
  });

  $('.accordion section h2 a').click(function(){
    $('.accordion section.active').removeClass('active');
    $(this).closest('section').addClass('active');
  })

  $('a[href="#null"]').click(function(){
    return false;
  });

});
