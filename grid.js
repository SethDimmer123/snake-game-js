const GRID_SIZE = 21

export function randomGridPosition() {
return {// x will be based on a formula for calculating a random number between 1 and the size of my grid which is 21. 
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
     // I HAVE NUMBER BETWEEN 0 AND 0.9999 and 
    //  multiplying it by 21 so i will get a number between 0 and 20.999 
    // but with math.floor i get between 0 and 20 plus add 1 to get a number between 1 and 21 add 1 to the end of 20
    y: Math.floor(Math.random() * GRID_SIZE) + 1
    // returns to me a new x and y value for my grid
}
}


// outside grid 1.
export function outsideGrid(position) {
    // checking to see if the position that i pass in will
    //  be greater than my grid size which is 21 or less than 1 
    // which is my minimum grid size.


    return (//less than 1 
        position.x < 1 || position .x > GRID_SIZE || 
        position.y < 1 || position.y > GRID_SIZE
    )
    // if i am anywhre outside my grid this will return true 
    // otherwise it will return false

}