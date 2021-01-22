var display=document.getElementById("output");
var x,input1,input2,op;
function myFun(x) {
    display.innerHTML=display.textContent+x;
}
function myVal()
{

   window.localStorage.setItem('history0',display.textContent);
   display.innerHTML=eval(display.textContent);
   window.localStorage.setItem('history1',display.textContent);
}
function Clr()
{
	display.innerHTML="";
}
function Clrl()
{
	const text=display.textContent;
	display.innerHTML=text.slice(0, -1);
}
function History()
{
	var history=document.getElementById("history");
	history.innerHTML="Last operation: "+window.localStorage.getItem('history0')+"="+window.localStorage.getItem('history1');

}









// switch(x)
// {
// 	case 1:tmp=1;
// 	y=display.textContent;
// 	display.innerHTML=y+tmp;
// 	       break;
// 	case 2:tmp=2;
// 	y=display.textContent;
// 	display.innerHTML=y+tmp;
// 	       tmp=display.textContent;
// 	       break;
// 	case 3:tmp=3;
// 	y=display.textContent;
// 	display.innerHTML=y+tmp;
// 	       tmp=display.textContent;
// 	       break;
// 	case 4:
// 	y=display.textContent;
// 	display.innerHTML="4";
// 	       tmp=4;
// 	       break;
// 	case 5:
// 	y=display.textContent;
// 	display.innerHTML="5";
// 	       tmp=5;
// 	       break;
// 	case 6:
// 	y=display.textContent;
// 	display.innerHTML="6";
// 	       tmp=6;
// 	       break;
// 	case 7:
// 	y=display.textContent;
// 	display.innerHTML="7";
// 	       tmp=7;
// 	       break;
// 	case 8:
// 	y=display.textContent;
// 	display.innerHTML="8";
// 	       tmp=8;
// 	       break;
// 	case 9:
// 	y=display.textContent;
// 	display.innerHTML="9";
// 	       tmp=9;
// 	       break;
// 	case 10:
// 	y=display.textContent;
// 	display.innerHTML="0";
// 	       tmp=0;
// 	       break;
// 	case 11:
// 	y=display.textContent;
// 	display.innerHTML=".";
// 	       break;
// 	case 13:
// 	y=display.textContent;
// 	display.innerHTML="+";
// 	       	val=y;
// 	       	op='+';
// 	       break;
// 	case 14:
// 	y=display.textContent;
// 	display.innerHTML="-";
// 	       if(tmp!=0)
// 	       {
// 	       	val=tmp;
// 	       	op='-';
// 	       }
// 	       break;
// 	case 15:
// 	y=display.textContent;
// 	display.innerHTML="x";
// 	       if(tmp!=0)
// 	       {
// 	       	val=tmp;
// 	       	op='x';
// 	       }
// 	       break;
// 	case 16:
// 	y=display.textContent;
// 	display.innerHTML="/";
// 	       if(tmp!=0)
// 	       {
// 	       	val=tmp;
// 	       	op='/';
// 	       }
// 	       break;
// 	case 12:
// 	y=display.textContent;
// 	display.innerHTML="=";
// 	       if(tmp!=0)
// 	       {

	       	
// 	       }
// 	       break;
// 	default:display.innerHTML="0";
// 	        break;
// }



