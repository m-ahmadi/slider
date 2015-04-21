/**********************************************
	JavaScript by Mohammad Ahmadi.
	mohammad.ahmadi1989@yahoo.com
	HTML IDs:
		slide#-wrap
		bullet#
		slide#-desc#
***********************************************/

var slideID,
	descID,
	currentSlide = 1,
	slidesPlayback = false,
	descsPlayback = false,
	TOTAL_SLIDES = 6,
	LAST_SLIDE = TOTAL_SLIDES,
	SECONDLAST_SLIDE = LAST_SLIDE - 1,
	FIRST_SLIDE = TOTAL_SLIDES - (TOTAL_SLIDES - 1),
	SECONDFIRST_SLIDE = FIRST_SLIDE + 1,
	SHOWING_TIME = 6000,
	DESC_DELAY = SHOWING_TIME - 2500, //7500
	PAUSE_DELAY = SHOWING_TIME - 2000;

$(function () {
    autoplayOn();
	
	$('#next').on('click', function () {
		nextSlide();
	});
	
	$('#prev').on('click', function () {
		prevSlide();
	});
	
	$('#pause').on('click', function () {
		autoplayOff();
	});
	
	$('#play').on('click', function () {
		autoplayOn();
	});
	$('.bullet').on('click', function () {
		var bullet = $(this).attr('ID').slice(-1);
		bullet = +(bullet);
		playBullets(bullet);
		playSlide(bullet);
	});
	
	$('#play-pause').on('click', function () {
		var el = $(this);
		if (el.hasClass('pause')) {
			el.css({background : 'url("images/playh.png") no-repeat center'});
			el.removeClass('pause');
			el.addClass('play');
			autoplayOff();
		} else if (el.hasClass('play'))  {
			el.css({background : 'url("images/pauseh.png") no-repeat center'});
			el.removeClass('play');
			el.addClass('pause');
			autoplayOn();
		}
	});
	$('#play-pause').on('mouseover', function () {
		var el = $(this);
		if (el.hasClass('pause')) {
			el.css({background : 'url("images/pauseh.png") no-repeat center'});
		} else if (el.hasClass('play'))  {
			el.css({background : 'url("images/playh.png") no-repeat center'});
		}
	});
	$('#play-pause').on('mouseout', function () {
		var el = $(this);
		if (el.hasClass('pause')) {
			el.css({ background : 'url("images/pause.png") no-repeat center'});
		} else if (el.hasClass('play'))  {
			el.css({background : 'url("images/play.png") no-repeat center'});
		}
	});
});

$('.slide4').animate({width:'150%', height: '150%', right:'-5%'}, {duration: 12000, specialEasing:{width: 'linear', height: 'linear'}});
function autoplayOn() {
	autoplaySlides();
	autoplayDescriptions();
}
function autoplayOff() {
	pauseSlides();
	pauseDescriptions();
}
/*********************
	Next Prev Slide
**********************/
function nextSlide() {
	var whichOne;
	if (currentSlide !== LAST_SLIDE) {
		whichOne = currentSlide + 1;
	} else {
		whichOne = FIRST_SLIDE;
	}
	playBullets(whichOne);
	playSlide(whichOne);
	
}
function prevSlide() {
	var whichOne;
	if (currentSlide !== FIRST_SLIDE) {
		whichOne = currentSlide - 1;
	} else {
		whichOne = LAST_SLIDE;
	}
	playBullets(whichOne);
	playSlide(whichOne);
}
function playSlide(slide) {
	var typeOfSlide = typeof slide,
		whichOne;
	if (slide > TOTAL_SLIDES || slide === (TOTAL_SLIDES - TOTAL_SLIDES) ||
			typeOfSlide !== 'number' || typeOfSlide === 'undefined') {
		return undefined;
	}
	if (slidesPlayback === true) { resetSlidesPlayback(); }
	
	if (slide > currentSlide) { // slide is on the back
		var nextSlide = currentSlide + 1;
		if (slide === nextSlide ) { // is it next slide?
			var nextSlideEl = $('#slide'+nextSlide+'-wrap');
			if (nextSlideEl.css('opacity') == 0) { // it's been changed by others
				nextSlideEl.css({opacity : 1});
				// ##
			}
			$('#slide'+currentSlide+'-wrap').animate({opacity: 0}, 1000);
		} else if (slide > nextSlide)  { // is it beyond next slide?
			// we have to hide all the slides in between
			var formula  = slide - currentSlide,
				targetSlideEl = $('#slide'+slide+'-wrap');
			doBetween(currentSlide, formula, 0);
			if (targetSlideEl.css('opacity') == 0) { // its' been changed by others
				targetSlideEl.css({opacity: 1});
				// ##
			}
			$('#slide'+currentSlide+'-wrap').animate({opacity: 0}, 1000);
		}
	} else if ( slide < currentSlide) { // slide is on the front
		var prevSlide = currentSlide - 1;
		if (slide === prevSlide ) {
			$('#slide'+prevSlide+'-wrap').animate({opacity: 1}, 1000);
			// ##
		} else if (slide < prevSlide)  {
			var formula  = currentSlide - slide;
			doBetween(currentSlide, formula, 0);
			$('#slide'+slide+'-wrap').animate({opacity: 1}, 1000);
			// ##
		}
	}
	currentSlide = slide;
	playDescriptions();
}
function doBetween(slideNumber, highestSlide, showOrHide) {
	var i;
	for(i=slideNumber; i<highestSlide; i+=1) {
		$('#slide'+(i+1)+'-wrap').css({opacity: showOrHide});
	}
}
/*********************
	Slides Playback
**********************/

function autoplaySlides() {
	slidesPlayback = true;
	playBullets();
	slideID = setInterval(playSlides, SHOWING_TIME);
}
function pauseSlides() {
	slidesPlayback = false;
	clearInterval(slideID);
}
function resetSlidesPlayback() {
	clearInterval(slideID);
	autoplaySlides();
}
function playSlides() {
	if (slidesPlayback !== true) { return undefined; }
	
	if (currentSlide !== LAST_SLIDE && currentSlide < LAST_SLIDE) {
		$('#slide'+currentSlide+'-wrap').animate({opacity: 0}, 1000);
		currentSlide += 1;
		playBullets();
		
		if (currentSlide === SECONDLAST_SLIDE) {
			setTimeout(function () {
				playBullets();
			}, 500);
		}
		
	} else if (currentSlide === LAST_SLIDE) {
		currentSlide = 1;
		$('#slide1-wrap').animate({opacity: 1}, 1000);
		
		playBullets();
		setTimeout(function () {
			$('.slide-wrap').css('opacity','1');
		}, 1000);
	}
}
/**************
	Bullets
***************/
function playBullets(v) {
	var currentBullet;
	$('.bullet').removeClass('current-bullet');
	if (typeof v === 'undefined') {
		currentBullet = $('#bullet'+currentSlide);
	} else if (typeof v !== 'undefined' && typeof v === 'number') {
		console.log(v);
		if ( v === (LAST_SLIDE + 1) ) {
			v = FIRST_SLIDE;
		} else if ( v === (FIRST_SLIDE - 1) ) {
			v = LAST_SLIDE;
		}
		currentBullet = $('#bullet'+v);
	}
	currentBullet.addClass('current-bullet');
	if (slidesPlayback === true) {
		setTimeout(function () {
			currentBullet.removeClass('current-bullet');
		}, SHOWING_TIME);
	}
}
/********************
	Descriptions
*********************/
function autoplayDescriptions() {
	descsPlayback = true;
	playDescriptions();
	descID = setInterval(playDescriptions, SHOWING_TIME);
}
function pauseDescriptions() {
	descsPlayback = false;
	clearInterval(descID);
}
function playDescriptions() {
	var current = descs['slide'+currentSlide],
		i;
	for (i=0; i<current.howManyDescs; i+=1) {
		forClosure( (i+1), current, current.delays[i] );
	}
}
function forClosure(descNum, slide, delay, runFullOnce) {
	setTimeout(function () {
		animateDesc(descNum, slide['desc'+descNum], runFullOnce);
	}, delay);
}	
function animateDesc(descClass, o, runFullOnce) {
	var tmp = $('.slide'+currentSlide+'_desc'+descClass).animate(
		o.toShowCSS,
		{duration: o.toShowAniDuration, specialEasing: o.toShowEasings}
	).delay(DESC_DELAY);
	
	setTimeout(function () {
		if (descsPlayback === true || (typeof runFullOnce !== 'undefined' && typeof runFullOnce === 'boolean')) {
			tmp.animate(
				o.toHideCSS,
				{duration : o.toHideAniDuration,
				specialEasing: o.toHideEasings,
				complete : function () {
					$(this).css(o.toResetCSS);
				}}
			);
		}
	}, PAUSE_DELAY);
}
function playDescSet(slide, runFullOnce) {
	var typeOfSlide = typeof slide;
	if (slide > TOTAL_SLIDES || slide === (TOTAL_SLIDES - TOTAL_SLIDES) ||
			typeOfSlide !== 'number' || typeOfSlide === 'undefined') {
		return undefined;
	}	
	
	var current = descs['slide'+slide],
		i;
	for (i=0; i<current.howManyDescs; i+=1) {
		forClosure( (i+1), current, current.delays[i], runFullOnce );
	}
}



// when we pause, and navigate to an slide, descriptions of that slide get played but,
// then there's nobody to hide it because the playback is off.














// ### temp ###
function forClosure2(num) {
	setTimeout(function() {
		$('#slide'+num+'-wrap').css({opacity: 1});
	}, SHOWING_TIME);
}
	//$('.slide-wrap').animate({opacity: 0}, 1000);
/*
if (slidesPlayback === true && descsPlayback === true) {
		setTimeout(function() {
			//playSlides();
		}, SHOWING_TIME);
	}
*/