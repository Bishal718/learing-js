console.log("hello this is printing statement...");
const userAge = 18;
let userName = "bishal samanta";
var userEmail = "bishal@example.com";
let userState;
console.log("userAge:"+ userAge);
console.log("userName:" + userName);
console.log("userEmail:" + userEmail);
console.log("userState:" + userState);
// userAge= 20;
if (userAge == 20){
    console.log("User is 20 years old.");
}else{
    console.log("the age is :" + userAge);
    
}
userName="Bishal Samanta";
userEmail= "bishal.updated@example.com";
console.log("userName:" + userName);
console.log("userEmail:" + userEmail);
console.log("userState:" + userState);

console.table([userName, userEmail,userAge,userState]);
//var is not used because it has no idea of scope , and it has no conttrol of log scope().
/*prefer not to use Var beacuse 
of issue oin block scope and functional scope  */ 