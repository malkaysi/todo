let dom = (() => {

    /* //cache DOM
    const listContainer = document.querySelector('#listContainer')  */

    // cacheDOM
    function cacheDOM(){
        const listContainer = document.querySelector('#listContainer')
        alert('test'); 
    }

    return {
        cacheDOM: cacheDOM
    }

})();

export {dom};