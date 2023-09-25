let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
console.log(holdCabinet1.concat(holdCabinet2));
console.log(holdCabinet1);
// does not alter the original arrays!!


//2) Print a slice of two elements from each array. Does slice alter the original arrays?
console.log(holdCabinet1.splice(0, 3));
console.log(holdCabinet2.splice(2, 4));
console.log(holdCabinet1);
// yes slice alters the original array.


//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];
holdCabinet1.reverse();
holdCabinet2.sort();
console.log(holdCabinet1);
console.log(holdCabinet2);

// yes reverse() and sort() do alter the original arrays. They differ in that reverse() seems to just flip the order (first is now last, last is first, etc)
// and sort() is orgaizing them by numbers first then alphabetically second.