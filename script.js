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
        document.body.style.backgroundColor = "#000080";
        updateImage("img/Ako.jpg");
        currentTheme = "blue";
    }
}

function Pink(theme) {
    if (currentTheme === "pink") {
        resetTheme();
    } else {
        document.body.style.backgroundColor = "#ffafcc";
        updateImage("img/Would.webp");
        currentTheme = "pink";
    }
}

function Brown(theme) {
    if (currentTheme === "brown") {
        resetTheme();
    } else {
        document.body.style.backgroundColor = "#a98467";
        updateImage("img/WeneverIseegurlsandbois.jpg");
        currentTheme = "brown";
    }
}


function resetTheme() {
    document.body.style.backgroundColor = "white";
    currentTheme = "main";
}
