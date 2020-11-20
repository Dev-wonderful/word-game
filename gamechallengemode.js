function myFunction(){

    hide("correct");
    hide("wrong");
    hide("timeremaining");
    hide("gameOver");
    hide("pause");
    hide("win");



//A.) Declare all variables
var score;
var correctAnswer;
var timeLeft;
var timer;
var playing = false;
var reset = false;
var pause = false;
var play = false;


//B.) Declare all functions
//1. function show() and hide()
//2. function clearText()
//3. function stopTimer()
//4. function startTimer()
//5. function generateDI()
//6. function



//C.) Initializing the functions and setting up the istructions for the playing of the game




//Declaring the functions

//1.) functions to show or hide important info and instructions in the game
        function show(id){
            document.getElementById(id).style.visibility = "visible";
        }
        function hide(id){
            document.getElementById(id).style.visibility = "hidden";
        }



//2.) function to clear the text in the input field
        function clearText(){
            document.getElementById("text").value = "";
        }


//3.) stopTimer
        function stopTimer(){
            clearInterval(timer);
        }

//4.) startTimer
        function startTimer(){
            timer = setInterval(function(){
            
                if(pause == true){
                    timeLeft;
                   show("timeremaining");
                   document.getElementById("timeremainingvalue").innerText = timeLeft;
                   document.getElementById("pause").innerText = "Continue Game";
                   document.getElementById("pause").style.backgroundColor = "rgb(16, 145, 16)";
                   document.getElementById("pause").style.color = "whitesmoke";
                   document.getElementById("text").readOnly = true;
                   play = true;
                   }else if (pause == false) {
                        --timeLeft;
                   show("timeremaining");
                   document.getElementById("timeremainingvalue").innerText = timeLeft;
                   play = false;
                   }
           
                if(timeLeft == 0){
                
                    //stop game play
                    playing = false;
                    reset = true;
                    clearText();
            
                    //stoptimer
                    stopTimer();
                
                    if(score < 10){

                        //display gameover div
                        show("gameOver");
                        document.getElementById("gameOver").innerHTML = "<p>Game Over!!</p><p>You've failed</><p>Your score is " + score + "</p><p>Try Again</p>"
                    
                    }else{
                        show("win");
                        document.getElementById("win").innerHTML = "<p>Game Over!!</p><p>You Won!!!</p><p>Your score is " + score + "</p><p>Play Again</p>"
                        }
                    
                }
            }, 1000);
        
        }

//5.) generate the display items
        function generateDI(){

            //generate words
            var word = ["brother", "bath", "book", "person", "submit", "summit", "friendly", "update"];
        
            //generate a function to pick the words randomly
            var randompositions = [];

           var i = 0;
        
           while(randompositions.length < word.length){

                   var randpos = Math.floor(Math.random() * word.length); 

                    if(randompositions.includes(randpos) == false){
                        randompositions[i] = randpos;
                        i++;
                   }
               
            }
            //console.log(randompositions);
            //console.log(randpos);
            //console.log(i + " a");

                //create a random value for "i" otherwise it would constantly have a value of 8
                i = randpos;
           
            //console.log(i+" b");

            //display the word
           document.getElementById("display").innerText = correctAnswer = word[randompositions[i]];


           console.log(correctAnswer);
        }    


         //block access to input field before the start of the game
         if(playing==false){
            document.getElementById("text").readOnly = true;
        }


//C.) start playing game
        document.getElementById("startresetbutton").onclick = function(){

           //check if we are playing
           if(playing==false & reset==false){
               //start playing
               document.getElementById("text").readOnly = false;
               playing=true;
               score = 0;
               timeLeft = 60;
               document.getElementById("scorevalue").innerText = score;
               startTimer();
               generateDI();
               this.innerText = "Reset Game";
               hide("gameOver");
               show("pause");


           }else(
               //stop playing by reloading the page
               location.reload()

           )
        }

    //set function for the pause button
        document.getElementById("pause").onclick = function(){

            pause = true;
            if (play == true) {
               pause = false;
               this.style.backgroundColor = "tan";
               this.style.color = "black";
               this.innerText = "Pause Game";
               document.getElementById("text").readOnly = false;
           };
    

 
        }

    //set function for the exit button
        document.getElementById("exit").onclick = function(){
            location.href="GameModeSelection.html";
            }


    //automatically accessing and grading the typed word without the need for a submit button
    document.getElementById("text").onkeyup = function(){

      var x = document.getElementById("text").value;


        if(playing==true & x.length == correctAnswer.length){
        clearText();


            if(x==correctAnswer){
                show("correct");
                hide("wrong");
                ++score;
                document.getElementById("scorevalue").innerText = score;
                generateDI();
                setTimeout(function(){
                    hide("correct");
                },1000)
            }else{
                show("wrong");
                hide("correct");
                --score;
                document.getElementById("scorevalue").innerText = score;
                setTimeout(function(){
                    hide("wrong");
                },1000)
            }


        }


    }




}
