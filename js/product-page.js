const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('productId');
console.log(productId);
/* const productId = 1; */
// Get the product details from the server or database
fetch(`http://127.0.0.1:8000/products/${productId}`, {
    method: 'GET'
  })
.then(response => response.json())
.then(data => {
  const category = data.data.product_details.category
  // Set the text content of the elements
  document.getElementById('user-photo').src = data.data.business_details.logo; 
  document.getElementById('user-photo-popup').src = data.data.business_details.logo; 
  document.getElementById('product-title').textContent = data.data.product_details.name;
  document.getElementById('product-title-popup').textContent = data.data.product_details.name;
  document.getElementById('product-location').textContent = data.data.product_details.location;
  document.getElementById('product-description').textContent = data.data.product_details.description;
  document.getElementById('product-price').textContent = '$' + data.data.product_details.original_price;
  document.getElementById('seller-name').textContent = data.data.business_details.name;
  document.getElementById('seller-name-popup').textContent = data.data.business_details.name;
  document.getElementById('seller-email').textContent = data.data.business_details.email;
  const mainid = data.data.product_details.id;
  const imgdiv = document.getElementById('product-info');
  const image = imgdiv.querySelector('img');
  // Set the src attribute of the image element
  image.src = data.data.product_details.product_image;
  fetch(`http://127.0.0.1:8000/products/subcategory?category=${category}`, {
    method: 'GET'
  })
.then(response => response.json())
.then(data => {
  console.log(data)
  const container = document.getElementById('card-container');
  container.innerHTML = '';

  // Check if data.data is an array before iterating over it
  if (Array.isArray(data.data)) {
    data.data.forEach(product => {
      if (product.id != mainid) {
      const name = product.name;
      const newPrice = product.new_price;
      const productImage = product.product_image;
      const productId = product.id;

      const productCard = document.createElement('div');
      productCard.classList.add('product-card');

      // Add a click event listener to the product card element
      productCard.addEventListener('click', function () {
        // Redirect the user to the product page with the product ID as a query parameter in the URL
        window.location.href = `product_page.html?productId=${productId}`;
      });

      const productPicture = document.createElement('div');
      productPicture.classList.add('product-picture');

      const imageElement = document.createElement('img');
      imageElement.src = productImage;
      productPicture.appendChild(imageElement);

      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');

      const priceElement = document.createElement('h6');
      priceElement.classList.add('price');
      priceElement.textContent = '$' + newPrice;
      productInfo.appendChild(priceElement);

      const nameElement = document.createElement('p');
      nameElement.classList.add('title');
      nameElement.textContent = name;
      productInfo.appendChild(nameElement);

      productCard.appendChild(productPicture);
      productCard.appendChild(productInfo);
      container.appendChild(productCard);}
    });
  }
});
});