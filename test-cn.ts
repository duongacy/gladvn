import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { buttonGroupVariants } from "./src/components/micro/button-group";
console.log(twMerge(clsx(buttonGroupVariants({ orientation: "horizontal" }))));
