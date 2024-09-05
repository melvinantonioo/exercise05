
//1. get primitive DAta
let arr: any[] = [1, [], undefined,
    {}, []];

function getPrimitiveData(arr: any[]): any[] {
    // filtering the data based 'object' with typeof filter , and returning the primitive data
    return arr.filter(item => typeof item !== 'object')
}
console.log(getPrimitiveData(arr));



//2.the sum of duplicate data
let arr6: number[] = [10, 20, 40, 10, 50, 30, 10, 60, 10];

function sumOfDuplicates(arr: number[]): number {
    return arr.reduce((acc, curr) => {
        if (arr.filter(num => num === curr).length > 1) {
            return acc + curr;
        }
        return acc
    })
}
console.log(sumOfDuplicates(arr6));



//3. the game with bot
function playGames(userChoice: 'rock' | 'paper' | 'scissor') {
    //the input of choices
    const choiches = ['rock', 'paper', 'scissor'];

    //bot choices against us
    const botChoice = choiches[Math.floor(Math.random() * choiches.length)]

    console.log(`computer choose: ${botChoice}`)

    //if the choices same
    if (userChoice === botChoice) {
        return 'Tie';
    }

    // the status of games 
    switch (userChoice) {
        case 'rock':
            return botChoice === 'scissor' ? 'Win' : 'lose';

        case 'paper':
            return botChoice === 'rock' ? 'Win' : 'lose';

        case 'scissor':
            return botChoice === 'paper' ? 'Win' : 'lose';
    }
}

console.log(playGames('paper'))
console.log(playGames('scissor'))
console.log(playGames('rock'))