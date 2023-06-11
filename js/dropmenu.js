function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function place_an_ad() {
    if (sessionStorage.token != null) {
        window.location.href = 'adding-ad_page.html';
        console.log("Success");
    }
    else {
        window.location.href = 'registration_page.html';
        console.log("Not Success");
    }
}