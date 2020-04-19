
window.onload = function () {

    var stage = document.getElementById('stage');
    var ctx = stage.getContext("2d");
    document.addEventListener("keydown", keyPush) // evento que chama as teclas do jogo

    //controla a velocidade do jogo
    setInterval(game, 60);

    //constante de velocidade de inicio;
    const vel = 1;

    //variaveis para definir localização da Snake;
    var vx = vy = 0;
    var px = 10;
    var py = 15;
    var tp = 20;
    var qp = 30;
    var ax = ay = 15;

    var trail = [];
    tail = 1;

    function game() {
        px += vx;
        py += vy;

        if (px < 0) {
            px = qp - 1
        }
        if (px > qp - 1) {
            px = 0
        }
        if (py < 0) {
            py = qp - 1
        }
        if (py > qp - 1) {
            py = 0
        }

        ctx.fillStyle = "Cyan";
        ctx.fillRect(0, 0, stage.width, stage.height);

        ctx.fillStyle = "red";
        ctx.fillRect(ax * tp, ay * tp, tp, tp);

        ctx.fillStyle = "Orange";
        for (var i = 0; i < trail.length; i++) {
            ctx.fillRect(trail[i].x * tp, trail[i].y * tp, tp - 1, tp - 1);
            if (trail[i].x == px && trail[i].y == py) {
                vx = vy = 0;
                tail = 1;
            }
        }

        trail.push({ x: px, y: py });
        while (trail.length > tail) {
            trail.shift();
        }

        //almentando a cobra conforme vc come as frutas
        if (ax == px && ay == py) {
            tail++;
            ax = Math.floor(Math.random() * qp);
            ay = Math.floor(Math.random() * qp);
        }
    };
    //função de direção da cobra 
    function keyPush(event) {
        if (event.keyCode == 37){ //left
            vx = -vel;
            vy = 0
        }
        else if(event.keyCode == 38){ // up
            vx = 0;
            vy = -vel;
        }
        else if(event.keyCode == 39){ // right
            vx = vel;
            vy = 0;
        }
        else if(event.keyCode == 40){ // down
            vx = 0;
            vy = vel;
        }
    }
}
