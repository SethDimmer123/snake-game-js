// render code setup

let lastRenderTime = 0

const SNAKE_SPEED = 2 

 function main(currentTime) {

    window.requestAnimationFrame(main) 
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return


    console.log('render')
    lastRenderTime = currentTime 

    //logic for my game 

    Update() // this update loop will update all of the logic for my game.
    //the update loop will move the snake to the correct position but not draw it 
    // update loop will update if i ate the food or not and make the snake longer or shorter
    //update loop will determine if i lost the game because i ran into my own tail
    //  or ran into the edge of the screen.

    draw() // the draw loop will draw everything on the screen based on my update loop.
    // with the draw loop i will take all of my logic from update loop and say where is my snake now 
    // lets draw the snake in the correct POSITION as well as draw the food where it needs to go 
 }

 window.requestAnimationFrame(main)