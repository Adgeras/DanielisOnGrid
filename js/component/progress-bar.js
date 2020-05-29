"use strict";

function renderProgressBar (selector, data) {
    // validacija
    const DOM = document.querySelector(selector);
    
    if (!DOM) {
        throw 'ERROR: could not find element to render new content.'
    }

    //logika:
    console.log(selector);
    console.log(data);
    
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const skill = data[i];
        HTML += `
            <div class="progress-bar" data-animated="false">
                <div class="bar">
                    <div style="width: ${skill.value}%;" class="progress">
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