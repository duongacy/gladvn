import { Project, SyntaxKind, JsxElement, StringLiteral, NoSubstitutionTemplateLiteral } from "ts-morph";
import * as fs from "fs";

// We will only do this for specific known wrapper classes to be safe
const targetClasses = ["w-64", "w-full", "w-72", "w-96", "max-w-sm", "max-w-xs", "max-w-lg"];

function shouldRemoveWrapper(classNameAttrValue: string) {
  const classes = classNameAttrValue.split(" ").map(c => c.trim());
  // If it ONLY contains classes from our safe list, or simple combinations
  const hasTarget = classes.some(c => targetClasses.includes(c));
  const hasDangerous = classes.some(c => c.includes("flex") || c.includes("grid") || c.includes("relative") || c.includes("absolute") || c.includes("mx-auto"));
  
  // Actually, if the wrapper is JUST a sizing wrapper, let's remove it.
  return hasTarget && !hasDangerous;
}

// Just printing instructions for manual replacement is safer, but let's try a regex approach for calendar.tsx first
