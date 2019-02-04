// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
  */

// Get the modal
let modal = document.getElementById('myModal');

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

////////////////////////Magali/////////////////////////////
let input_textarea = document.querySelector('.content-input');
let output_div = document.querySelector('.content-output');
let save_button = document.querySelector('.save-button');
let data = [];

function updateOutput() {
	//J'ajoute le dernier commentaire et je vide la zone de texte
	data.push(input_textarea.value);
	input_textarea.value="";
	//je string mon tableau clef: content value: data
	localStorage.setItem('content', JSON.stringify(data));

	let toDisplay = "";
	//je parcours mon tableau
	for(let i=0; i<data.length; i++ ){


		toDisplay += "<p>" + data[i] + "</p>";

	}
	output_div.innerHTML = toDisplay;

}
// je lance la fonction au click
save_button.addEventListener('click', updateOutput);


// If you use require (Node etc), require as first the module and then create the instance
let Remarkable = require('remarkable');
// If you're in the browser, the Remarkable class is already available in the window
let md = new Remarkable();

document.querySelector(".save-button").addEventListener("click", () => {
  let text = (document.getElementById("content-input").value);
  // let butReturn = `<button class="butReturn" id="butReturn" onClick="window.location.reload()">Try again</button>`;
  // let f = document.querySelector(".form");
  // f.parentNode.removeChild(f);
  document.getElementById("content-output").innerHTML = md.render(text);
  console.log(md.render(text))
})
