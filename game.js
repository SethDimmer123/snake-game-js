let lastRenderTime = 0// default time of my last render

const SNAKE_SPEED = 2 // this will be how many times the snake moves per second

 function main(currentTime) {// I WILL NOT DO ANYTHING IN MY MAIN FUNCTION UNLESS I HIT A CERTAIN THRESHOLD

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    lastRenderTime = currentTime 
    console.log(secondsSinceLastRender)
 }

 window.requestAnimationFrame(main)