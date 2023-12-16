function addToList() {
    var newDiv = document.createElement('div');
    newDiv.className = 'taskBox';

    var removebutton = document.createElement('button');
    removebutton.className = 'doneButton';
    removebutton.textContent = 'Done';

    removebutton.addEventListener('click', function() {
        newDiv.remove();
        decNumTask();
    });

    if(document.getElementById("numOfTask").innerHTML == 10){
        prompt("Too many tasks!")
        prompt().
        console.log("Error: no more than 10 tasks allowed!")
        return;
    }

    newDiv.appendChild(removebutton);

    document.getElementById('container').appendChild(newDiv);
    incNumTask();
}

function incNumTask() {
    document.getElementById("numOfTask").innerHTML++;
}

function decNumTask() {
    document.getElementById("numOfTask").innerHTML--;
}

function catagory(){
    
}
