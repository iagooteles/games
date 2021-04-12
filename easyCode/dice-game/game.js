const button = document.querySelector("#button");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const h1 = document.querySelector("h1");
let player1, player2;

const createNumber = () => {
    let number = Math.floor((Math.random() * 6) + 1)

    return number;
}

button.addEventListener("click", () => {
    player1 = createNumber();
    player2 = createNumber();

    img1.src = `../dice-game/images/dice${player1}.png`
    img2.src = `../dice-game/images/dice${player2}.png`

    if (player1 > player2) {
        h1.textContent = "player 1 wins!"
    } else if (player2 > player1) {
        h1.textContent = "player 2 wins!"
    } else {
        h1.textContent = "that's a draw!"
    }
});