// let marks=[97,67,23,97,90,45];
// console.log(marks);
// console.log(marks[3]=56);//Property
// console.log(marks);

// let arr=["Ironman","Thor","Antman","Hanuman","hulk"];
// let i;
// {
// for(i=0;i<arr.length;i++)
// console.log(arr[i]);
// }

// //for-of
// for(let i of arr);
// {
//     console.log(i);
// }

// let cities=["Delhi","Pune","Mumbai","Grugaon"];
// let size=0;
// for(let city of cities){
//     console.log(city.toUpperCase());
//     size++;
// }
// console.log(size);


//Practice set no.1
// let marks=[85,97,37,76,60,44];
// let sum=0;
// for(let val of marks){
//     console.log(val);
//     sum+=val;
// }
// let avg=sum/marks.length;
// console.log(`Avg marks of the class=${avg}`);


//10% off
// let items=[250,645,300,900,50];
// let i;
// for(let val of items){
//     console.log(`Value at index ${i}=${val}`);
//     let off=val/10;
//     items[i]=items[i]-off;
//     console.log(`Value after offfer=${items[i]}`)
//     i++
// } 
// console.log(`Value of the items after the offer=${items}`);
// console.log(`Value of the items before the offer=${items}`); 
// for(i=0;i<items.length;i++)
//     {
//         let offer=items[i]/10;
//         items[i]=items[i]-offer;
//     }
//     console.log(`Value of the items after the offer is=${items}`);

//Push & Pop
// let fooditems=["Potato","Apple","Litchi","Tomato"];
// console.log(fooditems);
// fooditems.push("Chips","Burger","Paneer");
// console.log(fooditems);
// let deleteditem=fooditems.pop();
// console.log(`Deleted item:${deleteditem}`);
// console.log(fooditems);

//To string
// let marks=[53,65,87,88,97,96];
// console.log(`Marks:${marks}`);
// let str=marks.toString();
// console.log(`Marks coverted to String:${str}`);


//Concat
// let marvel=["Ironman","Deadpool","Spiderman","Antman","Thor"];
// let Dc=["Superman","Flash","Aquaman","Wonderwomen","Batman"];
// let indianheroes=["Shaktiman","Krish"];
// let heroes=marvel.concat(Dc,indianheroes);
// console.log(heroes);
// marvel.unshift("Black Panther");
// console.log(marvel);
// Dc.shift();
// console.log(Dc);

//slice
let marvel=["Ironman","Deadpool","Spiderman","Antman","Thor"];
console.log(marvel);
console.log(marvel.slice(1,4));
console.log(marvel.splice(2,2,"Hulk","Wolverine"));
console.log(marvel);
