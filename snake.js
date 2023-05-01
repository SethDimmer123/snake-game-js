// all the code for my snake goes
 export const SNAKE_SPEED = 1 

 const snakeBody = [{ x:11, y:11 }]//drawing my snake in the very center of the screen at the very start
 //snakeBody represents my snake
// my snake is essentially in a bunch of different segments
// the segments all are in a particular x and y position on the grid.

 //css grid allows me to represent my snake as an x and y position

export function update() { 
    console.log('update snake');
}

export function draw(gameBoard) { // i need to add my gameBoard passed into the draw function so i can add my snake to the gameBoard.
    snakeBody.forEach(segment => { //segment is just each piece of the snake i want to loop through
    const snakeElement = document.createElement('div')
    // i am creating a div element and have it go
    //  inside of my gameBoard at a PARTICULAR X,Y coordinate.
    
    // since i am using grid i can directly 
    // set the x,y coordinate very easily 

    snakeElement.style.gridRowStart = segment.x
    snakeElement.style.gridColumnStart = segment.y
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)

    })
}
