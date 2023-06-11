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