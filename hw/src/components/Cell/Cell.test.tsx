import React from "react";
import {Cell} from "./Cell";
import {shallow} from 'enzyme';
import renderer from "react-test-renderer";

describe("Cell", () => {
    const x = 1;
    const y = 1;
    const key = '1-1';
    const clickHandler = jest.fn();

    it("should show cell", () => {
        expect(renderer.create(
            <Cell
                x={x}
                y={y}
                key={key}
                clickHandler={clickHandler}/>
            ).toJSON()
        ).toMatchSnapshot();
    });

    it('should click', () => {
        const wrapper = shallow(
            <Cell x={x} y={y} key={key} clickHandler={clickHandler}/>
        );
        wrapper.simulate('click');

        expect(clickHandler).toBeCalledWith(x, y);
    });
});