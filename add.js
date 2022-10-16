//var arr = [1,3,5,6,7,9,10]
//for(var i=0;i<arr.length;i++){
  //  for(var j=0;j<arr.length;j++){
    //    console.log(arr[j]-arr[i]);
    //}
//}
//var arr = [1,2,3,4,5,6,4,2,8,10,8,7,6]
//var lar = arr[0];
//for(var i=0;i<arr.length;i++){
  //  if(arr[i]>= lar){
    //    lar = arr[i];
    //}

//console.log(lar)
//arr = [1,2,3,4,5,6,7]
//let num = 1;
//while(num<=7){
  //  console.log(num);
    //num++;
//}
 /*arr = [1,2,3,4,5,6,7,8,9,10];
var i=0;
while(i<=10){
console.log(arr[i*2])
i++
}*/
//arr = [1,2,3,4,5,6,7,8,9,10];
//var minimumNum = 0;
//var minimumIndex = 0;
//for(var i=0; i<arr.length; i++){
  //if(arr[i]>minimumNum){
  //  minimumNum = arr[i];
    //minimumIndex = i;

  //}
//}
//console.log(minimumNum,minimumIndex);

//var x = 5;
//for(var i=0;i<5;i++){
//  console.log(x)
//}
  
 // {
   // var x= 5;
    //let a =10;
  //}
  //console.log(x);
  //console.log(a);
//const divArr = [1,2,3,4,6,7,8,9,11,15];
//var isDivisible = false;
//for(var i=0;i<divArr.length;i++){
//  if(divArr[i]%5 == 0){
 //   isDivisible = true;
 // } 
//}
//if(isDivisible){
//  console.log("Array has number divisible by 5");
//}else{
//  console.log("Array does not has number divisible by 5");
//}
//const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//for (var i = 0; i < arr.length; i++) {
  //if (arr % 2 == 0) {
  //  console.log(arr)
  //
  /*var x =7;
 switch(x) {
  case 0 :"sunday";
  break;
  case 1 :"monday"; 

  break;
  case 2 :
      text = "tuesday";
  break;
  case 3 :
    text = "wensday";
  break;
  case 4 :
    text = "thusday";
  break;
  case 5 :
    text = "friday";
  break;
  case 6 :
    text = "saturday";
  break;
 default :
 text = "the day is not available";
  break;
  
 }
console.log(text);*/

 /*function findTarget(array, target){
  for(let i=0;i<array.length;i++){
    if(array[i]===target){
      return i;
    }
    return -1;
  }
 }
 const myArray = [1,3,8,90]
 const ans = findTarget(myArray, 9);
 console.log(ans);*/

//var str = "Dnyaneshwari is the best student in the board infinity";
/*function CreateUser(firstName,lastName,email,age,address){
  const user = {};
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
  return this;
}
  CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
  };
  CreateUser.prototype.is18 = function(){
    return this.age >= 18;
  }
const user1 = new CreateUser("dnyanu","gaikwad", "gaikwadd1061997@gmail.com", 18, "at post-uswad tel-chandwad dist- nashik")
for(let key in user1){
console.log(key);
}*/
/*obj1 = {
  key1: "value1",
  key2: "value2"
}
const obj2 = Object.create(obj1);
obj2.key3 = "value3";
console.log(obj2.__proto__);*/

 /*const isOdd = numbers=>{
  return numbers%2!==0 ; 
 }
 console.log(isOdd(6));*/


 /*let x = 1;
 switch (x) {
   case 0:
     text = "Off";
     break;
   case 1:   
     text = "On";
     break;
   default:
     text = "No value found";
 }

console.log(text);*/

/*const cars = ["BMW", "volvo", "saab"]
let car = "";
for(let x of cars){
  car = car + x + " ";
}
console.log(car);*/



/*firstButton.addEventListener("click", function(){
  console.log("you clicked me");
})*/

function Student(firstName,lastName,age,cls){
  this.firstName = firstName;
  this. lastName = lastName;
  this.age = age;
  this.class = cls;
}

var person1 = new Student("dnyaneshwari","gaikwad",22,8);
person1.nationality = "indian"
console.log(person1)





