const uploader = document.querySelector('.uploader');
const fileInput = document.querySelector('input[type="file"]');
const preview = document.querySelector('.preview');
uploader.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        preview.src = reader.result;
        preview.style.display = 'block';  /* added */
    });
    reader.readAsDataURL(file);
});