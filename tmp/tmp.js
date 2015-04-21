var id,
	descID,
	currentSlide = 1,
	descCounter = 0,
	slidesPlayback = false,
	descsPlayback = false,
	TOTAL_SLIDES = 6,
	LAST_SLIDE = TOTAL_SLIDES,
	SECOND_LAST = LAST_SLIDE -1,
	SHOWING_TIME = 2000,
	DESC_DELAY = SHOWING_TIME - 2500, //7500
	PAUSE_DELAY = SHOWING_TIME - 2000;

	
var DESCSET_DELAY = 200;

$(function() {
    autoplaySlides();
	autoplayDescriptions();
	
	
	$('#pause').on('click', function(e) {
		pauseSlides();
		pauseDescriptions();
	});
	$('#play').on('click', function(e) {
		autoplaySlides();
		autoplayDescriptions();
	});
	
	$('#play-pause').on('click', function(e) {
		autoplaySlides();
		console.log(descsPlayback);
	});
});



function autoplayDescriptions() {
	descsPlayback = true;
	playDescriptions();
	descID = setInterval(playDescriptions, SHOWING_TIME);
}
function pauseDescriptions() {
	descsPlayback = false;
	clearInterval(descID);
}


function playDescriptions() { // switch every step
	if (descCounter === 1) {
		descCounter = 0;
		// second two
		finalCall(3)
	} else {
		// first two
		descCounter++;
		finalCall(1)
	}
	/*
	setTimeout(function() {
		animations['animate'+currentSlide+'1']();
	}, 200);
	setTimeout(function() {
		animations['animate'+currentSlide+'2']();
	}, 400);
	*/
}

function finalCall(v) {
	setTimeout(function() {
		animations['animate'+v]();
	}, 200);
	setTimeout(function() {
		animations['animate'+(v+1)]();
	}, 400);
}
	
// '.slide1'+currentSlide+'desc1'
animations = (function() {
	function animate1() {
		var tmp = $('.type1_desc1').animate(
			{ right : '20' },
			{duration:2000, specialEasing: {right: 'easeOutCubic'}}
		).delay(DESC_DELAY);
		
		setTimeout(function(){
			if (descsPlayback === true) {
				tmp.animate(
					{ top : '500' },
					{duration : 2000,
					specialEasing: {top: 'easeOutCubic'},
					complete : function(){
						$(this).css({
							padding: '5px',
							top:'10%',
							right:'120%'
						})
					}}
				);
			}
		}, PAUSE_DELAY);
		
		
	}
	
	function animate2() {
		var tmp = $('.type1_desc2').animate(
			{top: '200'},
			{duration:2000, specialEasing:{top: 'easeOutCubic'}}
		).delay(DESC_DELAY);
		
		setTimeout(function(){
			if (descsPlayback === true) {
				tmp.animate(
					{right: '800'},
					{duration:2000,
					specialEasing:{right: 'easeOutCubic'},
					complete : function(){
						$(this).css({
							width: '50%',
							opacity: '1',
							top: '-99%',
							right: '20px',
							padding: '5px'
						})}
					}
				);
			}
		}, PAUSE_DELAY);
	}
	
	
	function animate3() {
		var tmp = $('.type2_desc1').animate(
			{ left : '20' },
			{duration:2000, specialEasing: {left: 'easeInOutBounce'}}
		).delay(DESC_DELAY);
		
		setTimeout(function(){
			if (descsPlayback === true) {
				tmp.animate(
					{ top : '500' },
					{duration : 2000,
					specialEasing: {top: 'easeInBounce'},
					complete : function(){
						$(this).css({
							padding: '5px',
							top:'10%',
							left:'120%'
						})
					}}
				);
			}
		}, PAUSE_DELAY);
	}
	
	function animate4() {
		var tmp = $('.type2_desc2').animate(
			{top: '200'},
			{duration:2000, specialEasing:{top: 'easeOutBounce'}}
		).delay(DESC_DELAY);
		
		setTimeout(function(){
			if (descsPlayback === true) {
				tmp.animate(
					{right: '0'},
					{duration:2000,
					specialEasing:{right: 'easeOutBounce'},
					complete : function(){
						$(this).css({
							width: '50%',
							opacity: '1',
							top: '-99%',
							right: '-99px',
							padding: '5px'
						})}
					}
				);
			}
		}, PAUSE_DELAY);
	}
	
	return {
		animate1 : animate1,
		animate2 : animate2,
		animate3 : animate3,
		animate4 : animate4
	};

}());

$('.slide4').animate({width:'150%', height: '150%', right:'-5%'}, {duration: 12000, specialEasing:{width: 'linear', height: 'linear'}});






function autoplaySlides() {
	slidesPlayback = true;
	playBullets();
	id = setInterval(playSlides, SHOWING_TIME);
};
function pauseSlides() {
	slidesPlayback = false;
	clearInterval(id);
}
function playSlides() {
	if (currentSlide !== LAST_SLIDE && currentSlide < LAST_SLIDE) {
		$('#slide'+currentSlide+'-wrap').animate({opacity: 0}, 1000);
		currentSlide++;
		playBullets();
		
		if (currentSlide === SECOND_LAST) {
			setTimeout(function() {
				playBullets();
			}, 500);
		}
		
	} else if (currentSlide === LAST_SLIDE) {
		currentSlide = 1;
		$('#slide1-wrap').animate({opacity: 1}, 1000);
		
		playBullets();
		setTimeout(function() {
			$('.slide-wrap').css('opacity','1');
		}, 1000);
	}
}

function playBullets(extra) {
	var currentBullet = $('#bullet'+currentSlide);
	currentBullet.addClass('current-bullet');
	setTimeout(function() {
		if (slidesPlayback === true) {
			currentBullet.removeClass('current-bullet');
		}
	}, (SHOWING_TIME));
}