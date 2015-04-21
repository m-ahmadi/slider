/**********************************************
	JavaScript by Mohammad Ahmadi.
	mohammad.ahmadi1989@yahoo.com
	HTML IDs:
		slide#-wrap
		bullet#
		slide#-desc#
***********************************************/
/*
	when we pause, and navigate to an slide, descriptions of that slide get played but,
	then there's nobody to hide them because the playback is off. (fixed)
	
	when playing one standalone slide, it plays the descs and then they stay shown until the next time that slide gets played
	so when we play an slide we have to wait for the descs to get hidden and then pop up again. (fixed)
*/

var slideID,
	descID,
	playID,
	currentSlide = 1,
	currentSlideDescState = "Zero",
	playback = false,
	slidesPlayback = false,
	descsPlayback = false,
	TOTAL_SLIDES = 6,
	LAST_SLIDE = TOTAL_SLIDES,
	SECONDLAST_SLIDE = LAST_SLIDE - 1,
	FIRST_SLIDE = TOTAL_SLIDES - (TOTAL_SLIDES - 1),
	SECONDFIRST_SLIDE = FIRST_SLIDE + 1,
	SHOWING_TIME = 6000,
	DESC_DELAY = SHOWING_TIME - (SHOWING_TIME / 4), //2500,7500
	PAUSE_DELAY = SHOWING_TIME - 2000,              // (SHOWING_TIME / 5)
	DESCSET_HALF = 101,
	DESCSET_FULL = 201;

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
		var slide = +( $(this).attr('ID').slice(-1) );
		console.log(slide);
		playSlide(slide, currentSlide);
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
	playBullet(whichOne);
	playSlide(whichOne, currentSlide);
}
function prevSlide() {
	var whichOne;
	if (currentSlide !== FIRST_SLIDE) {
		whichOne = currentSlide - 1;
	} else {
		whichOne = LAST_SLIDE;
	}
	playBullet(whichOne);
	playSlide(whichOne, currentSlide);
}

function playSlide(slide, current) {
	//if (currentSlideDescState === "Shown") {
		hideDescs(current);
	//}
	
	var typeOfSlide = typeof slide;
	if (slide > TOTAL_SLIDES || slide === (TOTAL_SLIDES - TOTAL_SLIDES) ||
			typeOfSlide !== 'number' || typeOfSlide === 'undefined') {
		throw Error("playSlide: Slide Number is Invalid");
	}
	if (slidesPlayback === true) { resetPlayback(); }
	
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
	playBullet(slide);
	showDescs(slide);
	if (playback === true) {
		setTimeout(function () {
			hideDescs(slide);
		}, SHOWING_TIME);
	}
}
function doBetween(slideNumber, highestSlide, showOrHide) {
	var i;
	for(i=slideNumber; i<highestSlide; i+=1) {
		$('#slide'+(i+1)+'-wrap').css({opacity: showOrHide});
	}
}
/*********************
	Playback
**********************/
function autoplayOn() {
	playback = true;
	slidesPlayback = true;
	descsPlayback = true;
	playBullet(currentSlide);
	playDescriptions(currentSlide);
	playID = setInterval(playEverything, SHOWING_TIME);
}
function autoplayOff() {
	playback = false;
	slidesPlayback = false;
	descsPlayback = false;
	clearInterval(playID);
}
function playEverything() {
	if (playback !== true) { throw new Error("playEverything: Playback is currently off"); }
	
	if (slidesPlayback === true) {
		fadeinNextSlide();
		incCurrentSlide();
		playBullet(currentSlide);
	} else {
		throw new Error("playEverything: Slides playback is currently off");
	}
	
	if (descsPlayback === true) {
		playDescriptions(currentSlide);
	} else {
		throw new Error("playEverything: Descriptions playback is currently off");
	}
	
	
}
function incCurrentSlide() {
	if (currentSlide !== LAST_SLIDE && currentSlide < LAST_SLIDE) {
		currentSlide += 1;
	} else if (currentSlide === LAST_SLIDE) {
		currentSlide = FIRST_SLIDE;
	}
}
function resetPlayback() {
	clearInterval(playID);
	playID = setInterval(playEverything, SHOWING_TIME);
}
/*********************
	Slides Playback
**********************/
function fadeinNextSlide() {
	if (currentSlide !== LAST_SLIDE) {
		$('#slide'+currentSlide+'-wrap').animate({opacity: 0}, 1000);
	} else if (currentSlide === LAST_SLIDE) {
		$('#slide'+FIRST_SLIDE+'-wrap').animate({opacity: 1}, 1000);
		setTimeout(function () {
			$('.slide-wrap').css('opacity','1');
		}, 1000);
	}
}
function sequentialplaySlide() {
	fadeinNextSlide();
	incCurrentSlide();
}
/********************
	Descriptions
*********************/
function playDescriptions(slide) {
	var typeOfSlide = typeof slide;
	if (slide > TOTAL_SLIDES || slide === (TOTAL_SLIDES - TOTAL_SLIDES) ) { throw new Error("playDescriptions: Invalid slide number"); } else
	if (typeOfSlide !== 'number' || typeOfSlide === 'undefined') { throw new Error("playDescriptions: Wrong argument type"); }	
	showDescs(slide);
	setTimeout(function () {
		hideDescs(slide);
	}, DESC_DELAY);
}
function showDescs(slide) {
	var current = descs['slide'+slide],
		i;
	for (i=0; i<current.howManyDescs; i+=1) {
		forClosure2( 'showDesc', slide, (i+1), current, current.delays[i] );
	}
	//currentSlideDescState = 'Shown';
}
function hideDescs(slide) {
	var current = descs['slide'+slide],
		i;
	for (i=0; i<current.howManyDescs; i+=1) {
		forClosure2( 'hideDesc', slide, (i+1), current, current.delays[i] );
	}
	//currentSlideDescState = 'Hidden';
}
function forClosure2(funcName, slideNum, descNum, slideObj, delay) {
	setTimeout(function () {
		fndesc[funcName](slideNum, descNum, slideObj['desc'+descNum]);
	}, delay);
}
var fndesc = {};
fndesc.showDesc = function (slideNum, descNum, o) {
	var tmp = $('.slide'+slideNum+'_desc'+descNum).delay().animate(
		o.toShow.CSS,
		{duration: o.toShow.aniDuration, specialEasing: o.toShow.easings}
	);
};
fndesc.hideDesc = function (slideNum, descNum, o) {
	$('.slide'+slideNum+'_desc'+descNum).delay().animate(
		o.toHide.CSS,
		{duration : o.toHide.aniDuration,
		specialEasing: o.toHide.easings,
		complete : function () {
			$(this).css(o.toHide.resetCSS);
		}}
	);
};

/**************
	Bullets
***************/
function playBullet(slide) {
	if (typeof slide === 'undefined') { throw new Error("playBullet: Argument was omitted"); } else
	if (typeof slide !== 'number') { throw new Error("playBullet: Wrong argument Type"); }
	if (slide > TOTAL_SLIDES || slide === (TOTAL_SLIDES - TOTAL_SLIDES) ) { throw new Error("playBullet: Invalid slide number") };
	
	var currentBullet;
	$('.bullet').removeClass('current-bullet');
	
	if ( slide === (LAST_SLIDE + 1) ) {
		slide = FIRST_SLIDE;
	} else if ( slide === (FIRST_SLIDE - 1) ) {
		slide = LAST_SLIDE;
	}
	currentBullet = $('#bullet'+slide).addClass('current-bullet');
	
	if (slidesPlayback === true) {
		setTimeout(function () {
			currentBullet.removeClass('current-bullet');
		}, SHOWING_TIME);
	}
}
function sequentialPlayBullet() {
	$('.bullet').removeClass('current-bullet');
	$('#bullet'+currentSlide).addClass('current-bullet');
	incCurrentSlide();
}
	














// ### temp ###
function forClosure3(num) {
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