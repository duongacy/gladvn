import fs from 'fs';

let content = fs.readFileSync('src/dev/App.tsx', 'utf8');

// Add import
const importToAdd = `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../components/micro/select";
`;

if (!content.includes('SelectContent')) {
  // Insert right after the lucide-react import block
  content = content.replace(
    'import {\n  Command,',
    importToAdd + 'import {\n  Command,'
  );
}

// Add language to useDevContext
content = content.replace(
  'const { size, setSize } = useDevContext();',
  'const { size, setSize, language, setLanguage } = useDevContext();'
);

// Add the Select component right after the search button, inside the Right div
const selectHtml = `
            <Select value={language} onValueChange={(v) => setLanguage(v as "vi" | "en")}>
              <SelectTrigger size="sm" className="w-[72px] bg-transparent border-transparent hover:bg-muted/50 focus:ring-0 shadow-none font-medium text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vi">Tiếng Việt</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectContent>
            </Select>

            <Separator
              orientation="vertical"
              className="h-4 mx-1 hidden sm:block"
            />
`;

if (!content.includes('<Select value={language}')) {
  content = content.replace(
    '<div className="flex items-center gap-1.5">\n            <Button',
    '<div className="flex items-center gap-1.5">\n' + selectHtml + '            <Button'
  );
}

fs.writeFileSync('src/dev/App.tsx', content);
console.log("App.tsx modified.");
