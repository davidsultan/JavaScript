
// const ul = document.querySelector('ul');
// const li = document.querySelector('li');

/************************* Adding Elements **************************/

//ul.append(li);

/************************* Modifying the text **********************/

//li.innerText = 'Soner';

/**************** Modifying Attributes & Classes ********************/

// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');

// title = document.querySelector('#main-heading');
// console.log(title.getAttribute("id"));


// li.classList.add("list-items");
// li.classList.remove("list-items");

// console.log(li.classList.contains('list-items'));

/********************* Remove Elements ****************************/

// li.remove();// removes the last li element





/************************ DOM Manipulation *************************/

/************************ Traverse the DOM *************************/

/************************* Parent Node Traversal *******************/

// console.log(ul.parentNode);
// console.log(ul.parentElement);
// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;

// console.log(html.parentNode);
// console.log(html.parentElement);

/********************** Child Node Traversel ************************/

// let u1 = document.querySelector("ul");

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = "blue";

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);


/************************* Child Node Traversel **********************/

let ul = document.querySelector('ul');
const div = document.querySelector('div');

console.log(div.childNodes);

console.log(ul.previousSibling);
console.log(ul.nextSibling);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);