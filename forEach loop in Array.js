let arr=["delhi","pune","hydrabad","banglore"];

 arr.forEach((val,i,arr)=>{
    console.log(val.toUpperCase(),i,arr);
 });

 //Practice Set Question for square
let nums=[2,3,4,5,6];
let calcSquare=(square)=>{
    console.log(square*square);
};
nums.forEach(calcSquare);
 