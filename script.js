//This is an array of objects, conating the interface items.
let interfaceItems = [
    {
        text: '7',
        value: 7,
    },
    {
        text: '8',
        value: 8,
    },
    {
        text: '9',
        value: 9,
    },
    {
        text: '÷',
        value: '/',
    },
    {
        text: '4',
        value: 4,
    },
    {
        text: '5',
        value: 5,
    },
    {
        text: '6',
        value: 6,
    },
    {
        text: '×',
        value: '*',
    },
    {
        text: '1',
        value: 1,
    },
    {
        text: '2',
        value: 2,
    },
    {
        text: '3',
        value: 3,
    },
    {
        text: '−',
        value: '-',
    },
    {
        text: '0',
        value: 0,
    },
    {
        text: '.',
        value: '.',
    },
    {
        text: '=',
        value: '=',
    },
    {
        text: '+',
        value: '+',
    },
];

let caclulatorElement = document.getElementById('calculator');
let display = document.createElement('div');
let currentExpression = '';
display.classList.add('calculator-display');

let clearButton = createButton('CE');

clearButton.addEventListener('click', function( ){

    currentExpression = '';
    updateDisplay();
})
caclulatorElement.appendChild(display);
caclulatorElement.appendChild(clearButton);



interfaceItems.forEach (function(item){

    let b = createButton(item.text);
    caclulatorElement.appendChild(b);
    if(item.value === '='){

        b.classList.add('equals');
        b.addEventListener('click', function(){


            try { currentExpression = '' + eval(currentExpression);
            
            } catch (e){
                alert('Just go learn some math and then use this calculator :)');
                currentExpression = '';
            }
            
            updateDisplay();

            
        });

    }else{
        if(typeof item.value === 'numnber'){

            b.classList.add('number');

        }else if(item.value === "."){

            b.classList.add('decimal');

        }else{
            b.classList.add('operation');
        }

        b.addEventListener('click', function(){
            if(currentExpression.length >= 9){
                return;
            }

            currentExpression += '' + item.value;
        updateDisplay();
        });
    }

});

function updateDisplay() {
    display.textContent = currentExpression.substring(0, 9);
}

function createButton(text) {

    let b = document.createElement('button');
    b.textContent = text;
    b.classList.add('calculator-button');
    return b;
    
}
document.createElement('button');