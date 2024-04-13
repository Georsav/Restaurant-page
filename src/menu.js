const mainDiv = document.getElementById("content");
const menuDiv = document.createElement('div');
const startersDiv = document.createElement('div');
const mainCourseDiv = document.createElement('div');
const desertsDiv = document.createElement('div');
const drinksDiv = document.createElement('div');
const startersList = document.createElement('ul');
const mainCourseList = document.createElement('ul');
const desertsList = document.createElement('ul');
const drinksList = document.createElement('ul');

export function createMenu () {
    mainDiv.appendChild(menuDiv);
    menuDiv.classList.add("menuDiv");
    startersDiv.innerHTML = "Starters";
    mainCourseDiv.innerHTML = "Main Course";
    desertsDiv.innerHTML = "Deserts";
    drinksDiv.innerHTML = "Drinks";
    menuDiv.appendChild(startersDiv);
    menuDiv.appendChild(mainCourseDiv);
    menuDiv.appendChild(desertsDiv);
    menuDiv.appendChild(drinksDiv);
    startersDiv.appendChild(startersList);
    mainCourseDiv.appendChild(mainCourseList);
    desertsDiv.appendChild(desertsList);
    drinksDiv.appendChild(drinksList);
}

const starters = ["Burrata al tartufo", "Sicilian salad", "Grilled vegetables", "Focaccia"];
const mainCourses = ["Garlic chicken with rosemary potatoes", "Lamb with chilli, honey and rosemary", "Vegetable frittata", "Grilled Scallops with parsley", "Aubergine parmigiana"];
const deserts = ["Tiramisu", "Cannoli", "Sfogliatella", "Gelato", "Bomboloni", "Panna Cotta"];
const drinks = ["San Pelegrino water", "Chianti", "Barolo", "Aperol Spritz"];

const catalogue = {
    starters:["Burrata al tartufo", "Sicilian salad", "Grilled vegetables", "Focaccia"],
    mainCourses:["Garlic chicken with rosemary potatoes", "Lamb with chilli, honey and rosemary", "Vegetable frittata", "Grilled Scallops with parsley", "Aubergine parmigiana"],
    deserts:["Tiramisu", "Cannoli", "Sfogliatella", "Gelato", "Bomboloni", "Panna Cotta"],
    drinks:["San Pelegrino water", "Chianti", "Barolo", "Aperol Spritz"]
}


starters.forEach((item) => {
    const starter = document.createElement('li');
    starter.textContent = item;
    startersList.appendChild(starter);
});

mainCourses.forEach((item) => {
    const mainCourse = document.createElement('li');
    mainCourse.textContent = item;
    mainCourseList.appendChild(mainCourse);
});

deserts.forEach((item) => {
    const desert = document.createElement('li');
    desert.textContent = item;
    desertsList.appendChild(desert);
});

drinks.forEach((item) => {
    const drink = document.createElement('li');
    drink.textContent = item;
    drinksList.appendChild(drink);
});



