/* This file will remove all right mouse button events*/

define([], function() {

		window.document.onmousedown=disableclick;
		window.document.body.oncontextmenu="return false"
		function disableclick(event)
		{
		  if(event.button==2)
		   {
		     alert("Right Click Disabled");
	     	return false;    
	  	   }
		}
});