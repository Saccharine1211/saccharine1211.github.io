// let myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// document.querySelector("html").onclick = function () {
//     // alert("Ouch! Stop poking me!");
// };

// let myImage = document.querySelector("img");

// myImage.onclick = function () {
//     let mySrc = myImage.getAttribute("src");
//     if (mySrc === "images/firefox-icon.png") {
//         myImage.setAttribute("src", "images/firefox2.png");
//     } else {
//         myImage.setAttribute("src", "images/firefox-icon.png");
//     }
// };



let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// 유져 이름 저장
function setUserName() {
    let myName = prompt("Please enter your name.");
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.innerHTML = "Mozilla is cool, " + myName;
    }
}

// 유져 이름 저장 x => 이름 입력
// 저장 o => h1 에 표시
setUserName();

myButton.onclick = function () {
    setUserName();
};

