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
    console.log("Paspaudžiau")
    UI.areaInput.value = calculateArea();
})

UI.areaInput.value, UI.widthInput.value, UI.heightInput.value = "";

