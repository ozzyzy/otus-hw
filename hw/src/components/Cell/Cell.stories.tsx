import React from "react";
import {Cell} from "./Cell";
import {number, withKnobs} from "@storybook/addon-knobs";
import {action} from "@storybook/addon-actions";

export default {
    title: "Cell Story",
    decorators: [withKnobs]
}

export const CellStory = () => [
    <Cell
        clickHandler={action("Cell is clicked")}
        x={number("x", 1)}
        y={number("y", 2)}
        key="1-2"
    />
];
