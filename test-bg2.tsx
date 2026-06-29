import { cva } from "class-variance-authority";
const buttonGroupVariants = cva("flex", {
  variants: {
    orientation: {
      horizontal:
        "[&>*:first-child]:rounded-r-none [&>*:last-child]:rounded-l-none [&>*:not(:first-child):not(:last-child)]:rounded-none -space-x-px",
    },
  },
});
