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

select.addEventListener('change', () => {
    const mainCategoryToSend = select.options[select.selectedIndex].text
}); 

subselect.addEventListener('change', () => {
    const subCategoryToSend = subselect.options[subselect.selectedIndex].text
    const image = document.getElementById('image').files[0]
}); 

let file;
async function sendForm(){
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
    console.log(data)

    fetch('http://127.0.0.1:8000/products', options)
        .then(response => response.json())
        .then(data => {const sendingid = data.data.id
                        console.log(sendingid);
                        formData = new FormData();
                        formData.append('file', file);
                        fetch(`http://127.0.0.1:8000/uploadfile/product/${sendingid}`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'multipart/form-data',
                                Authorization: `Bearer ${sessionStorage.token}`,
                            },
                            body: formData
                        })
        })  
        .catch(error => console.error(error));

}

