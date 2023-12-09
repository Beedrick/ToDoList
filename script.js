function remove() {
    
}


function addToList() {
    var newDiv = document.createElement('div');
    newDiv.className = 'taskBox';
    //gets the div box element with id container to append new boxes/divs to
    document.getElementById('container').appendChild(newDiv);
}
