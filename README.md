CharCycle
==========

JQuery plugin to create a cycling effect on selected text at some event.
-------------

Version Beta 0.0.1
Updated November 10th, 2011

###Description

This effect is inspired by the classic actionscript effect on [yugop.com](http://www.yugop.com "Yugop"). Attach the plugin to the element you want to trigger the cycling, specify the target text you want to produce the effect and include a conditional statement to ensure that cycling isn’t re-triggered while the effect is in progress.

###Options

*	speed : time it takes per cycle, default is set to 5

###Example

[CharCycle](http://www.robincwillis.com/CharCycle/example "Example")

###HTML

	<div class="c"><a href="#" id="text">Lorem ipsum dolor sit amet, consectetur</a></div>

###Javascript

	$('.c').mouseenter(function(){
    	if($(this).hasClass('cycling')==false){ 
        	$(this).charcycle({'target':'#text'});  
    	}
  	});