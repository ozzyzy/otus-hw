import React, {FC, useState} from "react";
import styled from "@emotion/styled";

interface ICell {
    key: string;
    x: number;
    y: number;
    clickHandler: (x: number, y: number) => void;
}

const DefaultCell = styled.div`
  display: flex;
  padding: 10px;
  margin: 1px;
  height: 15px;
  width: 15px;
  border: 1px solid black;
`;

export const Cell: FC<ICell> = ({x, y}) => {
    const [content, setContent] = useState('');

    function clickHandler() {
        setContent(`${x}`);
    }

    return (
        <DefaultCell
            onClick={() => clickHandler()}
        > {content}
        </DefaultCell>
    )
}