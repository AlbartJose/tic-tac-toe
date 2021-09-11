import "./StyleTic.css"
import React from "react";
import { TicTacToeGrid } from "./TcGrid";

export function TicTacToe() {

    function checkWinner() {
        var countx = 0;
    var countO = 0;
    for (let i = 0; i < 3; i++) {
        countx = 0;
        countO = 0;
        for (let j = 0; j < 3; j++) {
            if (box[i][j] === "X") countx++;
            else if (box[i][j] === "O") countO++;
        }
        if (countO === 3) return "O";
        else if (countx === 3) return "X";
    }
    for (let i = 0; i < 3; i++) {
        countx = 0; countO = 0;
        for (let j = 0; j < 3; j++) {
            if (box[j][i] === "X") countx++;
            else if (box[j][i] === "O") countO++;
        }
        if (countO === 3) return "O";
        else if (countx === 3) return "X";
    }
    countx = 0; countO = 0;
    for (let i = 0; i < 3; i++) {
        if (box[i][i] === "X") countx++;
        if (box[i][i] === "O") countO++;
    }
    if (countO === 3) return "O";
    else if (countx === 3) return "X";
    countx = 0; countO = 0;
    for (let i = 0; i < 3; i++) {
        if (box[i][2 - i] === "X") countx++;
        if (box[i][2 - i] === "O") countO++;
    }
    if (countO === 3) return "O";
    else if (countx === 3) return "X";


    return null;
    }
    
    var initState = [[null, null, null], [null, null, null], [null, null, null]];
    const [counter, setCounter] = React.useState(true);
    const [xhist, setXhist] = React.useState([]);
    const [ohist, setOhist] = React.useState([]);
    const [game, setGame] = React.useState(true);
    const [box, setBox] = React.useState(initState);
    const [winner, setWinner] = React.useState(null);

    const handleBox = (a, b) => {
        //console.log(box[a][b]);
        if (game) {
          if (counter) {
            if (box[a][b] == null) {
                box[a][b] = "X";
                setCounter(!counter);
                setXhist([...xhist, { a:a, b:b }]);
            }
            else alert("Click Unoccupied box");
        }
        else {
            if (box[a][b] == null) {
                box[a][b] = "O";
                setCounter(!counter);
                setOhist([...ohist, { a:a, b:b }]);
            }
            else alert("Click Unoccupied box");
        }
        setBox(box);
        var count = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (box[i][j] == null) {
                    count++;
                }
            }
        }
        if (count === 0) {
            //console.log(initState);
            setGame(false);

            //alert("Game Over");
        }
        var newWinner = checkWinner();
        if (newWinner !== null) {
            setWinner(newWinner)
            setGame(false);
        }  
        }
        
    };
//   const handleInc1 = (value) => {
//     setCounter(counter * value);
//   };
    const handleClick = () => {
        setGame(true);
        setBox(initState);
        setWinner(null);
        setOhist([]);
        setXhist([]);
        setCounter(true);

    }



    return (
        <>
            <div className="contain">
                <div className="ticB1">
                    {game ? (
                        null
                    ) : (<>
                            {winner === null ? (
                                <div>DRAW</div>
                            ):winner==="X"?(<div>Player X won</div>):(<div>Player O Won</div>)}
                            <div>Game Over</div>
                            </>
                        
                        )}
                </div>
                <div style={{display:"flex"}}>
                    <TicTacToeGrid box={box} handleBox={handleBox} />
                    <div className="ticB2B">
                        <h2>Player X Moves</h2>
                        <div>
                            {xhist.map((el) => {
                                return <div>row: {el.a+1}, col: {el.b+1}</div>
                            })}
                        </div>
                    </div>
                    <div className="ticB2B">
                        <h2>Player O Moves</h2>
                        <div>
                            {ohist.map((el) => {
                                return <div>row: {el.a+1}, col: {el.b+1}</div>
                            })}
                        </div>
                    </div>
                </div>
                
                <div>
                    {game ? (
                        null
                    ) : (<>
                            <button onClick = {handleClick}>Play New Game</button>
                            </>
                        
                        )}
                </div>

            </div>
        </>
        
    )
}