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

//
// function run() {
//   var text = document.getElementById('sourceTA').value,
//       target = document.getElementById('targetDiv'),
//       converter = new showdown.Converter(),
//       html = converter.makeHtml(text);
//
//     target.innerHTML = html;
// }

document.getElementById(runBtn).addEventListener("click", () => {
  function run() {
    var text = document.getElementById('sourceTA').value,
        target = document.getElementById('targetDiv'),
        converter = new showdown.Converter(),
        html = converter.makeHtml(text);

      target.innerHTML = html;
  }
})




// document.querySelector("#butdiv").addEventListener("click", () => {
//   var x = parseInt(document.getElementById("num1").value);
//   var y = parseInt(document.getElementById("num2").value);
//   var result = x / y;
//   console.log("Résultat est " + result);
//   document.getElementById("result").innerHTML = result;
// });
