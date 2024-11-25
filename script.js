// Change the background color of the webpage when the button is clicked
document.getElementById("changeColorBtn").addEventListener("click", function () {
    const colors = ["#FFDDC1", "#FFABAB", "#FFC3A0", "#D5AAFF", "#85E3FF"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});