/* 17. Create a human readable time format using the Date time object
    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm */

let now = new Date();
let year = now.getFullYear();
let month = ("0" + (now.getMonth() + 1)).slice(-2);
let day = ("0" + now.getDay()).slice(-2);
let hh = now.getHours();
let mm = now.getMinutes()
// now.getMonth
console.log(`${year}-${month}-${day} ${hh}:${mm}`);
console.log(`${day}-${month}-${year} ${hh}:${mm}`);
console.log(`${day}/${month}/${year} ${hh}:${mm}`);
