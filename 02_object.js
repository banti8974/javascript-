//const tinderUser=new Object()
const tinderUser={}

 tinderUser.id="123ans"
 tinderUser.name="banti"
 tinderUser.IsLogged=false

//console.log(tinderUser);

const regularUser={

    email: "banti@gmail.com",
    fullname:{
        userfullname:{
            firstname:"banti",
            lastname: "kuamr"
,
        }
    }
}

//console.log(regularUser.fullname?.userfullname.firstname)

const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}
//const obj3={obj1,obj2}

//const obj3=Object.assign({},obj1,obj2,obj3)
const obj3={...obj1,...obj2}
//console.log (obj3)


//user[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
