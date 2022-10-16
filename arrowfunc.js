// const isEven = number=>{
//     return number%2===0;
// }
// console.log(isEven(6));
/*const app = ()=>{
    const myFunc = ()=>{
        console.log("hello my func");
    }
    const addTwo = (num1,num2)=>{
        return num1+num2;

    }
    const mul = (num1,num2)=>{
        return num1*num2;
    }
    console.log("inside app")
    myFunc();
    console.log(addTwo(2,5));
}
app();*/
/*using rest parameter
function myFunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is`,c);
}
myFunc(2,3,4,5,6,7,8);*/

/*function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total+number;
    }
    return total;
}
const ans = addAll(1,2,3,4,5,6);
console.log(ans);*/

//using parameter
/*const person = {
    firstName: "dnyaneshwari",
    gender: "female",
    age: 25,
}
function printDetail(firstName,gender,age){
    console.log(firstName);
    console.log(gender);
}
printDetail(person);*/
//function returning function
/*function myFunc(){
    function hello(){
        return "hello world";
    }
    return hello;
}
const ans = myFunc();
console.log(ans());*/
//using forEach
// const numbers = [4,2,5,8]
// numbers.forEach(function(number, index){
//     console.log(`index is ${index} number is ${number}`)
// });
// const users = [
//     {firstName: "dnyaneshwari", age: 24, gender: "female"},
//     {firstName: "mayur", age: 25, gender: "male"},
//     {firstName: "archana", age: 26, gender: "female"}
// ]
// users.forEach(function(user){
//     console.log(user.firstName);
// })
//using map method array
/*const number = [4,3,2,5,6]
const square = function(number){
    return number * number;
}
const squareNumber = number.map(square);
console.log(squareNumber);*/
//using map method object 
/*const person = [
    {firstName:"Dnyaneshwari", age:24, gender:"female" },
    {firstName:"Archana", age:26, gender:"female" },
    {firstName:"Mayur", age:25, gender:"male" },
    {firstName:"Harish", age:22, gender:"male" },
]
const users = person.map((person)=>{
    return person.gender;
});
console.log(users);*/

//using filter method
/*const numbers = [1,2,3,4,5,6,7,8,9,10,11,14,18,15]

const sum = numbers.reduce((total1, currentValue)=>{
    return total1 + currentValue;
},133)
console.log(sum);

const uesrCart = [
    {productNumber: 1, productName:"mobile", price: 12000},
    {productNumber: 2, productName:"laptop", price: 34000},
    {productNumber: 3, productName:"frize", price: 22000},
]
const totalSum = uesrCart.reduce((totalprice ,currentProduct)=>{
  return totalprice + currentProduct.price;
} ,0)
console.log(totalSum);*/
/*const user = [
    {productId: 1, productName: "p1", price:1300},
    {productId: 2, productName: "p2", price:200},
    {productId: 3, productName: "p3", price:3000},
    {productId: 4, productName: "p4", price:2500},
]
const lowToHigh = products.slice(0).sort((a,b)=>{
  return a.price - b.price;
})
console.log(lowToHigh);*/
//using every method
/*const number = [2,4,6,8,9,10]
const ans  = number.every((number)=>{
   return number%2===0;
})
console.log(ans);*/
/*const array = ["dog","cat","lion","hello"]
//function isLength(string){
   // return string.length === 3;

 const answer = array.find((string)=> string.length === 3);

 console.log(answer);*/
/*const myArr = [1,2,35,8,7]
//fanction(myArr){
 //   return number%2===0;
//}
  myArr.splice(1,0,4);
console.log(myArr);*/
/*const firstName = "Dnyaneshwari";
for(let char of firstName){
    console.log(char);
}*/
// const number = [1,3,4,5,6,7,8];
// let diff = 0;
// for(let i = 0; i<number.length; i++){
//     diff = diff - number[i] ;
// }
// console.log(sum);

const ans = diff(25,2);
function diff(){
    return Math.pow(a, b);
}

console.log(ans);

























































