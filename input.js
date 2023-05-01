// implementing input for snake to move around

let inputDirection = {x:0, y:0 }//by default i do not want my snake moving anywhere


window.addEventListener('keydown',e => {
    switch(e.key) {
        case 'ArrowUp':
            inputDirection = {x:0, y:-1} //negative 1 moves me upwards
            break
    
        case 'ArrowDown':
            inputDirection = {x:0, y:1} 
            break
    
        case 'ArrowLeft':
            inputDirection = {x:-1, y:0}
            break

        case 'ArrowRight':
            inputDirection = {x:1, y:0}
            break
    }
})

export function getInputDirection() {
    return inputDirection
}