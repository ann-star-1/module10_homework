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