import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { ButtonGroup, ButtonGroupText } from "./src/components/micro/button-group";
import { Input } from "./src/components/micro/input";

const html = renderToStaticMarkup(
  <ButtonGroup>
    <ButtonGroupText>https://</ButtonGroupText>
    <Input />
  </ButtonGroup>,
);
console.log(html);
