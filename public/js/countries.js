const MAIN = document.getElementById("main");
const BUTTON = document.getElementById("button");
const NAV = document.getElementById("nav");
let data;
const FORMSECTIONINPUT = document.getElementById("formSectionInput");
const FORMSECTIONBUTTON = document.getElementById("formSectionButton");
const FORMSECTIONSelect = document.getElementById("formSectionSelect");
const DATASECTION = document.getElementById("dataSection");

MAIN.style.background = "white";
MAIN.style.color = "black";
NAV.style.borderBottom = "solid 1px grey";
BUTTON.style.background = "white";
BUTTON.style.color = "black";
BUTTON.style.borderRadius = "11px";
BUTTON.style.border = "solid 1px grey";
FORMSECTIONINPUT.style.background = "white";
FORMSECTIONINPUT.style.color = "black";
FORMSECTIONINPUT.style.border = "solid 1px black";
FORMSECTIONBUTTON.style.background = "silver";
FORMSECTIONBUTTON.style.color = "white";
FORMSECTIONSelect.style.background = "silver";
FORMSECTIONSelect.style.color = "black";

BUTTON.addEventListener("click", () => {
    if (MAIN.style.background == "white" && BUTTON.style.background == "white") {
        MAIN.style.background = "black";
        MAIN.style.color = "white";
        BUTTON.style.background = "black";
        BUTTON.style.color = "white";
        FORMSECTIONINPUT.style.background = "black";
        FORMSECTIONINPUT.style.color = "white";
        FORMSECTIONINPUT.style.border = "solid 1px silver";
        FORMSECTIONBUTTON.style.background = "black";
        FORMSECTIONBUTTON.style.color = "white";
        FORMSECTIONSelect.style.background = "black";
        FORMSECTIONSelect.style.color = "white";
    }
    else if (MAIN.style.background == "black" && BUTTON.style.background == "black") {
        MAIN.style.background = "white";
        MAIN.style.color = "black";
        BUTTON.style.background = "white";
        BUTTON.style.color = "black";
        FORMSECTIONINPUT.style.background = "white";
        FORMSECTIONINPUT.style.color = "black";
        FORMSECTIONINPUT.style.border = "solid 1px black";
        FORMSECTIONBUTTON.style.background = "silver";
        FORMSECTIONBUTTON.style.color = "white";
        FORMSECTIONSelect.style.background = "silver";
        FORMSECTIONSelect.style.color = "black";
    }
});

window.addEventListener("load", async () => {
    data = await axios.get("https://restcountries.com/v3.1/all");

    data.data.map((d, i) => {
        let DATASECTIONDiv = document.createElement("div");
        let DATASECTIONH2 = document.createElement("h2");
        DATASECTIONDiv.className = "singleComponent";
        DATASECTION.appendChild(DATASECTIONDiv);
        DATASECTIONDiv.appendChild(DATASECTIONH2);
        DATASECTIONH2.innerText = d.altSpellings[2] ? d.altSpellings[2] : (d.altSpellings[1] ? d.altSpellings[1] : d.altSpellings[0]);

    });
});