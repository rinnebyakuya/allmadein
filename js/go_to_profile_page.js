function redirectToProfilePage() {
    if (sessionStorage.token != null) {window.location.href = 'profile_page.html';}
    else {window.location.href = 'registration_page.html';}
    
}