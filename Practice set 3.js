// let arr=[56,76,89,90,95,200,91,92,86,87];
// let newarr=arr.filter((val)=>{
//     return val>90;
// });
// console.log("Marks of the Student who have marks more than 90:",newarr);


//New Pragramm
let n=prompt("Enter the Number:");
let arr=[];
for(let i=1;i<=n;i++)
{
    arr[i-1]=i; //1(0) ,2(1) ,3(2) ,4(3)
}
console.log("Number of array",arr);
let output=arr.reduce((previous,currentval)=>{
    // return previous+currentval;
    return previous*currentval;
});
console.log("Factorial:",output);