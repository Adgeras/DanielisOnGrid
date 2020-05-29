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
        const pgBottomHeight = pg.offsetTop + pg.offsetHeight;
        
        console.log(pgBottomHeight, windowBottomHeight);
        if (pgBottomHeight < windowBottomHeight) {
            pg.dataset.animated = 'true';
        } 
        
    }
});

