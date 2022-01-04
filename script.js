function rollDiceFunc() {
    document.querySelector("#root").style.color = "blue";
    document.querySelector('#rootTwo').style.color = 'blue';
    let buttons = document.querySelector('#btn').addEventListener('click', function () {
        let rollDice = Math.floor(Math.random() * 6) + 1
        //testing console.log(`roll ${rollDice}`);
        document.querySelector('#root').innerHTML = rollDice;
        let rollDiceTwo = Math.floor(Math.random() * 6) + 1
        //testing console.log(`rollTwo ${rollDice}`);
        document.querySelector('#rootTwo').innerHTML = rollDiceTwo;
        if (rollDice === rollDiceTwo) {
            alert('Double!!!!')
        }
        // if (rollDice === buttons) {
        //     document.querySelector('#root').innerHTML = rollDice;
        // }

    })

}
rollDiceFunc()

function rollLoop(num) {
    for (let i = 0; i < num; i++) {
        rollDiceFunc()
    }
}
rollLoop()

// const numbers = [10, 20, 1, 32, 22, 12];

// function sum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]

//     }
//     console.log(`sum: ${sum}`); {}

// }
// sum(numbers)