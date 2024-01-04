const fontSizeControlHtml = document.getElementById("font-size-control");

const spanTextHtml = document.getElementById("text");

fontSizeControlHtml.addEventListener("input", () => {
    const fontValue = fontSizeControlHtml.value;
    spanTextHtml.style.fontSize = fontValue + "px"
})
