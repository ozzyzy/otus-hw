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

  clickHandler() {
    return true;
  }

  render() {
    return <Board size={this.props.size} clickHandler={this.clickHandler} />;
  }
}
