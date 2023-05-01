let lastRenderTime = 0// default time of my last render

const SNAKE_SPEED = 2 // this will be how many times the snake moves per second

 function main(currentTime) {// I WILL NOT DO ANYTHING IN MY MAIN FUNCTION UNLESS I HIT A CERTAIN THRESHOLD

    window.requestAnimationFrame(main) // i always request my next animation frame no matter what.
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return


    console.log('render')// 2 times per second i get the text render printed out in console
    lastRenderTime = currentTime 
 }

 window.requestAnimationFrame(main)