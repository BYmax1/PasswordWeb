var s1='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var s2='abcdefghijklmnopqrstuvwxyz';
var s3='0123456789';

function generate()
{
  	
  var s='';
  var res='';
  var b1=document.getElementById('b1');
  var b2=document.getElementById('b2');
  var b3=document.getElementById('b3');

  var r1=document.getElementById('r1');
  var r2=document.getElementById('r2');
  var r3=document.getElementById('r3');
  var r4=document.getElementById('r4');
  var account=document.getElementById('ac');

  if(r1.checked)
  	 account.value='qq328691560';
  if(r2.checked)
  	 account.value='328691560@qq.com';
  if(r3.checked)
  	 account.value='18166048664';
  if(r4.checked)
     account.value='bymax1@163.com';


  var show=document.getElementById('result');
  var lenth=document.getElementById('lenth').value;
  if(b1.checked)
  	s+=s1;
  if(b2.checked)
  	s+=s2;
  if(b3.checked)
  	s+=s3;


  for(var i=0;i<lenth;i++)
  {
  	 var j=Math.random()*(s.length-1);
  	 //console.log(j);
  	 //=Math.floor(j);
  	 res+=s.charAt(j);
  }
  	 
  var show=document.getElementById('result');
  show.value=res;
  
  
}
