// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

console.log("coucou");


// If you use require (Node etc), require as first the module and then create the instance
let Remarkable = require('remarkable');
// If you're in the browser, the Remarkable class is already available in the window
let md = new Remarkable();

document.querySelector("#butSend").addEventListener("click", () => {
  let text = (document.getElementById("text").value);
  let butReturn = `<button class="butReturn" id="butReturn" onClick="window.location.reload()">Try again</button>`;
  let f = document.querySelector(".form");
  f.parentNode.removeChild(f);
  document.getElementById("textResult").innerHTML = md.render(text);
  console.log(md.render(text))
})
