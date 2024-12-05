var currentTheme = "main";

function updateImage(src) {
    let imgElement = document.querySelector("img");

    if (!imgElement) {
        imgElement = document.createElement("img");
        document.body.appendChild(imgElement);
    }

    imgElement.src = src;
}

function Blue(theme) {
    if (currentTheme === "blue") {
        resetTheme();
    } else {
        document.body.style.backgroundImage="url(/img/boyish_background.webp)";
        document.body.style.color = "#26619C";
        document.body.style.textTransform = "none";
        document.getElementById("subtext").textContent="Boy(Male)";
        document.body.style.fontFamily = "Arial, sans-serif";
        updateImage("img/Ako.jpg");
        currentTheme = "blue";
    }
}

function Pink(theme) {
    if (currentTheme === "pink") {
        resetTheme();
    } else {
        document.body.style.backgroundImage="url(/img/girly_background.jpg)";
        document.getElementById("subtext").textContent="Girl(Female)";
        document.body.style.color = "#E41F7B";
        document.body.style.textTransform = "none";
        document.body.style.fontFamily = "'Dancing Script', cursive";
        updateImage("img/Would.webp");
        currentTheme = "pink";
    }
}

function Brown(theme) {
    if (currentTheme === "brown") {
        resetTheme();
    } else {
        document.body.style.backgroundImage="url(/img/old_background.jpg)";
        document.getElementById("subtext").textContent="Ancient";
        document.body.style.color = "#80461B";
        document.body.style.fontFamily = "'Times New Roman', Times, serif";
        document.body.style.textTransform = "uppercase";
        updateImage("img/WeneverIseegurlsandbois.jpg");
        currentTheme = "brown";
    }
}


function resetTheme() {
    document.body.style.backgroundImage="url(/img/white.jpg)";
    document.body.style.color = "black";
    document.getElementById("subtext").textContent="Welcome";
    document.body.style.fontFamily = "'Times New Roman', Times, serif";
    document.body.style.textTransform = "none";
    updateImage("img/white.jpg");
    currentTheme = "main";
}