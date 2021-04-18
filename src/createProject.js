export let createProject = setTimeout((function() {

    //cacheDOM
    const newProjButton = document.querySelector('#newProjButton');

    //bindEvents
    // newProjButton.addEventListener('click', alert('test'));
    newProjButton.addEventListener('click', () => {
        getInputValue();
    })

    function getInputValue(){
        let projInputValue = document.getElementById('projInput').value;
        console.log(projInputValue)
    }
    
})(), 3000);