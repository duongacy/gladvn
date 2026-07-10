import { useState } from "react";

import { Button } from "@/components/micro/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/micro/tabs";
import { SectionHeader, ShowcaseBlock } from "@/dev/components/showcase";

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
