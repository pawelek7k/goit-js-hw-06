let counterValue = 0;

const minusBtn = document.querySelector('button[data-action="decrement"]');

const plusBtn = document.querySelector('button[data-action="increment"]');

const spanValue = document.getElementById("value");

minusBtn.addEventListener("click", () => {
    counterValue--
    spanValue.textContent = counterValue

})

plusBtn.addEventListener("click", () => {
    counterValue++
    spanValue.textContent = counterValue
})