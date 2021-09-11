import React from 'react';
import "./StyleTic.css"
import { TicTacToSquare } from './TcSquare';

function TicTacToeGrid({ box, handleBox }) {
    //console.log(box);
return (
<>
    <div className="ticGrid">
            <TicTacToSquare a={0} b={0} box={box} handleBox={handleBox} />
            <TicTacToSquare a={0} b={1} box={box} handleBox={handleBox} />
            <TicTacToSquare a={0} b={2} box={box} handleBox={handleBox} />
            <TicTacToSquare a={1} b={0} box={box} handleBox={handleBox} />
            <TicTacToSquare a={1} b={1} box={box} handleBox={handleBox} />
            <TicTacToSquare a={1} b={2} box={box} handleBox={handleBox} />
            <TicTacToSquare a={2} b={0} box={box} handleBox={handleBox} />
            <TicTacToSquare a={2} b={1} box={box} handleBox={handleBox} />
            <TicTacToSquare a={2} b={2} box={box} handleBox={handleBox} />
            
    </div>
</>
);
}

export {TicTacToeGrid} ;