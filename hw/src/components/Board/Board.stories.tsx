import React from "react";
import {Board} from "./Board"
import {withKnobs} from "@storybook/addon-knobs";
import {action} from "@storybook/addon-actions";

export default {
    title: "Board Story",
    decorators: [withKnobs]
}

export const BoardStory = () => [
    <Board
        clickHandler={action("Cell is clicked")}
        size={[8, 8]}/>
];
