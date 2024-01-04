const dataLengthHtml = document.querySelector('input[data-length="6"]');
const inputHtml = document.getElementById("validation-input");

inputHtml.addEventListener("blur", () => {
    const inputValueLength = inputHtml.value.length;

    inputHtml.classList.toggle("invalid", inputValueLength !== 6);
    inputHtml.classList.toggle("valid", inputValueLength === 6);
});