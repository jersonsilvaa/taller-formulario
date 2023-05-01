const $ = selector => document.querySelector(selector)

function Dropdown () {
    $('#dropdownCont').classList.toggle('show')
}

window.onclick = (event) => {
    if (!event.target.matches('.itemOption') || !event.target.matches('.dropdown')) {
        const dropdowns = $('.dropdownCont')
        
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i]
            if (openDropdown.classList.contains('show')) openDropdown.classList.remove('show')
        }
    }
}
