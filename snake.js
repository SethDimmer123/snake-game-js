import { getInputDirection } from "./input.js"

// all the code for my snake goes
 export const SNAKE_SPEED = 5

 const snakeBody = [{ x:11, y:11 }]
 let newSegments = 0 //defaulting to zero because my snake is not growing without eating food.




export function update() { 
    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) { 
        snakeBody[i + 1] = { ...snakeBody[i] }


    }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y


    // snakeBody[0].x += 0
    // snakeBody[0].y += 1
    // hardcoded movement inside update function
}

export function draw(gameBoard) { 
    snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)

    })
}

export function expandSnake(amount) {
    newSegments += amount 
}

export function onSnake(position) { // takes in a position and determines if this position is on my snake
    return snakeBody.some(segment => {// IF my equal positions returns true for any of the snake positions(definition of SOME method) 
        // for each segment i am checking if the segment is on my snake 
        // so i compare my position with my segment position to see if they are equal.
        return equalPositions(segment, position)
    })
    // if any part of my snakeBody equals the position i pass in then onSnake will return true. 
}

function equalPositions(pos1,pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
    //if my 2 positions are exactly the same 
    // then the equalPositions will return TRUE 
    
}
