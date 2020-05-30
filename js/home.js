"use strict";

import skills from './data/skills.js';

import progressBars from './component/progress-bar.js'

console.log(progressBars);

const progressBarsSelector = '#skills';
progressBars.renderProgressBar(progressBarsSelector, skills);
progressBars.animateProgressBars(progressBarsSelector);





