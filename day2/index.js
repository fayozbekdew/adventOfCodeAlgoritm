const fs = require("fs");

fs.readFile("./data.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Faylni o'qishda xato:", err);
        return;
    }
    const lines = data.split("\n");    
    const datas = lines
    .map(line => line.split(/\s+/).map(Number))
    .filter(arr => arr.length > 0);


    function safeReport(reports){
        let count = 0
        for(let i=0; i<reports.length; i++){
                if(reports[i][0] > reports[i][1]){ // kamayish tartib 
                    if(decresingFn(reports[i])){
                        count++
                    }
                }else if(reports[i][0] < reports[i][1]){ // o'sish tartib
                    if(groweringFn(reports[i])){
                        count++
                    }
                }else{
                    continue
                }
        }
        return count
    }

    function decresingFn(arr) {
        return arr.slice(0, -1).every((val, i) => {
            const diff = val - arr[i + 1];
            return diff >= 1 && diff <= 3;
        });
    }

    function groweringFn(arr) {
        return arr.slice(0, -1).every((val, i) => {
            const diff = arr[i + 1] - val;
            return diff >= 1 && diff <= 3;
        });
    }
    // console.log(safeReport(datas))



    // Part 2
    function safeReport2(reports) {
        let count = 0;
        for (let i = 0; i < reports.length; i++) {
            if(reports[i][0] > reports[i][1]){ // kamayish tartib 
                if(decresingFn(reports[i])){
                    count++
                }
            }else if(reports[i][0] < reports[i][1]){ // o'sish tartib
                if(groweringFn(reports[i])){
                    count++
                }
            } else if (canBeSafeByRemovingOne(reports[i])) {
                count++;
            }
        }
        return count;
    }
    function isSafe(arr) {
        return arr.every((val, i, a) =>
            i === 0 || Math.abs(val - a[i - 1]) <= 3
        );
    }
    function canBeSafeByRemovingOne(arr) {
        let removed = false; // Olib tashlangan elementni tekshirish uchun flag
        for (let i = 0; i < arr.length; i++) {
            if (removed) break; // Birinchi element olib tashlangandan keyin to'xtatish
            const newArr = [...arr.slice(0, i), ...arr.slice(i + 1)];
            if (isSafe(newArr)) {
                removed = true; // Agar xavfsiz bo'lsa, flagni o'zgartiramiz
            }
        }
        return removed;
    }
    console.log(safeReport2(datas)); 

})

