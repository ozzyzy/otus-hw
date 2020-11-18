import React from "react";
import {Board} from "./Board"
import {withKnobs} from "@storybook/addon-knobs";
import {action} from "@storybook/addon-actions";

export default {
    title: "Board Story",
    decorators: [withKnobs]
}

const elementClicked = action("Cell is clicked");

export const BoardStory = () => [
    <Board
        clickHandler={elementClicked}
        size={[8, 8]}/>
];
