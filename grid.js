const GRID_SIZE = 21

export function randomGridPosition() {
return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1
}
}


// outside grid 1.
export function outsideGrid(position) {
    return (//less than 1 
        position.x < 1 || position .x > GRID_SIZE || 
        position.y < 1 || position.y > GRID_SIZE
    )
    // if i am anywhere outside my grid this will return true 
    // otherwise it will return false

}