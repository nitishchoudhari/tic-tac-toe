import React, {useState} from "react";
import Circle from "./Circle";
import Cross from "./Cross";


const CIRCLE = "Circle";
const CROSS = "Cross";
const EMPTY = "Empty";

function TicTacToe() {
  const [state, setState] = useState({
    player: "Cross",
    moves: [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY]
  });

  function takeTurn(position) {
    const moves = [...state.moves];
    moves[position] = state.player;
    setState({
      player: state.player === CROSS ? CIRCLE : CROSS,
      moves
    });
  }

  function Reset() {
    setState({
      player: "Cross",
      moves: [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY]
    });
  }

  function detectWinner(p) {
    if (p[0] === CROSS && p[1] === CROSS && p[2] === CROSS) return CROSS;
    if (p[3] === CROSS && p[4] === CROSS && p[5] === CROSS) return CROSS;
    if (p[6] === CROSS && p[7] === CROSS && p[8] === CROSS) return CROSS;

    if (p[0] === CROSS && p[3] === CROSS && p[6] === CROSS) return CROSS;
    if (p[1] === CROSS && p[4] === CROSS && p[7] === CROSS) return CROSS;
    if (p[2] === CROSS && p[5] === CROSS && p[8] === CROSS) return CROSS;

    if (p[0] === CIRCLE && p[1] === CIRCLE && p[2] === CIRCLE) return CIRCLE;
    if (p[3] === CIRCLE && p[4] === CIRCLE && p[5] === CIRCLE) return CIRCLE;
    if (p[6] === CIRCLE && p[7] === CIRCLE && p[8] === CIRCLE) return CIRCLE;

    if (p[0] === CIRCLE && p[3] === CIRCLE && p[6] === CIRCLE) return CIRCLE;
    if (p[1] === CIRCLE && p[4] === CIRCLE && p[7] === CIRCLE) return CIRCLE;
    if (p[2] === CIRCLE && p[5] === CIRCLE && p[8] === CIRCLE) return CIRCLE;

    if (p[0] === CIRCLE && p[4] === CIRCLE && p[8] === CIRCLE) return CIRCLE;
    if (p[2] === CIRCLE && p[4] === CIRCLE && p[6] === CIRCLE) return CIRCLE;

    if (p[0] === CROSS && p[4] === CROSS && p[8] === CROSS) return CROSS;
    if (p[2] === CROSS && p[4] === CROSS && p[6] === CROSS) return CROSS;

    if (p.every((position) => position !== EMPTY)) return "It is a Tie";
  }

  const winner = detectWinner(state.moves);
  return (
    <div>
      <div className="grid">
        <Square position={0} value={state.moves[0]} takeTurn={takeTurn} />
        <Square position={1} value={state.moves[1]} takeTurn={takeTurn} />
        <Square position={2} value={state.moves[2]} takeTurn={takeTurn} />
        <Square position={3} value={state.moves[3]} takeTurn={takeTurn} />
        <Square position={4} value={state.moves[4]} takeTurn={takeTurn} />
        <Square position={5} value={state.moves[5]} takeTurn={takeTurn} />
        <Square position={6} value={state.moves[6]} takeTurn={takeTurn} />
        <Square position={7} value={state.moves[7]} takeTurn={takeTurn} />
        <Square position={8} value={state.moves[8]} takeTurn={takeTurn} />
      </div>
      {winner && <Result winner={winner} reset={Reset} />}
    </div>
  );
}


function Square({ value, position, takeTurn }) {
    function handleClick() {
      if (value === EMPTY) takeTurn(position);
    }
    return (
      <div className="square" onClick={handleClick}>
        {value === CIRCLE && <Circle />}
        {value === CROSS && <Cross />}
      </div>
    );
  }
  
  function Result({ winner, reset }) {
    return (
      <div className="result">
        {winner === CROSS && "CROSS won the Game"}
        {winner === CIRCLE && "CIRCLE won the Game"}
        {winner === "It is a Tie" && "It is a Tie"}
        <button onClick={reset}>Play Again</button>
      </div>
    );
  }
  export default TicTacToe;