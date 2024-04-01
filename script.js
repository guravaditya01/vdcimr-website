document.addEventListener("DOMContentLoaded", function() {
    const photoGallery = document.getElementById("photoGallery");

    // Fetch photos from the folder
    fetchPhotos();
});

async function fetchPhotos() {
    try {
        const response = await fetch('./photos.json');
        const photos = await response.json();

        // Display photos on the webpage
        displayPhotos(photos);
    } catch (error) {
        console.error("Error fetching photos:", error);
    }
}

function displayPhotos(photos) {
    const photoGallery = document.getElementById("photoGallery");

    photos.forEach(photo => {
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("imgContainer");

        const img = document.createElement("img");
        img.src = photo.url;
        img.alt = photo.name;

        const caption = document.createElement("p");
        caption.textContent = photo.name;

        imgContainer.appendChild(img);
        imgContainer.appendChild(caption);
        photoGallery.appendChild(imgContainer);
    });
}