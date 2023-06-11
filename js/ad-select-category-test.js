let file = null;
const subcategories = {
    category1: ["Women’s Clothing", "Men’s Clothing", "Children’s Clothing"],
    category2: ["Phones and tablets", "Photo and video cameras", "computers", "TV, audio systems"],
    category3: ["Refrigerators", "Stoves and ovens", "Washing machines", "Climatic equipment", "Other appliances"],
    category4: ["Apartment for sale", "Houses for sale", "Apartment rent", "Houses rent"],
    category5: ["Cars", "Motorcycles", "Buses and Trucks", "Special machinery", "Trailers", "Spare parts and wheels", "Accessories and equipment", "Car care products"],
    category6: ["Beds and mattresses", "Tables and Chairs", "Sofas and armchairs", "Kitchen sets", "Storing"],
    category7: ["Services", "Sports and recreation", "Books and hobbies", "Pets", "Job", "Other ungrouped"],
};
const categoriesDropdown = document.getElementById("categories");

categoriesDropdown.addEventListener("change", function() {
    // Get the value of the selected option
    const category = this.value;

    // Get the subcategories dropdown
    const subcategoriesDropdown = document.getElementById("subcategories");

    // Clear any existing options in the subcategories dropdown
    subcategoriesDropdown.innerHTML = "";

    // Get the array of subcategories for the selected category
    const options = subcategories[category];

    // Add a new option element for each subcategory
    options.forEach(function(option) {
        const newOption = document.createElement("option");
        newOption.value = option;
        newOption.text = option;
        subcategoriesDropdown.add(newOption);
    });
});

const select = document.getElementById('categories');
const subselect = document.getElementById('subcategories');
// Add an event listener to the file input element that sets the file variable to the selected file
const fileInputElement = document.getElementById('image');

fileInputElement.addEventListener('change', () => {
    file = fileInputElement.files[0];
    console.log(file);
});


select.addEventListener('change', () => {
    // Set the mainCategoryToSend variable to the selected option
    const mainCategoryToSend = select.options[select.selectedIndex].text
}); 

subselect.addEventListener('change', () => {
    // Set the subCategoryToSend variable to the selected option
    const subCategoryToSend = subselect.options[subselect.selectedIndex].text
}); 

async function sendForm(){

    if (!file) {
        console.error("No file selected");
        return;
    }

    const subCategoryToSend = subselect.options[subselect.selectedIndex].text
    const nameToSend = document.getElementById('name-id').value
    const priceToSend = document.getElementById('price').value
    const descriptionToSend = document.getElementById('description').value
    const locationToSend = document.getElementById('location').value

    const data = {
        name: nameToSend,
        category: subCategoryToSend,
        description: descriptionToSend,
        location: locationToSend,
        original_price: priceToSend,
        new_price: priceToSend
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.token}`,
        },
        body: JSON.stringify(data)
    };
    try {
        // Make the first request to create the product
        const response = await fetch('http://127.0.0.1:8000/products', options);
        // Wait for the response body to be parsed as JSON
        const json = await response.json();
        // Log the response body to the console
        console.log(json);
        // Get the product id from the response
        const productId = json.data.id;
        console.log(productId);
        // Create a FormData object to send the image file
        formData = new FormData();
        console.log(file);
        formData.append('file', file);
        
        console.log(formData);
    
        // Make the second request to attach the image to the product
        await fetch(`http://127.0.0.1:8000/uploadfile/product/${productId}`, {
            method: 'POST',
            headers: {
                // 'Content-Type': 'multipart/form-data', THIS LINE OF CODE IS CURSED, NEVER UNCOMMENT IT OR EVERYTHING WILL BREAK AND SUFFER
                Authorization: `Bearer ${sessionStorage.token}`,
            },
            body: formData
        })
        .then(response => response.json())
        .then(data => window.location.href = 'main_page.html');
    } catch (error) {
        console.error(error);
    }
}

