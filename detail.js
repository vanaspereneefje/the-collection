import data from "./data/collection.js";

document.addEventListener("DOMContentLoaded", () => {

const collection = data;

const articleId = localStorage.getItem("selectedArticleId");

let containerDiv = document.createElement("div");
document.querySelector("main").appendChild(containerDiv)
containerDiv.classList.add("container");

let picture = document.createElement("img");
picture.src = collection[articleId].picture;
containerDiv.appendChild(picture);
picture.classList.add("image");
picture.style="width:100%";

let title = document.createElement("h2");
containerDiv.appendChild(title);
let nameNode = document.createTextNode(collection[articleId].name);
title.appendChild(nameNode);
title.classList.add("card-title");

let director = document.createElement("p");
containerDiv.appendChild(director);
let directorNode = document.createTextNode(collection[articleId].director);
director.appendChild(directorNode);
director.classList.add("card-director");

let release = document.createElement("p");
containerDiv.appendChild(release);
let releaseNode = document.createTextNode(collection[articleId].releaseYear);
release.appendChild(releaseNode);

let summary = document.createElement("p");
containerDiv.appendChild(summary);
let summaryNode = document.createTextNode(collection[articleId].summary);
summary.appendChild(summaryNode);
summary.classList.add("text");
});