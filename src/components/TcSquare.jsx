import "./StyleTic.css";

function TicTacToSquare({ box, handleBox,a,b }) {
    //console.log(box);
return (
<>
    
        <div onClick={()=>handleBox(a,b)}>{box[a][b]}</div>
</>
);
}

export {TicTacToSquare} ;