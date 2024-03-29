import inquirer from "inquirer"
import chalk from "chalk"

let todo = [];
let condition = true;
console.log(chalk.green("Welcome to todo list"))
while(condition){
let addTask = await inquirer.prompt(
    [
        {
           name:"todo",
           type:"input",
           message:(chalk.blue("What do you want to add in your todo?")) 
        },
        {
            name:"addMore",
            type:"confirm",
            message:(chalk.magenta("Do you want to add something else in your list?")),
            default:"false"
        }
    ]
)
todo.push(addTask.todo);
condition = addTask.addMore
console.log(todo)
}