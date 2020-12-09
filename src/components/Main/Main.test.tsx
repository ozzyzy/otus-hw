import renderer from "react-test-renderer";
import React from "react";
import { Main } from "./Main";

describe("Main", () => {
  const size = [5, 5];

  it("should be rendered", () => {
    expect(renderer.create(<Main size={size} />).toJSON()).toMatchSnapshot();
  });
});
