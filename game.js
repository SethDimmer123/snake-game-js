/**
 * 1. set up a function called game loop.
 game loop is a function that repeats itself over and over again 
 on a set interval so i can constantly update my 
 snake position and snake position and do all of 
 the game calculations that i need on a very set time.
 */

 function main(currentTime) {//function takes in the current time of when the function runs

    window.requestAnimationFrame(main)//this request tells me when i can render my next frame and tells me the current time when i go to render that frame.
    //then recall the main function immediately so i can setup another loop
    // that will happen after this.
    // my main function will loop over and over again forever that is the whole purpose of a game loop.
    console.log(currentTime)
 }

 window.requestAnimationFrame(main)// im calling this loop to start the loop for the first time