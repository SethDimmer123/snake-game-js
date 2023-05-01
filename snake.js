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

export function draw(gameboard) { 
    snakeBody.forEach(segments => {
    //forEach lets me loop through the different pieces of the snake(segments)
    //each piece of the snake i want to loop through
    // i need t draw it to my gameboard so i can add my snake to the gameBoard 

    })
}
