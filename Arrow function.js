const user = {
    username: "bnati",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`); // Logs the welcome message with the username
        console.log(this); // Logs the value of 'this'
    }
}

// user.welcomeMessage(); // Logs: "bnati, welcome to the website" and then the 'user' object

// user.username = "sam"; // Changes the username to "sam"
// user.welcomeMessage(); // Logs: "sam, welcome to the website" and then the 'user' object
// console.log(this)


// function chai(){
//     let username="banti"
//     console.log(this.username);
// }
// chai()



// const chai=function(){
//     //let username="banti"
//     //     console.log(this.username)  
// }
// chai()


// const chai=()=>{
//     let username="banti"
//          console.log(this.username) 
// }
// chai()



// const addTwo=(num1,num2)=>{
//     return num1+ num2
// }
// console.log(addTwo(3,4))

//const addTwo=(num1,num2)=> num1+ num2
// const addTwo=(num1,num2)=> (num1+ num2)

const addTwo=(num1,num2)=> ({username: "banti"})
console.log(addTwo(3,4))