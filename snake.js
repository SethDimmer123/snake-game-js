import { getInputDirection } from "./input.js"

// all the code for my snake goes
 export const SNAKE_SPEED = 5

 const snakeBody = [
    { x:11, y:11 },
]




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
