const colors = ["green", "red", "rgba(133,122,200)", "blue", "yellow", "pink", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();  // getting random index value of colors array
   // console.log(randomNumber);  // to check if no's are not in points

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

});

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}
