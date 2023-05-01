let lastRenderTime = 0// default time of my last render

 function main(currentTime) {

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    // number of seconds since last rendered divided by 1000 milliseconds
    lastRenderTime = currentTime //updates my last render time with my current time.
    console.log(currentTime)
 }

 window.requestAnimationFrame(main)