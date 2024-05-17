let arr=[1,2,3,4];
const output=arr.reduce((result,currentvalue)=>{
    return result+currentvalue;
});
console.log("Given Array:",arr);
console.log("Sum:",output);

//Print Greatest Value
let array=[1,2,3,4,56,43,23,87,96,76,45,44,56];
console.log("Given Array:",array)
const Greatest=array.reduce((previous,currentval)=>{
    return previous>currentval?previous:currentval;
});
console.log("Greatest Value is:",Greatest);