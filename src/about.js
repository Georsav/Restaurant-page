const mainDiv = document.getElementById("content");
const aboutDiv = document.createElement('div');
const telDiv = document.createElement('div');

export function createAbout() {
    mainDiv.appendChild(aboutDiv);
    mainDiv.appendChild(telDiv);
    mainDiv.classList.add("about");
    aboutDiv.innerText = "Via Condotti 34, Napoli";
    telDiv.innerText = "Reservations: 245 345-18151-1";
}