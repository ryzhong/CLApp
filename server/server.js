const express = require('express');
const inquirer = require('inquirer')

const app = express();
const port = 3000;


// app.listen(port, () => console.log(`Tic Tac Toe listening to ${port}!\n`))

let board = [['| ', '| ', '| '],['| ', '| ', '| '],['| ', '| ', '| ']]
let gameOver = false; 

let move = () => {
  var questions = [{
    type: 'input',
    name: 'coordinates',
    message: "Where do you want to move next?",
  }]
  
  inquirer.prompt(questions).then(answers => {
    board = board.join('\n');
    console.log(board);
    console.log(`Hi ${answers['coordinates']}!`)
    if(answers['coordinates'] === 'steven') {
        gameOver = true;
    } else {
      move();
    }
  })
  
}

move();


