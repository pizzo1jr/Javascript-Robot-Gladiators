var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roberto", "Big Poppa", "Swoleman Jenkins"];
var enemyHealth = 50;
var enemyAttack = 12;

// // pulls whole array
// console.log(enemyNames);
// // pulls individual names from array
// console.log(enemyNames[0]); // Roberto
// console.log(enemyNames[1]); // Big Poppa
// console.log(enemyNames[2]); // Swoleman Jenkins
// // will not show because at the time there is no 3rd robot
// console.log(enemyNames[3]); // undefined 
// // shows length of array in devTools
// console.log(enemyNames.length);
// // equation below will show the word apple 3 times
// for(var i = 0; i < 3; i++) {
//     console.log("apple", i);
// }
// // will list out enemy names by length
// for(var i = 0; i < enemyNames.length; i++) {
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i] + " is at " + i + " index");
// }

var fight = function(enemyName) {
    // Alert players that the round is beginning
    window.alert('Welcome to Robot Gladiators!');
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
        // remove enemy's health by subtracting the amount set in the playerAttack Variable.
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " remaining."
        );
        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        // remove player's health by subtracting the amount set in the enemyAttack variable.
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " remaining."
        );
        //check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        // if player chooses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
            console.log("player has " + playerMoney + " money left!");
        }
        // if no (false), ask question again by running fight() again
        else {
            fight();
        }
    }

}

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}