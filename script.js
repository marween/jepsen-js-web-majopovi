// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*Modal Box*/
/* With buttons in html to open the right one for test purpos */
// Get the Add modal
var modal = document.getElementById('modal-add');
var modalEdit = document.getElementById('modal-edit');
// Get the button that opens the modal
var btn = document.getElementById("modal-add-btn");
var edit = document.querySelector('modal-edit-btn');
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


}
// Get the Edit modal
var modal2 = document.getElementById('modal-edit');
// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("modal-edit-close")[0];

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}



//-----------------------fin des fct de la modal box----------------------------------
// debut des fonctions de l'application 

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

// When adding idea, reload the page
document.querySelector(".add-idea").addEventListener("click", () => {
  location.reload();
})

//-------------------------------------------------------------------------
/*On affiche sur la page index la liste des idées 
on ajoute pour chaque idée un bouton delete edit et afficher */

let displayIdeas = () => {
  //decommenter pour nettoyer le localstorage
  // localStorage.setItem('content', JSON.stringify(dataJson));
  let listIdeas = localStorage.getItem('content') ? JSON.parse(localStorage.getItem('content')) : [];
  let toDisplay = "";

  // je parcours le tableau
  // ----debut for
  for (let i = 0; i<listIdeas.length; i++){
    let li = document.createElement ("li");
    li.innerText = listIdeas[i].idea;

    //creation du bouton edit 
    let editBtn = document.createElement ("button");
    editBtn.setAttribute("class", "modal-edit-btn");
    editBtn.innerText = "Edit";

    // on edit 
    editBtn.addEventListener('click', () => {
      document.querySelector("#edit-title").value = listIdeas[i].idea;
      document.querySelector("#edit-descr").innerText = listIdeas[i].description;
      document.querySelector(".modal-com").innerText = listIdeas[i].commentary;
      
      // on sauvegarde dans la local nos changement 
      let saveBtn = document.querySelector(".save-idea");
      saveBtn.addEventListener("click", () => {
        listIdeas[i].idea = document.querySelector("#edit-title").value;
        listIdeas[i].description = document.querySelector("#edit-descr").value;
        localStorage.setItem('content', JSON.stringify(listIdeas));
        window.location.reload();
      });// end of save

      modalEdit.style.display = "block";

    }); // end of edit

    
    // creation du bouton delete
    let deleteBtn = document.createElement ("button");
    deleteBtn.setAttribute("id", "delete" + i);
    deleteBtn.setAttribute("class", "modal-delete-btn");
    deleteBtn.innerText = "Delete";

    // on supprime 
    deleteBtn.addEventListener('click', () => {
      listIdeas.splice(i, 1);
      localStorage.setItem('content', JSON.stringify(listIdeas));
      window.location.reload();

    }); // end of delete
    
    // on affiche la liste avec le ul et li +  avec les boutons delete et edit 
    let ul =document.querySelector('ul');
    ul.appendChild(li);
    ul.appendChild(deleteBtn);
    ul.appendChild(editBtn);

  } // end of for

}// end function displayIdeas


/*Sur la page index, on doit pouvoir ajouter une nouvelle idée 
on a besoin de l'id de cette idée de sa value ainsi que sa description 
A chaque idée, on peut lui donner des commentaires*/

//Fonction ajoute idée, desciption, id
//---------------------------------------------------

let newIdea = document.querySelector("#modal-title");
let newDes = document.querySelector("#modal-descr");

let addIdea = (i, d) =>{

  let listIdeas = localStorage.getItem('content') ? JSON.parse(localStorage.getItem('content')) : [];
  
  listIdeas.push({id: listIdeas.length ,idea: i.value,description: d.value,commentary: []});
  localStorage.setItem('content', JSON.stringify(listIdeas));

}// end of function addIdea

// on ajoute une idée 
let addBtn =  document.querySelector(".add-idea");

addBtn.addEventListener("click", () => {
  addIdea(newIdea, newDes);

});// end of add 



/*Pour chaque idée, 
on doit pouvoir donner un 
commentaire qui lui est propre*/


// fonction qui ajoute un commentaire
// passer en parametre le numero de l'idée

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


//--------------------------------------------------------------------------------------

/*Pour chaque champs texte, on doit generer du markdown*/
// -------------------------- Jeremy markdown convert to html--------------------------//

// If you use require (Node etc), require as first the module and then create the instance
let Remarkable = require('remarkable');
// If you're in the browser, the Remarkable class is already available in the window
let md = new Remarkable();

document.querySelector(".add-idea").addEventListener("click", () => {
  let text = (document.getElementById("modal-descr").value);
  // document.getElementById("idea-descr").innerHTML = md.render(text);
  console.log(md.render(text));
})
