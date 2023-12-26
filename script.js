var checked = false;

function addToList() {

    var newDiv = document.createElement('div');
    newDiv.className = 'taskBox';

    var taskInput = document.createElement('input');
    taskInput.type = 'text';
    taskInput.readOnly = 'true';
    taskInput.id = 'inputBox';

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

    var editButton = document.createElement('button');
    editButton.className = 'doneButton';
    editButton.textContent = 'edit';

    removebutton.addEventListener('click', function() {
        newDiv.remove();
        decNumTask();

        var completeTask = new Audio('/audio/TaskDone.MP3');
        completeTask.volume = 1;
        completeTask.play();
    });

    editButton.addEventListener('click', function(){
        
        if(editButton.innerText.toLowerCase() == 'edit'){
            var editSound = new Audio('/audio/editSoundF.MP3');
            editSound.play();
            editSound.volume = 0.15;
            taskInput.removeAttribute('readonly');
            taskInput.focus();
            editButton.innerText = 'save';
        }else {
            taskInput.readOnly = 'true';
            editButton.innerText = 'edit';
            var saveSound = new Audio('/audio/SaveSound.MP3');
            saveSound.volume = 0.15;
            saveSound.play();
        }

    })


    if(document.getElementById("numOfTask").innerHTML == 10){
        console.log("Error: no more than 10 tasks allowed!")
        return;
    }

    var userIn = document.getElementById('user_input');
    let text = userIn.value;
    taskInput.value = text;

    var writeTask = new Audio('/audio/WriteTask.MP3');
    writeTask.play();

    newDiv.appendChild(cataImage);
    //newDiv.appendChild(textBox);
    newDiv.appendChild(taskInput);
    newDiv.appendChild(removebutton);
    newDiv.appendChild(editButton);

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
