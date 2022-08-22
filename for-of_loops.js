//iterating over array with normal for loop 

const amounts = [61.00, 52.25, 112.99, 5.00]
let total = 0

// for (let i = 0; i < amounts.length; i++) {
//  total += amounts[i];
//}

//console.log('Order total is: ' + total)


// for..of loops example 

for (let amount of amounts) {
  total += amount;
}

console.log('Order total is:' + total)

/* In summary, the for..of loop is ...

A modern (newer) feature in JavaScript
Simpler than the regular for loop
But also less powerful than the regular for loop
Only really useful for going through an entire array from beginning to end
Not a solution to all our looping problems */


let hi = 'reverse'