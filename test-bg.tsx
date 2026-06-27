import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ButtonGroup, ButtonGroupText } from './src/components/ui/button-group';
import { Input } from './src/components/ui/input';

const html = renderToStaticMarkup(
  <ButtonGroup>
    <ButtonGroupText>https://</ButtonGroupText>
    <Input />
  </ButtonGroup>
);
console.log(html);
