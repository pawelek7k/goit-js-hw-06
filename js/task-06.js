const dataLengthHtml = document.querySelector('input[data-length="6"]');
const inputHtml = document.getElementById("validation-input");

inputHtml.addEventListener("blur", () => {
    const inputValueLength = inputHtml.value.length;

    if (inputValueLength < parseInt(dataLengthHtml.getAttribute("data-length"))) {
        inputHtml.classList.remove("valid");
        inputHtml.classList.add("invalid");
    } else {
        inputHtml.classList.remove("invalid");
        inputHtml.classList.add("valid");
    }
});