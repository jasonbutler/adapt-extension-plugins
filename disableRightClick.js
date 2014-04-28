/* This file will remove all right mouse button events*/

document.onmousedown=disableclick;
document.body.oncontextmenu="return false"
Function disableclick(event)
{
  if(event.button==2)
   {
     alert("Right Click Disabled");
     return false;    
   }
}