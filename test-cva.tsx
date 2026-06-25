import { cva } from "class-variance-authority";
const inputOTPVariants = cva(
  "cn-input-otp flex items-center has-disabled:opacity-50 has-disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        sm: "text-xs [--otp-size:theme(spacing.7)]",
        md: "text-sm [--otp-size:theme(spacing.8)]",
        lg: "text-sm [--otp-size:theme(spacing.9)]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);
