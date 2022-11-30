//Difference between for of and for in
const arr = [1, 2, 3, 4, 5, 6];
const person = {
    name:'Anusha',
    course:'Full stack JS'
}
for(i of arr){
    console.log(arr[i])
}
// for(i in person){
//     console.log(person[i])
// }