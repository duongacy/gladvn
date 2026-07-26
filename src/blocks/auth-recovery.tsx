import * as React from "react";
import { useState } from "react";
import { Button } from "../components/micro/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/micro/card";
import { Input } from "../components/micro/input";
import { Label } from "../components/micro/label";

export default function AuthRecoveryBlock() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
    }, 1500);
  };

  return (
    <div className="flex min-h-[50vh] w-full items-center justify-center p-4 bg-muted/20">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            {isSent ? "Check your email" : "Forgot Password"}
          </CardTitle>
          <CardDescription>
            {isSent
              ? "We have sent a password reset link to your email."
              : "Enter your email address and we will send you a link to reset your password."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!isSent ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="recovery-email">Email</Label>
                <Input id="recovery-email" type="email" placeholder="m@example.com" className="w-full" required />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Sending link..." : "Send Reset Link"}
              </Button>
            </form>
          ) : (
            <div className="flex flex-col gap-4">
              <Button type="button" variant="outline" className="w-full" onClick={() => setIsSent(false)}>
                Try another email
              </Button>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="link" color="primary" className="text-sm">
            Back to Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
