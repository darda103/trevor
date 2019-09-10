// scroll to top
$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 40){
			$('.scroll').fadeIn();
		} else{
			$('.scroll').fadeOut();
		}
	});
	$(".scroll").click(function(){
		$('html, body').animate({scrollTop : 0},100);
	})
})

// data filter
$(document).ready(function(){
    var containerEl = document.querySelector('.port');
    var mixer = mixitup(containerEl);
})
// active button 
$(document).on('click', 'button', function(){
	$(this).addClass('active').siblings().removeClass('active')
})
// image pop up
$(document).ready(function(){
	lightbox.option({
      'resizeDuration': 200,
      'wrapAround': false,
      'disableScrolling': true
    })
})

// testimonial slideshow
$(document).ready(function(){
	$('.testi').owlCarousel({
	    loop: true,
        dots: true,
        nav: false,
        margin: 10,
        smartSpeed: 1000,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            960: {
                items: 1
            },
            1200: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
	})
});

// preloader
$(window).on("load", function() {
    var preLoder = $(".preloader");
    preLoder.fadeOut(1000);
});