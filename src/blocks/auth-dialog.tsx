import * as React from "react";
import { useState } from "react";
import { Button } from "../components/micro/button";
import { Input } from "../components/micro/input";
import { Label } from "../components/micro/label";
import { Checkbox } from "../components/micro/checkbox";
import { Separator } from "../components/micro/separator";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../components/micro/dialog";

export default function AuthDialogBlock() {
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<"login" | "register">("login");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsOpen(false);
    }, 1000);
  };

  return (
    <div className="flex min-h-[50vh] w-full items-center justify-center p-4 bg-muted/10 border border-dashed rounded-lg">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger render={<Button>Open Authentication</Button>} />
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center space-y-2">
            <DialogTitle className="text-2xl font-bold">
              {mode === "login" ? "Welcome back" : "Create an account"}
            </DialogTitle>
            <DialogDescription>
              {mode === "login"
                ? "Enter your email below to login to your account"
                : "Enter your details below to create your account"}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            {mode === "register" && (
              <div className="space-y-2">
                <Label htmlFor="dialog-name">Full Name</Label>
                <Input id="dialog-name" placeholder="John Doe" required />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="dialog-email">Email</Label>
              <Input id="dialog-email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="dialog-password">Password</Label>
                {mode === "login" && (
                  <Button type="button" variant="link" color="primary" className="h-auto p-0 text-xs">
                    Forgot password?
                  </Button>
                )}
              </div>
              <Input id="dialog-password" type="password" required />
            </div>
            
            {mode === "register" && (
              <div className="flex items-center gap-2">
                <Checkbox id="dialog-terms" required />
                <Label htmlFor="dialog-terms" className="text-sm font-normal text-muted-foreground">
                  I agree to the <a href="#" className="text-primary hover:underline">terms</a>
                </Label>
              </div>
            )}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Loading..." : mode === "login" ? "Sign In" : "Create Account"}
            </Button>
          </form>

          <div className="flex items-center gap-4">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground uppercase">Or</span>
            <Separator className="flex-1" />
          </div>

          <Button type="button" variant="outline" className="w-full mt-4">
            <svg viewBox="0 0 24 24" className="mr-2 size-4" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Google
          </Button>

          <p className="mt-4 text-center text-sm text-muted-foreground">
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
        </DialogContent>
      </Dialog>
    </div>
  );
}
