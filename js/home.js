"use strict";

/* ABOUT ME PROGRESS BAR SECTION */
import skills from './data/skills.js';

import progressBars from './component/progress-bar.js'

const progressBarsSelector = '#skills';
progressBars.renderProgressBar(progressBarsSelector, skills);
progressBars.animateProgressBars(progressBarsSelector);

/* ABOUT ME PROGRESS BAR SECTION END*/

/****** RUNNING NUMBER SECTION: ************/

// importinam duomenis:
import runningNumbersData from './data/runningNumbersData.js'

// importinam funkcija:
import renderRunningNumbers from './component/runningNumbers.js'

// gaunu vietos zymekli:
const runningNumbersPlaceSelector = '#runnNumbPlace'
renderRunningNumbers(runningNumbersPlaceSelector, runningNumbersData);




