// let name = "gopal   "
// name.lenght()

let myHero = ["thor" , "superman"]
let dcHero = ["batman" , "flash" ,"superman"]

let heropower = {
    thor:"hammer",
    superman: "fly",

     function(){
        console.log(this.superman);
    }
}

Object.prototype.gopal = function(){
    console.log(`gopal is present in all the place`);
}

console.log(myHero.gopal());
console.log(heropower.gopal());


Array.prototype.darsh = function(){
    console.log(`Darsh is present `);

}
console.log(myHero.darsh());
// console.log(heropower.darsh());

//inheritance++****************

const user ={
    name:"top name",
    email:"top@gmail.com"
}

const Techer = {
    makevideo : true

}
const TechingSupport = {
    isAvailable : false
}
const TAAssistant = {
    makeAssignment: "JS Assignment",
    fullTime : true,
    __proto__: TechingSupport
}


console.log(TAAssistant.isAvailable);
// console.log(TAAssistant.makeAssignment);

// // Techer.__proto__ = user

let a =Object.setPrototypeOf(TechingSupport,Techer)

console.log(a.isAvailable);

String.prototype.truelength = function()
{
    console.log(this.length);
}

"ggopa   ".truelength()

