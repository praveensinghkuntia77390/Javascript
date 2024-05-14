let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift();
console.log(companies);//now the index start from Microsot i.e:0;
companies.splice(1,1,"ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);