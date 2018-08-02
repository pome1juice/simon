var dealer = [];
var user = [];
var dealerPointer = 0;
var userPointer = 0;
var running = false;
var ok = true;
var current;
var flash;

//this function essentially runs the check after the user input
function runChecks() {
  //move the pointer forward as now the user has had an input
  userPointer++;
  //check all input of the user so far, so a forloop over user array
  for (var i = 0; i < user.length; i++) {
    //if at same positions the user and dealer did not have same hands
    if (dealer[i] != user[i]) {
      //now we set this boolean to false!
      ok = false;
    }
  }
  //if ok was false (user made a mistaken input)
  if (!ok) {
    //pause for a bit and then play the gameover sound
    setTimeout(function() {
          document.getElementById("gameover").play();
    }, 500);
    //re initialise (basically all the stuff we did at the beginning of the game)
    user = [];
    dealer = [];
    dealerPointer = 0;
    userPointer = 0;
    ok = true;
    addTodealer();
    //we wait untill the gameover sound is finished, so wait 1500 units
    setTimeout(function() {
      //now have an interval as we had before to show the dealer's hand
      flash = setInterval(displayDealer, 700);
    }, 1500);
  } else {
    //the code here is for when the user has not had an erroneous input
    //also if he has made same number of input as what we had in our dealer's hand
    if (userPointer == dealerPointer) {
      if (ok) {
        //we wipe the user array clean as he has to input the sequence from
        //the beginning at each time
        user = [];
        dealerPointer = 0;
        userPointer = 0;
        //and move on to a new element at the end of sequence as before
        addTodealer();
        //wait a little bit before we show the dealer's hand
        setTimeout(function() {
          //again the forloop over delear's hand as before
          flash = setInterval(displayDealer, 700);
        }, 1000);
      }
    }
  }
}

//put a random color code at the end of memory array
function addTodealer() {
  //randomNumber holds a random number between 1 to 4
  var randomNumber = Math.floor((Math.random() * 4) + 1);
  //if random number was ...
  switch (randomNumber) {
    //1 we translate it to g for green and so on
    case 1:
      //we push g for green in our dealer
      dealer.push("g");
      break;
    case 2:
      dealer.push("r");
      break;
    case 3:
      dealer.push("y");
      break;
    case 4:
      dealer.push("b");
      break;
  }
}

//display what we have in dealer
function displayDealer() {
  //hold the current color from dealer's hand
  current = dealer[dealerPointer];
  //whatever the color was is the id that we use for corresponding sound
  document.getElementById(current).play();
  //same principal for the button
  document.getElementById("btn" + current).className = "btn flashing";
  //pause between each button flashing
  setTimeout(function() {
    document.getElementById("btn" + current).className = "btn";
  }, 250);
  //move on to the next by incrementing the pointer
  dealerPointer++;
  //if we reached the end
  if (dealerPointer == dealer.length) {
    //then stop the interval of going through the dealer's hand
    clearInterval(flash);
  }
}

//if the user clicked start
document.getElementById("sbtn").onclick = function() {
  //display a visaul change
  document.getElementById("sbtn").style.background = "green";
  //set the Bool to true, we started
  running = true;
  //initialise dealers hand and users to empty
  user = [];
  dealer = [];
  //both pointers point to first element
  dealerPointer = 0;
  userPointer = 0;
  //so far user is okey (no mistakes yet)
  ok = true;
  //add a color to the dealers hand
  addTodealer();
  //this line basicly acts as for loop over dealers array members
  setTimeout(function() {
    //for each element it displays it using the function we defined
    flash = setInterval(displayDealer, 1000);
  }, 1000);
};

//when user clicks on buttons we do one the below 4 according to div id
document.getElementById("btnr").onclick = function() {
  //we wont be able to play unless the user has started the game
  if (running) {
    //play the corresponding sound
    document.getElementById("r").play();
    //so we push it in the user array
    user.push("r");
    //do the chek function
    runChecks();
  }
};
document.getElementById("btny").onclick = function() {
  //we wont be able to play unless the user has started the game
  if (running) {
    //play the corresponding sound
    document.getElementById("y").play();
    //so we push it in the user array
    user.push("y");
    //do the chek function
    runChecks();
  }
};
document.getElementById("btng").onclick = function() {
  //we wont be able to play unless the user has started the game
  if (running) {
    //play the corresponding sound
    document.getElementById("g").play();

    //so we push it in the user array
    user.push("g");
    //do the chek function
    runChecks();
  }
};
document.getElementById("btnb").onclick = function() {
  //we wont be able to play unless the user has started the game
  if (running) {
    //play the corresponding sound
    document.getElementById("b").play();
    //so we push it in the user array
    user.push("b");
    //do the chek function
    runChecks();
  }
};
