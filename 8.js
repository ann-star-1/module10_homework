let myMap = new Map();
myMap.set(1,'Ivan');
myMap.set(2,'Andrey');
myMap.set(3,'Vicktor');
for (let [key, value] of myMap) {
  console.log(`Ключ - ${key} ,значение - ${value}`);
}
