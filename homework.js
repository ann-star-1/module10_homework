const a = prompt('Введите число');
const b = +a;
if(typeof b == "number" && !isNaN(b)){
  if(b==0) {
    console.log('ноль')
  } else if (b%2==0){
    console.log('четное') 
  } else{
    console.log('нечетное')    
  }
} else{
    console.log('«Упс, кажется, вы ошиблись»')  
}
//Задание 2
let y = true;
if(typeof y != "number"){
  if(typeof y == "string"){
    console.log('строка')
  } else{
    console.log('логическое') 
  } 
} else{
    console.log('число')
}
//Задание 3
function reverseString(str){
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}
console.log(reverseString("hello"));
//Задание 4
let min=0;
let max=101;
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
console.log(getRandomInt(min, max));

//Задание 5
let arr = [1,2,3,4,5,6];
console.log(arr.length);
let result = arr.map(function(item, index, array) {

  return item

});
console.log(result);
//Задание 6
let arr = [1,2,1,1,1,1];
let result = true;
for (let i = 0; i < arr.length - 1; i++){
  for(let j = i + 1; j < arr.length; j++){
    if(arr[i] === arr[j]){
      result = true;
    } else {
      result = false;
      j = arr.length;
      i = arr.length;
    }
    
  }
}
console.log(result)
//Задание 7
let arr = ["i",8,7,10,3,0];
let sumEven = 0;
let sumOdd = 0;
let sumZero = 0;
let sumNotANumber = 0;
for(let i=0;i<arr.length;i++){
  if(typeof(arr[i]) != "number"){
    sumNotANumber = sumNotANumber +1; }
 else if(arr[i] === 0){
        sumZero = sumZero + 1;
  }
    else if (arr[i]%2 === 0){
        sumEven = sumEven + 1;
    }
      else {
      sumOdd = sumOdd + 1;
      }
}

console.log(sumEven)
console.log(sumOdd)
console.log(sumZero)
console.log(sumNotANumber)
//Задание 8
let myMap = new Map();
myMap.set(1,'Ivan');
myMap.set(2,'Andrey');
myMap.set(3,'Vicktor');
for (let [key, value] of myMap) {
  console.log(`Ключ - ${key} ,значение - ${value}`);
}
