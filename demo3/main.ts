let numbers:number[];
numbers=[1,2,3,4,5,6];
let strings:string[];
strings=["alex","gosho","pesho","misho"];
strings.push("asd");
let booleans:boolean[];
booleans=[true,true,false,false];
let mixedArr:(number|string|boolean)[];
mixedArr=["alex",123,111];
let Tuple:[string,number]=["alex",123];
//////////////
let stringArr=['one','hey','Dave'];
let guitars=['Strat','Les Paul',5150];
let mixedData=['EVH',1984,true];
stringArr[0]='John';
stringArr.push('hey');
guitars[0]=1984
guitars.unshift('Jim')
let test= [];
let bands: string[]=[];
bands.push('Van Halen');
// Tuple
let myTuple: [string,number,boolean]=['Dave',42,true];
let mixed = ['John',1,false];
myTuple[1]=42;
//Objects
let myObj:object;
myObj = [];
console.log(typeof myObj);
myObj=bands;
myObj= {};
const exampleObj = {
    prop1:"Dave",
    prop2:true,
}
exampleObj.prop1="John";
interface Guitarist {
    name?:string,
    active:boolean,
    albums:(string|number)[]
}
let evh:Guitarist= {
    name:"Eddie",
    active:false,
    albums: [1984,5150,"OU812"]
}
let jp:Guitarist = {
    active:true,
    albums:['I','II',"IV"]
}
const greetGuitarist =(guitarist:Guitarist) => {
    if(guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`
    }
    return 'Hello'
}
console.log(greetGuitarist(jp));
//Enums
enum Grade {
    U=2,
    D,
    C,
    B,
    A
}
console.log(Grade.U);
