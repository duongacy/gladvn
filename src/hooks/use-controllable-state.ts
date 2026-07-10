import * as React from "react";

/**
 * A custom hook that converts a callback to a ref to avoid triggering re-renders when passed as a
 * prop or used within a `useEffect` dependency array.
 */
function useCallbackRef<T extends (...args: any[]) => any>(
  callback: T | undefined,
): T {
  const callbackRef = React.useRef(callback);

  React.useEffect(() => {
    callbackRef.current = callback;
  });

  return React.useMemo(
    () => ((...args) => callbackRef.current?.(...args)) as T,
    [],
  );
}

type UseControllableStateParams<T> = {
  prop?: T | undefined;
  defaultProp?: T | undefined;
  onChange?: (state: T) => void;
};

type SetStateFn<T> = (prevState?: T) => T;

function useControllableState<T>({
  prop,
  defaultProp,
  onChange = () => {},
}: UseControllableStateParams<T>) {
  const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({
    defaultProp,
    onChange,
  });
  const isControlled = prop !== undefined;
  const value = isControlled ? prop : uncontrolledProp;
  const handleChange = useCallbackRef(onChange);

  const propRef = React.useRef(prop);
  const handleChangeRef = React.useRef(handleChange);

  React.useEffect(() => {
    propRef.current = prop;
    handleChangeRef.current = handleChange;
  });

  const setValue = React.useCallback(
    (nextValue: React.SetStateAction<T | undefined>) => {
      if (isControlled) {
        const setter = nextValue as (prevState?: T) => T;
        const value =
          typeof nextValue === "function" ? setter(propRef.current) : nextValue;
        if (value !== propRef.current) handleChangeRef.current(value as T);
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, setUncontrolledProp],
  );

  return [value, setValue] as const;
}

function useUncontrolledState<T>({
  defaultProp,
  onChange,
}: Omit<UseControllableStateParams<T>, "prop">) {
  const uncontrolledState = React.useState<T | undefined>(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = React.useRef(value);
  const handleChange = useCallbackRef(onChange);

  React.useEffect(() => {
    if (prevValueRef.current !== value) {
      handleChange(value as T);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef, handleChange]);

  return uncontrolledState;
}

export { useCallbackRef, useControllableState };
