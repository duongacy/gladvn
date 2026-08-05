import { j as jsxRuntimeExports } from './jsx-runtime-B7ZaO6Q_.js';
import { r as reactExports } from './index-CxfbUVL5.js';
import { f as formatErrorMessage, u as useRenderElement, N as NOOP } from './useRenderElement-CBh4CqIk.js';
import { u as useIsoLayoutEffect, a as useStableCallback } from './useIsoLayoutEffect-DYGwUf-I.js';
import { t as transitionStatusMapping, u as useTransitionStatus, a as useOpenChangeComplete } from './useTransitionStatus-Td1Imt8w.js';
import './noop-D1rYtPi8.js';
import { u as useTimeout } from './useTimeout-B9E2xS1v.js';
import { c as cn } from './utils-BEvUJWKs.js';
import './useAnimationFrame-BapKY_Lh.js';
import './clsx-ChV9xqsO.js';

"use client";
const AvatarRootContext = /* @__PURE__ */ reactExports.createContext(void 0);
if (false) AvatarRootContext.displayName = "AvatarRootContext";
function useAvatarRootContext() {
  const context = reactExports.useContext(AvatarRootContext);
  if (context === void 0) {
    throw new Error(false ? "Base UI: AvatarRootContext is missing. Avatar parts must be placed within <Avatar.Root>." : formatErrorMessage(13));
  }
  return context;
}

const avatarStateAttributesMapping = {
  imageLoadingStatus: () => null
};

"use client";
const AvatarRoot = /* @__PURE__ */ reactExports.forwardRef(function AvatarRoot2(componentProps, forwardedRef) {
  const {
    className,
    render,
    style,
    ...elementProps
  } = componentProps;
  const [imageLoadingStatus, setImageLoadingStatus] = reactExports.useState("idle");
  const state = {
    imageLoadingStatus
  };
  const contextValue = reactExports.useMemo(() => ({
    imageLoadingStatus,
    setImageLoadingStatus
  }), [imageLoadingStatus, setImageLoadingStatus]);
  const element = useRenderElement("span", componentProps, {
    state,
    ref: forwardedRef,
    props: elementProps,
    stateAttributesMapping: avatarStateAttributesMapping
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarRootContext.Provider, {
    value: contextValue,
    children: element
  });
});
if (false) AvatarRoot.displayName = "AvatarRoot";

'use client';
function useImageLoadingStatus(src, {
  referrerPolicy,
  crossOrigin,
  sizes,
  srcSet
}) {
  const [loadingStatus, setLoadingStatus] = reactExports.useState('idle');
  useIsoLayoutEffect(() => {
    if (!src && !srcSet) {
      setLoadingStatus('error');
      return NOOP;
    }
    let isMounted = true;
    const image = new window.Image();
    const updateStatus = status => () => {
      if (!isMounted) {
        return;
      }
      setLoadingStatus(status);
    };
    setLoadingStatus('loading');
    image.onload = updateStatus('loaded');
    image.onerror = updateStatus('error');
    if (referrerPolicy) {
      image.referrerPolicy = referrerPolicy;
    }
    image.crossOrigin = crossOrigin ?? null;
    if (sizes) {
      image.sizes = sizes;
    }
    if (srcSet) {
      image.srcset = srcSet;
    }
    if (src) {
      image.src = src;
    }

    // Fast path for cached/decoded images
    if (image.complete) {
      setLoadingStatus(image.naturalWidth > 0 ? 'loaded' : 'error');
    }
    return () => {
      isMounted = false;
    };
  }, [src, srcSet, sizes, crossOrigin, referrerPolicy]);
  return loadingStatus;
}

"use client";
const stateAttributesMapping = {
  ...avatarStateAttributesMapping,
  ...transitionStatusMapping
};
const AvatarImage$1 = /* @__PURE__ */ reactExports.forwardRef(function AvatarImage2(componentProps, forwardedRef) {
  const {
    className,
    render,
    onLoadingStatusChange: onLoadingStatusChangeProp,
    style,
    ...elementProps
  } = componentProps;
  const {
    setImageLoadingStatus
  } = useAvatarRootContext();
  const imageLoadingStatus = useImageLoadingStatus(elementProps.src, elementProps);
  const isVisible = imageLoadingStatus === "loaded";
  const {
    mounted,
    transitionStatus,
    setMounted
  } = useTransitionStatus(isVisible);
  const imageRef = reactExports.useRef(null);
  const handleLoadingStatusChange = useStableCallback((status) => {
    onLoadingStatusChangeProp?.(status);
    setImageLoadingStatus(status);
  });
  useIsoLayoutEffect(() => {
    if (imageLoadingStatus !== "idle") {
      handleLoadingStatusChange(imageLoadingStatus);
    }
  }, [imageLoadingStatus, handleLoadingStatusChange]);
  useIsoLayoutEffect(() => {
    return () => setImageLoadingStatus("idle");
  }, [setImageLoadingStatus]);
  useOpenChangeComplete({
    open: isVisible,
    ref: imageRef,
    onComplete() {
      if (!isVisible) {
        setMounted(false);
      }
    }
  });
  const state = {
    imageLoadingStatus,
    transitionStatus
  };
  const element = useRenderElement("img", componentProps, {
    state,
    ref: [forwardedRef, imageRef],
    props: elementProps,
    stateAttributesMapping,
    enabled: mounted
  });
  if (!mounted) {
    return null;
  }
  return element;
});
if (false) AvatarImage$1.displayName = "AvatarImage";

"use client";
const AvatarFallback$1 = /* @__PURE__ */ reactExports.forwardRef(function AvatarFallback2(componentProps, forwardedRef) {
  const {
    className,
    render,
    delay,
    style,
    ...elementProps
  } = componentProps;
  const {
    imageLoadingStatus
  } = useAvatarRootContext();
  const [delayPassed, setDelayPassed] = reactExports.useState(delay === void 0);
  const timeout = useTimeout();
  reactExports.useEffect(() => {
    if (delay !== void 0) {
      timeout.start(delay, () => setDelayPassed(true));
    } else {
      setDelayPassed(true);
    }
    return timeout.clear;
  }, [timeout, delay]);
  const state = {
    imageLoadingStatus
  };
  const element = useRenderElement("span", componentProps, {
    state,
    ref: forwardedRef,
    props: elementProps,
    stateAttributesMapping: avatarStateAttributesMapping,
    enabled: imageLoadingStatus !== "loaded" && (delay === void 0 || delayPassed)
  });
  return element;
});
if (false) AvatarFallback$1.displayName = "AvatarFallback";

const index_parts = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Fallback: AvatarFallback$1,
  Image: AvatarImage$1,
  Root: AvatarRoot
}, Symbol.toStringTag, { value: 'Module' }));

"use client";
const Avatar$1 = reactExports.forwardRef(({ className, size = "md", ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AvatarRoot,
    {
      ref,
      "data-slot": "avatar",
      "data-size": size,
      className: cn(
        "group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten",
        "group-data-[slot=avatar-group]/avatar-group:ring-2 group-data-[slot=avatar-group]/avatar-group:ring-background",
        className
      ),
      ...props
    }
  );
});
Avatar$1.displayName = "Avatar";
const AvatarImage = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AvatarImage$1,
    {
      ref,
      "data-slot": "avatar-image",
      className: cn(
        "aspect-square size-full rounded-full object-cover",
        className
      ),
      ...props
    }
  );
});
AvatarImage.displayName = "AvatarImage";
const AvatarFallback = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AvatarFallback$1,
    {
      ref,
      "data-slot": "avatar-fallback",
      className: cn(
        "flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs group-data-[size=lg]/avatar:text-base",
        className
      ),
      ...props
    }
  );
});
AvatarFallback.displayName = "AvatarFallback";
const AvatarBadge = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      ref,
      "data-slot": "avatar-badge",
      className: cn(
        "rounded-full bg-primary ring-2 ring-background",
        "group-data-[size=sm]/avatar:size-2",
        "group-data-[size=md]/avatar:size-2.5",
        "group-data-[size=lg]/avatar:size-3",
        className
      ),
      ...props
    }
  );
});
AvatarBadge.displayName = "AvatarBadge";
const AvatarGroup = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      "data-slot": "avatar-group",
      className: cn("group/avatar-group flex -space-x-2", className),
      ...props
    }
  );
});
AvatarGroup.displayName = "AvatarGroup";
const AvatarGroupCount = reactExports.forwardRef(({ className, size = "md", ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      "data-slot": "avatar-group-count",
      "data-size": size,
      className: cn(
        "relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background data-[size=lg]:size-10 data-[size=sm]:size-6",
        className
      ),
      ...props
    }
  );
});
AvatarGroupCount.displayName = "AvatarGroupCount";

export { Avatar$1 as Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage };
//# sourceMappingURL=avatar-CB3SCLPl.js.map
