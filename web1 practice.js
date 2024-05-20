let h2=document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText=h2.innerText+" from apna college student";


let divs=document.querySelectorAll(".box");
let idx=1;
for(let div of divs){
div.innerText=`The unique value ${idx}`;
idx++
}
// divs[0].innerText="New Value 1";
// divs[1].innerText="New Value 2";
// divs[2].innerText="New Value 3";

//Attributes
let Nan=document.querySelector("div");
console.log(Nan);

let id=Nan.getAttribute("id");
console.log(id);
Nan.style.fontSize="10px";



//
let para=document.querySelector("p");
console.log(para.getAttribute("class"));
console.log(para.setAttribute("class","new Class"));


//
let lenns=document.querySelector("#lens");
console.log(lenns.style.backgroundColor="gray");
lenns.style.fontSize="10px";
lenns.innerText="Alan Walker";