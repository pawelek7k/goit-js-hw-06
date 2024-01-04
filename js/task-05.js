const nameInputHtml = document.getElementById("name-input");

const nameOutputHtml = document.getElementById("name-output");

nameInputHtml.addEventListener('input', () => {

    const trimmedValue = nameInputHtml.value.trim();

    if (trimmedValue === '') {
        nameOutputHtml.textContent = "Anonymous"
    } else {
        nameOutputHtml.textContent = trimmedValue
    }
})
