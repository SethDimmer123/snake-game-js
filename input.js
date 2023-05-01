// implementing input for snake to move around

let inputDirection = {x:0, y:0 }//by default i do not want my snake moving anywhere
let lastInputDirection = {x:0, y:0}


window.addEventListener('keydown',e => {
    switch(e.key) {
        case 'ArrowUp':
            if(lastInputDirection.y !== 0) break 
            // if i am moving up or down ignore the inputDirection of up press 
            // because i cannot press up when i am going down
            inputDirection = {x:0, y:-1} //negative 1 moves me upwards
            break
    
        case 'ArrowDown':
            if(lastInputDirection.y !== 0) break 
            // if i am already moving up i cant actually start moving down
            inputDirection = {x:0, y:1} 
            break
    
        case 'ArrowLeft':
            if(lastInputDirection.x !== 0) break 
            // if i am already moving to the right i cannot move to the left
            inputDirection = {x:-1, y:0}
            break

        case 'ArrowRight':
            if(lastInputDirection.x !== 0) break 
        // if i am already moving to the left i cannot move to the right
            inputDirection = {x:1, y:0}
            break
    }
})

export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}

