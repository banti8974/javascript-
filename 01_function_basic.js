function sayMyName(){

    console.log("b")
    console.log("a")
    console.log("n")
    console.log("t")
    console.log("i")
}
//sayMyName()
// function addTwoNumbers(number1,number2){
//    console.log(number1+number2)
// }

// const result=addTwoNumbers(3,5)
// console.log("result:",result)

function addTwoNumbers(number1,number2){
    // let  result=number1+number2
    // return result
    return number1+number2
 }
 
 const result=addTwoNumbers(3,5)
 //console.log("result:",result)


 function loginUserMessage(username="sam"){
if(username===undefined){
    console.log("please enter a username")
    return
}

    return `${username} just logged in`
 }
//console.log( loginUserMessage("banti"))
//console.log(loginUserMessage())

function calculateCartprice(val1,val2,...num1){
    return num1

}

//console.log( calculateCartprice(200,400,500,2000))


const user ={
    username:"banti",
    price:199
}
function handleObject(anyobject){
    console.log(`username is $(anyobject.username) and is $ {anyobject.price} `)
}
handleObject(user)