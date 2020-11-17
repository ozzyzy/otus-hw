import React, {FC, useState} from "react";
import styled from "@emotion/styled";

interface ICell {
    key: string;
    x: number;
    y: number;
    filled: boolean;
}

const DefaultCell = styled.div`
  display: flex;
  padding: 10px;
  margin: 1px;
  border: 1px solid black;
`;

export const Cell: FC<ICell> = ({x, y, filled}) => {
    let [content, setContent] =  useState('');

    return (
        <DefaultCell
            onClick={() => setContent(`${x}`)}
        > {content}
        </DefaultCell>
    )
}