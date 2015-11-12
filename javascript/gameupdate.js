var questions = ["Where are you from?", "What's your favorite beer?", "Where do you live now?", "What's your favorite football team?", "How many roads must a man walk down?", "What's your favorite movie?", "What is your favorite Christopher Walken role?", "What shape is the earth?", "What are the haps, my friend?", "Could you lend me some sugar, seeing as how we're neighbors and all?"];

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

var numberOfQuestions = 10;

function askQuestion() {
shuffle(questions);
var answer = prompt(questions[1]);
var newParaQ = document.createElement('p');
document.body.appendChild(newParaQ);
newParaQ.id = "q" + numberOfQuestions;
var newParaA = document.createElement('p');
document.body.appendChild(newParaA);
newParaA.id = "a" + numberOfQuestions;
var image = 'http://www.slate.com/content/dam/slate/articles/health_and_science/wild_things/2013/10/131025_WILD_AdeliePenguin.jpg.CROP.promo-mediumlarge.jpg';
newParaQ.innerHTML = "<strong>Question: </strong>" + questions[1];
newParaA.innerHTML = "<strong>Your answer: </strong>" + answer;
var newImg = document.createElement('div');
newImg.id="pic" + numberOfQuestions;
document.body.appendChild(newImg);
newImg.innerHTML = "<img src='http://www.rosecityhedgehogs.com/uploads/ppet1_1456179c.jpg'>";
console.log(newImg.innerHTML);
}

askQuestion();
askQuestion();
askQuestion();
askQuestion();
askQuestion();

alert("Great to meet ya. Thanks for playing :)");
document.body.innerHTML = "<img src='https://www.petfinder.com/wp-content/uploads/2012/11/99233806-bringing-home-new-cat-632x475.jpg'>"

