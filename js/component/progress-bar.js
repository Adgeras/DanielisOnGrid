"use strict";

function renderProgressBar (selector, data) {
    // validacija
    const DOM = document.querySelector(selector);
       
    if (!DOM) {
        throw 'ERROR: could not find element to render new content.'
    }
    if (!Array.isArray(data)) {
        throw 'ERROR: need some data (array format).'
    }
    if (data.length === 0){
        throw 'ERROR: need some data (not empty array).'
    }

    //logika:
    // console.log(selector);
    // console.log(data);
    
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const skill = data[i];
        // validacija
        if (typeof(skill) !== 'object') {
            continue;
        }
        if (typeof(skill.title) !== 'string' || skill.title === '') {
            continue;
        }
        if (!isFinite(skill.value) || skill.value < 0 || skill.value > 100) {
            continue; 
        }


        // elemento logika
        HTML += `
            <div class="progress-bar" data-animated="false"
            data-value="${skill.value}%">
                <div class="bar">
                    <div class="progress" style="width: 0%" >
                        <div class="label">${skill.title}</div>
                        <div class="value">0%</div>
                    </div>
                </div>
            </div>`;
    }
    if (HTML === '') {
        throw 'ERROR: totally messed up dude... no correct data';
    }
    
    //rezultato grazinimas
    DOM.innerHTML = HTML;
   
        return;
}

function animateProgressBars(progressBarsSelector){
    const progressBars = document.querySelectorAll(progressBarsSelector + '> .progress-bar');
    
    window.addEventListener('scroll', () => {
        const windowBottomHeight = window.scrollY + window.innerHeight;
    
        for (let i = 0; i < progressBars.length; i++) {            
            const pg = progressBars[i];   
            const progress = pg.querySelector('.progress'); 
            const DOMvalue = progress.querySelector('.value');
            const pgBottomHeight = pg.offsetTop + pg.offsetHeight;
            
            if (pgBottomHeight < windowBottomHeight  &&
                pg.dataset.animated === 'false') {
                pg.dataset.animated = 'true';
                progress.style.width = pg.dataset.value;
                animateProgressBarTextvalue(DOMvalue, pg.dataset.value);   
            }   
        }
    });
   
    function animateProgressBarTextvalue(element, value) {
        const number = parseInt(value); // final number to reach
        const time = 3000; // miliseconds. Max 60 frames per seconds
        const fps = 30; //30 f-rames p-er s-econd
        const refreshTime = 1000 / fps;
        const totalSteps = time / refreshTime;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            element.innerText = Math.round(step / totalSteps * number)+`%`;
            if (step >= totalSteps) {
                clearInterval(timer);
            }
        }, refreshTime);       
    }
}

export default {renderProgressBar, 
                animateProgressBars
} ;