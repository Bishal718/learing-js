console.log("hello world");
console.log("hello bishal");
for (let i = 0; i < 5; i++) {
    console.log("hello bishal -- and the value of i is:",i);
    if(i==2){
        break;
    }
}
const name = 'bishal_samanta';
const semcount = 20;
const mix = semcount + Number(name);
// console.log(name + semcount + "hello" + "World");
// console.log(typeof name);
// console.log(typeof semcount);
// console.log(typeof mix);
// console.log(name < semcount);
console.log(`hello my name is ${name} and my semester count is ${semcount}..... `);
console.log(`the name varibale is the ${typeof name} and the semster count contains the type of ${typeof semcount}`);//here we use the typeof operator to know the type of the variable 

console.log(`the length of the name is ${name.length} and the sixth alphabet of the styring is ${name[6]} and the string is ${name}`);//here we accessing the methods of string using "." dot operator after string variable name

const new_name = new String(`${name.toUpperCase()}`);//here we use string interpolation to create a new string with uppercase letters
console.log(`the new string is ${new_name}..... `);
console.log(`the old string is ${name}.......`);
console.log(`the type of old string is ${typeof name} the type of the new string is ${typeof new_name}`);
console.log(name.charAt(1));
console.log(name.slice(0, 6));

const othernum = 23.459
console.log(othernum.toPrecision(2));//Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
 
const num = new Number(10000000);
console.log(num.toLocaleString('en-IN'));//here we use toLocaleString method to convert the number into indian format with commas
console.log(num.toString().length);
const str=new String("hello world");
const otherstring = str;
console.log(otherstring === str);

console.log(Math);
console.log(Math.abs(-36));
console.log(Math.PI);
console.log(Math.floor(256.636));// output is 256
console.log(Math.ceil(256.636));// output is 257
console.log(Math.round(256.636));// output is 257

console.log(Math.random());
 const max = 6;
 const min= 1;
 if (max>min) {
 console.log("this is max:");
     
 }
 console.log(Math.floor(Math.random()*(max-min+1))+min);
 console.log(Math.ceil(42.32221024));
 
 
const mydate = new Date();
console.log(mydate);// it will print 2025-12-22T05:20:56.135Z the current time and date .
console.log(mydate.toString());
