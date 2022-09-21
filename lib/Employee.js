const inquirer = require('inquirer')
const engineer = require('./Engineer')
const intern = require('./Intern')
const manager = require('./Manager')
const main = require('../index')

const questions = [
    {
        type:'input',
        name:'name',
        message:'What is your name?'
    },
    {
        type:'input',
        name:'position',
        message:'What is your title?'

    }
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            // Use user feedback for... whatever!!
            console.log(answers)
            console.log(answers.description)
            writeToFile('README.md',generateMarkdown(answers) )
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        })
}


// Function call to initialize app
init();