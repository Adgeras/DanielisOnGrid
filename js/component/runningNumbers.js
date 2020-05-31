"use strict"

function renderRunningNumbers (selector, data) {
    const placeForRunningNumbers = document.querySelector('#runnNumbPlace');
    
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const icon = data[i].icon
        const label = data[i].label
        //const number = data[i].number
        HTML += `
            <div class="col-3 col-12-sm">
                <i class="fa fa-${icon}" aria-hidden="true"></i>
                <div class="number">0</div>
                <p>${label}</p>        
            </div>`;      
            
        }
        placeForRunningNumbers.innerHTML = HTML;
        animateNumber(selector, data);
        
    // numberiu animacijai reikia cikle kreiptis i funkcija 
    // paduodant jai elementa (jo vieta) ir jo dataset reiksme "value"
            
    function animateNumber(selectors, data) {
        const time = 2000;
        const fps = 30;
        const refreshTime = 1000 / fps; //laikas milisekundem per kiek turi atsinaujint
        const totalSteps = time / refreshTime; // kiek viso duotame laike žingsnių
        
        var animNumPlace = placeForRunningNumbers.querySelectorAll('.col-3 >.number ');
        console.log(animNumPlace); // vieta pagauna 
        console.log(animNumPlace.length) // ilgis geras
        for (let i = 0; i <= animNumPlace.length; i++) {
            var counter = 0;
            const skaicius = data[i].number // sita pagauna 
            console.log(animNumPlace[i]);
            console.log('Reiksme iki kurios turi suktis = ' + skaicius);
            
                                               
            const timer = setInterval(() => {
                counter++;
                animNumPlace[i].innerText = Math.floor(counter / totalSteps * skaicius);  
                //console.log(animNumPlace[i]);
                if (counter >= totalSteps) {
                    clearInterval(timer);
                }
            }, refreshTime); 
        }    
            return;                
    }
}
export default renderRunningNumbers;