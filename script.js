const container = document.querySelector('#container');
container.style.cssText = 'display:flex; flex-wrap:wrap;';

function createRowColumn(numOfSquares){
    let numOfDivs = 0;

    for (let row=0; row < numOfSquares; row++){
    for (let column=0; column < numOfSquares; column++){
    const squareDiv = document.createElement('div');
    squareDiv.style.cssText = 'border: 2px solid grey; display:flex; width:50px; height:50px;';
    squareDiv.classList.add('grid');
    container.appendChild(squareDiv);
    numOfDivs += 1;
    console.log(`Div ${numOfDivs}`);
    };
  }

};


function createGrid(){

    let numOfSquares = prompt('Input number of squares per side betweeen 1 and 100');
    numOfSquares = Number(numOfSquares);

  if(numOfSquares > 0 && numOfSquares <= 100 ){
      createRowColumn(numOfSquares);
      numOfSquares = 0;
    } else{
        while (numOfSquares < 1 || numOfSquares > 100){
            alert('The number must be betweeen 1 and 100')
            numOfSquares = prompt('Input number of squares per side between 1 and 100');
        };
        createRowColumn(numOfSquares);
        numOfSquares = 0;
    }  


    function getRandomColour(){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        return `rgb(${r},${g},${b})`;
    }

const grids = document.querySelectorAll('.grid');
grids.forEach( grid => {grid.addEventListener('mouseover', () =>{
    grid.style.backgroundColor = getRandomColour();
});
});
};

createGrid();

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () =>{
    container.innerHTML = '';
    createGrid();
});