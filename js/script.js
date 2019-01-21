// SET THE CANVAS :

var canvas = document.querySelector("#game-on");

var ctx = canvas.getContext("2d");

//=====================
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
  bounderies: false
};

function drawplayer() {
  ctx.drawImage(playerImg, player.x, player.y, player.width, player.height);
};


// Player's moves

document.onkeydown = function (event) {
  if (player.bounderies) {
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
// draw random Items 

class Item {
  constructor(itemX, itemY, itemWidth, itemHeight, itemType) {
    this.x = itemX;
    this.y = itemY;
    this.width = itemWidth;
    this.height = itemHeight;
    this.type = itemType;
    this.bounderies = true;
  }

  drawItem(oneItem) {

    if (this.bounderies) {
      this.x = player.x;
      this.y = player.y;

    } else {

    }
    ctx.fillStyle = 'white';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

}

var allItems = [
  new Item(475, 325, 50, 25, "js"),
  new Item(475, 325, 50, 25, "html"),
  new Item(475, 325, 50, 25, "css"),
  new Item(475, 325, 50, 25, "jquery"),


];



//=====================
// Drawing loop
drawingLoop();

function drawingLoop() {
  // erase the whole canvas before re-drawing it (x, y, width, height)
  ctx.clearRect(0, 0, 1000, 600);

  drawRoom();
  drawplayer();

  allItems.forEach(function (oneItem) {
    oneItem.drawItem();
  });


  // ask the browser for a chance to re-draw the scene
  requestAnimationFrame(function () {
    // set un the recursive loop (the function calls it self)
    drawingLoop();
  });
};





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

  // --Draw the desk :

  // ctx.fillStyle = "grey";
  // ctx.fillRect(400, 300, 200, 75)


  // --Draw walls :
  ctx.fillStyle = "maroon";
  ctx.strokeStyle = "brown";
  ctx.lineWidth = 3;

  // Upper walls
  ctx.strokeRect(0, 0, 1000, 15);
  ctx.fillRect(0, 0, 1000, 15);
  ctx.strokeRect(0, 15, 1000, 15);
  ctx.fillRect(0, 15, 1000, 15);
  ctx.strokeRect(0, 30, 1000, 15);
  ctx.fillRect(0, 30, 1000, 15);

  //Downer walls
  ctx.strokeRect(0, 585, 1000, 15);
  ctx.fillRect(0, 585, 1000, 15);
  ctx.strokeRect(0, 570, 1000, 15);
  ctx.fillRect(0, 570, 1000, 15);
  ctx.strokeRect(0, 555, 1000, 15);
  ctx.fillRect(0, 555, 1000, 15);

  // left walls
  ctx.strokeRect(0, 0, 15, 600);
  ctx.fillRect(0, 0, 15, 600);
  ctx.strokeRect(15, 0, 15, 600);
  ctx.fillRect(15, 0, 15, 600);
  ctx.strokeRect(30, 0, 15, 600);
  ctx.fillRect(30, 0, 15, 600);

  // right walls
  ctx.strokeRect(985, 0, 15, 600);
  ctx.fillRect(985, 0, 15, 600);
  ctx.strokeRect(970, 0, 15, 600);
  ctx.fillRect(970, 0, 15, 600);
  ctx.strokeRect(955, 0, 15, 600);
  ctx.fillRect(955, 0, 15, 600);












};

//===================
// carry item 

function itemCollinsion(player, oneItem) {

  if (player.y === this.y || player.x === this.x) {
    this.bounderies === true;
    console.log("yoooo les bounderies ca check ou pas ???")
  }




  // => contact player - item

};

function checkCarryPackage() {
  items.forEach(function (oneItem) {
    if (itemCollinsion(player, oneItem)) {

      // Items moves and player moves are the same

    }
  });

}