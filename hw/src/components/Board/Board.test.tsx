import React from "react";
import {Board} from "./Board";
import {shallow} from 'enzyme';
import renderer from "react-test-renderer";

describe("Board", () => {
    const x = 1;
    const y = 1;
    const key = '1-1';
    const clickHandler = jest.fn();

    it("should show empty board", () => {
        expect(renderer.create(
            <Board clickHandler={clickHandler} size={[0, 0]}/>
            ).toJSON()
        ).toMatchSnapshot();
    });

    it("should show not empty board", () => {
        expect(renderer.create(
            <Board clickHandler={clickHandler} size={[8, 8]}/>
            ).toJSON()
        ).toMatchSnapshot();
    });
});