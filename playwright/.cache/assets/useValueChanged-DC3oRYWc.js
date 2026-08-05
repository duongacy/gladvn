import { r as reactExports } from './index-CxfbUVL5.js';
import { a as useStableCallback, u as useIsoLayoutEffect } from './useIsoLayoutEffect-DYGwUf-I.js';

const visuallyHiddenBase = {
  clipPath: 'inset(50%)',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  border: 0,
  padding: 0,
  width: 1,
  height: 1,
  margin: -1
};
const visuallyHidden = {
  ...visuallyHiddenBase,
  position: 'fixed',
  top: 0,
  left: 0
};
const visuallyHiddenInput = {
  ...visuallyHiddenBase,
  position: 'absolute'
};

'use client';
function useValueChanged(value, onChange) {
  const valueRef = reactExports.useRef(value);
  const onChangeCallback = useStableCallback(onChange);
  useIsoLayoutEffect(() => {
    if (valueRef.current === value) {
      return;
    }
    onChangeCallback(valueRef.current);
  }, [value, onChangeCallback]);
  useIsoLayoutEffect(() => {
    valueRef.current = value;
  }, [value]);
}

export { visuallyHidden as a, useValueChanged as u, visuallyHiddenInput as v };
//# sourceMappingURL=useValueChanged-DC3oRYWc.js.map
