const UI = {
    widthInput: document.querySelector(".width"),
    heightInput: document.querySelector(".height"),
    addButton: document.querySelector(".addButton"),
    areaInput: document.querySelector(".area"),
}

function calculateArea() {
    return UI.widthInput.value * UI.heightInput.value; 
}

UI.addButton.addEventListener("click", () => {
    if (UI.areaInput.value == ""){
    UI.areaInput.value = calculateArea();
    }
    else if (UI.widthInput.value == ""){
        UI.widthInput.value = UI.areaInput.value / UI.heightInput.value;
    }
    else if (UI.heightInput.value == ""){
        UI.heightInput.value = UI.areaInput.value / UI.widthInput.value;
    }
});
