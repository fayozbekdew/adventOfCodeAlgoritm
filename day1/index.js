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
  //   console.log(result);
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
  console.log(result2);
});
