// JavaScript to handle file uploads
const dropArea = document.getElementById('drop-area');
const preview = document.getElementById('preview');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
  e.delete();
}

dropArea.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
  const dt = e.dataTransfer;
  const files = dt.files;
  handleFiles(files);
}

function handleFiles(files) {
  [...files].forEach(file => {
    if (file.type.startsWith('audio/')) {
      const audio = document.createElement('audio');
      audio.controls = true;
      audio.src = URL.createObjectURL(file);
      preview.innerHTML = `<p>Now playing: ${file.name}</p>`;
      preview.appendChild(audio);
    } else {
      alert('Only audio files are allowed!');
    }
  });
}
