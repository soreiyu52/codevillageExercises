const starOne = document.getElementsByTagName('a');
console.log(starOne[0].textContent)

const sectionTodo = document.getElementById('todo');
const starTwo = sectionTodo.getElementsByTagName('h1');
console.log(starTwo[0].textContent)

const classList = sectionTodo.getElementsByClassName('list');
const starThree = classList[0].getElementsByTagName('li');
console.log(starThree[1].textContent)



