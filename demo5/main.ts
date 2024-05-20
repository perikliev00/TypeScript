type One=string;
type Two=string | number;
type Three= "Hello"

// convert to more or less specific
let a: One = 'hello';
let b=a as Two;
let c=a as Three;
let d= <One>'wolrd';
let e =<string | number>'world';
const addOrCocat(a:number, b:number, c: 'add' | 'concat'): number | string => {
    if(c ==='add') {
        return a+b;
    }
    return '' + a+b;
}
let myVal: string = addOrConcat(2,2, 'concat')as string;
let nextVal: number = addOrCocat(2,2, 'concat')as number;
(10 as unknown) as string;
//The DOM
const img = document.querySelector('img')!;
const myImg= document.getElementById('#img') as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('#img');
img.src
myImg.src