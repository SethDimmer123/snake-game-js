let lastRenderTime = 0// default time of my last render

const SNAKE_SPEED = 2 // this will be how many times the snake moves per second

 function main(currentTime) {// I WILL NOT DO ANYTHING IN MY MAIN FUNCTION UNLESS I HIT A CERTAIN THRESHOLD

    window.requestAnimationFrame(main) // i always request my next animation frame no matter what.
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    // secondsSinceLastRender lets me calculate if i actually need to move and check if
    //if the secondsSinceLastRender is essentially LESS THAN THE TIME BETWEEN MY RENDERS
    //which is one divided by my snake speed since my snake moves 2 times per second.
    // 1 divided  by that would be number of seconds between each move 
    // i have a half of a second between each move 
    //if the time sinceLastRender is half a second  then i DO NOT NEED TO MOVE MY SNAKE 
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    lastRenderTime = currentTime 
    console.log(secondsSinceLastRender)
 }

 window.requestAnimationFrame(main)