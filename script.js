// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

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

let indexClicked;

//adding 'ideas' on the landing page from object 'dataJson'
let list =  () => {
  let str = "<ul id='listIdeas'>";
  for (let i in dataJson) {
    let idNumber = "idea"+i;
    str += "<li id='" + idNumber + "'>" + dataJson[i].idea + "</li>";
  };
  str += '</ul>';
  document.getElementById("contentIdeas").innerHTML = str;
};
list ();

//transform items 'ideas' into buttons
let listToButons =  () => {
    var lis=document.getElementById('listIdeas')
    .getElementsByTagName('li');
    for(let i = 0; i < lis.length; i++) {
        lis[i].onclick= function(){listToButonsAction(i);};
    }
}
listToButons ();

//put an action on the item clicked
function listToButonsAction (i) {
    indexClicked = i;
    modal.style.display = "block";//change with the new modal (jeremy)
    document.getElementById("modTitle").innerHTML = dataJson[indexClicked].idea;
    document.getElementById("modDescr").innerHTML = dataJson[indexClicked].description;
    document.getElementById("modCom").innerHTML = dataJson[indexClicked].commentary;
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
