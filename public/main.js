const topMenu = document.querySelector('#ct-top-menu');
const iconToggleMenu = document.querySelector('#ct-top-menu-icon-toggle');

document.addEventListener('click',(e)=> {
    if (iconToggleMenu.contains(e.target)) {
        // clicked to Toggle top menu icon
        topMenu.classList.toggle('hidden')
        
    } 
})  