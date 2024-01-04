const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUlHtml = document.getElementById("ingredients");

const ingredientsLiHtml = ingredients.map((ingredient) => `<li class="item">${ingredient}</li>`).join("");

ingredientsUlHtml.innerHTML = ingredientsLiHtml