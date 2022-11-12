
//Colorama
//Declares variables from html
const input = document.querySelector("input");
const btn = document.querySelector("button");
const div = document.querySelector("div");


//Declare variable array of validColors
const validColors = ["crimson", "blue", "green", "pink", "purple"];

//Function for what will happend if click on button
//If input.value is a validColor style backgroundcolor att save in licalStorage
//else input.value will be set to Nope, not...
btn.onclick = () => {
    if(validColors.includes(input.value)){
        document.body.style.backgroundColor = input.value;
        localStorage.setItem("color", input.value);
    }else{
        input.value = "Nope, not a valid color";
    }
};

//Function for initSite if there is a 
//color saved i localStorage that color 
//will be set as backgroundColor in initSite
(function initSite() {
      const color = localStorage.getItem ("color");
    if (color){
        document.body.style.backgroundColor = color;
    }
})();

//Function that render validColors on browser
//As an ul with li forEach color
//This function is written so that the function call on itself
(function showValidColors() {
    const ul = document.createElement("ul");
    validColors.forEach(color => {
    const li = document.createElement("li");
    li.textContent = color;
    ul.appendChild(li);
    });

    div.appendChild(ul);
})();



// Beskrivning
// Skapa en webbsida med ett input fält. I detta fält så skall vi kunna skriva en färg (på engleska, de färger som hateras av HTML/CSS) och när du klickar på spara så skall den skrivna färgen läggas som sidans bakgrundsfärg.
// Tips: Här kan ni se vilka färger som finns tillgängliga
// https://www.w3schools.com/colors/colors_names.asp
// Bonus1. Skapa en array som testar om den lämnade färgen finns. Ge annars ett felmeddelande typ “Ogiltig färg”.
// Visa även för besökaren innehållet från arrayn på något sätt.
// Bonus2. Spara senaste sparade färgen i localStorage. Så när sidan laddas om så hämtas färgen därifrån om det finns någon!









































