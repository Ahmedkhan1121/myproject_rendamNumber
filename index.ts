#! /usr/bin/env node

import inquirer from 'inquirer';


let rendamNumber = Math.floor(Math.random() * 5 +1);

const answer=await inquirer.prompt([
        {
            name:'userGessedNumber',
            type:'number',
            message:"please guess a number 1to5",
        }
]);


if(answer.userGessedNumber === rendamNumber){
    console.log('congtratulation ! you guessed right number');
}else if(rendamNumber < answer.userGessedNumber){
    console.log(`you are less than`);}
else if(rendamNumber > answer.userGessedNumber){
          console.log(`your number is greater than`);
 }
else{
    console.log(`Please ENter only a number`);
};


    //   else if(rendamNumber<answer.userGessedNumber){
    //     console.log();
    // }

//     }else{
//     console.log(rendamNumber);}
//     };
// 

