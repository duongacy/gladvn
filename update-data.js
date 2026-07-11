const fs = require('fs');

const componentsWithSize = [
  'alert-dialog', 'pagination', 'card', 'slider', 'input-group', 'popover', 
  'progress', 'input-otp', 'hover-card', 'sheet', 'label', 'tooltip', 'alert', 
  'combobox', 'switch', 'calendar', 'radio-group', 'item', 'toggle-group', 
  'avatar', 'dialog', 'badge', 'button', 'toggle', 'toast', 'checkbox', 
  'spinner', 'dropdown-menu', 'select', 'textarea', 'input'
];

let dataTs = fs.readFileSync('src/dev/data.ts', 'utf8');

componentsWithSize.forEach(id => {
  const regex = new RegExp(`({[^{]*id:\\s*"${id}"[^}]*})`, 'g');
  dataTs = dataTs.replace(regex, (match) => {
    if (match.includes('hasSize')) return match;
    return match.replace('}', ', hasSize: true }');
  });
});

fs.writeFileSync('src/dev/data.ts', dataTs);
console.log('Updated src/dev/data.ts');
