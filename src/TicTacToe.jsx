import React, { useState } from 'react'
import './Style.css'

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXturn, setIsXturn] = useState(true);
    const [winner, setWinner] = useState(null);

    const handleClick = (idx) => {
        if (board[idx] || winner) return;

        const newBoard = [...board];
        newBoard[idx] = isXturn ? 'X' : 'O';
        setBoard(newBoard);
        setIsXturn(!isXturn);
        const winnerCombination = checkWinner(newBoard);
        if (winnerCombination) {
            setWinner(newBoard[winnerCombination[0]]);
        }
    };

    const checkWinner = (newBoard) => {
        const winCombi = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < winCombi.length; i++) {
            const [a, b, c] = winCombi[i];
            if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
                return winCombi[i];
            }
        }
        return null;
    };

    const renderSquare = (idx) => {
        return (
            <button className="square" onClick={() => handleClick(idx)}>
                {board[idx]}
            </button>
        );
    };

    return (
        <>
            <div className="board">
                <div className="row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
            {winner && <div className="winner">{winner} is the winner of this game</div>}
        </>
    );
};

export default TicTacToe;