// script.js

document.addEventListener('DOMContentLoaded', function() {
    const main = document.querySelector('main');


    // Function to create vision board items
    function createVisionItem(item) {
        const div = document.createElement('div');
        div.classList.add('item', 'fade-in');
        div.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.title}">
            <h2>${item.title}</h2>
        `;
        main.appendChild(div);
    }

    // Render vision board items
    visionItems.forEach(createVisionItem);
});
