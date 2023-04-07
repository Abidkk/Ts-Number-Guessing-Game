console.log('Hello I am creating a number guessing game');

 import inquirer from "inquirer";
import { gunzipSync } from "zlib";


async function call(){
    let autoNum = Math.floor(Math.random() * 10);

    while (true) {

        let guess = await inquirer.prompt({
            name:'num',
            type:'number',
            message:'please guess a number under ten'
        })
        
        if (autoNum == guess.num) {
            console.log('Congratulation, You won');
            break;
            
        } else if (guess.num > 10 ) {
            console.log('Please Guess a number under 10')
            
        }else {
            console.log('Try again')
        }
    }
}

call()