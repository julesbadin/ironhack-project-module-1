//--------------------------------------------------------------------------
// SET THE CANVAS :

var canvas = document.querySelector("#game-on");
var ctx = canvas.getContext("2d");
var gameStarted = false;

//=====================
// draw Items 


var codeType = ["javascript", "html", "css", "jQuery", "DOM", "canvas"];
var randomCodeType = codeType[Math.floor(Math.random() * codeType.length)]

class Item {
  constructor(itemX, itemY, itemWidth, itemHeight, randomCodeType) {
    this.x = itemX;
    this.y = itemY;
    this.width = itemWidth;
    this.height = itemHeight;
    this.type = randomCodeType;
    this.carried = true;
  }

  drawItem() {

    if (this.carried) {
      this.x = player.x;
      this.y = player.y - 15;

    } else {

    }
    ctx.fillStyle = 'white';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

}





var allItems = [
  new Item(475, 325, 50, 25, randomCodeType),
  // new Item(475, 325, 50, 25, randomCodeType),
  // new Item(475, 325, 50, 25, randomCodeType),
  // new Item(475, 325, 50, 25, randomCodeType),
  // new Item(475, 325, 50, 25, randomCodeType),
  // new Item(475, 325, 50, 25, randomCodeType)

];




//=====================
// Draw Player 

var playerImg = new Image();
playerImg.src = "./images/ash.png";
playerImg.onload = function () {
  drawPlayer()
};

var player = {
  x: 475,
  y: 250,
  width: 50,
  height: 50,
};

function drawPlayer() {
  ctx.drawImage(playerImg, player.x, player.y, player.width, player.height);
};


// Player's moves

document.onkeydown = function (event) {


  if (player.y < 30) {
    player.y = 30
  }

  if (player.x < 30) {
    player.x = 30
  }

  if (player.y > 530) {
    player.y = 530
  }

  if (player.x > 930) {
    player.x = 930
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
// Draw Boxes


class Box {
  constructor(boxX, boxY, boxWidth, boxHeight, boxType) {
    this.x = boxX;
    this.y = boxY;
    this.width = boxWidth;
    this.height = boxHeight;
    this.type = boxType;
  }

  drawBox() {


    ctx.fillStyle = 'silver';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

}

var allBoxes = [
  new Box(50, 50, 100, 100, "javascript"),
  new Box(50, 250, 100, 100, "html"),
  new Box(50, 450, 100, 100, "css"),
  new Box(850, 50, 100, 100, "jQuery"),
  new Box(850, 250, 100, 100, "DOM"),
  new Box(850, 450, 100, 100, "canvas")

];

// - check type between boxes and items



//===================
// Start game


function introScreen() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 1000, 600);
  ctx.font = "50px Impact";
  ctx.fillStyle = "tomato";
  ctx.textAlign = "center";
  ctx.fillText("GAME YOUR BRAIN", canvas.width / 2, canvas.height / 2);

  ctx.font = "20px Arial";
  ctx.fillText("Press Enter To Brain", canvas.width / 2, canvas.height / 2 + 50);


  document.body.addEventListener("keydown", function (event) {

    if (event.keyCode == 13 && !gameStarted) {
      // Drawing loop execution
      drawingLoop();

    }

  });
}


//=====================
// Drawing loop description



function drawingLoop() {

  // erase the whole canvas before re-drawing it (x, y, width, height)
  clearCanvas();
  drawRoom();


  allBoxes.forEach(function (oneBox) {
    oneBox.drawBox();
  });

  drawPlayer();

  allItems.forEach(function (oneItem) {
    oneItem.drawItem();
  });
  checkCarried();
  checkDrops();

  requestAnimationFrame(function () {
    drawingLoop();
  });
};

introScreen();



//=====================



function clearCanvas() {
  ctx.clearRect(0, 0, 1000, 600);
}


//Draw the room :
function drawRoom() {

  // Draw floor 
  ctx.fillStyle = "Wheat";
  ctx.strokeStyle = "Tan";
  ctx.lineWidth = 3;
  ctx.fillRect(0, 0, 1000, 600);
  ctx.strokeRect(0, 0, 200, 100);
  ctx.strokeRect(200, 0, 200, 100);
  ctx.strokeRect(400, 0, 200, 100);
  ctx.strokeRect(600, 0, 200, 100);
  ctx.strokeRect(800, 0, 200, 100);

  ctx.strokeRect(-100, 000, 200, 100);
  ctx.strokeRect(100, 000, 200, 100);
  ctx.strokeRect(300, 000, 200, 100);
  ctx.strokeRect(500, 000, 200, 100);
  ctx.strokeRect(700, 000, 200, 100);
  ctx.strokeRect(900, 000, 200, 100);

  ctx.strokeRect(-100, 100, 200, 100);
  ctx.strokeRect(100, 100, 200, 100);
  ctx.strokeRect(300, 100, 200, 100);
  ctx.strokeRect(500, 100, 200, 100);
  ctx.strokeRect(700, 100, 200, 100);
  ctx.strokeRect(900, 100, 200, 100);

  ctx.strokeRect(0, 200, 200, 100);
  ctx.strokeRect(200, 200, 200, 100);
  ctx.strokeRect(400, 200, 200, 100);
  ctx.strokeRect(600, 200, 200, 100);
  ctx.strokeRect(800, 200, 200, 100);

  ctx.strokeRect(-100, 200, 200, 100);
  ctx.strokeRect(100, 200, 200, 100);
  ctx.strokeRect(300, 200, 200, 100);
  ctx.strokeRect(500, 200, 200, 100);
  ctx.strokeRect(700, 200, 200, 100);
  ctx.strokeRect(900, 200, 200, 100);

  ctx.strokeRect(-100, 300, 200, 100);
  ctx.strokeRect(100, 300, 200, 100);
  ctx.strokeRect(300, 300, 200, 100);
  ctx.strokeRect(500, 300, 200, 100);
  ctx.strokeRect(700, 300, 200, 100);
  ctx.strokeRect(900, 300, 200, 100);

  ctx.strokeRect(0, 400, 200, 100);
  ctx.strokeRect(200, 400, 200, 100);
  ctx.strokeRect(400, 400, 200, 100);
  ctx.strokeRect(600, 400, 200, 100);
  ctx.strokeRect(800, 400, 200, 100);

  ctx.strokeRect(-100, 400, 200, 100);
  ctx.strokeRect(100, 400, 200, 100);
  ctx.strokeRect(300, 400, 200, 100);
  ctx.strokeRect(500, 400, 200, 100);
  ctx.strokeRect(700, 400, 200, 100);
  ctx.strokeRect(900, 400, 200, 100);

  ctx.strokeRect(-100, 500, 200, 100);
  ctx.strokeRect(100, 500, 200, 100);
  ctx.strokeRect(300, 500, 200, 100);
  ctx.strokeRect(500, 500, 200, 100);
  ctx.strokeRect(700, 500, 200, 100);
  ctx.strokeRect(900, 500, 200, 100);




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

  // Draw transfo

  // left



  ctx.fillStyle = "DarkSlateGrey";
  ctx.strokeStyle = "silver";
  ctx.lineWidth = 3;

  ctx.strokeRect(220, 20, 75, 30);
  ctx.fillRect(220, 20, 75, 30);
  ctx.strokeRect(220, 10, 75, 10);
  ctx.fillRect(220, 10, 75, 10);

  ctx.fillStyle = "tomato";
  ctx.fillRect(222, 12, 6, 6);
  ctx.fillStyle = "chartreuse";
  ctx.fillRect(230, 12, 6, 6);
  ctx.fillStyle = "blue";
  ctx.fillRect(238, 12, 6, 6);


  // rigth
  ctx.fillStyle = "black";
  ctx.strokeStyle = "grey";
  ctx.lineWidth = 3;

  ctx.strokeRect(90, 135, 20, 30);
  ctx.fillRect(90, 135, 20, 30);

  ctx.fillStyle = "DarkSlateGrey";
  ctx.strokeStyle = "silver";
  ctx.lineWidth = 3;

  ctx.strokeRect(710, 20, 75, 30);
  ctx.fillRect(710, 20, 75, 30);
  ctx.strokeRect(710, 10, 75, 10);
  ctx.fillRect(710, 10, 75, 10);

  ctx.fillStyle = "chartreuse";
  ctx.fillRect(712, 12, 6, 6);
  ctx.fillStyle = "blue";
  ctx.fillRect(770, 12, 6, 6);
  ctx.fillStyle = "red";
  ctx.fillRect(778, 12, 6, 6);

  // draw wires
  ctx.fillStyle = "black";
  ctx.strokeStyle = "white";
  ctx.lineWidth = 3;

  //left side brain


  ctx.strokeRect(270, 45, 5, 70);
  ctx.fillRect(270, 45, 5, 70);
  ctx.strokeRect(145, 110, 130, 5);
  ctx.fillRect(145, 110, 130, 5);

  ctx.strokeRect(240, 45, 5, 270);
  ctx.fillRect(240, 45, 5, 270);
  ctx.strokeRect(145, 310, 100, 5);
  ctx.fillRect(145, 310, 100, 5);

  ctx.strokeRect(255, 45, 5, 470);
  ctx.fillRect(255, 45, 5, 470);
  ctx.strokeRect(145, 510, 115, 5);
  ctx.fillRect(145, 510, 115, 5);




  //right side brain

  ctx.strokeRect(760, 45, 5, 70);
  ctx.fillRect(760, 45, 5, 70);
  ctx.strokeRect(760, 110, 130, 5);
  ctx.fillRect(760, 110, 130, 5);

  ctx.strokeRect(730, 45, 5, 270);
  ctx.fillRect(730, 45, 5, 270);
  ctx.strokeRect(730, 310, 150, 5);
  ctx.fillRect(730, 310, 150, 5);

  ctx.strokeRect(745, 45, 5, 470);
  ctx.fillRect(745, 45, 5, 470);
  ctx.strokeRect(745, 510, 115, 5);
  ctx.fillRect(745, 510, 115, 5);


};




//=====================
// Items to be carried:



function itemToBeCarry(player, oneItem) {
  var oneItem = allItems[Math.floor(Math.random() * allItems.length)]

  return (
    player.x > oneItem.x &&
    player.x < oneItem.x + Item.width &&
    player.y > oneItem.y &&
    player.y < oneItem.y + oneItem.height

  )
}

function checkCarried() {
  allItems.forEach(function (oneItem) {
    if (itemToBeCarry(player)) {
      oneItem.carried = true
    }
  });
}

//=====================
// Items to be dropped



function itemToBeDrop(oneItem) {

  var jsBox = oneItem.x > 0 && oneItem.x < 100 && oneItem.y > -100 && oneItem.y < 150;
  var htmlBox = oneItem.x > 0 && oneItem.x < 100 && oneItem.y > 250 && oneItem.y < 350;
  var cssBox = oneItem.x > 0 && oneItem.x < 100 && oneItem.y > 450 && oneItem.y < 550;

  if (oneItem = jsBox) {
    return jsBox
  }

  if (oneItem = htmlBox) {
    return htmlBox
  }

  if (oneItem = cssBox) {
    return cssBox
  }


}

function checkDrops() {
  allItems.forEach(function (oneItem) {
    if (itemToBeDrop(player)) {
      oneItem.carried = false

    }
  });
}