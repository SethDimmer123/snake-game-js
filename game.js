// render code setup

import { SNAKE_SPEED,update as updateSnake,draw as drawSnake, update, getSnakeHead,
snakeIntersection } from "./snake.js"

import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from "./grid.js"

let lastRenderTime = 0
let gameOver = false 
const gameBoard = document.getElementById('game-board')

// const SNAKE_SPEED = 2 

 function main(currentTime) {
    // game over state 

    if(gameOver) {
        if(confirm('You lost. Press ok to restart.')) {
            window.location = '/'//if this returns true i want to reset the game
        }
        return 
    }

    window.requestAnimationFrame(main) 
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return


    // console.log('render')
    lastRenderTime = currentTime 


    Update()

    draw()
 }

 window.requestAnimationFrame(main)

 function Update() {//updating snake and food
    updateSnake()// calling this function in my main update function
    updateFood()
    checkDeath()
 }

 function draw() {// drawing snake and food
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
 }


 function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
 }