const numbers: number[]= [1,2,3,4,5];
const evens: number[] = numbers.filter(num=> num% 2 ===0);
console.log("Even number:", evens);
const squares: number[] = numbers.map(num=>num **2);
console.log("Squares:",squares);
const sum:number =numbers.reduce((acc,curr) => acc+curr, 0);
console.log("Sum:",sum);