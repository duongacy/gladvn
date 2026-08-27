import { CheckIcon, SparklesIcon, XIcon } from "lucide-react";
import * as React from "react";
import { Badge } from "../components/micro/badge";
import { Button } from "../components/micro/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/micro/card";
import { Switch, SwitchThumb } from "../components/micro/switch";
import { cn } from "../lib/utils";

export default function PricingBlock() {
  const [isYearly, setIsYearly] = React.useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small projects.",
      monthlyPrice: "$15",
      yearlyPrice: "$12",
      features: [
        { name: "Up to 5 projects", included: true },
        { name: "Basic analytics", included: true },
        { name: "24-hour support response time", included: true },
        { name: "Custom domains", included: false },
        { name: "Advanced integrations", included: false },
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      description: "Ideal for growing teams and businesses.",
      monthlyPrice: "$49",
      yearlyPrice: "$39",
      features: [
        { name: "Unlimited projects", included: true },
        { name: "Advanced analytics", included: true },
        { name: "1-hour support response time", included: true },
        { name: "Custom domains", included: true },
        { name: "Advanced integrations", included: false },
      ],
      cta: "Upgrade to Pro",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large scale organizations with advanced needs.",
      monthlyPrice: "$99",
      yearlyPrice: "$89",
      features: [
        { name: "Unlimited everything", included: true },
        { name: "Custom reporting", included: true },
        { name: "24/7 dedicated phone support", included: true },
        { name: "Custom domains", included: true },
        { name: "Advanced integrations", included: true },
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background px-4 py-24 sm:px-6 lg:px-8">
      {/* Ambient Background Glows */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[40rem] w-[40rem] rounded-full bg-primary/5 blur-3xl" />
      </div>
      <div className="pointer-events-none absolute -top-40 right-20 -z-10 h-[20rem] w-[20rem] rounded-full bg-secondary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-20 -z-10 h-[20rem] w-[20rem] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl flex flex-col items-center text-center">
        <Badge variant="soft" color="primary" className="mb-6 rounded-full px-4 py-1.5 font-medium tracking-wide">
          <SparklesIcon className="mr-2 size-3.5" /> Pricing Plans
        </Badge>
        
        <h2 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="block text-foreground">Simple, transparent</span>
          <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent pb-2 mt-1">
            pricing for everyone.
          </span>
        </h2>
        
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Choose the perfect plan for your needs. Always know what you'll pay with no hidden fees.
        </p>

        {/* Billing Toggle */}
        <div className="mt-12 flex items-center justify-center gap-x-4 rounded-full border border-border bg-muted/30 p-2 shadow-sm backdrop-blur-sm">
          <span className={cn("pl-4 text-sm font-semibold transition-colors", {
            "text-foreground": !isYearly,
            "text-muted-foreground": isYearly
          })}>
            Monthly
          </span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            aria-label="Toggle yearly billing"
          >
            <SwitchThumb />
          </Switch>
          <span className={cn("pr-4 text-sm font-semibold transition-colors flex items-center gap-2", {
            "text-foreground": isYearly,
            "text-muted-foreground": !isYearly
          })}>
            Yearly
            <span className="inline-flex items-center rounded-full bg-success/15 px-2 py-0.5 text-xs font-bold text-success">
              Save 20%
            </span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-5xl lg:grid-cols-3 items-center">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "group flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl relative",
                {
                  "border-primary shadow-xl shadow-primary/10 lg:scale-105 z-10 bg-background/95 backdrop-blur-sm ring-1 ring-primary/20": plan.popular,
                  "border-border shadow-sm scale-100 z-0 bg-background/50 backdrop-blur-sm": !plan.popular,
                }
              )}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-fit">
                  <div className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-primary/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-lg shadow-primary/30">
                    <SparklesIcon className="size-3.5" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className={cn("text-left pb-6 pt-8", plan.popular ? "pt-10" : "")}>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-sm mt-3 min-h-10 leading-relaxed">
                  {plan.description}
                </CardDescription>
                
                <div className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-5xl font-extrabold tracking-tight text-foreground">
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-muted-foreground">
                    /month
                  </span>
                </div>
                
                <div className="h-5 mt-2">
                  {isYearly && (
                    <p className="text-xs font-medium text-success animate-in fade-in slide-in-from-bottom-1">
                      Billed annually
                    </p>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="text-left flex-1">
                <div className="mb-6 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent opacity-50"></div>
                <ul className="space-y-4 text-sm leading-6">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex gap-x-3 items-start">
                      {feature.included ? (
                        <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                          <CheckIcon className="size-3.5 flex-none text-primary" aria-hidden="true" />
                        </div>
                      ) : (
                        <div className="rounded-full bg-muted p-1 mt-0.5">
                          <XIcon className="size-3.5 flex-none text-muted-foreground/50" aria-hidden="true" />
                        </div>
                      )}
                      <span className={cn(
                        "font-medium",
                        feature.included ? "text-foreground" : "text-muted-foreground/60 line-through decoration-muted-foreground/30"
                      )}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="pt-6 pb-8">
                <Button
                  className="w-full font-bold shadow-sm transition-all duration-300 group-hover:shadow-md h-12 text-sm"
                  color={plan.popular ? "primary" : "secondary"}
                  variant={plan.popular ? "solid" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
