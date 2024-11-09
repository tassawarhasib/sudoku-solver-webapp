# Sudoku Solver

This project is a Sudoku-solving application built with Next.js. It provides a user interface to input Sudoku puzzles and solve them using JavaScript logic. The project includes a backtracking algorithm to find solutions for a given Sudoku puzzle and uses modular functions for validation and solving.

### Features

-   Solve Sudoku Puzzles: Users can input a puzzle, and the app uses a backtracking algorithm to solve it.
-   Input Validation: Ensures that the user's input follows Sudoku rules, preventing duplicates in rows, columns, and 3x3 subgrids.

### Getting Started

1. Clone the repository:
   `git clone https://github.com/tassawarhasib/sudoku-solver-webapp`

2. Clone the repository:
   `npm install`

3. Clone the repository:
   `npm run dev`

### Solving Algorithm

#### solveSudoku.js

This module contains the main logic for solving a Sudoku puzzle. It implements a backtracking algorithm, a common approach for solving constraint satisfaction problems like Sudoku.

##### Code Breakdown

-   solveSudoku(squares): Accepts a 2D array (squares) representing the Sudoku board and attempts to solve it. It calls the solve function to perform the actual solving and returns the modified board.

-   solve(board): A recursive function that uses backtracking to fill empty cells. It iterates through each cell in the 9x9 board:

    -   For each empty cell, it tries values from 1 to 9.
    -   If validateInput confirms that a value is valid in the current position (meaning no duplicates in row, column, or 3x3 grid), the value is temporarily placed in the cell.
    -   If the subsequent recursive call to solve returns true, the puzzle is solved.
    -   If the placement leads to a dead end, it backtracks by removing the value (board[i][j] = "") and tries the next possible value.

The algorithm continues until it either solves the puzzle or determines that no solution exists.

### Validation Logic

#### validateInput.js

The validateInput function checks if a given number can be placed at a specific position without violating Sudoku rules.

##### Code Breakdown

-   validateInput(board, row, col, value): Validates whether value can be placed at the specified row and col in the board.
    -   Row and Column Check: Loops through the row and column to ensure that the value does not already exist.
    -   3x3 Subgrid Check: Checks the corresponding 3x3 subgrid to ensure there are no duplicates of the value there.

This function is essential for the solve function in solveSudoku.js, as it prevents invalid placements and ensures the solution respects the constraints of a Sudoku puzzle.
