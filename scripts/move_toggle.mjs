import fs from 'fs';

let content = fs.readFileSync('src/dev/App.tsx', 'utf8');

const toggleGroupStr = `
            <ToggleGroup
              value={[language]}
              onValueChange={(v) => { if (v && v.length > 0) setLanguage(v[0] as "vi" | "en") }}
              size="sm"
              variant="default"
              spacing={3}
              className="flex gap-x-1"
            >
              <ToggleGroupItem value="vi" className={cn("px-1 transition-all duration-300", language === "vi" ? "text-2xl scale-110" : "text-sm opacity-50 hover:opacity-80")} aria-label="Tiếng Việt">🇻🇳</ToggleGroupItem>
              <ToggleGroupItem value="en" className={cn("px-1 transition-all duration-300", language === "en" ? "text-2xl scale-110" : "text-sm opacity-50 hover:opacity-80")} aria-label="English">🇬🇧</ToggleGroupItem>
            </ToggleGroup>

            <Separator
              orientation="vertical"
              className="h-4 mx-1 hidden sm:block"
            />`;

content = content.replace(toggleGroupStr, '');

const targetStr = `
            <Button
              variant="ghost"
              iconOnly
              onClick={() =>
                theme?.setMode(theme.mode === "light" ? "dark" : "light")
              }
              className="text-muted-foreground hover:text-foreground relative"
            >
              <SunIcon className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Đổi giao diện</span>
            </Button>`;

const replacementStr = targetStr + `
            <Separator
              orientation="vertical"
              className="h-4 mx-1 hidden sm:block"
            />
            
            <ToggleGroup
              value={[language]}
              onValueChange={(v) => { if (v && v.length > 0) setLanguage(v[0] as "vi" | "en") }}
              size="sm"
              variant="default"
              spacing={3}
              className="flex gap-x-1"
            >
              <ToggleGroupItem value="vi" className={cn("px-1 transition-all duration-300", language === "vi" ? "text-2xl scale-110" : "text-sm opacity-50 hover:opacity-80")} aria-label="Tiếng Việt">🇻🇳</ToggleGroupItem>
              <ToggleGroupItem value="en" className={cn("px-1 transition-all duration-300", language === "en" ? "text-2xl scale-110" : "text-sm opacity-50 hover:opacity-80")} aria-label="English">🇬🇧</ToggleGroupItem>
            </ToggleGroup>`;

content = content.replace(targetStr, replacementStr);

fs.writeFileSync('src/dev/App.tsx', content);
console.log('App.tsx moved toggle group successfully.');
