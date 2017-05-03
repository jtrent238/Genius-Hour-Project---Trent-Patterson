<!-- Hide the script from old browsers --

// Modified by CoffeeCup Software

function MakeArray(n)
{
  this.length=n;
  for(var i=1; i<=n; i++) this[i]=i-1;
  return this
}

hex=new MakeArray(16);
hex[11]="A"; 
hex[12]="B"; 
hex[13]="C"; 
hex[14]="D"; 
hex[15]="E"; 
hex[16]="F";

function ToHex(x)
{
// Changes a int to hex (in the range 0 to 255)
  var high=x/16;
  var s=high + "";
  s=s.substring(0,2);
  high=parseInt(s,10);
  var left=hex[high+1];

  var low=x-high*16;
  s=low+"";
  s=s.substring(0,2);
  low=parseInt(s,10);
  var right=hex[low+1];

  var string=left + "" + right;
  return string;
}

function fadein(text)
{
  text=text.substring(3,text.length-4);

  color_d1=255;
  color_d1b=255;
  color_d1c=255;

  mul=color_d1/text.length;   
  for(i=0;i<text.length;i++)
  {
    color_d1=mul*i; 
    color_d1b=255-mul*i;
    color_d1c=255*Math.sin(i/(text.length/3));
// *******
// some other things you can try>> "=255-mul*i" to fade out, "=mul*i" to fade in, or try "255*Math.sin(i/(text.length/3))"
// *******
    color_h1=ToHex(color_d1);
    color_d2=mul*i;
    color_h2=ToHex(color_d2);

    color_h1b=ToHex(color_d1b);
    color_d2b=mul*i;
    color_h2b=ToHex(color_d2b);

    color_h1c=ToHex(color_d1c);
    color_d2c=mul*i;
    color_h2c=ToHex(color_d2c);

    document.write("<FONT COLOR='#FF8000"+color_h1+color_h2+"'>"+text.substring(i,i+1)+'</FONT>');
  }
}
// --End Hiding Here -->
</script>
<SCRIPT LANGUAGE="JavaScript">
<!--
{  fadein("-->This is the Text, just put yours here !<!__");  }
//-->
