//Loop
// let i,sum=0;
// for(i=1;i<=10;i++)
//     sum=sum+i;
//     {
//         console.log("Sum =",sum);
//     }

//     let i,sum=0;
// for(i=1;i>=0;i++)//works for the infinite time
//     sum=sum+i;
//     {
//         console.log("Sum =",sum);
        //   }


// While loop
// let j=0;
// while(j<=20){
//     console.log(j);
//     j++;
// }



// Do-While Loop
// let i=1;
// do{
//     console.log("Apna College");
//     i++;
// }
// while(i<=10);


//For-of loop
// let str="JavaScript";
// let size=0;
// for(let val of str)//iterator -> Characters
//     {
//         console.log("Val=",val);
//         size++;
//     }
//     console.log("String Size =",size);


// For-in Loop
// let student={
//     Name:"Praveen Singh Kuntia",
//     Age:20,
//     cgpa:7.5,
//     ispass:true,
// }
// for(let key in student){
//     console.log("key:",key,"Value:",student[key]);
// }


//Practice set 1:100 Even Numbers
// let i=0;
// for(i=0;i<=100;i++)
//     if(i%2==0)
//     {
//     console.log("Even Numbers:",i);
//     }

//Practive set 2 Game Number
let gamenum=25;
let usernum=prompt("Guess the game number");

while(usernum !=gamenum){
        usernum=prompt("You Have entered Wrong Number,Guess the Number Again");
        console.log("Your entered number is",usernum);
}
console.log("Congratulation you have entered the right Number");


