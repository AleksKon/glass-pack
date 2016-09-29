$(function(){

	/***************** Smooth Scrolling / Active nav ******************/

	$("a[href^='#']").on('click touchstart', function(e) {
		// prevent default anchor click behavior
		e.preventDefault();

		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

			if ($target.length) {
				var targetOffset = $target.offset().top - 50;
				$('html,body').animate({scrollTop: targetOffset}, 1000);
				return false;
			}
		}
	});

	// Navbar collapse on click
	$('.nav a').on('click touchstart',function () {
		$('.active').removeClass('active');
		$(this).closest('li:not(.nav-demo)').addClass('active');

		$('.navbar-collapse').collapse('hide');
	});
	$(document).on('click touchstart',function(){
		$('.collapse').collapse('hide');
	});

	/***************** Waypoints ******************/

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInUp duration-2s');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInLeft duration-2s');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInUp duration-2s');
	}, {
		offset: '75%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown duration-2s');
	}, {
		offset: '75%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp duration-2s');
	}, {
		offset: '75%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInLeft duration-2s');
	}, {
		offset: '75%'
	});
	$('.wp7').waypoint(function() {
		$('.wp7').addClass('animated fadeInRight duration-2s');
	}, {
		offset: '75%'
	});
	$('.wp8').waypoint(function() {
		$('.wp8').addClass('animated fadeInLeft duration-2s');
	}, {
		offset: '75%'
	});
	$('.wp8-btn').waypoint(function() {
		$('.wp8-btn').addClass('animated fadeInRight duration-2s');
	}, {
		offset: '75%'
	});

	$('.wp9').waypoint(function() {
		$('.wp9').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp10').waypoint(function() {
		$('.wp10').addClass('animated fadeInUp duration-2s');
	}, {
		offset: '75%'
	});

	/***************** Flickity ******************/

	$('#featuresSlider').flickity({
		cellAlign: 'left',
		contain: true,
		prevNextButtons: false,
		autoPlay: true
	});

	

});
