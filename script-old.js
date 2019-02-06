// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*Modal Box*/
// Get the modal
let modal = document.getElementById('myModal');
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

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

/* / Modal box */

//check if there is something storage otherwise create an object as exemple
//let dataJson = JSON.parse(localStorage.getItem('dataJson'));
/*if (dataJson === ""){*/
let dataJson = [
    {
      "idea": "Test: Idea 1",
      "description": "Idea 1 description",
      "commentary": []
    },
    {
      "idea": "Test: Idea 2",
      "description": "Idea 2 description",
      "commentary": []
    }
  ];
//}

//adding 'ideas' on the landing page from json
let addIdeas =  () => {
  let str = "<ul id='listIdeas'>";
  for (let i in dataJson){
    let idNumber = "idea"+i;
    str += "<li id='" + idNumber + "'>" + dataJson[i].idea + "</li>";
  };
  str += '</ul>';
  document.getElementById("contentIdeas").innerHTML = str;
};

//click buttons
let prepareButton = () => {
  if (listIdeas.hasChildNodes()) {
    let children = listIdeas.childNodes;2
      for (let i = 0; i < children.length; i++) {
        let temp = children[i].id;
        document.getElementById(temp).onclick = function() {
        displayModalBox(temp);
        };
      };
    };


let displayModalBox =(idTarget)=> {
	let index = parseInt(idTarget.substr(4));
	return idTarget;
	console.log(index);
}

addIdeas ();
prepareButton ();


//button to add an item
document.querySelector("btnAdd").addEventListener("click",() =>
  modal.style.display = "block";
	document.getElementById("modTitle").innerHTML = "Name of the idea : <input type=\"text\" id=\"ideaNew\">";
	document.getElementById("modDescr").innerHTML = "Description: <input type=\"text\" id=\"descriptionNew\">";
	//document.getElementById("modCom").innerHTML = "Commentary <input type=\"text\" id=\"commentaryNew\">";
	document.getElementById("addButtons").innerHTML = "<input type=\"button\" id=\"btnSaveNew\" value=\"Save\">";
	document.querySelector("btnSaveNew").addEventListener("click",() =>
	let newIdea = document.getElementById("ideaNew").value;
  let newDes = document.getElementById("descriptionNew").value;
//let newCom = document.getElementById("commentaryNew").value;
//dataJson.push({idea: [newIdea],description: [newDes],commentary: [newCom]});
  modal.style.display = "none"; //remove modal box
  addIdeas (); //make a new list without the new element
  prepareButton(); //listeners on new elements
  };
};
      //button to save json
      document.getElementById("saveAll").onclick = function() {
      localStorage.setItem('dataJson', JSON.stringify(dataJson));
      }
});

/*
//change the default content of the modal box with the one in the
//JSON object
function displayModalBox (idTarget) {
  let index = parseInt(idTarget.substr(4));
  modal.style.display = "block";
  //display values in modal box
  document.getElementById("modTitle").innerHTML = dataJson[index].idea;
  document.getElementById("modDescr").innerHTML = dataJson[index].description;
	document.querySelector('.save-button').addEventListener('click', () => updateOutput(index));
	//updateOutput(index);
	//document.getElementById("modCom").innerHTML = dataJson[index].commentary;
	document.getElementById("addButtons").innerHTML =  "<span><input type=\"button\" id=\"btnEdit\" value=\"Edit\"><input type=\"button\" id=\"btnRemove\" value=\"Remove\"></span>";
  //document.getElementById("addButtons").innerHTML =  dataJson[index].description;
  //edit +save (in 2 steps)
  document.getElementById("btnEdit").onclick = function() {
    document.getElementById("modTitle").innerHTML = "Name of the idea : <input type=\"text\" id=\"idea\" value=\"" + dataJson[index].idea + "\">";
    document.getElementById("modDescr").innerHTML = "Description: <input type=\"text\" id=\"description\" value=\"" + dataJson[index].description + "\">";
    document.getElementById("addButtons").innerHTML =  "<span><input type=\"button\" id=\"btnSave\" value=\"Save\"></span><span> / Close box to aboard</span>";
    document.getElementById("btnSave").onclick = function() {
      dataJson[index].idea = document.getElementById("idea").value;
      dataJson[index].description = document.getElementById("description").value;
      modal.style.display = "none"; //remove modal box
      document.getElementById(idTarget).innerHTML = document.getElementById("idea").value;
    }
  };
  //remove
  document.getElementById("btnRemove").onclick = function() {
      delete dataJson[index];
      modal.style.display = "none"; //remove modal box
      addIdeas (); //make a new list without the element
      prepareButton(); //listeners on new elements
  };
};
*/
//launch functions
/*
addIdeas ();
prepareButton ();

////////////////////////Magali/////////////////////////////
let input_textarea = document.querySelector('.content-input');
let output_div = document.querySelector('.content-output');


function updateOutput(index) {
	//J'ajoute le dernier commentaire et je vide la zone de texte
	dataJson[index].commentary.push(input_textarea.value);
	input_textarea.value="";
	//je string mon tableau clef: content value: data
	//localStorage.setItem('content', JSON.stringify(dataJson.commentary));

	let toDisplay = dataJson[index].commentary;
	//je parcours mon tableau
	for(let i=0; i<index.length; i++ ){

		toDisplay += "<p>" + dataJson[i].commentary + "</p>";//objet json + index

	}
	output_div.innerHTML = toDisplay;
	console.log();
}
// je lance la fonction au click
//save_button.addEventListener('click', updateOutput);
*/
// ---------------------------------- Jeremy mardown --------------------------//
/*
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
*/
