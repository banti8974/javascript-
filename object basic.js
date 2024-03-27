//object creation
const mySym=Symbol("key1")




// object literals

const JsUser={
    name: "banti",
   "full name":"Banti Kumar",
    age:22,
    [mySym]:"mykey1",
    location: "bgp",
    email: "banti@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])


JsUser.email= "banti@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email="banti@microsoft.com"
//console.log(JsUser)


JsUser.greeting=function(){
    console.log(`hellow js user,${this.name}`)
}
console.log(JsUser.greeting())