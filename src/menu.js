const mainDiv = document.getElementById("content");


export function createMenu () {
    mainDiv.innerHTML = "";
    const menuDiv = document.createElement('div');
    mainDiv.appendChild(menuDiv);
    menuDiv.classList.add("menuDiv");
    Object.keys(catalogue).forEach((item) => {
        const courseItem = document.createElement('div');
        courseItem.innerHTML = item;
        menuDiv.appendChild(courseItem);
        const unoList = document.createElement('ul');
        courseItem.appendChild(unoList);
        catalogue[item].forEach((food) => {
        //Object.values(catalogue).forEach((food) => {
            const dish = document.createElement('li');
            dish.textContent = food;
            unoList.appendChild(dish);
        });
    });
}


const catalogue = {
    starters:["Burrata al tartufo", "Sicilian salad", "Grilled vegetables", "Focaccia"],
    mainCourses:["Garlic chicken with rosemary potatoes", "Lamb with chilli, honey and rosemary", "Vegetable frittata", "Grilled Scallops with parsley", "Aubergine parmigiana"],
    deserts:["Tiramisu", "Cannoli", "Sfogliatella", "Gelato", "Bomboloni", "Panna Cotta"],
    drinks:["San Pelegrino water", "Chianti", "Barolo", "Aperol Spritz", "Espresso", "Herbal Tea"]
}
