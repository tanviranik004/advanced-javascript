const num = [1,2,3,4,5,6,7,8];

// const part =num.slice(2, 5)
// console.log(part);
const removed = num.splice(2,3,10,11);
console.log(removed);
console.log(num);
const together = num.join('ami');

console.log(together);
