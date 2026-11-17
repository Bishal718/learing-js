const name= "bishal is learning the js now ........"
const repoCount = 2
console.log(`${name.toUpperCase()} has ${repoCount} repositories`) // this is more usable rather than this => console.log( name + " has " + repoCount + " repositories" )

const gameName = new String("bishal--learning js")
// console.log(gameName[1]);
console.log(gameName.length);
// console.log(gameName.__proto__ )
console.log(gameName.toUpperCase());
// console.log(gameName.charAt(1));
console.log(gameName.indexOf('l'));
console.log(gameName.trim());
console.log(gameName.trimStart());
console.log(gameName.trimEnd());
const newString = gameName.substring(0,6)
console.log(newString);

const anotherString = gameName.slice(-6, -1)
console.log(anotherString);