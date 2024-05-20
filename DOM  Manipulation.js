let newBtn=document.createElement("Button");
let secBtn=document.createElement("Button");
let thirdBtn=document.createElement("Button");
let forthBtn=document.createElement("Button");
newBtn.innerText="Append Button";
secBtn.innerText="Prepend Button";
thirdBtn.innerText="Before Button";
forthBtn.innerText="After Button";
console.dir(newBtn);
console.dir(secBtn);
console.dir(thirdBtn);
console.dir(forthBtn);

let div=document.querySelector("div");
div.append(newBtn);
div.prepend(secBtn);
div.before(thirdBtn);
div.after(forthBtn);

// 

let newheading=document.createElement("h1");
newheading.innerHTML="<i>Hii this is new message</i>";
 
document.querySelector("body").prepend(newheading);

//
let para=document.querySelector("p");
para.remove();
