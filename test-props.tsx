import React from 'react';
import { render } from '@testing-library/react';
import { DayPicker } from 'react-day-picker';

const DropdownLog = (props: any) => {
  console.log("Dropdown props:", Object.keys(props));
  return <div>{props.value}</div>;
};

render(<DayPicker captionLayout="dropdown" components={{ Dropdown: DropdownLog }} />);
