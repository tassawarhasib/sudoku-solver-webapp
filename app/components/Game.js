'use client';
import styles from "../styles/Game.module.css";
import { useState } from "react";
import Board from "./Board";
import Square from "./Square";
import Solve from "./Solve";
import { createEmptyBoard } from "../lib/sudokuUtils";

const Game = () => {
    const [invalid, setInvalid] = useState(false);
    const [squares, setSquares] = useState(createEmptyBoard);
    const [userInput, setUserInput] = useState(createEmptyBoard);
    const [solved, setSolved] = useState(false);

    const renderSquare = (value, rowIdx, colIdx) => (
        <Square
            key={`${rowIdx}-${colIdx}`}
            val={value}
            rowIdx={rowIdx}
            colIdx={colIdx}
            squares={squares}
            setSquares={setSquares}
            solved={solved}
            invalid={invalid}
            setInvalid={setInvalid}
            userInput={userInput}
            setUserInput={setUserInput}
        />
    );

    return (
        <div className={styles.game}>
            <h1>Sudoku Solver</h1>
            <Board solved={solved}>
                {squares.map((row, rowIdx) =>
                    row.map((value, colIdx) => renderSquare(value, rowIdx, colIdx))
                )}
            </Board>
            <Solve
                squares={squares}
                setSquares={setSquares}
                setSolved={setSolved}
                solved={solved}
                invalid={invalid}
                setUserInput={setUserInput}
            />
        </div>
    );
};

export default Game;