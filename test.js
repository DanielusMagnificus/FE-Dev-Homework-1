
btnChangeText = document.getElementById("btnChangeText");

btnChangeText.addEventListener("click", function() {
    changeText()
});

function changeText() {
    something = document.getElementById("something");
    someTextInput = document.getElementById("someTextInput");
    something.innerHTML = someTextInput.value;
}
