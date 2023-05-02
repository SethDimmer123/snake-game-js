let food = {x:10, y:1}// css grid starts at 1 
const EXPANSION_RATE =  1 //how much the snake grows AFTER EATING FOOD.
// 1 new segment after eating food.


export function update() { 
if(onSnake(food)) {//
    expandSnake(EXPANSION_RATE)//EXPANDING SNAKE BY 1 
    food ={x:20, y :10}

}
}

export function draw(gameBoard) { 
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}
