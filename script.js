import data from "./data/collection.js";

document.addEventListener("DOMContentLoaded", () => {

const collection = data;

const cardDiv = document.createElement("div");
document.querySelector("main").appendChild(cardDiv);
cardDiv.classList.add("card");

collection.forEach((element) => {
    //add containerdiv for every card
    let containerDiv = document.createElement("div");
    document.querySelector(".card").appendChild(containerDiv);
    containerDiv.classList.add("container");

    //add picture for every year
    let picture = document.createElement("img");
    picture.src = element.picture;
    containerDiv.appendChild(picture);
    picture.classList.add("image");
    picture.style="width:100%";

    //add title for every card
    let title = document.createElement("h2");
    containerDiv.appendChild(title);
    let nameNode = document.createTextNode(element.name);
    title.appendChild(nameNode);
    title.classList.add("card-title");
    
    //add director for every card
    let director = document.createElement("p");
    containerDiv.appendChild(director);
    let directorNode = document.createTextNode(element.director);
    director.appendChild(directorNode);
    director.classList.add("card-director");
    
    //add release year for every card
    let release = document.createElement("p");
    containerDiv.appendChild(release);
    let releaseNode = document.createTextNode(element.releaseYear);
    release.appendChild(releaseNode);

    //add summary for every year
    let summary = document.createElement("p");
    containerDiv.appendChild(summary);
    let summaryNode = document.createTextNode(element.summary);
    summary.appendChild(summaryNode);
    summary.classList.add("text");

    //add div for buttons
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("button-div");
    containerDiv.appendChild(buttonDiv);

    //add link for every year
    let link = document.createElement("a");
    let button = document.createElement("button");
    buttonDiv.appendChild(link);
    link.appendChild(button);
    let linkNode = document.createTextNode("link");
    button.appendChild(linkNode);
    link.href = element.link;
    link.classList.add("link");

    //add link to detail page
    const detailButton = document.createElement("button");
    detailButton.textContent = "Details";
    detailButton.classList.add("detailButton");
    buttonDiv.appendChild(detailButton);

    // Store article ID and navigate to detail page on button click
    detailButton.addEventListener("click", () => {
      localStorage.setItem("selectedArticleId", element.id);  // store the ID
      window.location.href = "./detail.html";  // navigate to detail page
    });
});

// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e) => {
  let userData = e.target.value; //user entered data
  let emptyArray = [];
  if (userData) {
    icon.onclick = () => {
      webLink = "https://www.google.com/search?q=" + userData;
      linkTag.setAttribute("href", webLink);
      console.log(webLink);
      linkTag.click();
    };
    emptyArray = collection.filter((data) => {
      //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
      return data.name.toLowerCase().startsWith(userData.toLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      // passing return data inside li tag
      return "<li>" + data.name + "</li>";
    });
    searchWrapper.classList.add("active"); //show autocomplete box
    showSuggestions(emptyArray);
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      //adding onclick attribute in all li tag
      allList[i].setAttribute("onclick", "select(this)");
    }
  } else {
    searchWrapper.classList.remove("active"); //hide autocomplete box
  }
};

function select(element) {
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = () => {
      webLink = "https://www.google.com/search?q=" + selectData;
      linkTag.setAttribute("href", webLink);
      linkTag.click();
    };
    searchWrapper.classList.remove("active");
  }

function showSuggestions(list) {
    let userValue = inputBox.value;
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = "<li>" + userValue + "</li>";
  } else {
    listData = list.join("");
  }
  suggBox.innerHTML = listData;
}
});