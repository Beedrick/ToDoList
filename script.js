function addToList() {
    var newDiv = document.createElement('div');
    newDiv.className = 'taskBox';

    var removebutton = document.createElement('button');
    removebutton.textContent = 'Remove';
    removebutton.className = 'remove-button';

    removebutton.addEventListener('click', function() {
        newDiv.remove();
    });

    newDiv.appendChild(removebutton);

    document.getElementById('container').appendChild(newDiv);

}
