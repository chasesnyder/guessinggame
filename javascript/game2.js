function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function askQuestion(question) {
	questions.shuffle
	var answer = prompt(questions[1]);
}

// some questions about me
var questions = ["Where am I from?", "What's my favorite beer?", "Where do I live now?", "What's my favorite football team?", "How many roads must a man walk down?"];


function firstQuestion() {
	var answer1 = prompt("Where am I from?");

}


var answer1 = prompt("Where do you think I'm from?");
console.log(answer1);
if (answer1 === "Denver") {
	alert("Yes! You got it right!");

} else {
	alert("Uh...nice try I guess. The answer was Denver. Next Question");
}

var answer2 = prompt("What's my favorite beer?");
console.log(answer2);

if (answer2 === "Fat Tire") {
	alert("You got it right! Look at the big brain on you.");
} else {
	alert("What? No. Next question! (P.S., Fat Tire was the answer.)");
}

var answer3 = prompt("Where do you think I live now? Hint, it is a neighborhood in Seattle.");
console.log(answer3);

if (answer3 === "Greenwood") {
	alert("Yes! You got it right. Real Einstein over here.");
} else {
	alert("Wow. You don't know me that well at all. I'm from Denver, my favorite beer is Fat Tire, and I live in Greenwood now.  Make sure to remember that stuff for next time. Let's try one more question.");
}

var numberOfBalls = prompt("How many balls can I juggle?");
console.log("You think I can juggle " + numberOfBalls + " ?!?!?!");

if (numberOfBalls == 3) {
	alert("Nailed it! Nice work.");
} else if (numberOfBalls < 3) {
	alert("You don't think much of my juggling skills, huh?");
} else if (numberOfBalls > 3) {
	alert("I'm flattered, but that's a bit high.");
} else {
	alert("Well...I'm not even sure what you mean by that guess, but nice work anyway. Let's try some easier ones.");
}

var roads = prompt("How many roads must a man walk down?");

if (roads == 42) {
	alert("yep. That is the correct number of roads.");
} else {
	alert("nope.");
}

var whatTheHeck = prompt("What the heck?");

alert ("That's correct. Secretly though, literally any answer would have sufficed. I just wanted you to go out on a high note. Thanks for playing!")


