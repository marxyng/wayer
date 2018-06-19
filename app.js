var firstName= "Marx";
const numberOfStates= 52;
var addNumbers= 5+4;



}
if(charCodeAt(0)>76){
alert("Back of the line!")

}else {

    alert("Next!")
}


function sayHello(){
    alert("HelloWorld!");

}


sayHello();

checkAge(name, age){
    if(age<21){
        alert("Sorry "+name+ ",you aren't old enough to view this page!");
    }
}

let charles = {
name:"Charles",
age:21
};

let abby= {
    name:"Abby",
    age:27
};

let james = {
    name:"James",
    age: 18
};

let john = {
    name:"John",
    age:17
};

checkAge(charles.name, charles.age);
checkAge(abby.name, abby.age);
checkAge(james.name, james.age);
checkAge(john.name, john.age);

//step 11
let veggies= ["sweet potatoes", "greens", "cabbage"];

//step 12
for(let i =0; i<veggies.length; i++){
    console.log(veggies[i]);
}

//step 14
let friends = [
    {
        name: "James",
        age:26
    },
{
    name: "Chris",
    age:20
},
{
 name:"Peter",
 age: 21

},

{
    name:"Tony",
    age:22
},

{
    name: "Winston",
    age:27

}
];

//step 14
for(let i = 0; i<friends.length; i++){
    checkAge(friends[i].name, friends[i].age);
}

//step 15 getlength function
function getLength(string) {
    return string.length;


}



//step 16 call function
let length=getLength("Hello World");

//step 17

if(length % 2==0){
    console.log("The world is nice and even!");

}else{
    console.log("The world is an odd place!")

}














