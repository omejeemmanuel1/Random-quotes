const quoteArray = [["Stay Hungry. Stay Foolish.", "Steve Jobs"],["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],["Argue with idiots, and you become an idiot.", "Paul Graham"],["Be yourself; everyone else is already taken.", "Oscar Wilde"],["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"]];

    const colourArray = ["#0F5959",   "#17A697",   "#638CA6",   "#8FD4D9",   "#D93240",
                         "#753A48",   "#954F47",   "#C05949",   "#9AADBD",   "#CBBB58",
                         "#666666",   "#25AAA0",   "#66C3BC",   "#41D4CF",   "#10206B"];

let duration = 10;
//select all element
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const btn = document.getElementById('btn');
const timer = document.getElementById('timer');
const body = document.body;
let quoteInterval = setInterval(get_quote, 10000);
let timerInterval = setInterval(start_countdown, 1000);


btn.addEventListener('click', get_quote);

function get_quote() {
 	timer.innerHTML = duration; 
    let my_quote = get_rand_quote();
    quote.innerHTML = my_quote[0];
 	author.innerHTML = my_quote[1];
    let colour = get_rand_color();
    update_page_style(colour);
}
function get_rand_quote() {
	let qIndex = Math.floor(Math.random() * quoteArray.length);
	let quote = quoteArray[qIndex][0];
	let author = quoteArray[qIndex][1];
	let quote_gen = [quote, author];
	return quote_gen;

}
function get_rand_color() {
		let cIndex = Math.floor(Math.random() * colourArray.length);
		return colourArray[cIndex];
}


function update_page_style(colour) {
	btn.style.backgroundColor = colour;
 	body.style.backgroundColor = colour;
 	timer.style.backgroundColor = colour;

}


function start_countdown() {
	count = parseInt(timer.innerHTML);
	if (count > 0) {
		count--;
		timer.innerHTML = count;
	}
}