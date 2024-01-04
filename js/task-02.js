const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUlHtml = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  const ingredientsLiHtml = document.createElement("li");
    ingredientsLiHtml.textContent = ingredient;
    ingredientsLiHtml.classList.add("list");
    ingredientsUlHtml.appendChild(ingredientsLiHtml);
})