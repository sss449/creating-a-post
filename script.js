const fileInput = document.getElementById('file-upload');
const previewLabel = document.getElementById('preview-label');
const uploadText = document.getElementById('upload-text');

fileInput.addEventListener('change', function() {
    // Проверяем, что файл действительно выбран
    if (this.files && this.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            // Устанавливаем картинку фоном
            previewLabel.style.backgroundImage = `url('${e.target.result}')`;
            previewLabel.style.backgroundSize = '100% 100%';
            previewLabel.style.backgroundRepeat = 'no-repeat';
            previewLabel.style.backgroundPosition = 'center';
            
            // Теперь скрипт найдет этот элемент и скроет его
            if (uploadText) {
                uploadText.style.display = 'none';
            }
        };

        reader.readAsDataURL(this.files[0]);
    }
});