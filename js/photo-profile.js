// Get a reference to the submit button
const button = document.getElementById("upload-button");

// Handle button click
button.addEventListener("click", function () {
  // Show the file input field
  document.getElementById("photo-input").click();
});

// Handle file selection
document.getElementById("photo-input").addEventListener("change", function () {
  // Check if a file has been selected
  const file = this.files[0];
  console.log(file);
  if (!file) {
    return;
  }
  formData = new FormData();
  console.log(file);
  formData.append('file', file);

  console.log(formData);
  // // Update the profile photo and submit button
  // document.getElementById("profile-photo").src = URL.createObjectURL(file);
  // button.innerHTML = "Replace";
  fetch(`http://127.0.0.1:8000/uploadfile/profile`, {
    method: 'POST',
    headers: {
      // 'Content-Type': 'multipart/form-data', THIS LINE OF CODE IS CURSED, NEVER UNCOMMENT IT OR EVERYTHING WILL BREAK AND SUFFER
      Authorization: `Bearer ${sessionStorage.token}`,
    },
    body: formData
  })
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("profile-photo").src = data.filename;
  });
  
});