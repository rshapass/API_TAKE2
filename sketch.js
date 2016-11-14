var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=dc6zaTOxFJmzC";
var q = "&q="
var cycle = 0;
var img;
var textBox;
var output;
var button;

function setup() {
  createCanvas(1000, 1000);
  background(252, 142, 172);
  var url = api + apiKey + q;
  loadJSON(url, gotData);
  textBox = createInput('Wanna see a GIF?');
  button = createButton('Gimme GIFs')
  output = createP('wanna see some cats?');
  button.mouseReleased(submitText);

}

function submitText() {
  output.html(textBox.value());
  canvasText = textBox.value();
}

function renderText() {
  output.html(textBox.value());
}

function gotData(giphy) {
  gif = giphy;
  img = createImg(gif.data[q + output].images.original.url);
  img.position(200, 250);

}



// function keyTyped() {
//   if (key === 'b') {
//     img = loadImage(gif.data[cycle].images.original.url);
//     console.log(cycle); // figure out right arrow
//   }
// }

function draw() {
  background(252, 142, 172)
  image(img, 0, 0);
  textSize(40)
  text(cycle, 275, 700);
  fill(255);


}