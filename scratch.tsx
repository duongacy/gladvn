import * as React from "react";
import { renderToString } from "react-dom/server";
import { Tooltip } from "@base-ui/react/tooltip";

console.log(renderToString(<Tooltip.Arrow className="fill-current" />));
