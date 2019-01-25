//--------------------------------------------------------------------------
// SET THE CANVAS :

var canvas = document.querySelector("#game-on");
var ctx = canvas.getContext("2d");
var gameStarted = false;
var score = 0;

//=====================
// Draw Player

var playerLeftImg = new Image();
playerLeftImg.src = "./images/leftAsh.png";

var playerRightImg = new Image();
playerRightImg.src = "./images/rightAsh.png";

var playerFrontImg = new Image();
playerFrontImg.src = "./images/frontAsh.png";

var playerBackImg = new Image();
playerBackImg.src = "./images/backAsh.png";

var player = {
  x: 475,
  y: 250,
  width: 50,
  height: 50,
  img: playerFrontImg
};


function drawPlayer() {
  ctx.drawImage(player.img, player.x, player.y, player.width, player.height);
}

// Player's moves

document.onkeydown = function (event) {

  if (player.y < 30) {
    player.y = 30;
  }

  if (player.x < 30) {
    player.x = 30;
  }

  if (player.y > 530) {
    player.y = 530;
  }

  if (player.x > 930) {
    player.x = 930;
  }

  switch (event.keyCode) {
    case 37:
      event.preventDefault();
      player.img = playerLeftImg;
      player.x -= 20;
      break;

    case 38:
      event.preventDefault();
      player.img = playerBackImg;
      player.y -= 20;
      break;

    case 39:
      event.preventDefault();
      player.img = playerRightImg;
      player.x += 20;
      break;

    case 40:
      event.preventDefault();
      player.img = playerFrontImg;
      player.y += 20;
      break;
  }

};

//=====================
// draw Items

function getRandomCodeType() {

  var codeType = ["javascript", "html", "css", "canvas", "jquery", "dom"];
  var randomCodeType = codeType[Math.floor(Math.random() * codeType.length)]
  return randomCodeType;
}

var htmlCode = ["<body>", "id='brain'", "class=''''", "<br/>"];
var randomHtmlCode = htmlCode[Math.floor(Math.random() * htmlCode.length)];

var javascriptCode = ["this.brain", "class Item{}", ".splice()", "Math.random"];
var randomJavascriptCode = javascriptCode[Math.floor(Math.random() * javascriptCode.length)];

var cssCode = ["border", ".brain", "[a^='b']", "overflow"];
var randomCssCode = cssCode[Math.floor(Math.random() * cssCode.length)];

var canvasCode = ["ctx.fillText", "addEventListener", "strokeRect", "clearRect"];
var randomCanvasCode = canvasCode[Math.floor(Math.random() * canvasCode.length)];

var jqueryCode = ["$('btn')", ".show()", ".fadeIn(,)", ".click()"];
var randomJqueryCode = jqueryCode[Math.floor(Math.random() * jqueryCode.length)];

var domCode = ["EventTarget()", ".innerHTML()", ".replaceChild()", ".onclick"];
var randomDomCode = domCode[Math.floor(Math.random() * domCode.length)];


class Item {
  constructor(itemX, itemY, itemWidth, itemHeight, itemType) {
    this.x = itemX;
    this.y = itemY;
    this.width = itemWidth;
    this.height = itemHeight;
    this.type = itemType;
    this.carried = false;
    this.scored = false;
    // this.img = getRandomCode();
  }

  drawItem() {
    if (this.carried) {
      this.x = player.x;
      this.y = player.y - 15;
    }
    ctx.fillStyle = "black";
    ctx.strokeStyle = "white";
    ctx.lineWidth = 3;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "silver";
    ctx.fillRect(this.x + 10, this.y + 29, 30, 20);
    ctx.fillRect(this.x + 15, this.y + 1, 20, 15);

    ctx.fillStyle = "black";
    ctx.fillRect(this.x + 27, this.y + 3, 5, 10);






    if (this.type == "html" && this.carried) {

      ctx.fillStyle = "white";
      ctx.font = "25px arial";
      ctx.fillText(randomHtmlCode, 500, 60);

    }
    if (this.type == "javascript" && this.carried) {

      ctx.fillStyle = "white";
      ctx.font = "25px arial";
      ctx.fillText(randomJavascriptCode, 500, 60);

    }
    if (this.type == "css" && this.carried) {

      ctx.fillStyle = "white";
      ctx.font = "25px arial";
      ctx.fillText(randomCssCode, 500, 60);

    }

    if (this.type == "canvas" && this.carried) {

      ctx.fillStyle = "white";
      ctx.font = "25px arial";
      ctx.fillText(randomCanvasCode, 500, 60);
    }

    if (this.type == "jquery" && this.carried) {

      ctx.fillStyle = "white";
      ctx.font = "25px arial";
      ctx.fillText(randomJqueryCode, 500, 60);

    }

    if (this.type == "dom" && this.carried) {

      ctx.fillStyle = "white";
      ctx.font = "25px arial";
      ctx.fillText(randomDomCode, 500, 60);

    }


  }
}

var allItems = [new Item(475, 325, 50, 50, getRandomCodeType())];




//=====================
// Draw Boxes with class

class Box {
  constructor(boxX, boxY, boxWidth, boxHeight, boxType) {
    this.x = boxX;
    this.y = boxY;
    this.width = boxWidth;
    this.height = boxHeight;
    this.type = boxType;
  }
}

var jsBox = new Box(50, 50, 100, 100, "javascript");
var htmlBox = new Box(50, 250, 100, 100, "html");
var cssBox = new Box(50, 450, 100, 100, "css");
var jQueryBox = new Box(850, 50, 100, 100, "jquery");
var canvasBox = new Box(850, 250, 100, 100, "canvas");
var domBox = new Box(850, 450, 100, 100, "dom");

function drawBox() {

  ctx.fillStyle = "silver";
  ctx.fillRect(this.x, this.y, this.width, this.height);

}

//===================
// Start game

function introScreen() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 1000, 600);
  ctx.font = "50px Impact";
  ctx.fillStyle = "tomato";
  ctx.textAlign = "center";
  ctx.fillText("GAME YOUR BRAIN", canvas.width / 2, canvas.height / 2 - 150);
  ctx.font = "30px Impact";
  ctx.fillStyle = "silver";
  ctx.fillText("Help Ash, an IronHack student to organized learnings in his brain", canvas.width / 2, canvas.height / 2 - 70);
  ctx.font = "25px arial";

  ctx.fillText("Goal is to take the disk, see on the screen what's on it", canvas.width / 2, canvas.height / 2 - 30);
  ctx.fillText("and store it in the right server.", canvas.width / 2, canvas.height / 2);

  ctx.fillStyle = "tomato";
  ctx.font = "30px Arial";
  ctx.fillText(
    "Press Enter To Brain",
    canvas.width / 2,
    canvas.height / 2 + 50
  );

  document.body.addEventListener("keydown", function (event) {
    if (event.keyCode == 13 && !gameStarted) {
      // Drawing loop execution
      drawingLoop();
      return stopPlaying

    }
  });

}

//===================
// End game and modal
var finalScore = document.getElementsByClassName("display-score").innerHTML = ('34');
var stopPlaying = setTimeout("endScreen()", 2000);


function endScreen() {

  console.log("Stop playing noob.");
  openModal();
  finalScore;




}

// - modal ----------------

var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// open the modal 
function openModal() {
  modal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  document.location.reload(true)
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//=====================
// Drawing loop description

function drawingLoop() {
  // erase the whole canvas before re-drawing it (x, y, width, height)

  clearCanvas();
  drawRoom();
  drawBox();
  drawPlayer();

  allItems.forEach(function (oneItem) {
    oneItem.drawItem();
  });
  checkCarried();
  checkPlayerDrop();


  requestAnimationFrame(function () {
    drawingLoop();
  });
}
introScreen();


//=====================

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
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

  // ctx.fillStyle = "brown";
  // ctx.fillRect(400, 300, 200, 75)

  // Draw languges names :


  ctx.font = "20px arial";

  ctx.fillStyle = "tomato";
  ctx.fillText("<= JS", 350, 120);
  ctx.fillStyle = "blue";
  ctx.fillText("<= HTML", 350, 320);
  ctx.fillStyle = "limegreen";
  ctx.fillText("<= CSS", 350, 520);

  ctx.fillStyle = "indogo";
  ctx.fillText("Canvas =>", 650, 120);
  ctx.fillStyle = "darkgreen";
  ctx.fillText("jQuery =>", 650, 320);
  ctx.fillStyle = "hotpink";
  ctx.fillText("DOM =>", 650, 520);



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

  // draw screen 

  ctx.fillStyle = "DarkSlateGrey";
  ctx.strokeStyle = "silver";
  ctx.lineWidth = 3;

  ctx.strokeRect(380, 10, 240, 95);
  ctx.fillRect(380, 10, 240, 95);

  ctx.fillStyle = "black";
  ctx.strokeStyle = "silver";
  ctx.strokeRect(400, 20, 200, 75);
  ctx.fillRect(400, 20, 200, 75);


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

  // boxes background

  ctx.fillStyle = "DarkSlateGrey";
  ctx.strokeStyle = "white";
  ctx.lineWidth = 3;

  ctx.strokeRect(50, 50, 100, 100);
  ctx.fillRect(50, 50, 100, 100);

  ctx.strokeRect(50, 250, 100, 100);
  ctx.fillRect(50, 250, 100, 100);

  ctx.strokeRect(50, 450, 100, 100);
  ctx.fillRect(50, 450, 100, 100);

  ctx.strokeRect(850, 50, 100, 100);
  ctx.fillRect(850, 50, 100, 100);

  ctx.strokeRect(850, 250, 100, 100);
  ctx.fillRect(850, 250, 100, 100);

  ctx.strokeRect(850, 450, 100, 100);
  ctx.fillRect(850, 450, 100, 100);

  // inner rects 
  ctx.fillStyle = "black";
  ctx.strokeStyle = "silver";
  ctx.lineWidth = 3;

  // - box 1
  ctx.strokeRect(70, 70, 60, 15);
  ctx.fillRect(70, 70, 60, 15);
  ctx.strokeRect(70, 85, 60, 15);
  ctx.fillRect(70, 85, 60, 15);
  ctx.strokeRect(70, 100, 60, 15);
  ctx.fillRect(70, 100, 60, 15);
  ctx.strokeRect(70, 115, 60, 15);
  ctx.fillRect(70, 115, 60, 15);



  // - box 2
  ctx.strokeRect(70, 270, 60, 15);
  ctx.fillRect(70, 270, 60, 15);
  ctx.strokeRect(70, 285, 60, 15);
  ctx.fillRect(70, 285, 60, 15);
  ctx.strokeRect(70, 300, 60, 15);
  ctx.fillRect(70, 300, 60, 15);
  ctx.strokeRect(70, 315, 60, 15);
  ctx.fillRect(70, 315, 60, 15);

  // - box 3
  ctx.strokeRect(70, 470, 60, 15);
  ctx.fillRect(70, 470, 60, 15);
  ctx.strokeRect(70, 485, 60, 15);
  ctx.fillRect(70, 485, 60, 15);
  ctx.strokeRect(70, 500, 60, 15);
  ctx.fillRect(70, 500, 60, 15);
  ctx.strokeRect(70, 515, 60, 15);
  ctx.fillRect(70, 515, 60, 15);

  // - box 4
  ctx.strokeRect(870, 70, 60, 15);
  ctx.fillRect(870, 70, 60, 15);
  ctx.strokeRect(870, 85, 60, 15);
  ctx.fillRect(870, 85, 60, 15);
  ctx.strokeRect(870, 100, 60, 15);
  ctx.fillRect(870, 100, 60, 15);
  ctx.strokeRect(870, 115, 60, 15);
  ctx.fillRect(870, 115, 60, 15);

  // - box 5
  ctx.strokeRect(870, 270, 60, 15);
  ctx.fillRect(870, 270, 60, 15);
  ctx.strokeRect(870, 285, 60, 15);
  ctx.fillRect(870, 285, 60, 15);
  ctx.strokeRect(870, 300, 60, 15);
  ctx.fillRect(870, 300, 60, 15);
  ctx.strokeRect(870, 315, 60, 15);
  ctx.fillRect(870, 315, 60, 15);

  // - box 6
  ctx.strokeRect(870, 470, 60, 15);
  ctx.fillRect(870, 470, 60, 15);
  ctx.strokeRect(870, 485, 60, 15);
  ctx.fillRect(870, 485, 60, 15);
  ctx.strokeRect(870, 500, 60, 15);
  ctx.fillRect(870, 500, 60, 15);
  ctx.strokeRect(870, 515, 60, 15);
  ctx.fillRect(870, 515, 60, 15);


}

//=====================
// Items to be carried:
function itemSelection() {
  selectItem = allItems[allItems.length - 1];

  return selectItem;
}

function itemToBeCarry(player) {
  itemSelection();

  return (
    player.x + player.width > selectItem.x &&
    player.x < selectItem.x + selectItem.width &&
    player.y + player.height > selectItem.y &&
    player.y < selectItem.y + selectItem.height
  );
}

function checkCarried() {
  allItems.forEach(function () {
    if (itemToBeCarry(player)) {
      selectItem.carried = true;
    }
  });
}

//=====================
// Items to be dropped

function checkPlayerDrop() {
  itemSelection();

  if (!selectItem.carried) {
    return;
  }

  var jsDrop =
    player.x > 0 && player.x < 100 && player.y > -100 && player.y < 150;
  var htmlDrop =
    player.x > 0 && player.x < 100 && player.y > 250 && player.y < 350;
  var cssDrop =
    player.x > 0 && player.x < 100 && player.y > 450 && player.y < 550;

  var canvasDrop =
    player.x > 870 && player.x < 1000 && player.y > -100 && player.y < 150;
  var jqueryDrop =
    player.x > 870 && player.x < 1000 && player.y > 250 && player.y < 350;
  var domDrop =
    player.x > 870 && player.x < 1000 && player.y > 450 && player.y < 550;

  if (jsDrop && !selectItem.scored) {
    if (selectItem.type == "javascript") {
      score += 20;
      console.log("pountos working js", score);
    }
    selectItem.scored = true;
    selectItem.carried = false;
    allItems.push(new Item(575, 325, 50, 50, getRandomCodeType()));
    console.log("js foucking helllll");
  }


  if (htmlDrop && !selectItem.scored) {
    if (selectItem.type == "html") {
      score += 20;
      console.log("pountos working html", score);
    }
    selectItem.scored = true;
    selectItem.carried = false;
    allItems.push(new Item(475, 325, 50, 50, getRandomCodeType()));
    console.log("html foucking helllll");
  }

  if (cssDrop && !selectItem.scored) {
    if (selectItem.type == "css") {
      score += 20;
      console.log("pountos working css", score);
    }
    selectItem.scored = true;
    selectItem.carried = false;
    allItems.push(new Item(375, 325, 50, 50, getRandomCodeType()));
    console.log("css foucking helllll");
  }


  if (canvasDrop && !selectItem.scored) {
    if (selectItem.type == "canvas") {
      score += 20;
      console.log("pountos working canvas", score);
    }
    selectItem.scored = true;
    selectItem.carried = false;
    allItems.push(new Item(475, 325, 50, 50, getRandomCodeType()));
    console.log("canvas foucking helllll");
  }

  if (jqueryDrop && !selectItem.scored) {
    if (selectItem.type == "jquery") {
      score += 20;
      console.log("pountos working jquery", score);
    }
    selectItem.scored = true;
    selectItem.carried = false;
    allItems.push(new Item(475, 325, 50, 50, getRandomCodeType()));
    console.log("jquery foucking helllll");
  }
  if (domDrop && !selectItem.scored) {
    if (selectItem.type == "dom") {
      score += 20;
      console.log("pountos working dom", score);
    }
    selectItem.scored = true;
    selectItem.carried = false;
    allItems.push(new Item(475, 325, 50, 50, getRandomCodeType()));
    console.log("dom foucking helllll");
  }

}