// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const array2 = [];
const array1 = array.forEach(person =>{
  array2.push(person.username + '!');
});
console.log('array2 ' +array2);
//Create an array using map that has all the usernames with a "? to each of the usernames
const array3  = array.map(person => person.username + '?');

console.log('array3 ' +array3);

//Filter the array to only include users who are on team: red
const array4 = array.filter(person => person.team === 'red' );
console.log('array4 ' + JSON.stringify(array4));
//Find out the total score of all users using reduce
const totalScore = array.reduce((total,person) => total + person.score,0);
console.log('totalScore ' + totalScore);
// (1), what is the value of i?
  //A: index 6
// (2), Make this map function pure:
  //A:  

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	return num * 2;
})
console.log('newArray ' + JSON.stringify(newArray));

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const newList = array.map(person => {
  person.items = person.items.map(item=>item+='!');
  return person
});
console.log('newList ' + JSON.stringify(newList));


const templ = `<div>${array2} <br> ${array3}</div>`;
window.addEventListener('load', (event) => {
  document.body.innerHTML = templ;
});