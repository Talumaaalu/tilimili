document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.querySelector('.gallery-grid');
    const searchInput = document.getElementById('search');
    const filterSelect = document.getElementById('filter');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.lightbox .close');
    const uploadForm = document.getElementById('upload-form');
    const uploadImage = document.getElementById('upload-image');
    const uploadCaption = document.getElementById('upload-caption');
    const uploadArtist = document.getElementById('upload-artist');
    const uploadCategory = document.getElementById('upload-category');

    let images = [
        { src: 'https://upload.wikimedia.org/wikipedia/en/6/60/GirlBeforeAMirror.jpg', caption: 'Girl Before a Mirror', artist: 'Pablo Picasso', category: 'modern' },
        { src: 'https://www.myartprints.co.uk/kunst/jan_vermeer_van_delft/thm_Das-Maedchen-mit-dem-Perlenohrring-Restaurierte-Version-ab-1994.jpg', caption: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', category: 'classic' },
        { src: 'https://ik.imagekit.io/theartling/prod/tr:w-1840,c-at_max/original_images/gerhardrichter_photo1-2000-2000-1125-1125-crop-fill_1_1.jpg', caption: 'The Painter Without a Brush', artist: 'Gerhard Richter', category: 'abstract' },
        { src: 'https://i.etsystatic.com/21791248/r/il/8e8d6c/5486492882/il_750xN.5486492882_7z3j.jpg', caption: 'Abstract Composition', artist: 'Jackson Pollock', category: 'modern' },
    ];

    function displayImages(filteredImages) {
        galleryGrid.innerHTML = '';
        filteredImages.forEach((image, index) => {
            const artPiece = document.createElement('div');
            artPiece.classList.add('art-piece');
            const img = document.createElement('img');
            img.src = image.src;
            artPiece.appendChild(img);

            // Add event listener for interaction
            artPiece.addEventListener('click', () => {
                showLightbox(image.src, image.caption, index);
            });

            galleryGrid.appendChild(artPiece);
        });

        // Add GSAP animations
        gsap.from(".art-piece", { duration: 1, opacity: 0, y: 50, stagger: 0.1, ease: "power3.out" });
    }

    function showLightbox(src, caption, index) {
        lightbox.style.display = 'block';
        lightboxImg.src = src;
        lightboxCaption.textContent = caption;

        // Add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');

        // Add event listener for delete button
        deleteBtn.addEventListener('click', () => {
            deleteImage(index);
        });

        // Append delete button to lightbox
        lightbox.appendChild(deleteBtn);

        // Add GSAP animation for lightbox
        gsap.from("#lightbox-img", { duration: 1, opacity: 0, scale: 0.5, ease: "elastic.out(1, 0.3)" });
        gsap.from("#lightbox-caption", { duration: 1, opacity: 0, delay: 0.5 });
        gsap.from(".delete-btn", { duration: 1, opacity: 0, delay: 0.5 });
    }

    function deleteImage(index) {
        if (confirm("Are you sure you want to delete this image?")) {
            images.splice(index, 1); // Remove the image from the array
            filterImages(); // Refresh the gallery
            closeLightbox(); // Close the lightbox after deletion
        }
    }

    function filterImages() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = filterSelect.value;

        const filteredImages = images.filter(image => {
            const matchesSearch = image.caption.toLowerCase().includes(searchTerm) || image.artist.toLowerCase().includes(searchTerm);
            const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });

        displayImages(filteredImages);
    }

    searchInput.addEventListener('input', filterImages);
    filterSelect.addEventListener('change', filterImages);

    closeBtn.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const file = uploadImage.files[0];
        const reader = new FileReader();

        reader.onload = function(event) {
            const newImage = {
                src: event.target.result,
                caption: uploadCaption.value,
                artist: uploadArtist.value,
                category: uploadCategory.value
            };
            images.push(newImage);
            filterImages();  // Refresh the gallery to include the new image
        };

        reader.readAsDataURL(file);
        
        uploadForm.reset();  // Reset the form fields after submission
    });

    function closeLightbox() {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
        lightboxCaption.textContent = '';
        const deleteBtn = document.querySelector('.delete-btn');
        if (deleteBtn) {
            deleteBtn.remove(); // Remove delete button from lightbox
        }
    }

    // Initial display of images
    displayImages(images);
});
