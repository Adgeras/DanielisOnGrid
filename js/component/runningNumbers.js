"use strict"

function renderRunningNumbers (selector, data) {
    const placeForRunningNumbers = document.querySelector('#runnNumbPlace');
    
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const icon = data[i].icon;
        const label = data[i].label;
        //const number = data[i].number;
        HTML += `
            <div class="col-3 col-12-sm">
                <i class="fa fa-${icon}" aria-hidden="true"></i>
                <div class="number">0</div>
                <p>${label}</p>        
            </div>`;        
        }
        placeForRunningNumbers.innerHTML = HTML;
                 
                    const speed = 300;  
                    var animNumPlace = placeForRunningNumbers.querySelectorAll('.col-3 >.number ');
                    
                    animNumPlace.forEach(function (a,b){
                        function updateCount() {                                 
                        const target = data[b].number;
                        const count = +a.innerText;
                        const inc = target / speed;
                                                
                        if (count < target) {
                            a.innerText = Math.ceil(count + inc);
                            setTimeout(updateCount, 1);
                        } else {
                            a.innerText = target;
                            }
                        }
                        updateCount();
                    });
               
}
export default renderRunningNumbers;