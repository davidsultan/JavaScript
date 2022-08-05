// cookie: A small text file stored on your computer
//          used to remember information about the user 
//          saved in name=value pairs.

//console.log(navigator.cookieEnabled);

//document.cookie = "name=spongeBob; expires=Friday,30 December 2022 23:59:59; path=/";
//document.cookie = "age=25; expires=Friday,30 December 2020 23:59:59; path=/";
//console.log(document.cookie);

//setCookie("email", "shabbyworld@outlook.com", 365);

//console.log(document.cookie);

const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");
const deleteBtn = document.querySelector("#deleteBtn");

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
});
cookieBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName"); 
    lastText.value = getCookie("lastName"); 
});
deleteBtn.addEventListener("click", () => {
    deleteCookie("firstName");
    deleteCookie("lastName");
});

function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive*24*60*60*1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = name+"="+value+";"+ expires+"; path=/";

}
function deleteCookie(name){
    setCookie(name, null, null);
}
//deleteCookie("name");
//deleteCookie("email");
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;

    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length +1);
        }
    });
    return result;
}
//setCookie("firstName", "david", 365);
//setCookie("lastName", "king", 365);

//getCookie("firstName");
//getCookie("lastName");


