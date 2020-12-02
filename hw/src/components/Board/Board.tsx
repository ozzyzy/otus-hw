import React, {FC} from "react";
import {Cell} from "../Cell/Cell";
import styled from "@emotion/styled";

interface IBoard {
    size: number[];
    clickHandler: (x: number, y: number) => void;
}

const BoardContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const Board: FC<IBoard> = (({size, clickHandler}) => {
    const board = [];
    for (let i = 0; i < size[0]; i++) {
        const row = [];
        for (let j = 0; j < size[1]; j++) {
            row.push({
                key: `${j}-${i}`,
                x: j,
                y: i,
                filled: false
            })
        }
        board.push(row)
    }

    return <div>
        {board.map((row, i) => {
            return <BoardContainer key={i}>
                {row.map((cell, i) => {
                    return <Cell key={cell.key} x={cell.x} y={cell.y} clickHandler={clickHandler}/>
                })}
            </BoardContainer>
        })}
    </div>;
})