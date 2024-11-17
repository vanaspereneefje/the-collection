import data from "./data/collection.js";

document.addEventListener("DOMContentLoaded", () => {

const collection = data;

const articleId = localStorage.getItem("selectedArticleId");

let containerDiv = document.createElement("div");
document.querySelector("main").appendChild(containerDiv)
containerDiv.classList.add("container");

let title = document.createElement("h2");
containerDiv.appendChild(title);
let nameNode = document.createTextNode(collection[articleId].name);
title.appendChild(nameNode);
title.classList.add("title");

let picture = document.createElement("img");
picture.src = collection[articleId].picture;
containerDiv.appendChild(picture);
picture.classList.add("image");

let director = document.createElement("p");
containerDiv.appendChild(director);
let directorNode = document.createTextNode(collection[articleId].director);
director.appendChild(directorNode);
director.classList.add("director");

let release = document.createElement("p");
containerDiv.appendChild(release);
let releaseNode = document.createTextNode(collection[articleId].releaseYear);
director.classList.add("release");
release.appendChild(releaseNode);

let plotSummary = collection[articleId].plot;
let plotElement = document.createElement('div');
plotElement.innerHTML = plotSummary;
plotElement.classList.add("plot");
containerDiv.appendChild(plotElement);
});