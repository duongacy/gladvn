import { useState } from "react";
import { CheckboxPreset } from "../components/macro/checkbox-preset";
import { InputPreset } from "../components/macro/input-preset";
import { Button } from "../components/micro/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/micro/card";
import { Field, FieldContent, FieldLabel, FieldError } from "../components/micro/field";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "../components/micro/input-group";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function AuthCardBlock() {
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<"login" | "register">("login");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-4 bg-muted/20">
      <Card className="w-full max-w-sm border-0 shadow-none bg-transparent">
        <CardHeader className="text-left px-0 pt-0">
          <CardTitle className="text-[28px] font-bold text-[#5e5e6e]">
            {mode === "login" ? "Welcome back" : "Create an account"}
          </CardTitle>
          <CardDescription>
            {mode === "login"
              ? "Enter your email below to login to your account"
              : "Enter your details below to create your account"}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6 px-0 pb-0">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {mode === "register" && (
              <InputPreset id="name" name="name" label="Full Name" placeholder="John Doe" required />
            )}

            <InputPreset id="email" name="email" type="email" label="Email" placeholder="m@example.com" required />

            <Field className="w-full">
              <div className="flex items-center justify-between w-full">
                <FieldLabel htmlFor="password">Password</FieldLabel>
                {mode === "login" && (
                  <Button variant="link" color="primary" className="h-auto p-0 text-[13px] font-medium" tabIndex={-1}>
                    Forgot password?
                  </Button>
                )}
              </div>
              <FieldContent>
                <div className="@container/input-group w-full">
                  <InputGroup className="w-full">
                    <InputGroupInput
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                    />
                    <InputGroupAddon align="end">
                      <InputGroupButton
                        type="button"
                        variant="ghost"
                        icon
                        onClick={() => setShowPassword((prev) => !prev)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        aria-pressed={showPassword}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOffIcon className="size-4" /> : <EyeIcon className="size-4" />}
                      </InputGroupButton>
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              </FieldContent>
            </Field>

            {mode === "register" && (
              <CheckboxPreset
                id="terms"
                name="terms"
                required
                label={
                  <span className="text-sm font-normal text-muted-foreground">
                    I agree to the <a href="#" className="text-primary hover:underline">terms and conditions</a>
                  </span>
                }
              />
            )}

            <Button type="submit" className="w-full" disabled={isLoading} aria-busy={isLoading}>
              {isLoading ? "Processing..." : mode === "login" ? "Login" : "Create account"}
            </Button>
          </form>

          <div className="flex justify-center">
            <span className="text-[13px] font-medium text-muted-foreground uppercase">
              Or continue with
            </span>
          </div>

          <div className="flex flex-col gap-6">
            <Button variant="outline" color="primary" className="w-full bg-transparent">
              <svg viewBox="0 0 24 24" className="mr-2 size-4 bg-transparent" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Google
            </Button>

            <div className="text-center text-sm">
              <span className="text-muted-foreground">
                {mode === "login" ? "Don't have an account? " : "Already have an account? "}
              </span>
              <Button
                variant="link"
                color="primary"
                className="h-auto p-0 font-semibold"
                onClick={() => setMode(mode === "login" ? "register" : "login")}
              >
                {mode === "login" ? "Sign up" : "Sign in"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
