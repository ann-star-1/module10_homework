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