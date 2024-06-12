// Function to add a new vision
function addVision() {
    const visionDescription = document.getElementById('visionDescription').value;
    const imageUpload = document.getElementById('imageUpload');
    const visionList = document.getElementById('visionList');

    if (visionDescription.trim() === '') {
        alert('Please enter a vision description.');
        return;
    }

    const vision = document.createElement('div');
    vision.classList.add('vision');

    const image = document.createElement('img');
    image.src = URL.createObjectURL(imageUpload.files[0]);
    vision.appendChild(image);

    const description = document.createElement('p');
    description.textContent = visionDescription;
    vision.appendChild(description);

    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.onclick = function() {
        markAsDone(vision);
    };
    vision.appendChild(doneButton);

    visionList.appendChild(vision);

    // Clear input fields after adding vision
    document.getElementById('visionDescription').value = '';
    imageUpload.value = '';
}

// Function to mark a vision as done
function markAsDone(vision) {
    vision.classList.add('done');
    vision.lastChild.remove();

    const congratsMessage = document.createElement('p');
    congratsMessage.textContent = 'Congratulations!!!! You Achieved this Vision!!!!';
    vision.appendChild(congratsMessage);
}

// Function to handle back to home button
function backToHome() {
    // Here, you can implement the behavior to navigate back to the home page
    alert('Redirecting to Home Page...');
    window.location.href = 'index.html';
}
