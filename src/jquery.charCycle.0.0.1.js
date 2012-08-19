/************************************************************************
*************************************************************************
@Name :       CharCycle - jQuery Plugin
@Revison :    0.0.1
@Date :       01/25/2012
@Author:      Robin Willis
@License :    Open Source - MIT License : http://www.opensource.org/licenses/mit-license.php
**************************************************************************
*************************************************************************/
(function($){

$.fn.charcycle = function( options ){
		var settings = {
			target:"",
			sender:$(this),
			id:$(this).attr('id'),
			timer_is_on:1,
			quoteDis : "",
	    	quoteLoc : 0,
			speed:5,
			quotePic :   "....fgh......_____----hr--~`;'--~/--- ---asd----10?`, ",
 			quotePic2 :  "..-_-10?`,abcdefghijklmnopqrstuvwxyz123456789080-~`;' ",
			quotePic3 :  "......................................................",
			quoteStr : "",
			targetElement :""
		}
//var quoteStr;
//var targetElement;
var quoteLen;
var quoteMax;
var rndRange;
var t;

	return this.each(function(){
		
		if ( options ) { 
        	$.extend( settings, options );
      	}
		
		$(this).addClass('cycling');
		
		settings.targetElement=$(this).find(settings.target);
		settings.quoteStr=settings.targetElement.text();
		
		
		startQuote();
			
		function padQuote(){
			for (var i = settings.quoteStr.length; i < quoteMax; i++) {
	  			settings.quoteStr= "" + settings.quoteStr + " ";
	 		}
		}

	function disQuote() {
		settings.quoteDis = settings.quoteStr.substring(0, settings.quoteLoc);
	
	 	for (var i = settings.quoteLoc; i < quoteMax; i++){
	
		  	var charone;
		  	charone = settings.quoteStr.substring(i, i + 1);
		
		  	var rdnum;
		  	rdnum = Math.floor(Math.random() * rndRange)

		  	if(i< quoteMax && i>quoteMax-3){
				settings.quoteDis = "" + settings.quoteDis + settings.quotePic3.substring(rdnum, rdnum + 1);
		  	}
		  	else if (i > settings.quoteLoc+7 && i < settings.quoteLoc+14){

				settings.quoteDis = "" + settings.quoteDis + settings.quotePic.substring(rdnum, rdnum + 1);
		  	} 
			else {

		  		settings.quoteDis = "" + settings.quoteDis + settings.quotePic2.substring(rdnum, rdnum + 1);
		  	}
	 	}
	 	settings.quoteLoc = settings.quoteLoc + 1;
	 	if(settings.quoteLoc == quoteLen+2){
	 		 //$("#"+settings.id).removeClass('cycling');
	 		 settings.sender.removeClass('cycling');
	 		 clearTimeout(t);
	 		 settings.timer_is_on=0;
	 	}
	}
		
	function loopQuote(target) {

		settings.targetElement.text(settings.quoteDis);
		disQuote();
		
		if (settings.timer_is_on==1){
		 	t = setTimeout(function(){loopQuote(target)}, settings.speed);
		 	settings.speed=settings.speed+0.75;
		}

		if(quoteMax < quoteLen){
			quoteMax = quoteMax+3;	
		}
	}
	
	function startQuote() {

  		quoteMax = settings.quoteStr.length;
  		rndRange=settings.quotePic.length;
  		quoteLen = settings.quoteStr.length;
  		
  		padQuote();
  		disQuote();
  		loopQuote();
  
	}

	});
}
	
})( jQuery );