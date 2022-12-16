const topMenu = document.querySelector('#ct-top-menu');
const iconToggleMenu = document.querySelector('#ct-top-menu-icon-toggle');

document.addEventListener('click',(e)=> {
    if (iconToggleMenu.contains(e.target)) {
        // clicked to Toggle top menu icon
        topMenu.classList.toggle('hidden')
        topMenu.classList.toggle('ct-top-menu-expanded')
    } else {
        // clicked outside from toggle top menu icon
        if(topMenu.classList.contains('ct-top-menu-expanded')) {
            topMenu.classList.remove('ct-top-menu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})  