// function myfunction(msg,n){
//    console.log("Welcome to Apna College");
//     console.log("We are learning Js");
//     console.log(msg,n);//parameter-> input
// }
// myfunction("Let's do it",100);//function invoke //argument


// //sum of two numbers
// function sum(x,y){
//     console.log(`Entered number ${x}`);
//     console.log(`Entered number ${y}`);
// s=x+y;
// return(s);
// }
// let val=sum(389,459);
// console.log(`Sum of the number: ${val}`);


//Arrow function

//Addition
const arrowsum=(a,b) =>{
    console.log(`${a}+${b}`);
    console.log(a+b);
}
arrowsum(4,5);

//Multiplication
const arrowmul=(c,d)=>{
    console.log(`${c}*${d}`);
    // console.log(c*d);
    m=c*d;
    return(m);
}
arrowmul(5,2);
console.log(m);

//
const printhello=()=>{
    console.log("Hello World");
}