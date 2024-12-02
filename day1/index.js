const fs = require("fs");
// .txt faylni o'qish
fs.readFile("adventofcode.com_2024_day_1_input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Faylni o'qishda xato:", err);
    return;
  }

  // Har bir qatordagi ikki sonni ajratish
  const lines = data.split("\n");
  const array1 = [];
  const array2 = [];

  lines.forEach((line) => {
    const numbers = line.split(/\s+/); // Bo'sh joylar orqali ajratish
    if (numbers.length === 2) {
      array1.push(parseInt(numbers[0])); // Birinchi sonni array1 ga qo'shish
      array2.push(parseInt(numbers[1])); // Ikkinchi sonni array2 ga qo'shish
    }
  });

  function christamas() {
    let total = 0;
    array1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);
    for (let i = 0; i < array1.length; i++) {
      total += Math.abs(array1[i] * array2[i]);
    }
    return total;
  }
  const result = christamas(array1, array2);
    // console.log(result);
  function christamas2(array1, array2) {
    let total = 0;
    let map = new Map();
    array1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);
    for (let num of array2) {
      if (map.has(num)) {
        map.set(num, map.get(num) + 1); 
      } else {
        map.set(num, 1);
      }
    }
    for (let i = 0; i < array1.length; i++) {
      if (map.has(array1[i])) {
        total += Math.abs(array1[i] * map.get(array1[i]));
      } else {
        total += Math.abs(array1[i] * 0);
      }
    }
    return total;
  }
  const result2 = christamas2(array1, array2);
//   console.log(result2);

function secondQuestion(array1, array2) {
    let total = 0;
    for (let i = 0; i < array1.length; i++) {
      let count = 0;
      for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
          ++count;
          if (array2.length - 1 === j) {   // arr2.length-1 = 5 == 0
            total += Math.abs(array1[i] * count);
            break;
          } else {
            continue;
          }
        } else if (array2.length - 1 === j && count !== 0) { // 5 == 1
          total += Math.abs(array1[i] * count);
          break;
        } else if (array2.length - 1 === j && count === 0) {  // 5 
          total += Math.abs(array1[i] * count);
        }
      }
    }
    return total;
  }
//   console.log(secondQuestion([3, 4, 2, 1, 3, 3], [3, 4, 5, 3, 9, 3]));
});




let arr = [3,4,2,1,5];


function quickSort(arr) {
    if(arr.length <= 1){
        return arr
    }
    let left = []
    let right = []
    let pivot = arr[Math.floor(Math.random() * arr.length-1)]
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > pivot){
            right.push(arr[i])
        }else if(arr[i] < pivot){
            left.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
// console.log(quickSort(arr))

function findUniqueValue(arr1, arr2){
    let set = new Set(arr2)
    let result = []
    for(let num of arr1){
         if(!set.has(num)){
             result.push(num)
         }
      }
      return result
    }
    
    console.log(findUniqueValue([1,2,3], [])) // [1,2,3]
    console.log(findUniqueValue([1,2,3], [1,2])) // [3]
    console.log(findUniqueValue([1,2], [1,2,3])) // []
