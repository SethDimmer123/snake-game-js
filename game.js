// render code setup

import { SNAKE_SPEED,update as updateSnake,draw as drawSnake, update } from "./snake.js"
// to make sure everything is working check console log to see if 'render' is in console.

import { update as updateFood, draw as drawFood } from './food.js'

let lastRenderTime = 0
let gameOver = false 
const gameBoard = document.getElementById('game-board')

// const SNAKE_SPEED = 2 

 function main(currentTime) {
    // doing game over state 

    if(gameOver) {
        return alert('you lose')
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
    gameBoard.innerHTML = ''// my snake will move without actually showing previous pieces behind it.
    drawSnake(gameBoard)
    drawFood(gameBoard)
 }


 function checkDeath() {
// checkDeath() function will occur when my snake runs off the grid or if the snake runs into itself.
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
    //setted a global gameOver variable if i am outside the grid or my snake has intersected itself
    //checking snake if the head of the snake is outside of the grid i LOSE 
    // OR IF the snake intersects itself then i LOSE
    
    //these are the 2 functions i will create 
 }