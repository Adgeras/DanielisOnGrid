"use strict";

import skills from './data/skills.js';

import renderProgressBar from './component/progress-bar.js'

const progressBarsSelector = '#skills';
renderProgressBar(progressBarsSelector, skills);

const progressBars = document.querySelectorAll(progressBarsSelector + '> .progress-bar');


window.addEventListener('scroll', () => {
    const windowBottomHeight = window.scrollY + window.innerHeight;

    for (let i = 0; i < progressBars.length; i++) {            
        const pg = progressBars[i];   
        const progress = pg.querySelector('.progress'); 
        const pgBottomHeight = pg.offsetTop + pg.offsetHeight;
        
        if (pgBottomHeight < windowBottomHeight  &&
            pg.dataset.animated === 'false') {
            pg.dataset.animated = 'true';
            progress.style.width = pg.dataset.value;
            
        }   
    }
});

