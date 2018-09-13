import * as React from "react";
import {
  AppShell,
  BoardContainer,
  BodyContent,
  Cell,
  P1Cell,
  P2Cell
} from "./App.css";

type GAME_IN_PROGRESS = -1;
const GAME_IN_PROGRESS = -1;

const enum Player {
  None = 0,
  One = 1,
  Two = 2
}

interface IState {
  board: Player[];
  nextPlayer: Player;
  gameOver: Player | GAME_IN_PROGRESS;
}

class App extends React.Component<{}, IState> {
  public state = {
    board: [
      Player.None,
      Player.None,
      Player.None,
      Player.None,
      Player.None,
      Player.None,
      Player.None,
      Player.None,
      Player.None
    ],
    gameOver: GAME_IN_PROGRESS,
    nextPlayer: Player.One
  };

  public createOnClickHandler = (index: number) => {
    const { board, nextPlayer } = this.state;

    if (board[index] !== Player.None) {
      return;
    }

    const newBoard = board.slice();
    newBoard[index] = nextPlayer;
    const gameOver = this.checkGameOver(newBoard);

    this.setState({ board: newBoard, nextPlayer: 3 - nextPlayer, gameOver });
  };

  public checkGameOver = (board: Player[]) => {
    if (
      board[0] === board[1] &&
      board[1] === board[2] &&
      board[2] !== Player.None
    ) {
      return board[0];
    } else if (
      board[3] === board[4] &&
      board[4] === board[5] &&
      board[5] !== Player.None
    ) {
      return board[3];
    } else if (
      board[6] === board[7] &&
      board[7] === board[8] &&
      board[8] !== Player.None
    ) {
      return board[6];
    } else if (
      board[0] === board[3] &&
      board[3] === board[6] &&
      board[5] !== Player.None
    ) {
      return board[3];
    } else if (
      board[1] === board[4] &&
      board[4] === board[7] &&
      board[7] !== Player.None
    ) {
      return board[2];
    } else if (
      board[2] === board[5] &&
      board[5] === board[8] &&
      board[5] !== Player.None
    ) {
      return board[3];
    } else if (
      board[0] === board[4] &&
      board[4] === board[8] &&
      board[8] !== Player.None
    ) {
      return board[0];
    } else if (
      board[2] === board[4] &&
      board[4] === board[6] &&
      board[6] !== Player.None
    ) {
      return board[2];
    } else {
      return -1;
    }
  };

  public renderCell = (index: number) => {
    const { board } = this.state;
    return (
      <div>
        {board[index] === 0 && (
          <Cell onClick={() => this.createOnClickHandler(index)} />
        )}

        {board[index] === 1 && (
          <P1Cell onClick={() => this.createOnClickHandler(index)} />
        )}

        {board[index] === 2 && (
          <P2Cell onClick={() => this.createOnClickHandler(index)} />
        )}
      </div>
    );
  };

  public renderPlayerTurn = () => {
    const { gameOver } = this.state;

    const winningText =
      gameOver !== Player.None
        ? `Player ${gameOver} wins`
        : `Cat's game!`;

    return (
      <div>
        {"Player 1 is blue"} <br />
        {"Player 2 is red"} <br />
        {gameOver === GAME_IN_PROGRESS ? "Ongoing game" : winningText}
      </div>
    );
  };

  public renderBoard = () => {
    const { board } = this.state;
    return (
      <BoardContainer>
        {board.map((value, key) => this.renderCell(key))}
      </BoardContainer>
    );
  };

  public render() {
    console.log(this.state.nextPlayer);

    return (
      <AppShell>
        <h1>Typescript Tic-Tac-Toe</h1>
        <BodyContent>{this.renderBoard()}</BodyContent>
        {this.renderPlayerTurn()}
      </AppShell>
    );
  }
}

export default App;
