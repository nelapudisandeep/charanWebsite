const { response } = require("express");

const main = document.querySelector("main");
function createSection(data){
    let section = document.createElement("section");
    section.setAttribute("class","question section");
    section.textContent = data;
    main.appendChild(section);
}

createSection("good");

function getData(){
    fetch("/getData")
        .then(response=>response.json())
        .then(data=>console.log(data));
}

getData();


