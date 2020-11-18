const keys = ["AC", "/", "1", "2", "3", "*", "4", "5", "6", "+", "7", "8", "9", "-", ".", "0", "="]


const mainContainer = document.querySelector('main')

const title = document.createElement('h1')
title.className = 'title'
title.textContent = 'ZE CALCULATOR'

const calculator_grid = document.createElement('div')
calculator_grid.className = 'calculator-grid';

const output = document.createElement('div')
output.className = 'output'

const display = document.createElement('div')
display.className = 'display'

const display2 = document.createElement('div')
display2.className = 'display2'

const historique = document.createElement('div')
historique.className = 'historique'


mainContainer.appendChild(title)
mainContainer.appendChild(calculator_grid)
calculator_grid.appendChild(output)
output.appendChild(historique)
output.appendChild(display2)
output.appendChild(display)


function safeEval(str) {
    return Function('return ' + str)()
}

let previous = [];

for (let element of keys) {
    const buttons = document.createElement('button')
    buttons.textContent = element;

    if (element === "AC") {
        buttons.className = 'span-three'
    }
    if (element === "=") {
        buttons.className = 'span-two'
    }

    buttons.addEventListener('click', function () {

        if (element == "AC") {
            display.textContent = '';
            display2.textContent = '';
        } 
        else if (element == "=") {
            
            display2.textContent = display.textContent;
            let result = safeEval(display.textContent);
            display.textContent = result;
            display2.textContent = display2.textContent +'='+ display.textContent
            previous.push(display2.textContent)
            historique.textContent = previous;
        } 
        else {
            display.textContent += element;
        }
    })

    buttons.addEventListener('keypress', function (e) {
        e.preventDefault();
        if (e.code == "Enter") {
            let result_enter = safeEval(display.textContent)
            display.textContent = result_enter
        }
    })

    buttons.addEventListener('dblclick', function(){

        if (element == "AC"){
            historique.textContent = '';
        }
    } )



    calculator_grid.appendChild(buttons)
}