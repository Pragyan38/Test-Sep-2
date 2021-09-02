/* 
// From get
const myTitle = document.getElementsByTagName("h1");
console.log(myTitle);
myTitle[1].innerHTML = "Heading one is Change";
myTitle[1].style.color = "blue";
myTitle[1].style.backgroundColor = "yellow";

const title = document.getElementsByClassName("my-title");
title[3].innerHTML = "Heading two is Change";
title[3].style.color = "white";
title[3].style.backgroundColor = "red";

const ourTitile = document.getElementById("three");
ourTitile.style.color = "yellow";
ourTitile.style.backgroundColor = "black"; 
*/




/* 
// From queryselector
const heading = document.querySelector("#three");
console.log(heading);
heading.innerHTML = "This is change of Heading Three"
heading.addEventListener("click", function () {
    alert("clicked");
});

const myImg = document.querySelector("img");
myImg.alt="Calculating tax"

// const myBtn =document.querySelector("button");
// myBtn.addEventListener("click", function(){
//     myImg.src="../img/windowclean.png"
// });


// From queryselectorAll
const head = document.querySelectorAll(".my-title");
console.log(head);
head[1].innerHTML = "This is change of Heading Two";
head[1].style.color = "red";
head[1].style.backgroundColor = "yellow"; 
*/

/* const iBtn = document.querySelector("button");

const inHead = document.querySelector(".my-title");

iBtn.addEventListener("mouseover", function () {
    inHead.style.color="red";
});

iBtn.addEventListener("mouseout", function () {
    inHead.style.color="black";
}); */




// js page

const myTitled = document.querySelectorAll(".titled");

const dropMenu = document.querySelectorAll(".wrapper-card ul");


for (let i = 0; i < myTitled.length; i++) {
    myTitled[i].addEventListener("click", function () {
        const myDropStyle = getComputedStyle(dropMenu[i]);
        if (myDropStyle.display == "none") {
            dropMenu[i].style.display = "block";
        } else {
            dropMenu[i].style.display = "none";
        }
    });
}

const myInput = document.querySelector(".input-here");
const myBtn = document.querySelector(".btn-one");
const myWord = document.querySelector(".your-words")

myBtn.addEventListener("click", function (event) {
    event.preventDefault();
    myWord.innerHTML = myInput.value;
});