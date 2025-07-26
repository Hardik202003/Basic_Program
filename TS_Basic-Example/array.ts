let num : number[] = [1, 4, 6, 3, 9, 5, 8, 0, 7, 2];
let no : number[] = [35, 34, 86, 12, 91, 55, 80, 60, 47, 26];

let num2 : number[] = num.map(m => {return m * m });

let num3 : number[] = num.filter(m =>{return m % 2 ==0})

let num4 :number[] = num.concat(no);

let num5 : number[] = no.sort();

let num6 : boolean = no.includes(91);

let num7 : number[] = no.slice(0);

console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(num7);


