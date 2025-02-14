/*Arrays are JavaScript’s way of making lists.
Arrays can store any data types (including strings, numbers, and booleans).
Like lists, arrays are ordered, meaning each item has a numbered position.
*/
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn Kubernetes'];

const hobbies = ['your MOM', 'Building things', 'Fixing things'];

/*access each element in an array using the index*/

const listitem =  hobbies [0];

let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

/*Once you have access to an element in an array, you can update its value.*/

seasons = ['Winter'];

/*can declare variables with both the let and const keywords. Variables declared with let can be reassigned*/

let condiments = ['ketchup', 'mayo', 'relish'] ;

condiments = ['mayo'] ;

let untensils = ['Fork', 'Spoon', 'Knife'];

untensils = ['spork'];

let chores = [];

/*One method, .push() allows us to add items to the end of an array.*/

chores.push('dishes', 'laundry');

/*.pop(), removes the last item of an array*/

chores.pop();

const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop();
