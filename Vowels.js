// function countVowels(str){
//     let count=0;
// for(const char of str){
//     if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"||char==="I"){
//         count++
//     }
// }
// console.log(count);
// }
// countVowels("Praveen Singh Kuntia");


//Arrow function
 const countVowels=(str)=>{
    let count=0;
    for(const char of str){
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u")
            count++
    }
    console.log(count);
 }
 countVowels("Apna College");