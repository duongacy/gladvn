const fs = require('fs');
const path = require('path');

const targetGroups = [
  { file: 'card.tsx', searchSlot: 'data-slot="card"', groupClass: 'group/card' },
  { file: 'checkbox.tsx', searchSlot: 'data-slot="checkbox"', groupClass: 'group/checkbox' },
  { file: 'confirm.tsx', searchSlot: 'data-slot="confirm-content"', groupClass: 'group/confirm-content' },
  { file: 'field.tsx', searchSlot: 'data-slot="field"', groupClass: 'group/field' },
  { file: 'input-group.tsx', searchSlot: 'data-slot="input-group"', groupClass: 'group/input-group' },
  { file: 'input-otp.tsx', searchSlot: 'data-slot="input-otp"', groupClass: 'group/otp' },
  { file: 'radio-group.tsx', searchSlot: 'data-slot="radio-group"', groupClass: 'group/radio-group' },
  { file: 'combobox.tsx', searchSlot: 'data-slot="combobox"', groupClass: 'group/combobox' }
];

for (const target of targetGroups) {
  const filePath = path.join(__dirname, 'src/components/micro', target.file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes(target.groupClass)) continue; // already has it
  
  // Try to find the cva() or className={cn( corresponding to the slot
  // Look for `className={cn(` or `cva(` right near `data-slot="xxx"`
  
  // Since some are cva and some are inline cn(), we can just find the first string in cn() or cva() after the slot, 
  // or more simply, we can find the string containing the base tailwind classes.
  // Actually, let's just do it manually for these 8 files. It's safer.
}
