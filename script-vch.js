
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

// import the json
import dataJson from "./data.json";

//adding 'ideas' on the landing page from json
function addIdeas () {
  let str = "<ul id='listIdeas'>";
  for (let i in dataJson){
    let idNumber = "idea"+i;
    str += "<li id='" + idNumber + "'>" + dataJson[i].idea + "</li>";
  };
  str += '</ul>';
  document.getElementById("contentIdeas").innerHTML = str;
};

//listener for buttons, parse the childrens of the list 'listIdeas'
//created in addIdeas and added on landing page
//THEN create a button for each element/idea in the list
function prepareButton() {
  if (listIdeas.hasChildNodes()) {
    let children = listIdeas.childNodes;
      for (let i = 0; i < children.length; i++) {
        let temp = children[i].id;
        document.getElementById(temp).onclick = function() {
        displayModalBox(temp);
        };
      };
    };
    //button to add an item
    document.getElementById("btnAdd").onclick = function() {
      modal.style.display = "block";
      document.getElementById("modTitle").innerHTML = "Name of the idea : <input type=\"text\" name=\"idea\">";
      document.getElementById("modDescr").innerHTML = "Description: <input type=\"text\" name=\"description\">";
      document.getElementById("modCom").innerHTML = "";
      document.getElementById("addButtons").innerHTML = "<input type=\"button\" id=\"btnSave\" value=\"Save\">";
    };
};

//change the default content of the modal box with the one in the
//JSON object
function displayModalBox (idTarget) {
  let index = parseInt(idTarget.substr(4));
  modal.style.display = "block";
  //display values in modal box
  document.getElementById("modTitle").innerHTML = dataJson[index].idea;
  document.getElementById("modDescr").innerHTML = dataJson[index].description;
  document.getElementById("modCom").innerHTML = dataJson[index].commentary;
  document.getElementById("addButtons").innerHTML =  "<span><input type=\"button\" id=\"btnEdit\" value=\"Edit\"><input type=\"button\" id=\"btnRemove\" value=\"Remove\"></span>";
  document.getElementById("btnEdit").onclick = function() {
    console.log("edit");
  };
  document.getElementById("btnRemove").onclick = function() {
      console.log(dataJson);
      //dataJson.splice(index, index);//delete index element
      delete dataJson[index];
      /*while( listIdeas.firstChild) {
          listIdeas.removeChild( listIdeas.firstChild);
      }*/
      modal.style.display = "none"; //remove modal box
      addIdeas (); //make a new list without the element
      prepareButton(); //listeners on new elements
      console.log(index);
  };
};


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
//launch functions
addIdeas ();
prepareButton ();

//for later
/*
while( listIdeasfirstChild) {
    listIdeasremoveChild( listIdeas.firstChild);
}
*/
