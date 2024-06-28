function changeBackgroundColor() {
    const mainElement = document.querySelector('main');
    const colors = ['#e57373', '#81c784', '#64b5f6', '#ffb74d', '#9575cd']; // Add your desired colors
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    mainElement.style.backgroundColor = randomColor;
}

setInterval(changeBackgroundColor, 1000);