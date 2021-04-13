const color = ["green", "red", "yellow", "blue"];
let gamePattern = [];
let playerPattern = [];
let level = 0;
let started = false;

// logica do começo do jogo
$(document).keydown(function () {
    if (started === false) {
        started = true;
        level++;
        $('#level-title').text(`level:${level}`);

        init()
    }
});

function init() {
    gamePattern = [];
    playerPattern = [];
    level = 0;
    $('#level-title').text(`level:${level}`);  
    $('#span').text(``);
 

    nextColor();
};

function nextColor() {
    let randomNumber = Math.floor(Math.random() * 4)
    let randomColor = color[randomNumber];

    $(`.${randomColor}`).fadeOut(100).fadeIn(100);
    playSound(randomColor);

    level++;
    $('#level-title').text(`level:${level}`);   

    gamePattern.push(randomColor);
    return randomColor;
}

// logica da escolha do jogador

$('.btn').click(function () {
    if(started) {
        let chosenColor = $(this).attr('id');
        $(`.${chosenColor}`).fadeOut(100).fadeIn(100);
        playSound(chosenColor);
    
        playerPattern.push(chosenColor);
    
        checkAnswer(playerPattern.length - 1);
    }

});

// Tocar som //
function playSound(color) {
    let audio = new Audio(`./sounds/${color}.mp3`);
    audio.play();
};

// logica da comparação entre as escolhas
function checkAnswer(level) {
    if (playerPattern[level] === gamePattern[level]) {     

        if (playerPattern.length === gamePattern.length) {
            setTimeout(function () {  
                playerPattern = [];
                nextColor();
            }, 1000);
        }
    } else {
        gameOver();
    }
}

// game over
function gameOver() {
    started = false;

    $("body").addClass("game-over");
    setTimeout(() => { $("body").removeClass("game-over") }, 300);

    $('#level-title').text(`Game over! Your final score is:${level}`);
    $('#span').text(`Press any key to play again`);
}