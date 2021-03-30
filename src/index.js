import css from './style.css'
import {dom} from './dom.js'

// Works - start from here
//dom.cacheDOM()
console.log(dom.cacheDOM.listContainer)

dom.cacheDOM.listContainer.addEventListener('click', () => {
    alert('test');
})

const test = document.querySelector('#listMenu')
console.log(test);
/* let home = (() => {

})(); */