const nameInputHtml = document.getElementById("name-input");

const nameOutputHtml = document.getElementById("name-output");

nameInputHtml.addEventListener('input', () => {
    nameOutputHtml.textContent = nameInputHtml.value
})
