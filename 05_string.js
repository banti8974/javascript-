const name="banti"
const repoCount=50

//console.log(name+ repoCount+" value")

const gameName = new String('bantikumar');

// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('t'))
const newString=gameName.substring(0,4)
// console.log(newString)
const anotherString = gameName.slice(-2, 4);
console.log(anotherString); // Logs the sliced substring
const newStringone ="  banti   "
console.log(newStringone);
console.log(newStringone.trim());


const url="https://www.youtube.com/watch?v=fozwNnFunlo&%&list=%20PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=11"
console.log(url.replace('%20','-'))
console.log(url.includes('sunder'))
