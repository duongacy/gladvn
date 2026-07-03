import { useState } from "react";
import {
  SunIcon,
  MoonIcon,
  ZapIcon,
  ShieldCheckIcon,
  LayersIcon,
  PaletteIcon,
  BoxIcon,
  ToggleLeftIcon,
  TypeIcon,
  AlertCircleIcon,
  CheckCircle2Icon,
  InfoIcon,
  TriangleAlertIcon,
  XCircleIcon,
} from "lucide-react";

import {
  SectionHeader,
  ShowcaseBlock,
  ColorSwatch,
} from "@/dev/components/showcase";
import { VARIANTS, COLORS, SIZES, STATS, COLOR_INFO } from "@/dev/data";
import { Button } from "@/components/micro/button";
import { Badge } from "@/components/micro/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/micro/card";
import { Input } from "@/components/micro/input";
import { Label } from "@/components/micro/label";
import { Switch } from "@/components/micro/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/micro/tabs";
import { Separator } from "@/components/micro/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/micro/avatar";
import { Progress } from "@/components/micro/progress";
import { Skeleton } from "@/components/micro/skeleton";
import { Slider } from "@/components/micro/slider";
import { Checkbox } from "@/components/micro/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/micro/select";
import { Textarea } from "@/components/micro/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/micro/accordion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/micro/tooltip";
import { Alert, AlertDescription } from "@/components/micro/alert";
import { RadioGroup, RadioGroupItem } from "@/components/micro/radio-group";
import { Combobox, ComboboxInput, ComboboxContent, ComboboxList, ComboboxItem } from "@/components/micro/combobox";
import { Calendar } from "@/components/micro/calendar";
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/micro/input-otp";
import { NativeSelect, NativeSelectOption } from "@/components/micro/native-select";
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupInput } from "@/components/micro/input-group";
import { Field, FieldTitle, FieldDescription, FieldError, FieldContent } from "@/components/micro/field";

export default function InteractiveSection() {
  const [tab, setTab] = useState("preview");
  return (
    <div className="space-y-5">
      <SectionHeader title="Interactive" description="Tabs, Tooltips, Switch" />

      <ShowcaseBlock title="Tabs">
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
            <TabsTrigger value="props">Props</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="pt-4">
            <Button color="success">Save changes</Button>
          </TabsContent>
          <TabsContent value="code" className="pt-4">
            <pre className="text-xs bg-muted rounded-md p-3 overflow-x-auto">
              {`<Button color="success">Save changes</Button>`}
            </pre>
          </TabsContent>
          <TabsContent value="props" className="pt-4">
            <div className="text-xs text-muted-foreground space-y-1">
              <div>
                <code>variant</code> — solid | outline | soft | ghost | link
              </div>
              <div>
                <code>color</code> — primary | secondary | destructive | warning
                | success | info | tertiary
              </div>
              <div>
                <code>size</code> — sm | md | lg
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </ShowcaseBlock>
    </div>
  );
}
