const imageUpload = document.getElementById('imageUpload');
const imagePreview = document.getElementById('imagePreview');
const normalPreview = document.getElementById('normalPreview');
const simPreview = document.getElementById('simPreview');
const placeholderText = document.getElementById('placeholderText');

// Handling the Image Upload
imageUpload.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageData = e.target.result;
            
            // Show in the top preview
            imagePreview.src = imageData;
            imagePreview.style.display = 'block';
            placeholderText.style.display = 'none';

            // Show in the comparison boxes
            normalPreview.src = imageData;
            normalPreview.style.display = 'block';
            simPreview.src = imageData;
            simPreview.style.display = 'block';
        }
        reader.readAsDataURL(file);
    }
});

// Applying the Scientific Filters
function applyFilter(type) {
    const sim = document.getElementById('simPreview');
    const label = document.getElementById('currentFilterLabel');
    
    sim.style.filter = "none"; 

    // This part updates the text label and applies the filter
    if (type === 'protanopia') {
        sim.style.filter = "url(#protanopia-filter)";
        label.innerText = "Protanopia (Red-Blind)";
        label.style.color = "#d9534f"; // Optional: sets label to a reddish color
    } else if (type === 'deuteranopia') {
        sim.style.filter = "url(#deuteranopia-filter)";
        label.innerText = "Deuteranopia (Green-Blind)";
        label.style.color = "#5cb85c"; // Optional: sets label to a greenish color
    } else if (type === 'tritanopia') {
        sim.style.filter = "url(#tritanopia-filter)";
        label.innerText = "Tritanopia (Blue-Blind)";
        label.style.color = "#428bca"; // Optional: sets label to a blueish color
    } else {
        sim.style.filter = "none";
        label.innerText = "Normal View";
        label.style.color = "navy";
    }
}