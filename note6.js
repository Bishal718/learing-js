// memory => stack(used by primitive data types) and heap (used by non-primitive data types)
let myName = "bishal"
let anotherName = myName
anotherName = "Bishal"

console.log(myName)
console.log(anotherName)    

let userOne = {
    userEmail: "user@example.com",
    upiId: "user@ybl"
}
let userTwo = userOne

console.log(userOne)
console.log(userTwo)

console.log(userOne === userTwo)

userTwo.userEmail= "bishal@gmail.com"

console.log(userOne)
console.log(userTwo)