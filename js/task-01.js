const categoryItems = document.querySelectorAll("#categories > li.item");
const items = categoryItems.length;
console.dir(`Number of categories: ${ items } `);
categoryItems.forEach(category => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("li").length;
  console.dir(`Category: ${categoryName}`);
  console.dir(`Elements: ${categoryElements}`);
});