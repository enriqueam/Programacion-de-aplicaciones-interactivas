/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author       Enrique Álvarez Mesa
 * @since 10.03.2023
 *
 * @description Class to represent a chess board.
 */

/**
 * @description Class to represent a chess board.
 * @class
 * @param size The size of the board
 * @param board The board
 * @param solutionsArray The array of solutions
 * @method displayBoard Prints the board in the console
 * @method insertQueens Inserts the queens in the board
 * @method getNumberSolutions Returns the number of solutions
 * @method printSolutions Print all the solutions in the console
 */
class ChessBoard {
  private board: string[][];
  private solutionsArray: string[][][];

  /**
   * @description Creates a chess board
   * @param size The size of the board
   */
  constructor(private size: number) {
    this.board = [];
    this.solutionsArray = [];
    for (let index = 0; index < size; index++) {
      this.board.push(Array.from<string>({length: size}).fill(" "));	
    }
  }

  /**
   * @desc Compute all the solutions for the Queens Problem 
   * @param - Number of queens placed
   * @param - Store the prohited positions in the column
   * @param - Store the prohited positions in the diagonal 45º
   * @param - Store the prohited positions in the diagonal 135º
   * @returns 
   */
  solveQueensProblem(numberQueens: number = 0, column: number[] = [], diag45: number[] = [], diag135: number[] = []) {
    if (numberQueens === this.size) {
      this.solutionsArray.push(this.board.map((row) => [...row]));
      return;
    } else {
      for (let index = 1; index <= this.size; index++) {
        if (!column.includes(index) && !diag45.includes(index - numberQueens) && !diag135.includes(index + numberQueens)) {
          this.board[numberQueens][index - 1] = "Q";
          column.push(index);
          diag45.push(index - numberQueens);
          diag135.push(index + numberQueens);
          this.solveQueensProblem(numberQueens + 1, column, diag45, diag135);
          
          column.pop();
          diag45.pop();
          diag135.pop();
          this.board[numberQueens][index - 1] = " ";
        }
      }
    }
  }

  /**
   * @description Returns the number of solutions
   * @returns The number of solutions
   */
  getNumberSolutions(): number {
    return this.solutionsArray.length;
  }

  /**
   * @description Print all the solutions in the console
   */
  printSolutions(): void {
    let aux: string = " ";
    for (let row = 0; row < this.size; row++) {
      aux += `${row} `;
    }
    for (let index = 0; index < this.solutionsArray.length; index++) {
      console.log(`Solution ${index + 1}:`);
      console.log(aux);
      for (let index2 = 0; index2 < this.size; index2++) {
        console.log(`${index2} ${this.solutionsArray[index][index2].join("|")}`);
      }
      console.log("");
    }
  }
}

export {ChessBoard};
