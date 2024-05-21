//Button 1
let btn1=document.querySelector("#Btn1");

btn1.onclick=()=>{
console.log("Button 1 was clicked");
let a=25;
a++
console.log(a);
};

//This for DIV
let div=document.querySelector("div");
div.onmouseover=()=>{
    console.log("You'r inside Div");
};

//Button 2
let btn2=document.querySelector("#Btn2");
// btn2.ondblclick=(evt)=>{
//     console.log("Button Was Clicked");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX);
//     console.log(evt.clientY);
// };
btn2.addEventListener("click",(evt)=>{
    console.log("Button 2 was Clicked");
    console.log(evt);
});
btn2.addEventListener("dblclick",(evt)=>{
    console.log("Button 2 was Clicked - Handler 1");
    console.log(evt.type);
});
btn2.addEventListener("dblclick",(evt)=>{
    console.log("Button 2 was Clicked - Handler 2");
    console.log(evt.type);
});


const handler3=(evt)=>{
    console.log("Button 2 was Clicked - Handler 3");
    console.log(evt.type);
};


btn2.addEventListener("dblclick",handler3)
btn2.addEventListener("dblclick",(evt)=>{
    console.log("Button 2 was Clicked - Handler 4");
    console.log(evt.type);
});

btn2.removeEventListener("dblclick",handler3);