import * as React from "react";
import {
  AppShell,
  BoardContainer,
  BodyContent,
  Cell,
  P1Cell,
  P2Cell
} from "./App.css";

const enum Player {
  None = 0,
  One = 1,
  Two = 2
}

interface IState {
  board: Player[];
  nextPlayer: Player;
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
    nextPlayer: Player.One
  };

  public createOnClickHandler = (index: number) => {
    const { board, nextPlayer } = this.state;
    const newBoard = board.slice();
    newBoard[index] = nextPlayer;

    this.setState({ board: newBoard, nextPlayer: 3 - nextPlayer });
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
      </AppShell>
    );
  }
}

export default App;
