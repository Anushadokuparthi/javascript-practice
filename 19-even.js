//19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

const num = 23;
const isEven = num%2 ? 'not an even' : 'an even';
console.log(`${num} is ${isEven} number`)