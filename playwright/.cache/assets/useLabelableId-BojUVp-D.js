import { r as reactExports } from './index-CxfbUVL5.js';
import { a as useStableCallback, u as useIsoLayoutEffect } from './useIsoLayoutEffect-DYGwUf-I.js';
import { a as useRefWithInit, N as NOOP } from './useRenderElement-CBh4CqIk.js';
import { a as isElement } from './error-eXSmbXjy.js';
import './noop-D1rYtPi8.js';
import { b as useLabelableContext, c as useBaseUiId } from './createBaseUIEventDetails-BVY0zsWT.js';

'use client';
function useLabelableId(params = {}) {
  const {
    id,
    implicit = false,
    controlRef
  } = params;
  const {
    controlId,
    registerControlId
  } = useLabelableContext();
  const defaultId = useBaseUiId(id);
  const controlIdForEffect = implicit ? controlId : undefined;
  const controlSourceRef = useRefWithInit(() => Symbol('labelable-control'));
  const hasRegisteredRef = reactExports.useRef(false);
  const hadExplicitIdRef = reactExports.useRef(id != null);
  const unregisterControlId = useStableCallback(() => {
    if (!hasRegisteredRef.current || registerControlId === NOOP) {
      return;
    }
    hasRegisteredRef.current = false;
    registerControlId(controlSourceRef.current, undefined);
  });
  useIsoLayoutEffect(() => {
    if (registerControlId === NOOP) {
      return undefined;
    }
    let nextId;
    if (implicit) {
      const elem = controlRef?.current;
      if (isElement(elem) && elem.closest('label') != null) {
        nextId = id ?? null;
      } else {
        nextId = controlIdForEffect ?? defaultId;
      }
    } else if (id != null) {
      hadExplicitIdRef.current = true;
      nextId = id;
    } else if (hadExplicitIdRef.current) {
      nextId = defaultId;
    } else {
      unregisterControlId();
      return undefined;
    }
    if (nextId === undefined) {
      unregisterControlId();
      return undefined;
    }
    hasRegisteredRef.current = true;
    registerControlId(controlSourceRef.current, nextId);
    return undefined;
  }, [id, controlRef, controlIdForEffect, registerControlId, implicit, defaultId, controlSourceRef, unregisterControlId]);
  reactExports.useEffect(() => {
    return unregisterControlId;
  }, [unregisterControlId]);
  return controlId ?? defaultId;
}

export { useLabelableId as u };
//# sourceMappingURL=useLabelableId-BojUVp-D.js.map
