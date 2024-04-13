const headTitle = document.createElement("h1");
const welcomeText = document.createElement('p');
const homeDiv = document.getElementById("content");

export function createHome () {
    headTitle.innerText = "Terra di Pasta Restaurant";
    welcomeText.innerText = "Welcome to our restaurant! We are delighted to share with you our passion for traditional Napolean cuisine. In our menu you will find Mediterranean cuisine at its best! We are inspired by tradition and we create our dishes using only the freshest local ingredients every season has to offer.";
    homeDiv.appendChild(headTitle);
    homeDiv.appendChild(welcomeText);
    homeDiv.classList.add("homeDiv");
}
