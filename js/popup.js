var modal = document.getElementById("modal");

// Get the button that opens the modal
let btn = document.getElementById("openModalButton");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close-button")[0];

// Get the fake submit button
let SubmitButton = document.getElementById("SubmitButton");

btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}

SubmitButton.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}