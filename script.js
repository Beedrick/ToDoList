var checked = false;

function addToList() {

    var newDiv = document.createElement('div');
    newDiv.className = 'taskBox';

    var userInBox = document.getElementById('userInputDiv');

    var imagesource = userInBox.lastChild.src;
    var url = new URL(imagesource);
    var imagePath = url.pathname;

    var cataImage = document.createElement('img');
    cataImage.src = imagePath;
    cataImage.className = 'taskImage';
    cataImage.id = 'inBoxIcon';



    var removebutton = document.createElement('button');
    removebutton.className = 'doneButton';
    removebutton.textContent = 'Done';

    removebutton.addEventListener('click', function() {
        newDiv.remove();
        decNumTask();
    });

    var textBox = document.createElement('div');
    textBox.id = 'inputBox';

    if(document.getElementById("numOfTask").innerHTML == 10){
        console.log("Error: no more than 10 tasks allowed!")
        return;
    }

    var userIn = document.getElementById('user_input');
    let text = userIn.value;
    textBox.innerText = text;

    newDiv.appendChild(cataImage);
    newDiv.appendChild(textBox);
    newDiv.appendChild(removebutton);

    document.getElementById('container').appendChild(newDiv);
    
    var inputDiv = document.getElementById("userInputDiv");
    inputDiv.removeChild(document.getElementById('taskIcon'));
    userIn.value = ""

    checked = false;

    incNumTask();
}

function incNumTask() {
    document.getElementById("numOfTask").innerHTML++;
}

function decNumTask() {
    document.getElementById("numOfTask").innerHTML--;
}

function selectCata(imgSource) {
var inputDiv = document.getElementById("userInputDiv");
  
if(checked){
       var divBoxSrc = document.getElementById('taskIcon');
       var url = new URL(divBoxSrc.src);
       var imagePath = url.pathname;
       if(imagePath == imgSource){
        return;
       }else{
        checked = false;
        inputDiv.removeChild(document.getElementById('taskIcon'));
       }
   }

    if(!checked){
        var cataImage = document.createElement('img');
        cataImage.src = imgSource;
        cataImage.className = 'taskImage';
        cataImage.id = 'taskIcon'
        inputDiv.appendChild(cataImage);
        checked = true;
    }
}
