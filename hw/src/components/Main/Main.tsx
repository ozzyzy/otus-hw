import React from "react";
import { Board } from "../Board/Board";

interface GameProp {
  size: number[];
}

interface GameState {
  x: number;
  y: number;
}

export class Main extends React.Component<GameProp, GameState> {
  constructor(props: GameProp) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      x: 1,
      y: 1,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  shouldComponentUpdate(
    nextProps: Readonly<GameProp>,
    nextState: Readonly<GameState>
  ): boolean {
    const { x: currentX, y: currentY } = this.state;
    const { x: newX, y: newY } = nextState;
    return currentX !== newX || currentY !== newY;
  }

  clickHandler() {
    return true;
  }

  render() {
    return <Board size={this.props.size} clickHandler={this.clickHandler} />;
  }
}
