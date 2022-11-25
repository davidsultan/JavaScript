
localStorage.setItem("Soner", "Bayburt");
console.log(localStorage.getItem("Soner"));

localStorage.removeItem("Soner");
console.log(localStorage.getItem("Soner"));



let user = {name: "Soner", isActive: true}
console.log(user);
localStorage.setItem("userInfo", JSON.stringify(user));

let userInfo = localStorage.getItem('userInfo');
userInfo = JSON.parse(userInfo);
console.log(userInfo);



localStorage.clear();
