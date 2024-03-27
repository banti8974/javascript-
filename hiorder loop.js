// for of


//["","",""]
//[{},{},{}]

const arr=[1,2,88,33,4,5]

for(const num of arr){
   // console.log(num)
}

const greetings="hello world"
for(const greet of greetings){
   // console.log(`ach char is ${greet}`)
}


 //Maps

 const map= new Map()
 map.set('in',"india")
 map.set('usa',"united statee of america")
map.set('fr',"france")
map.set('in',"india")
//console.log(map)

for(const [key,value] of map){
    console.log(key,':-',value);
}
const myObject={
    'game1':'NES',
     'game2':'spiderman'
}
// for (const[key,value] of myObject){
//     console.log(key,':-' value);
// }
