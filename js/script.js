// SET THE CANVAS :

var canvas = document.querySelector("#game-on");

var ctx = canvas.getContext("2d");


// Draw Player 

var playerImg = new Image();
playerImg.src = "./images/ash.png";
playerImg.onload = function () {
  drawplayer()
};

var player = {
  x: 475,
  y: 250,
  width: 50,
  height: 50,
  isCrashed: false
};

function drawplayer() {
  ctx.drawImage(playerImg, player.x, player.y, player.width, player.height);
};


// Items 

// Player's moves

document.onkeydown = function (event) {
  if (player.isCrashed) {
    return
  }

  switch (event.keyCode) {
    case 37:
      event.preventDefault();
      player.x -= 20;
      break;

    case 38:
      event.preventDefault();
      player.y -= 20;
      break;

    case 39:
      event.preventDefault();
      player.x += 20;
      break;

    case 40:
      event.preventDefault();
      player.y += 20;
      break;
  };

};


//=====================
// Drawing loop
drawingLoop();

function drawingLoop() {
  // erase the whole canvas before re-drawing it (x, y, width, height)
  ctx.clearRect(0, 0, 1000, 600);

  drawRoom();
  drawplayer();
  drawItems();


  // ask the browser for a chance to re-draw the scene
  requestAnimationFrame(function () {
    // set un the recursive loop (the function calls it self)
    drawingLoop();
  });
};


//=====================
// Draw Items : 

function drawItems() {
  ctx.fillStyle = "white";
  ctx.fillRect(475, 325, 50, 25);
  ctx.strokeRect(475, 325, 50, 25);
}





//=====================
//Draw the room :
function drawRoom() {

  // Draw background color
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, 1000, 600);

  // - Draw the libraries :

  ctx.fillStyle = "silver";
  // --left column
  ctx.fillRect(0, 50, 150, 100);
  ctx.fillRect(0, 250, 150, 100);
  ctx.fillRect(0, 450, 150, 100);
  // --right column 
  ctx.fillRect(850, 50, 150, 100);
  ctx.fillRect(850, 250, 150, 100);
  ctx.fillRect(850, 450, 150, 100);

  // - Draw the desk :

  ctx.fillStyle = "grey";
  ctx.fillRect(400, 300, 200, 75)

};