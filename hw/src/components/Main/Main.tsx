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
  controller: AbortController;

  constructor(props: GameProp) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      x: 1,
      y: 1,
    };
    this.controller = new AbortController();
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1", {
      signal: this.controller.signal,
    })
      .then((res) => res.json())
      .then(
        () => {
          this.setState({
            x: 2,
            y: 2,
          });
        },
        () => {
          return;
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

  componentDidUpdate(
    prevProps: Readonly<GameProp>,
    prevState: Readonly<GameState>
  ) {
    if (prevState.x !== this.state.x) {
      this.setState({
        x: prevState.x + 1,
        y: prevState.y + 1,
      });
    }
  }

  componentWillUnmount() {
    this.controller.abort();
  }

  clickHandler() {
    return true;
  }

  render() {
    return <Board size={[8, 8]} clickHandler={this.clickHandler} />;
  }
}
