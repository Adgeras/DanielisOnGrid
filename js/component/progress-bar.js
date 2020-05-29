"use strict";

function renderProgressBar (selector, data) {
    // validacija
    const DOM = document.querySelector(selector);
    
    if (!DOM) {
        throw 'ERROR: could not find element to render new content.'
    }

    //logika:
    // console.log(selector);
    // console.log(data);
    
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const skill = data[i];
        HTML += `
            <div class="progress-bar" data-animated="false"
            data-value="${skill.value}%">
                <div class="bar">
                    <div class="progress" style="width: 0%" >
                        <div class="label">${skill.title}</div>
                        <div class="value">${skill.value}%</div>
                    </div>
                </div>
            </div>`;
    }
    
    //rezultato grazinimas
    DOM.innerHTML = HTML;
   
        return;
}

export default renderProgressBar;