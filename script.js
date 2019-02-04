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

//transform items 'ideas' into butons
let listToButons =  () => {
    var lis=document.getElementById('listIdeas')
    .getElementsByTagName('li');
    for(let i=0;i<lis.length;i++) {
        lis[i].onclick= function(){listToButonsAction(i);};
    }
}
listToButons ();

//put an action on the item clicked
function listToButonsAction (indexClicked)
{
    indexClicked = indexClicked;
    alert(indexClicked+' has been clicked !');
}







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
