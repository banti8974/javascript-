// types of data type
//1 primitive
// 7types: string,Number,Boolean,null ,undefined,symbol,BigInt

const score=100
const scoreValue=100.3
 constisLoggedIn=false
 const outsideTemp=null 
 let userEmail;
 const id=Symbol('123')
 const anotherId=Symbol('123')
 //console.log(id==anotherId)

const bigNumber=34524874216n


//2 Referance(non primitive)
// Array,Object,Function

const heros=["shaktiman","naagraj","don"]
 let myObj= {
    nsme: "banti",
    age: 22,
}

const myFunction=function(){
console.log("hello world")
}
//console.log(typeof anotheId)



//++++++++++++++++++++++++
//stack(primitive), heap(non-primitive)

let myYoutubename="banti"
let anothername=myYoutubename
anothername=" kuamar"
console.log(myYoutubename) 
console.log(anothername)

let userOne={
    email:"bantik.com",
    upi:"user@ybl"
}
let userTwo=userOne
userTwo.email="bnatijlk.com"
console.log(userOne.email)
console.log(userTwo.email)
