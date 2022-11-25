

// localStorageCounter

const arttır = document.querySelector("#arttır");
const azalt = document.querySelector("#azalt");
const text = document.querySelector("#text");

let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0;



text.innerHTML = counter;

azalt.addEventListener('click', clickEvent);
arttır.addEventListener('click', clickEvent);

function clickEvent() {
    this.id == "arttır" ? counter +=1 : counter -=1;
    localStorage.setItem('counter', counter);
    text.innerHTML = counter;
}
