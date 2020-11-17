import React, {FC} from "react";
import {Cell} from "../Cell/Cell";
import styled from "@emotion/styled";

interface IBoard {
    size: number[];
}

const BoardContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 10px;
`;

export const Board: FC<IBoard> = (({size}) => {
    size = [8, 8];
    const board = [];
    for (let i = 0; i < size[0]; i++) {
        let row = [];
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
                    return <Cell key={cell.key} x={cell.x} y={cell.y} filled={cell.filled}/>
                })}
            </BoardContainer>
        })}
    </div>;

})