// Select the div element with the class "categories"
const categoriesDiv = document.querySelector('.block-categories');
// Select all the button elements inside the div element
const buttons = categoriesDiv.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener("click", function(event) {
    // Get the label element that contains the clicked button
    const label = event.target.parentNode.parentNode;
    // Get the category name from the text content of the label element
    const category = label.textContent.trim();
    // Get the class name from the class attribute of the label element
    const className = '.dropdown-item';

    console.log(label);
    console.log(category);
    console.log(className);

    // Redirect to the category page
    window.location.href = `category-page.html?category=${category}&class=${className}`;
  });
});
