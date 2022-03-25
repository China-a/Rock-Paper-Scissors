let hands = ["Rock", "Paper", "Scissors"];
function gethand() {
  let index = parseInt(Math.random() * 10) % 3;
  return hands[index]}
  let playerP = { 
      name: "Peter Parker", 
    gethand:() => gethand(),
}
  let playerS = { 
      name: "Doctor Strange", 
      gethand:() => gethand(),
}

function playround(playerP, playerS) {
  let hand1 = playerP.gethand();
  let hand2 = playerS.gethand();
  let result = "";
  console.log(playerP.name, "threw", hand1);
  console.log(playerS.name, "threw", hand2);

  if (hand1 == hand2) {
    result = "It's a tie";
    console.log(result)
    return null;
  }
  // Rock
  else if (hand1 == hands[0] && hand2 == hands[1]) {
    result = playerS.name  + " " + "wins!";
    console.log(result)
    return playerS
  } else if (hand1 == hands[0] && hand2 == hands[2]) {
    result = playerP.name + " " +"wins!"; 
    console.log(result)
    return playerP;
  }
  // Paper
  else if (hand1 == hands[1] && hand2 == hands[0]) {
    result = playerP.name  + " " + "wins!";
    console.log(result)
    return playerP;
  } else if (hand1 == hands[1] && hand2 == hands[2]) {
    result = playerS.name  + " " + "wins!";
    console.log(result)
    return playerS;
  }
  //Scissors
  else if (hand1 == hands[2] && hand2 == hands[0]) {
    result = playerS.name  + " " + "wins!";
    console.log(result)
    return playerS;
  } else if (hand1 == hands[2] && hand2 == hands[1]) {
    result = playerP.name  + " " + "wins!";
    console.log(result)
    return playerP;
  }
}
// console.log(playround(player1,player2));

function playGame(playerP,playerS,playuntil) {
let p1 = 0;
let p2 = 0;
while (p1 < playuntil && p2 < playuntil) {
    console.log("currentscore: ", playerP.name, ":", p1)
    console.log( "currentscore: ", playerS.name, ":", p2)
    if(!playround(playerP, playerS)) {

    } else if (playround(playerP, playerS)) {
        p1++;
    } else {
        p2++;
    }
}
    if(p1 == playuntil) {
        return playerP;
    } else {
        return playerS
    }
}
console.log(playGame(playerS,playerP, 5));




