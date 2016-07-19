var game = new Phaser.Game(640, 520, Phaser.AUTO, 'gamingArea', { preload: preload, create: create, update: update });


function preload()
{
  //Importing the asset(s) required for the game
    game.load.image('background',  'images/background_640_520.jpg');
   game.load.image('trapezium',  'images/trapezium.png');
   game.load.image('triangle' , 'images/triangle.png');
   game.load.image('living',  'images/living_30_30.png');
   game.load.image('circle','images/circle.png');
    game.load.image('dead','images/dead_30_30.png');  
    game.load.image('start_screen','images/startScreen_640_520.jpg');
   game.load.image('start_button','images/start_50_50.png');
      game.load.image('replay','images/replay_100_100.png');
   game.load.image('pause','images/pause_30_30.png'); 
   game.load.image('square','images/square.png');   
}

var pauseState = 0;
var level = 1;
var livingState; //create
var life;
var triangle;
var trapezium;
var score = 0;
var isCorrect = null;
var lifeline = 3;
var play;
var circle = [];
var pause;
var p=0;
var tempText;
var mylevel;
var myscore;
var startScreen;
var startButton;
var randomvar;
var check = [0,0,0,0];
var triangletext = [];
var trapeziumtext= [];
var squaretext = [];
var side;
var height;
var base;
var parallel1;
var parallel2;
var distance;
var area = [];
var text = [];
var flag;
var sprite = [];
var fig;
function create()
{
      game.add.sprite(0 , 0 , 'background'); 
	livingState = game.add.group();
	for(var p = 0 ; p < 3 ; p++)
	{
		life = livingState.create(7 , 200 + p*35 , 'living');
	}
      
     
   
     fig =  game.add.text(200, 70, 'calculate the area of this triangle' ,{font : "18px Arial" , fill : "#0097a7"});
      
      circle[0]=game.add.sprite( 240, 320 , 'circle');      
      circle[1]=game.add.sprite( 340, 320 , 'circle');
      circle[2]=game.add.sprite(  240, 400 , 'circle');    
      circle[3]=game.add.sprite( 340, 400 , 'circle'); 
      
      text[0] = game.add.text(258, 340, "" ,{font : "25px Arial" , fill : "#0097a7"});
      text[1] = game.add.text(358, 338, "" ,{font : "25px Arial" , fill : "#0097a7"});
      text[2] = game.add.text(258, 418, "" ,{font : "25px Arial" , fill : "#0097a7"});
      text[3] = game.add.text(358, 418, "" ,{font : "25px Arial" , fill : "#0097a7"}); 
      
    myscore = game.add.text(10, 20 , '000' , {font : "20px Arial" , fill : "#FF0000"});
    mylevel = game.add.text(300, 20 , '01' , {font : "20px Arial" , fill : "#FF0000"});
    timer = game.add.text(515, 20, '00:00:00' ,{font : "20px Arial" , fill : "#FF0000"}); 
    

      for(var i = 0; i < 4; i++ )
      {
            circle[i].inputEnabled = true;
      }  	
      pause = game.add.sprite(575,455,'pause');
       pause.inputEnabled = true;
      display();
    tempText = game.add.text(470, 470 , ' ' , {font : "15px Arial" , fill : "#eceff1"});

    startScreen=game.add.sprite(0,0,'start_screen');
    startButton=game.add.sprite(560,465,'start_button');
    startButton.inputEnabled = true;
    startButton.events.onInputUp.add(startingGame);    

}
function startingGame()
{
  startScreen.destroy();
  startButton.destroy();
  startGame = 1;
  game.time.reset();
}


function update()
{
  	updateTimer();
      
         game.input.enabled=true; 
          circle[0].events.onInputDown.add(circleone);
           circle[0].events.onInputUp.add(updateBox);

         circle[1].events.onInputDown.add(circletwo);
         circle[1].events.onInputUp.add(updateBox);

         circle[2].events.onInputDown.add(circlethree);
          circle[2].events.onInputUp.add(updateBox);

      circle[3].events.onInputDown.add(circlefour);
       circle[3].events.onInputUp.add(updateBox);
       pause.events.onInputUp.add(pauseAndPlay);
}

var answer = null;
function circleone()
 {
     if(pauseState === 0)
        {
            answer = 0;

       }

}

function circletwo()
 {
     if(pauseState === 0)
        {
            answer = 1;

       }

}


function circlethree()
 {
     if(pauseState === 0)
        {
            answer = 2;

       }

}


function circlefour()
 {
     if(pauseState === 0)
        {
            answer = 3;

       }

}

function display()
{     randomvar = game.rnd.integerInRange(1,100) % 3;
    remove();
   if(randomvar===0)
   {
            
    sprite[randomvar] = game.add.sprite(210,110,'triangle');
     check[randomvar]=1;
     fig.setText('calculate the area of this triangle'); 
       triangletext[0]= game.add.text(280, 270, "" ,{font : "18px Arial" , fill : "#0097a7"});
    triangletext[1]= game.add.text(213,  200, "" ,{font : "18px Arial" , fill : "#0097a7"});
   
     height=  game.rnd.integerInRange(1,10);
     base = game.rnd.integerInRange(1,10);
  
     triangletext[0].setText(base);
     triangletext[1].setText(height);
      calculatearea(randomvar); 
}


    else if (randomvar === 1 )

   {  
    sprite[randomvar] = game.add.sprite(210,130,'trapezium');
     check[randomvar] = 1;
     fig.setText('Calculate the area of this trapezium');  
     parallel1=  game.rnd.integerInRange(1,10);
     parallel2=  game.rnd.integerInRange(1,10);
     distance = game.rnd.integerInRange(1,10);
     
     trapeziumtext[0]=game.add.text(320,130 , "" ,{font : "18px Arial" , fill : "#0097a7"});
      trapeziumtext[1]=game.add.text(320,250, "" ,{font : "18px Arial" , fill : "#0097a7"});
     trapeziumtext[2]= game.add.text(320,180, "" ,{font : "18px Arial" , fill : "#0097a7"});

   
     trapeziumtext[0].setText(parallel1);
     trapeziumtext[1].setText(parallel2);
     trapeziumtext[2].setText(distance);
    calculatearea(randomvar); 
   }
 else
  {  
    sprite[randomvar] = game.add.sprite(250,130,'square');
    check[randomvar] = 1;
    fig.setText('Calculate the area of this square'); 
     side =  game.rnd.integerInRange(1,10);
    squaretext[0]=game.add.text(220,180 , "" ,{font : "18px Arial" , fill : "#0097a7"});
    squaretext[1]=game.add.text(290,270 , "" ,{font : "18px Arial" , fill : "#0097a7"});

     squaretext[0].setText(side);
        squaretext[1].setText(side);
      calculatearea(randomvar); 

  }

}

 function calculatearea(randomvar)
 {
   if(randomvar === 0 )
     area[randomvar] = (base *  height)/2;
   
   else if (randomvar === 1)
    area[randomvar] =( (parallel1 + parallel2)* distance )/2;
   
  else
  area[randomvar] = ( side * side );
   for(var k=0; k < 4; k++)
    { 
      text[k].setText(game.rnd.integerInRange(1,100));
    }
   flag = game.rnd.integerInRange(1,100)%4;
  text[flag].setText(area[randomvar]);

  }
function remove()
{
      for(var l=0 ; l < 3 ; l++)
          if(check[l] === 1)
            {
                sprite[l].destroy();
             if(l === 0)
              {  for(p = 0; p < triangletext.length ; p++)
                      triangletext[p].destroy();
              }               


              else if (l === 1)
              {  for(p = 0; p < trapeziumtext.length ; p++)
                      trapeziumtext[p].destroy();
              }              
     
              else
                {  for(p = 0; p < squaretext.length ; p++)
                      squaretext[p].destroy();
                 
               }
                
      }
       


}
var deadOne;
var deadTwo;

function updateBox()
{
  if (pauseState === 0 )
  {
    //love.kill();
    updateScore();
    display();
    if(isCorrect)
    {
      //love = game.add.sprite(535, 350 , 'happy');
    }
    else
    {
      //love = game.add.sprite(535, 350 , 'sad');
    if(lifeline === 2)
      {
        livingState.getAt(0).kill();
        deadOne = game.add.sprite(27,180,'dead');
      }
      else if (lifeline === 1)
      {
        livingState.getAt(1).kill();
        deadTwo = game.add.sprite(27,218,'dead');
      }
      else if (lifeline === 0)
      {

        livingState.getAt(2).kill();
        game.add.sprite(27,256,'dead');
        gameOver();
        //var TuxMathAd = game.add.text(246, 327 , '\"Try TuxMath :D  !\"', {font : "17px Arial" , fill : "#ffffff"});

      }
    }
  }
}
var destroy
var replay;
var headingContent;
var instructionContent;
function gameOver()
{
        pauseState = 1;
        pause.inputEnabled = false;
                
        destroy = game.add.text(272, 305 , 'Game Over !' , {font : "17px Arial" , fill : "#ec407a"});

	
	replay = game.add.sprite(game.world.centerX, game.world.centerY, 'replay');
	replay.anchor.set(0.5);
    startGame = 0;
	replay.inputEnabled = true;
	replay.events.onInputUp.add(replayGame);
}

function replayGame()
{
  pause.destroy();
  pause = game.add.sprite(575,455,'pause');
  pause.inputEnabled = true;
   //pausekey = game.input.keyboard.addKey(Phaser.Keyboard.P);
  tempText = game.add.text(470, 470 , ' ' , {font : "15px Arial" , fill : "#eceff1"});
	pauseState  = true;
	pauseAndPlay();
	score = 0;
	displayScore = 0;
	myscore.setText('000');
	timer.setText('00:00:00');
  totalSeconds = 0;
  gameSeconds = 0;
  timePaused = 0;
	//playpause.inputEnabled = true;
	//timeText = null;
	startGame = 1;
	game.time.reset();
	destroy.setText(" ");

	replay.inputEnabled = false;
	replay.destroy();
	updateLife();
        display();
	//displayBirds();
	

}

var displayScore;

function updateScore()
{

  if((answer === 0)&&(flag === 0))
    {
      score+=25;
      isCorrect = 1;
    }
    else if((answer === 1)&&(flag === 1))
    {
      score+=25;
      isCorrect = 1;
    }
    else if((answer === 2)&&(flag === 2))
    {
      score+=25;
      isCorrect = 1;
    }
    else if((answer === 3)&&(flag=== 3))
    {
      score+=25;
      isCorrect = 1;
    }
    else
    {
      isCorrect = 0;
      lifeline--;
    }


  if (score < 100)
  {
    displayScore = '00' + score;
  }
  else if (score < 1000)
  {
    displayScore = '0' + score;
  }
  else
  {
    displayScore = score;
  }
  myscore.setText(displayScore);
  updateLevel();
}

function updateLevel()
{
  var levelFlag = level;
  level = Math.floor(score/250) + 1;
  mylevel.setText('0'+level);
  if(levelFlag !== level)
  {
    updateLife();
  }
}
function updateLife()
{
  if (lifeline === 3)
  {
    livingState.getAt(0).kill();
    livingState.getAt(1).kill();
    livingState.getAt(2).kill();
  }
  else if (lifeline === 2)
  {
    livingState.getAt(1).kill();
    livingState.getAt(2).kill();
    deadOne.kill();
  }
  else if(lifeline === 1)
  {
    livingState.getAt(2).kill();
    deadOne.kill();
    deadTwo.kill();
  }
  //Now update the lifelines and bring it back again. :)
  lifeline = 3;
  livingState = game.add.group();
  for(var p = 0 ; p < 3 ; p++)
  {
    life = livingState.create(27 , 180 + p*38 , 'living');
  }

}
var timer;
var totalSeconds = 0;
var gameSeconds = 0;
var timePaused = 0;
var timeUpdateFlag = 1;
var startGame = 0;
var timeText;
// The userdefined function to update the timer.
function updateTimer()
{
	if(startGame === 1)
	{
	//To find and display the elapsed time.
	if(pauseState === 0)
	{
		if(timeUpdateFlag === 0)
		{
			timeUpdateFlag = 1;
			timePaused = timePaused + (Math.floor(game.time.totalElapsedSeconds())-totalSeconds);
		}
		totalSeconds=Math.floor(game.time.totalElapsedSeconds());
		gameSeconds = totalSeconds - timePaused;
		var minutes = Math.floor(gameSeconds / 60);
		var hours = Math.floor(minutes/60);
		var modmin = minutes%60;
		if (modmin < 10)
		{
			modmin = '0' + modmin;
		}
		var modsec = gameSeconds % 60;
		if (modsec < 10)
		{
			modsec = '0' + modsec;
		}
		//Hour display in two digits ! will be like 002.
		timeText = '0'+hours+':'+modmin+ ':' + modsec ;
		timer.setText(timeText);
	}
	else
	{
		timeUpdateFlag = 0
	}
  
	}
}
var finishFlag = 0;
var randomChoice;


function pauseAndPlay()
{
  if(pauseState ===0)
  {
    pauseState = 1;
    tempText.setText('Game Paused');
  
  }
  else
  {
    tempText.setText(' ');
    pauseState = 0;
    display();
  }
}
function finishGame()
{
	gameOver();
}

