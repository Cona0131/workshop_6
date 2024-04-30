let font1;
let s = 'Strings are text';

let userInput;
let button;
let userLine;
let response;

let poem = [];

function preload(){
  font1 = loadFont('JetBrainsMono-BoldItalic.otf');
}

function setup() {
  createCanvas(400, 580);
  textFont(font1);
  userInput = createInput();
  userInput.position(40, 55);
  button = createButton('add to poem');
  button.position(userInput.x, userInput.y + 21);
  button.mousePressed(newLine);

}

function draw() {
  background(220);
  text('Peoming like a bird', 40, 50);
  text(s, 40, 70);
  writePoem();
}

function newLine(){
  userLine = userInput.value();
  userInput.value('');
  poem.push(userLine);

  let words = RiTa.tokenize(userLine);
  response = '';
  for (x = 0; x < words.length; x++){
    if( RiTa.isNoun(words[x])){
      response += RiTa.isVerb("run");;
    } else {
      response += words[x];
    }
    response += ' ';
  }

  poem.push(response);
  }
  


function writePoem(){
  for(x = 0; x < poem.length; x++){
    text(poem[x], 40, 180 + x * 20);
  }

}