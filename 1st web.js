// console.dir(window);
// console.dir(window.document.body.style.background="yellow");
// console.log(document.body.childNodes[1].innerText="Yahoo");


let heading=document.getElementById("Heading");//h1 returns
console.dir(heading);
let heading2=document.getElementById("Heading2");
console.dir(heading2);

let head1=document.getElementsByClassName("head");
console.dir(head1);
console.log(head1);
let paras=document.getElementsByTagName("p");
console.dir(paras);
console.log(paras);


//Query Selectors
let firstEle=document.querySelector("p");//1st Element
console.dir(firstEle);
console.log(firstEle);
let allEle=document.querySelectorAll("p");//All Element
console.dir(allEle);
console.log(allEle);
let myid=document.querySelector("#Heading");
console.dir(myid);
console.log(myid);
let myclass=document.querySelectorAll(".head");
console.dir(myclass);
console.log(myclass);


let div=document.querySelector("div");
console.dir(div);




































































