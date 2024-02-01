str="";
var n=1;
let button=document.querySelectorAll(".btn")
console.log(button)
let a=Array.from(button)
a.forEach(e=>{
e.addEventListener('click',e=>{
  if(e.target.innerHTML=="=") {
    let b=eval(str)
    document.querySelector(".display").innerHTML=b;
    str=b;
  }
  else if (e.target.innerHTML=="AC") {
    str="";
    document.querySelector(".display").innerHTML=str;}
    else if (e.target.innerHTML=="x") {
    str+="*";
    document.querySelector(".display").innerHTML=str;}
    else if (e.target.innerHTML=="÷") {
    str+="/";
    document.querySelector(".display").innerHTML=str;}
  else if (e.target.innerHTML=="X") {
    str=str.slice(0,str.length-1);
    document.querySelector(".display").innerHTML=str;
  }
  else if (e.target.innerHTML=="( )") {
    if (n%2==1) {
      str+="("
    document.querySelector(".display").innerHTML=str;
     n=n+1;
    }
    else{
      str+=")"
    document.querySelector(".display").innerHTML=str;
      n=n+1;
    }
  }
  else{
    str+=e.target.innerHTML;
    document.querySelector(".display").innerHTML=str;
  }
})
})