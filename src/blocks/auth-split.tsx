import * as React from "react";
import { useState } from "react";
import { Button } from "../components/micro/button";
import { Checkbox } from "../components/micro/checkbox";
import { Input } from "../components/micro/input";
import { Label } from "../components/micro/label";
import { Separator } from "../components/micro/separator";

export default function AuthSplitBlock() {
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<"login" | "register">("login");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="flex min-h-screen w-full">
      {/* Left side - Image/Branding (hidden on mobile) */}
      <div className="hidden lg:flex w-1/2 flex-col justify-between bg-primary p-12 text-primary-foreground relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none" />
        
        <div className="relative z-10">
          <h1 className="text-2xl font-bold tracking-tight">gladvn.</h1>
        </div>

        <div className="relative z-10 space-y-4 max-w-md">
          <h2 className="text-4xl font-bold">
            Accelerate your development workflow
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Join thousands of developers building modern, accessible, and beautiful web applications faster than ever before.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-4 text-sm font-medium">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="size-8 rounded-full border-2 border-primary bg-primary-foreground/20" />
            ))}
          </div>
          <p>Trusted by 10k+ developers</p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-8 sm:p-12">
        <div className="mx-auto flex w-full max-w-sm flex-col justify-center space-y-6">
          <div className="flex flex-col space-y-2 text-center lg:text-left">
            <h1 className="text-3xl font-bold tracking-tight">
              {mode === "login" ? "Welcome back" : "Create an account"}
            </h1>
            <p className="text-sm text-muted-foreground">
              {mode === "login"
                ? "Enter your email below to login to your account"
                : "Enter your details below to create your account"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "register" && (
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" required />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                {mode === "login" && (
                  <Button type="button" variant="link" color="primary" className="h-auto p-0 text-xs">
                    Forgot password?
                  </Button>
                )}
              </div>
              <Input id="password" type="password" required />
            </div>
            
            {mode === "register" && (
              <div className="flex items-center gap-2">
                <Checkbox id="terms" required />
                <Label htmlFor="terms" className="text-sm font-normal text-muted-foreground">
                  I agree to the <a href="#" className="text-primary hover:underline">terms and conditions</a>
                </Label>
              </div>
            )}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Loading..." : mode === "login" ? "Sign In" : "Create Account"}
            </Button>
          </form>

          <div className="flex items-center gap-4">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground uppercase">Or continue with</span>
            <Separator className="flex-1" />
          </div>

          <Button type="button" variant="outline" className="w-full">
            <svg viewBox="0 0 24 24" className="mr-2 size-4" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Google
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            {mode === "login" ? "Don't have an account? " : "Already have an account? "}
            <Button
              type="button"
              variant="link"
              color="primary"
              className="h-auto p-0 font-semibold"
              onClick={() => setMode(mode === "login" ? "register" : "login")}
            >
              {mode === "login" ? "Sign up" : "Sign in"}
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}
