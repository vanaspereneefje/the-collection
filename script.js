document.addEventListener("DOMContentLoaded", () => {
const collection = [
    {
        picture: './Images/howlscastle.jpg',
        name: 'Howls Moving Castle',
        director: 'Hayao Miyazaki',
        releaseYear: '2004',
        summary: "Jealous of Sophie's closeness to Howl, a wizard, the Witch of Waste transforms her into an old lady. Sophie must find a way to break the spell with the help of Howl's friends, Calcifer and Markl.",
        link: 'https://www.youtube.com/watch?v=iwROgK94zcM'
    },
    {
        picture: './Images/when-marnie-was-there.jpg',
        name: 'When Marnie Was There',
        director: 'Hiromasa Yonebayashi',
        releaseYear: '2014',
        summary: 'A distressed girl is compelled to live in the countryside by her foster parents. There, she befriends Marnie, a mysterious girl, who helps her confront the truth about her identity.',
        link: 'https://www.youtube.com/watch?v=jjmrxqcQdYg'
      },
      {
        picture: './Images/the-wind-rises.jpg',
        name: 'The Wind Rises',
        director: 'Hayao Miyazaki',
        releaseYear: '2013',
        summary: 'A lifelong love of flight inspires Japanese aviation engineer Jiro Horikoshi, whose storied career includes the creation of the A6M World War II fighter plane.',
        link: 'https://www.youtube.com/watch?v=RzSpDgiF5y8'
      },
      {
        picture: './Images/nausicaa.jpg',
        name: 'Nausicaä of the Valley of the Wind',
        director: 'Hayao Miyazaki',
        releaseYear: '1984',
        summary: 'In a post-apocalyptic age, Nausicaa, a princess who guards the Valley of the Wind, tries to stop two warring nations from destroying everything around them.',
        link: 'https://www.youtube.com/watch?v=6zhLBe319KE'
      },
      {
        picture: './Images/Totoro.jpg',
        name: 'My Neighbor Totoro',
        director: 'Hayao Miyazaki',
        releaseYear: '1988',
        summary: "Two sisters relocate to rural Japan with their father to spend time with their ill mother. They face a mythical forest sprite and its woodland friends with whom they have many magical adventures.",
        link: 'https://www.youtube.com/watch?v=6zhLBe319KE'
    },
    {
        picture: './Images/arrietty.jpg',
        name: 'Arrietty',
        director: 'Hiromasa Yonebayashi',
        releaseYear: '2010',
        summary: "The Clock family lives in another family's residence and steals their goods. All is well until humans discover their daughter, Arrietty, and they must flee for their lives.",
        link: 'https://www.youtube.com/watch?v=6zhLBe319KE'
    },
    {
        picture: './Images/kikis-delivery-service.jpg',
        name: 'Kikis Delivery Service',
        director: 'Hayao Miyazaki',
        releaseYear: '1989',
        summary: "Thirteen-year-old Kiki tries to become an independent witch and gets a job at a delivery service. She wakes up one day to find that she can neither fly her broom nor talk to her cat.",
        link: 'https://www.youtube.com/watch?v=6zhLBe319KE'
    },
    {
        picture: './Images/Mononoke.jpg',
        name: 'Princess Mononoke',
        director: 'Hayao Miyazaki',
        releaseYear: '1997',
        summary: "While saving his village, Ashitaka, a heroic warrior, is befallen with a curse. To lift the curse, Ashitaka embarks on a perilous journey and gets involved in the conflict of two warring clans.",
        link: 'https://www.youtube.com/watch?v=6zhLBe319KE'
    },
    {
        picture: './Images/princess-kaguya.jpg',
        name: 'The Tale of the Princess Kaguya',
        director: 'Isao Takahata',
        releaseYear: '2013',
        summary: "A farmer and his wife find a miniature girl inside a bamboo stalk who magically grows up to become a beautiful lady. The girl is courted by five men who have to face impossible tasks to win her hand.",
        link: 'https://www.youtube.com/watch?v=6zhLBe319KE'
    },
    {
        picture: './Images/spirited-away.jpg',
        name: 'Spirited Away',
        director: 'Hayao Miyazaki',
        releaseYear: '2001',
        summary: "Ten-year-old Chihiro and her parents end up at an abandoned amusement park inhabited by supernatural beings. Soon, she learns that she must work to free her parents who have been turned into pigs.",
        link: 'https://www.youtube.com/watch?v=6zhLBe319KE'
    },
  ]

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

    //add link for every year
    let link = document.createElement("a");
    let button = document.createElement("button");
    containerDiv.appendChild(link);
    link.appendChild(button);
    let linkNode = document.createTextNode("link");
    button.appendChild(linkNode);
    link.href = element.link;
    link.classList.add("link");
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
  let userData = e.target.value; //user enetered data
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