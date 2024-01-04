const categories = document.getElementById("categories")

const item = document.getElementsByClassName("item")
console.log(`Number of categories: ${item.length}`)

const listItems = document.querySelectorAll("ul#categories li.item")

listItems.forEach(item => {
    const h2Text = item.querySelector("h2").textContent;
    console.log(`\nCategory: ${h2Text}`)
    const categoriesLi = item.querySelectorAll("ul li")
    console.log(`Elements: ${categoriesLi.length}`)
})