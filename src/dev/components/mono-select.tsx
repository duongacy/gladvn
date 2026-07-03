import React from "react";

export function MonoSelect({
  value,
  onValueChange,
  options,
}: {
  value: string;
  onValueChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
      className="h-8 rounded-md border border-input bg-transparent px-2 py-1 text-xs font-mono shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
