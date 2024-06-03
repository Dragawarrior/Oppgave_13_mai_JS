function changeColor(element, color) {
    document.querySelector(element).style.color = color;
};

const textInput = document.getElementById("textInputField");
const updateFieldText = document.getElementById("liveUpdateField");
function updateField() {
    updateFieldText.innerHTML = textInput.value;
};