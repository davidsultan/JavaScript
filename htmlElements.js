// HTML elements by using js
// h1.innerHTML (vulnarable to XSS attacks)
// h1.innerText (better)

const h1 = document.createElement("h1");
const underline = document.createElement("u");
underline.innerText = "Soner";
h1.append(underline);
document.body.append(h1);

const h2 = document.createElement("h2");
const italic = document.createElement("i");
italic.innerText = "Soner";
h2.append(italic);
document.body.append(h2);

const p = document.createElement("p");
const bold = document.createElement("b");
bold.innerText = "Soner";
p.append(bold);
document.body.append(p);