let newBtn=document.createElement("Button");
newBtn.innerText="Click Me!";

newBtn.style.backgroundColor="red";
newBtn.style.color="white";

document.querySelector("body").prepend(newBtn);

//Question 2
let para=document.querySelector("p");
para.classList.add("newclass");