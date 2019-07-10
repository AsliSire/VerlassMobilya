'use strict';
$(function() {var width = 1084; 
	var animationSpeed = 3000; 
	var pause = 7000; 
	var currentSlide = 1;
	var $sdr2012 = $('#sdr2012'); 
	var $slideContainer = $('.sld', $sdr2012); 
	var $sld = $('.slide', $sdr2012); 
	var interval; function startsdr2012() { 
		interval = setInterval(function() { 
		$slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
				if (++currentSlide === $sld.length) {currentSlide = 1; $slideContainer.css('margin-left', 0); }});}, pause);} 
	
	function pausesdr2012() {
		clearInterval(interval);
	}
		$slideContainer.on('mouseenter', pausesdr2012).on('mouseleave', startsdr2012);startsdr2012();});