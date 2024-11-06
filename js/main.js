// ========   Close menu with scroll =====================
const menuToggleCheckbox = document.getElementById('menu-toggle');
const sideSearch = document.getElementById('side-search');
const sideSearchOpen = document.getElementById('side-search-open');
const sideSearchClose = document.getElementById('side-search-close');

let isSideSearchOpen = false;

AOS.init();

window.addEventListener('scroll', () => {
    if (menuToggleCheckbox.checked) {
        menuToggleCheckbox.checked = false;
    }

    if (isSideSearchOpen) {
        sideSearch.classList.remove('in'); 
        setTimeout(() => {
            sideSearch.style.width = '0'; 
            isSideSearchOpen = false; 
        }, 700);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    sideSearchOpen.addEventListener('click', () => {
        if (isSideSearchOpen) {
            sideSearch.classList.remove('in');
            setTimeout(() => {
                sideSearch.style.width = '0';
                isSideSearchOpen = false; 
            }, 200); 
        } else {
            sideSearch.style.width = '300px';
            setTimeout(() => sideSearch.classList.add('in'), 200);
            isSideSearchOpen = true;
        }
    });
    

    sideSearchClose.addEventListener('click', () => {
        sideSearch.classList.remove('in'); 
        setTimeout(() => {
            sideSearch.style.width = '0'; 
            isSideSearchOpen = false; 
        }, 900); 
    });
});
