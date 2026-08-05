import { c as React, r as reactExports } from './index-CxfbUVL5.js';
import { a as useRefWithInit } from './useRenderElement-CBh4CqIk.js';

/**
 * A clone of the React namespace for reading APIs that may be missing in older
 * supported React versions. Bundlers can rewrite direct `React.someNewApi`
 * reads into named imports, which breaks React 17. Reading from this cloned
 * object keeps those lookups optional.
 *
 * @see https://github.com/mui/material-ui/issues/41190#issuecomment-2040873379
 */
const SafeReact = {
  ...React
};

"use client";
const useInsertionEffect = SafeReact.useInsertionEffect;
const useSafeInsertionEffect = (
  // React 17 doesn't have useInsertionEffect.
  useInsertionEffect && // Preact replaces useInsertionEffect with useLayoutEffect and fires too late.
  useInsertionEffect !== SafeReact.useLayoutEffect ? useInsertionEffect : (fn) => fn()
);
function useStableCallback(callback) {
  const stable = useRefWithInit(createStableCallback).current;
  stable.next = callback;
  useSafeInsertionEffect(stable.effect);
  return stable.trampoline;
}
function createStableCallback() {
  const stable = {
    next: void 0,
    callback: assertNotCalled,
    trampoline: (...args) => stable.callback?.(...args),
    effect: () => {
      stable.callback = stable.next;
    }
  };
  return stable;
}
function assertNotCalled() {
  if (false) {
    throw (
      /* minify-error-disabled */
      new Error("Base UI: Cannot call an event handler while rendering.")
    );
  }
}

'use client';
const noop = () => {};
const useIsoLayoutEffect = typeof document !== 'undefined' ? reactExports.useLayoutEffect : noop;

export { SafeReact as S, useStableCallback as a, useIsoLayoutEffect as u };
//# sourceMappingURL=useIsoLayoutEffect-DYGwUf-I.js.map
