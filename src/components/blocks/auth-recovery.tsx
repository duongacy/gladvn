import * as React from "react";
import { useState } from "react";
import { InputPreset } from "../macro/input-preset";
import { Button } from "../micro/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../micro/card";

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
    <div className="flex min-h-screen w-full items-center justify-center p-4 bg-muted/20">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            {isSent ? "Check your email" : "Forgot password?"}
          </CardTitle>
          <CardDescription>
            {isSent
              ? "We have sent a password reset link to your email."
              : "No worries, it happens to the best of us. Enter your email below to get a reset link."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!isSent ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <InputPreset id="recovery-email" type="email" label="Email" placeholder="m@example.com" required />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send reset link"}
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
            Back to login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
