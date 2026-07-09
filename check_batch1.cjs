const fs = require('fs');
const files = [
  'input.tsx', 'textarea.tsx', 'checkbox.tsx', 'radio-group.tsx', 
  'switch.tsx', 'slider.tsx', 'input-otp.tsx', 'select.tsx', 'combobox.tsx'
];

files.forEach(file => {
  const content = fs.readFileSync('src/dev/showcase/' + file, 'utf8');
  // Check for ternary in className
  const magicCssMatches = content.match(/className=\{[^}]*\?[^}]*\}/g);
  if (magicCssMatches) {
    console.log(`[!] Magic CSS in ${file}:`, magicCssMatches);
  }

  // Check for missing codeString in ExampleSection with JSX/state
  const sections = content.split('<ExampleSection');
  sections.shift(); // remove first part before any ExampleSection
  
  sections.forEach((sec, idx) => {
    // get the props of the ExampleSection
    const propsMatch = sec.match(/^([\s\S]*?)>/);
    if (!propsMatch) return;
    const props = propsMatch[1];
    
    // get the body of the ExampleSection (roughly, up to </ExampleSection>)
    const bodyMatch = sec.match(/>([\s\S]*?)<\/ExampleSection>/);
    const body = bodyMatch ? bodyMatch[1] : '';

    const hasCodeString = props.includes('codeString=');
    const hasDivWrapper = body.match(/<div /);
    const hasIcon = body.match(/<[A-Z][a-zA-Z]*Icon\b/);
    const hasJSXProp = body.match(/[a-zA-Z]+=\{<[A-Z]/);
    const hasUseState = body.match(/useState\(/);
    const hasRHF = body.match(/<Controller /) || body.match(/useForm\(/);
    const hasItemsProp = body.match(/items=\{\[/);

    if (!hasCodeString && (hasDivWrapper || hasIcon || hasJSXProp || hasUseState || hasRHF || hasItemsProp)) {
      const labelMatch = props.match(/label="([^"]+)"/);
      const label = labelMatch ? labelMatch[1] : `Section ${idx}`;
      console.log(`[-] Missing codeString in ${file} - "${label}":`);
      if (hasDivWrapper) console.log('    -> Has <div> wrapper');
      if (hasIcon) console.log('    -> Has Icon');
      if (hasJSXProp) console.log('    -> Has JSX Prop');
      if (hasUseState) console.log('    -> Has useState');
      if (hasRHF) console.log('    -> Has RHF');
      if (hasItemsProp) console.log('    -> Has items array');
    }
  });
});
