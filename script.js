// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

<<<<<<< HEAD
//check if there is something storage otherwise create an object as exemple
//let dataJson = JSON.parse(localStorage.getItem('dataJson'));
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
    },
    {
      "idea": "Test: Idea 3",
      "description": "Idea 3 description",
      "commentary": []
    }
  ];

  // Get the modal
  let modal = document.getElementById('myModal');
  // Get the button that opens the modal
  let btn = document.getElementById("myBtn");
  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    };
  };

let indexClicked;

//adding 'ideas' on the landing page from object 'dataJson'
let list =  () => {
  let str = "<ul id='listIdeas'>";
  for (let i in dataJson) {
    let idNumber = "idea"+i;
    str += "<li id='" + idNumber + "'>" + dataJson[i].idea + "</li>";
  };
  str += '</ul>';
  document.getElementsByClassName("ideas-list").innerHTML = str;
};
list ();

//transform items 'ideas' into buttons
let listToButons =  () => {
    let lis=document.getElementById('listIdeas').getElementsByTagName('li');
    for(let i = 0; i < lis.length; i++) {
        lis[i].onclick= function(){listToButonsAction(i);};
    }
}
listToButons ();

//put an action on the item clicked
function listToButonsAction (i) {
    //indexClicked = i;
    modal.style.display = "block";
    //change with the new modal (jeremy)
    document.getElementById("modTitle").innerHTML = dataJson[i].idea;
    document.getElementById("modDescr").innerHTML = dataJson[i].description;
    //document.getElementById("modCom").innerHTML = dataJson[indexClicked].commentary;
    //alert(indexClicked+' has been clicked !');
}

//delete button PROBLEM with element zero
document.getElementById("delete-button").onclick = function() {
  //console.log(indexClicked);
  //dataJson.splice(indexClicked , indexClicked);
  delete dataJson[indexClicked];
  //console.log(dataJson);
  list ();
  listToButons ();
  modal.style.display = "none";
}


=======
/*Modal Box*/
/* With buttons in html to open the right one for test purpos */
// Get the Add modal
var modal = document.getElementById('modal-add');
// Get the button that opens the modal
var btn = document.getElementById("modal-add-btn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal-add-close")[0];

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
<<<<<<< HEAD
}
// Get the Edit modal
var modal2 = document.getElementById('modal-edit');
// Get the button that opens the modal
var btn2 = document.getElementById("modal-edit-btn");
// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("modal-edit-close")[0];

// When the user clicks the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
=======
>>>>>>> magali-saintgeorges
}
// Get the Edit modal
var modal2 = document.getElementById('modal-edit');
// Get the button that opens the modal
var btn2 = document.getElementById("modal-edit-btn");
// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("modal-edit-close")[0];

<<<<<<< HEAD

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}




/* / Modal box */
=======
// When the user clicks the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
}
>>>>>>> magali-saintgeorges

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
//---------------------------------------------------------
let dataJson = [
{
  "id": "0",
  "idea": "Test: Idea 1",
  "description": "Idea 1 description",
  "commentary": []
},
{
  "id": "1",
  "idea": "Test: Idea 2",
  "description": "Idea 2 description",
  "commentary": []
},
{
  "id": "2",
  "idea": "Test: Idea 3",
  "description": "Idea 3 description",
  "commentary": []
}
];

// Au chargement de page j'affiche la liste
window.addEventListener("load", ()=>{

  displayIdeas();
});

////////////////////////Magali/////////////////////////////
// fonction qui liste la liste des idées
//-----------------------------------------
let displayIdeas = () => {
  //decommenter pour nettoyer le localstorage
  //localStorage.setItem('content', JSON.stringify(dataJson));
  let listIdeas = localStorage.getItem('content') ? JSON.parse(localStorage.getItem('content')) : [];
  let toDisplay = [];
  console.log(listIdeas);
  for (let i = 0; i<listIdeas.length; i++){
    toDisplay += "<li>id="+listIdeas[i].id+" "+listIdeas[i].idea+"</li>";
  }
  
  document.querySelector('ul').innerHTML += toDisplay;    
}
>>>>>>> origin/master

//Fonction ajoute idée, desciption, id
//---------------------------------------------------

<<<<<<< HEAD

/*

let displayModalBox = (idTarget)=> {
	let index = parseInt(idTarget.substr(4));
	return idTarget;
	console.log(index);
};

//click buttons
let prepareButton = () => {
  if (listIdeas.hasChildNodes()) {
    let children = listIdeas.childNodes;
      for (let i = 0; i < children.length; i++) {
        let temp = children[i].id;
        document.getElementById(temp).onclick = function() {
          displayModalBox(temp);
        };
    };
  };
};
*/
=======
let newIdea = document.querySelector("#modal-title");
let newDes = document.querySelector("#modal-descr");


let addIdea = (i, d) =>{
  let listIdeas = localStorage.getItem('content') ? JSON.parse(localStorage.getItem('content')) : [];
  
  listIdeas.push({id: listIdeas.length ,idea: i.value,description: d.value,commentary: []});
  localStorage.setItem('content', JSON.stringify(listIdeas));
}

// je lance la fonction au click
save_button.addEventListener('click', updateOutput);



document.querySelector(".save-button").addEventListener("click", () => {
	let text = (document.getElementsByClassName(".content-input").value);
	document.getElementsByClassName(".content-output").innerHTML = md.render(text);
	console.log(md.render("hello" + text));
})

document.querySelector(".add-idea").addEventListener("click", () => {
  addIdea(newIdea, newDes);

});

// fonction qui ajoute un commentaire 
// passer en parametre le numero de l'idée

//----------------------------------------
let input_textarea = document.querySelector('.modal-comment');
let output_div = document.querySelector('.modal-com');
let save_button = document.querySelector('.save-idea');
let listIdeas = localStorage.getItem('content') ? JSON.parse(localStorage.getItem('content')) : [];
let listComments = listIdeas[1].commentary;
let comment ="";

let addComments = () => {
  
  comment.push(input_textarea.value);
  
  //localStorage.setItem('content', JSON.stringify(listIdeas));

  input_textarea.value="";
  let toDisplay = "";

  for(let i=0; i<listComments.length; i++ ){

    toDisplay += "<p>" + listComments[i] + "</p>";
  }
  output_div.innerHTML = toDisplay;

};

//save_button.addEventListener('click', () => {
  //addComments();
//};

// fonction qui delete une idée
//-------------------------------------------------

//fonction qui edit une idée
//--------------------------------------------------


// -------------------------- Jeremy markdown convert to html--------------------------//

// If you use require (Node etc), require as first the module and then create the instance
let Remarkable = require('remarkable');
// If you're in the browser, the Remarkable class is already available in the window
let md = new Remarkable();


// document.querySelector(".save-button").addEventListener("click", () => {
//  let text = (document.getElementById("content-input").value);
//   // let butReturn = `<button class="butReturn" id="butReturn" onClick="window.location.reload()">Try again</button>`;
//   // let f = document.querySelector(".form");
//   // f.parentNode.removeChild(f);
//   document.getElementById("content-output").innerHTML = md.render(text);
//   console.log(md.render(text))
// })
>>>>>>> origin/master
