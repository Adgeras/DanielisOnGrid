"use strict"

function renderRunningNumbers (selector, data) {
    const placeForRunningNumbers = document.querySelector('#runnNumbPlace');
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const icon = data[i].icon
        const label = data[i].label
        const number = data[i].number
        
        HTML += `
            <div class="col-3 col-12-sm">
                <i class="fa fa-${icon}" aria-hidden="true"></i>
                <h3>${number}</h3>
                <p>${label}</p>        
            </div>`;
    }
        placeForRunningNumbers.innerHTML = HTML;
    return;
}
export default renderRunningNumbers;