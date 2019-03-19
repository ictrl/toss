let A = Math.floor(Math.random(6) * 6 + 1);
let B = Math.floor(Math.random(6) * 6 + 1);

if (A > B) {
  document.querySelector(".win").innerHTML = "🚩 Winner is player 1 ";
} else if (B > A) {
  document.querySelector(".win").innerHTML = "Winner is player 2 🚩";
} else {
  document.querySelector(".win").innerHTML = "Tie ";
}
document.querySelector(".img1").setAttribute("src", "images/dice" + A + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + B + ".png");
