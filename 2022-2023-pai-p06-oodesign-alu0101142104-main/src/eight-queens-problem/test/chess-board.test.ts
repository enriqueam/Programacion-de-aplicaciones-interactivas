const { ChessBoard } = require('../chess-board');

describe('ChessBoard', () => {
  it('should create a chess board', () => {
    const chessBoard = new ChessBoard(8);
    expect(chessBoard).toBeDefined();
  });

  it('should has a displayBoard method', () => {
    const chessBoard = new ChessBoard(8);
    expect(chessBoard.displayBoard).toBeDefined();
  });

  it('should solve the queens problem with 8', () => {
    const chessBoard = new ChessBoard(8);
    chessBoard.solveQueensProblem();
    expect(chessBoard.getNumberSolutions()).toBe(92);
  });

  it('should solve the queens problem with 4', () => {
    const chessBoard = new ChessBoard(4);
    chessBoard.solveQueensProblem();
    expect(chessBoard.getNumberSolutions()).toBe(2);
  });
});