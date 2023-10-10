import { ifError } from "assert";
import inquirer from "inquirer";
import chalk from 'chalk';
import showBanner from 'node-banner';

(async () => {
    await showBanner('Welcome to TODO', 'Plan your day effectively by organizing all your tasks in one place');
})();


let todo :string[] = [];
let loop = true;
while(loop){

    const answers:{
        TODO: string;
        addmore:boolean;



    } = await inquirer.prompt([
        {
            type:"input",
            name:"TODO",
            message:"What do you want to add in your Todo?"
        },
        {
            type:"confirm",
            name:"addmore",
            message:"Do you want to add more todo?",
            default:false,
        }


    ])

    const{TODO,addmore} = answers;
    console.log(chalk.bgBlueBright(answers));
    loop = addmore;
    if (TODO) {
        todo.push(TODO)
        
    }
    else{
        console.log(chalk.bgRedBright("kindly enter valid input"))
    }
    console.log(TODO)

    if (todo.length>0) {
        console.log(chalk.bgBlueBright("Your todo list is:"))
        todo.forEach(todo=>{
            console.log(chalk.bgBlueBright(todo))
        })
        
    }
    else{
        console.log(chalk.bgRedBright("No todo found"))
    }



}
