import { withKnobs } from "@storybook/addon-knobs";
import { Main } from "./Main";
import React from "react";

export default {
  title: "Main Story",
  decorators: [withKnobs],
};

export const MainStory: React.FC = () => {
  return <Main size={[8, 8]} />;
};
