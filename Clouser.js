let score = 4

function one(){
    let score = 0
    console.log(score);
}

function two(){
    let score = 3
    console.log(score);
}

function three(){
    console.log(score);
}
// one()
// two()
// three()
// console.log(score);

function out(){
    let outv = "I am at 1"

    function inner(){
        let innerval ="I am at level 2"
        console.log(outv);
    }
    console.log(innerval);
    inner()
}

// out()

const myGobalval = 0

function fun(){
    const val1 =1;
    console.log(myGobalval);

    function innerfun(){
        const val2= 2
        console.log(val1,val2,myGobalval);
    }
     innerfun()
    function moreinner(){
        const val3 =8
        console.log(val1,val3,myGobalval,val2);
    }
    moreinner()
}

// fun()

//closure*************

function Out(){
    let outValue = "I am Out"

    function Inn(){
        console.log(outValue);
    }
    Inn()
}

// Out()

const errorMessge = "File not found"

setTimeout(function cal(){
       console.log(errorMessge);
},1000)


let pagecount = 0

const item = [2,23,4,5,6,7]

item.forEach(function iterator(item){
    pagecount++
    console.log(item);
})

console.log("No.",pagecount);