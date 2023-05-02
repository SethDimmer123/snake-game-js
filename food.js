import {onSnake,expandSnake} from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition()
const EXPANSION_RATE =  1 



export function update() { 
if(onSnake(food)) {//
    expandSnake(EXPANSION_RATE)//EXPANDING SNAKE BY 1 
    food = getRandomFoodPosition()

}
}

export function draw(gameBoard) { 
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}


function getRandomFoodPosition() { //returns a new position for my food every time it gets eaten and returns a position that is not already on the snake. 
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
//currently whenever my food is null or my food is on the snake already then i need to get a new food position
newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}
