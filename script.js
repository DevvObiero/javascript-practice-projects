/*let js ="amazing";
 
console.log("jonas");
console.log(1 + 2 + 56);

let firstName="Matilda";
let first="omondi";
console.log(firstName);*/

/*true;
console.log(true);
let javascriptIsFun="true";
console.log(javascriptIsFun);
console.log( typeof true)
console.log(typeof "Obiero");

javascriptIsFun= "yes";

console.log(  javascriptIsFun);

let year;
console.log(year);

year= new Date
console.log(year);
console.log(typeof null)
*/

/*  let age=18
age=19
console.log(age);

const birthyear=2005;
birthyear=2004;
*/
//console.log(birthyear);
/*var should be contanlty avoides */    
/*
var js = "amazing";
js="not amazing";*/



//math operatores 
/*
const now= 2037;
const agePaul = now - 2005;
const ageWife = now - 2008;
console.log(agePaul, ageWife);

console.log(agePaul*2,ageWife/10,2**3);
//2**3 just means 2 pwer 3

const firstName= "Paul";
const lastName= "Obiero";

console.log(firstName + " " + lastName);


//asignment opperators
let x= 10 + 9;
x+=10;//x is equal to x +10
x*=10;
x++;
x--;
console.log(x);

//comparison oerators

console.log(agePaul>ageWife);
console.log(ageWife>=18);

const isFullAge = ageWife >= 18;

console.log(now-1991>now-1888);

console.log(25-10-5);*/


/*
const firstName="Paul";
const job="Senior Software Engineer";
const birthYear= 2005;
const year= 2027;

const paul="I'm " + firstName + ',a ' + (year-birthYear)+" year old "+ job + "!";

console.log(paul);

const paulNew=`I'm ${firstName},a ${year-birthYear} year old ${job}!`;

console.log(paulNew);

console.log(`I can proudly say that I desereve everything I have right Now!`)

console.log(`He\n\
is\n\
who\n\
He\n\
is!`);

console.log(`He
is
who
He
is!`);*/
/*
const firstName="Charles";
const age=2;
const isOldEnough=age>=18;

if(isOldEnough){
console.log(`${firstName} is old enough to drive a car!🐱‍👤`)
}else{
const yearsLeft=18-age;
console.log(`${firstName} is too young to drive and should wait for another ${yearsLeft}🐷 `)
}


const birthYear=2005;
let centuryYear;
if(birthYear<=2000){
     century=20;
}else {
     century=21;
}

console.log(century);*/

/*
const inputYear="1991";
console.log(Number(inputYear),inputYear);
console.log(Number(inputYear)+18);
console.log(String("12"))

console.log('I am ' +23+' years old')
console.log('I am' + '23' +'years old')
console.log('23'/'10'/'3')
*/
//gues the output
/*
let n='1'+1;
n=n-1;
console.log(n);

let height;
if(height){
     console.log('YAYYYY! Height is defined');
}else{
     console.log('height is UNDEFINED')
}
*//*

//equality ===
const age=18;
if (age===18)console.log('you just became an adult╰(*°▽°*)╯')

//lose eawuality operator
18==18*/

/*
const favourite=Number(prompt("what's your favourite country"));
console.log(favourite);

if(favourite===25){
     console.log("nice!! 25 is a cool number")
}else if(favourite===9){
     console.log('Nice ! 9 is a coooool number')
}else{
     console.log('this is a really boring number.Try again!!! ')
}

if(favourite!==25){
     console.log('why not 25 ?')
}*/
// const hasDriverLincence=true;
// const hasGoodVision=true;

// console.log(hasDriverLincence&&hasGoodVision)
// console.log(hasDriverLincence||hasGoodVision)

// console.log(!hasDriverLincence||hasGoodVision)

// const shouldDrive=hasDriverLincence&&hasGoodVision;



// if(shouldDrive){
//      console.log('you should drive')
// }else{
//      console.log('someone else should drive for you');
// }

// const isTired=true;
// const hasDriverLincence=true;
// const hasGoodVision=true;

// console.log(hasDriverLincence&&hasGoodVision)
// console.log(hasDriverLincence||hasGoodVision)

// console.log(!hasDriverLincence||hasGoodVision)

// const shouldDrive=hasDriverLincence&&hasGoodVision&&!isTired;

// if(shouldDrive){
//      console.log('you should drive')
// }else{console.log('You should not drive')
// }

// const scoreDolphins=(96+108+89)/3;
// const scoreKoalas=(88+91+110)/3;
// console.log(scoreDolphins,scoreKoalas)

// if(scoreDolphins>scoreKoalas){console.log('Dolphins win!!🐱‍👤')
// }else if( scoreKoalas>scoreDolphins){
//      console.log('Koalas win!!🐨')
// }else if(scoreDolphins===scoreKoalas){
//      console.log('Its a tie🦥')
// }

//BONUS !
const scoreDolphins=(97+112+80)/3;
const scoreKoalas=(109+95+50)/3;


console.log(scoreDolphins,scoreKoalas)

if(scoreDolphins>scoreKoalas&&scoreDolphins>=100){console.log('Dolphins win!!🐱‍👤')
}else if( scoreKoalas>scoreDolphins&&scoreKoalas>=100){
     console.log('Koalas win!!🐨')
}else if(scoreDolphins===scoreKoalas&&scoreDolphins>=100&&scoreKoalas>=100)
    {console.log('Its a tie🦥')
}else{
     console.log('No one wins the trophy😫(Score of 100 not meet by any)')
}