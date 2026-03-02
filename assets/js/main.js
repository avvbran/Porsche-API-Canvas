

const canvas = document.getElementById("carCanvas");
const ctx = canvas.getContext("2d");

window.onload = iniciarDibujo;

function iniciarDibujo() {
    dibujarFondo();
    dibujarMontanas();
    dibujarCarretera();
    dibujarSombra();
    dibujarCarroceria();
    dibujarVentanas();
    dibujarLuces();
    dibujarRuedas();
    dibujarSpoiler();
    dibujarEscape();
    dibujarReflejo();
}

function dibujarFondo() {
    ctx.fillStyle = "#87CEEB";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function dibujarMontanas() {
    ctx.fillStyle = "#5f6f77";
    ctx.beginPath();
    ctx.moveTo(0, 180);
    ctx.lineTo(180, 130);
    ctx.lineTo(300, 170);
    ctx.lineTo(470, 120);
    ctx.lineTo(600, 180);
    ctx.closePath();
    ctx.fill();
}

function dibujarCarretera() {
    ctx.fillStyle = "#444";
    ctx.fillRect(0, 250, canvas.width, 100);

    ctx.fillStyle = "white";
    ctx.fillRect(250, 295, 100, 6);
}

function dibujarSombra() {
    ctx.fillStyle = "rgba(0,0,0,0.3)";
    ctx.beginPath();
    ctx.ellipse(360, 270, 150, 30, 0, 0, Math.PI * 2);
    ctx.fill();
}

function dibujarCarroceria() {
    ctx.fillStyle = "white";
    ctx.strokeStyle = "#bbb";
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(230, 235);
    ctx.bezierCurveTo(280, 180, 420, 170, 520, 210);
    ctx.lineTo(540, 230);
    ctx.lineTo(470, 245);
    ctx.lineTo(260, 245);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function dibujarVentanas() {
    ctx.fillStyle = "#2c3e50";
    ctx.beginPath();
    ctx.moveTo(300, 205);
    ctx.quadraticCurveTo(380, 160, 470, 195);
    ctx.lineTo(450, 215);
    ctx.lineTo(320, 215);
    ctx.closePath();
    ctx.fill();
}

function dibujarLuces() {
    ctx.fillStyle = "#ff1a1a";
    ctx.fillRect(450, 205, 85, 10);

    ctx.fillStyle = "#ff4d4d";
    ctx.fillRect(455, 208, 75, 4);

    ctx.fillStyle = "#cc0000";
    ctx.fillRect(440, 205, 10, 10);
}

function dibujarRuedas() {
    dibujarRueda(320, 250);
    dibujarRueda(470, 250);
}

function dibujarRueda(x, y) {
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#bfa14a";
    ctx.beginPath();
    ctx.arc(x, y, 18, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "#8c6f1d";
    ctx.lineWidth = 2;

    for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(
            x + 18 * Math.cos(i * Math.PI / 4),
            y + 18 * Math.sin(i * Math.PI / 4)
        );
        ctx.stroke();
    }
}

function dibujarSpoiler() {
    ctx.fillStyle = "#222";
    ctx.fillRect(450, 170, 100, 8);
    ctx.fillRect(470, 178, 8, 25);
    ctx.fillRect(530, 178, 8, 25);
}

function dibujarEscape() {
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(480, 255, 8, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(500, 255, 8, 0, Math.PI * 2);
    ctx.fill();
}

function dibujarReflejo() {
    ctx.fillStyle = "rgba(255,255,255,0.4)";
    ctx.beginPath();
    ctx.moveTo(320, 215);
    ctx.lineTo(450, 215);
    ctx.lineTo(420, 225);
    ctx.lineTo(340, 225);
    ctx.closePath();
    ctx.fill();
}