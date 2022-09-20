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