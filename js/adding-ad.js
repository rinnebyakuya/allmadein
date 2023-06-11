// Get a reference to the form element
const form = document.getElementById('product-form');

// Add a submit event listener to the form
form.addEventListener('submit', (event) => {
  // Prevent the default submit action
  event.preventDefault();

  // Get the product data from the form elements
  const subcategory = document.getElementById('subcategory').value;
  const title = document.getElementById('title').value;
  const price = document.getElementById('price').value;
  const description = document.getElementById('description').value;
  const image = document.getElementById('image').files[0]; // The "image" element should be a file input element

  // Create a product object with the form data
  const product = {
    subcategory: subcategory,
    title: title,
    price: price,
    description: description,
    image: image
  };

  // Use the FormData API to create a form data object
  const formData = new FormData();
  formData.append('product', JSON.stringify(product)); // Add the product object as a form field
  formData.append('image', image); // Add the image file as a form field

  // Send the form data object to the server using the fetch function
  fetch('/products', {
    method: 'POST', // Specify the HTTP method as POST
    body: formData // Set the form data object as the body of the request
  })
    .then((response) => response.json())
    .then((data) => {
      // Do something with the response data
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
});