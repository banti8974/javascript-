
var c=300
let a=300

if(true){
    let a=10
    const b=20
  // console.log ("INNER:",a)
}



//console.log(a)
//console.log(b)
//console.log(c)

function one(){

    const username="banti"
     
    function two(){
        const website="youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}
//one()

if(true){
    const username="banti"
    if(username==="banti"){
        const website=" youtube"
       // console.log(username+website)
    }
    //console.log(website) //error dega kyu k scope k bhar acces nahi hota hai
}
//console.log(username)



// ++++++++++++++++++  interesting +++++++++++++


function addone(num){
    return num +1
}
console.log(addone(5))

const addTwo= function(num){
    return num+2
}
addTwo(5)