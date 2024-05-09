//Arithematic operators
let a=7, b="2";
// let c=a+b;
// let d=a-b;
// console.log("a =",a,"b =",b);
// console.log("a+b =",c);
// console.log("a-b =",d);
// console.log("a*b =",a*b);
// console.log("a/b =",a/b);
// console.log("a%b =",a%b);
// console.log("a**b =",a**b);//5^2


//Unary operator
console.log("a =",a,"& b =",b);
// a++;
// b--;
// console.log("a++ =",a++);
// console.log(a);
// console.log("++b=",++b);
// console.log(b);


// Assignment Operator
a+=2;//it's simple a=a+1;
console.log("sum =",a);
a-=3;
console.log("subtraction =",a);//now thwe value of a is 6
a*=5;
console.log("Multiplication =",a);
a%=4;//it give the value of the remainder
console.log("modulus =",a);
a**=4;
console.log("Exponential =",a);


//Comparasion Operator// here the value of a is 16
console.log("a==b",a==b);
console.log("a!=b",a!=b);
console.log("a===b",a===b);//stricter verson of equals to
console.log("a!==b",a!==b);

//Logical Operator
let cond1=a>b;
let cond2=a==16;
let cond3=a==10;
console.log("cond1 && cond2 =",cond1 && cond2);
console.log("cond1 || cond3 =",cond1 || cond3);
console.log("!(a>b)",!(a>b));//here the vale of a=16 and b=2

//Conditional Statement
// let age=25;
// if(age>=18)
//     {
// console.log("You are eligible");
// }
// else 
// {
//     console.log("You are not eligible");
// }


// let mode="Dark";
// let color;
// if(mode==="Dark")
// {
// color="Black";
// }
// if(mode==="light"){
//     color="White";
// }
// console.log(color);


//odd aor even
let num=10;
if(num%2===0)
{
    console.log(num,"is Even");
}
else{
    console.log(num,"is Odd");
}
//syntax is the rules 

let mode="Dark";
let color;
 if (mode === "Dark") 
    {
color="Black";
 }
 else if(mode === "Blue")
 {
    color= "Blue";
 }
 else if(mode === "Pink")
    {
        color="Pink";
    }
    else
        color="White";
    {
        console.log(color);
    }


if(mode === "Dark") 
    {
        console.log(mode);
    }


    //Teranary Operator
    let age=25;
   let result= age>=18?"Adult":"Minor";//compact if else statement
    {
        console.log(result);
    }

    // alert("Hello!");//one tome pop out
  let Say=prompt("Hello!");//take some information form the users
  console.log(Say);