function addToList(catagory) {
    var newDiv = document.createElement('div');
    newDiv.className = 'taskBox';

    var cataImage = document.createElement('img');
    cataImage.src = catagory;
    cataImage.className = 'taskImage';

    newDiv.appendChild(cataImage);

    var removebutton = document.createElement('button');
    removebutton.className = 'doneButton';
    removebutton.textContent = 'Done';

    removebutton.addEventListener('click', function() {
        newDiv.remove();
        decNumTask();
    });

    var textBox = document.createElement('input');
    textBox.className = 'inputBox';

    if(document.getElementById("numOfTask").innerHTML == 10){
        console.log("Error: no more than 10 tasks allowed!")
        return;
    }

    newDiv.appendChild(removebutton);
    newDiv.appendChild(textBox);
    document.getElementById('container').appendChild(newDiv);
    incNumTask();
}

function incNumTask() {
    document.getElementById("numOfTask").innerHTML++;
}

function decNumTask() {
    document.getElementById("numOfTask").innerHTML--;
}
