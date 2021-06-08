const modal = document.getElementById('myModal');

function displayModal() {
    modal.style.display = 'block'
}

function hideModal() {
    modal.style.display = 'none';
}


export { displayModal, hideModal }