const mainmenuItems = document.querySelectorAll('.dropdown-item');
const submenuItems = document.querySelectorAll('.column_container');


mainmenuItems.forEach(item => {
  item.addEventListener('click', event => {
    const category = event.target.textContent;
    const className = '.dropdown-item';
    console.log("Success")
    console.log(category)
    console.log(className)
    window.location.href = `category-page.html?category=${category}&class=${className}`;
    })
  })


submenuItems.forEach(item => {
  item.addEventListener('click', event => {
    const category = event.target.textContent;
    const className = '.column_container';
    console.log("Success")
    console.log(category)
    console.log(className)
    window.location.href = `category-page.html?category=${category}&class=${className}`;
    })
  })

function search() {
    const keyword = document.getElementById('search').value
    window.location.href = `category-page.html?keyword=${keyword}`;
}