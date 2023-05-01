// all the code for my snake goes
 export const SNAKE_SPEED = 1 

 const snakeBody = [
    { x:10, y:11 },
    { x:11, y:11 },
    { x:12, y:11 }
]




export function update() { 
    // i am taking the position of a given segment 
    // and the segment after that will then move into position of the previous segment.
    for (let i = snakeBody.length - 2; i >= 0; i--) { //when i is greater than 0 i will stop my loop and i will subtract 1 from i each time.
//this gives me the 2nd to last element in my snake(start from bottom and work my way up.)
        snakeBody[i + 1] = { ...snakeBody[i] }//i setted my previous element in this case LAST ELEMENT equal to my current element
        // this is the element before the one i selected
        // so on the 1st iteration i will equal the 2nd to last
        // i + 1 will be my last element 

        // i need to set the snakeBody as a new object (line 18)
        // so i spread out the object into a new object
        // so i dont know have any reference problems

        // this will create a DUPLICATE OF MY SNAKE AT POSITION i
        // and set it to the position i plus 1


        /**in conclusion i am shifting my entire snake
         * so everything moves where its parent essentially
           is in the snakes body
         */

    }
    // i am updating the head based on where i am moving 
    snakeBody[0].x += 0
    snakeBody[0].y += 1
    // hardcoded movement inside of my update function
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
