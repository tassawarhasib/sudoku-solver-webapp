import styles from "../styles/Game.module.css";
import { createEmptyBoard } from "../lib/sudokuUtils";
import solveSudoku from "../lib/solveSudoku";
import { toast } from "react-toastify";


const Solve = ({ squares, setSquares, setUserInput, setSolved, invalid, solved }) => {

    // const showSuccessAlert = () => alert('Solved');
    const showSuccessToast = () => toast.success("Successfully Solved");
    const showResetToast = () => toast.error("Board Reset");



    const handleClick = (action) => {
        if (action === "solve") {
            const solvedSquares = solveSudoku(squares);
            setSquares(solvedSquares);
            setSolved(true);
            showSuccessToast();
            // showSuccessAlert();

        } else {
            setSquares(createEmptyBoard);
            setUserInput(createEmptyBoard);
            setSolved(false);
            showResetToast();
        }
    };

    return (
        <>
            <div className={styles.solve}>
                {!solved &&
                    <>
                        <button
                            id={styles.solvebtn}
                            disabled={invalid}
                            onClick={() => { handleClick("solve") }}
                        >Solve
                        </button>

                        <button
                            id={styles.resetbtn}
                            onClick={() => { handleClick("reset") }}
                        >Clear
                        </button>
                    </>

                }
                {solved && <button id={styles.resetbtn} onClick={() => { handleClick("reset") }}>Reset Board</button>}
            </div>
        </>
    );
};

export default Solve;