document.addEventListener('DOMContentLoaded', function () {
    const imageSources = [
        './asset/cert2.PNG',
        './asset/cert3.PNG',
        './asset/cert4.PNG',
        './asset/cert5.PNG',
        './asset/cert6.PNG'
    ];

    const rotatingImage = document.getElementById('rotatingImage');

    let currentIndex = 0;

    let intervalId;

    function updateImage() {
        rotatingImage.src = imageSources[currentIndex];
        currentIndex = (currentIndex + 1) % imageSources.length;
    }

    intervalId = setInterval(updateImage, 2000);

    rotatingImage.addEventListener('mouseover', function () {
        clearInterval(intervalId);
    });

    rotatingImage.addEventListener('mouseout', function () {
        intervalId = setInterval(updateImage, 5000);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const skills = document.querySelectorAll('.skills');

    skills.forEach(skill => {
        const percent = skill.getAttribute('data-percent');
        skill.style.width = percent + '%';
        applyRunningRainbowEffect(skill);
    });
});

function applyRunningRainbowEffect(skill) {
    const rainbowColors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red', 'pink', 'purple', 'blue', 'green', 'yellow', 'orange'];
    let currentColorIndex = 0;

    setInterval(() => {
        skill.style.backgroundColor = rainbowColors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % rainbowColors.length;
    }, 50);
}
function hideNoButton() {
    var noButton = document.getElementById('noButton');

    noButton.style.opacity = '0';
    noButton.style.height = '100';

    noButton.textContent = 'HEHEHEHEHEHE BYE';

    setTimeout(function() {
        noButton.style.display = 'none';
    }, 10000);
}

function changeImage() {
    var imgElement = document.getElementById('myImage');
    var h5Element = document.querySelector('h5');
    
    imgElement.src = "./asset/bguy.gif";
    h5Element.textContent = 'Bye Thanks for visiting my page!';
    h5Element.style.color = 'Blue';
    
    setTimeout(function() {
        imgElement.style.display = 'none';
        
    }, 1800);
}

function playSong(element) {
    var audio = document.getElementById("myAudio");

    if (audio.paused) {
        audio.play();
        element.classList.add("spin");
    } else {
        audio.pause();
        audio.currentTime = 0;
        element.classList.remove("spin");
    }
}