let ball = document.querySelector("#ball");
let bar = document.querySelector("#bar");
let xal = document.querySelector("h1");
let general = document.querySelector("#general");
let body = document.querySelector("body");
let barX = 0;
let ballY = 0;
let ballX = 0;

let dx = 2;
let dy = -2;
let point = 0;

onkeydown = barMove;

setInterval(ballMove, 20);



function barMove(e) {
    if (e.keyCode == "39") {
        if (barX < 0 || barX < 600) {
            barX += 25
        }
    }


    if (e.keyCode == "37") {
        if (barX > 0) {
            barX -= 25;
        }
    }


    bar.style.left = barX + "px";

}



function ballMove() {


    if (ballX < 0 || ballX > 650) {
        dx *= -1;
    }


    if (ballY < 0) {
        dy *= -1;
    } else if (ballY > 550 && ballX >= barX - 25 && ballX <= barX + 100) {
        dy *= -1;
        point++;
        dx++;
        dy--;

        let symbols = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color = color + symbols[Math.floor(Math.random() * 16)];
        }
        document.querySelector('#ball').style.backgroundColor = color;


    } else if (ballY > 550) {
        body.innerHTML = `<h2>Game Over</h2>`
    };



    xal.innerHTML = `Point : ` + point;

    ballX += dx;
    ballY += dy;

    ball.style.left = ballX + "px";
    ball.style.top = ballY + "px";


}