
btnChangeText = document.getElementById("btnChangeText");

btnChangeText.addEventListener("click", function(e) {
    something = document.getElementById("something");
    someTextInput = document.getElementById("someTextInput");
    something.innerHTML = someTextInput.value;
});
