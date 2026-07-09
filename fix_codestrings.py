import os
import re

files_to_fix = [
    'src/dev/showcase/input.tsx',
    'src/dev/showcase/textarea.tsx',
    'src/dev/showcase/checkbox.tsx',
    'src/dev/showcase/radio-group.tsx',
    'src/dev/showcase/switch.tsx',
    'src/dev/showcase/slider.tsx',
    'src/dev/showcase/input-otp.tsx',
    'src/dev/showcase/select.tsx',
    'src/dev/showcase/combobox.tsx',
]

def fix_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Find all ExampleSections without codeString
    # We will use a regex that captures the props and the body
    
    # We will just inject codeString for EVERY ExampleSection that contains `<div`, `<[A-Za-z]+Icon`, `items=\{`, `useState`, `useForm`
    # BUT only if it doesn't already have `codeString`
    
    # Actually, it's simpler to just write a script that does this:
    # Split by `<ExampleSection`
    parts = content.split('<ExampleSection')
    if len(parts) == 1:
        return
        
    new_content = parts[0]
    
    for part in parts[1:]:
        # check if it already has codeString=
        header_end = part.find('>')
        header = part[:header_end]
        
        if 'codeString=' in header:
            new_content += '<ExampleSection' + part
            continue
            
        body_end = part.find('</ExampleSection>')
        if body_end == -1:
            new_content += '<ExampleSection' + part
            continue
            
        body = part[header_end+1:body_end]
        
        needs_codestring = False
        if '<div ' in body or 'Icon' in body or 'items={[' in body or 'useState' in body or 'useForm' in body or 'label={<' in body:
            needs_codestring = True
            
        if needs_codestring:
            # Generate the codeString from the body
            # We want to remove the outermost <div className="w-full..."> if it exists
            lines = body.strip('\n').split('\n')
            
            # Remove leading spaces common to all lines
            min_indent = min([len(line) - len(line.lstrip()) for line in lines if line.strip()])
            cleaned_lines = [line[min_indent:] for line in lines]
            code_string_content = '\n'.join(cleaned_lines)
            
            # Escape backticks and ${}
            code_string_content = code_string_content.replace('`', '\\`').replace('$', '\\$')
            
            # Inject codeString into header
            # We'll put it right before the closing >
            # check if header ends with \n
            if '\n' in header:
                last_line_indent = len(header.split('\n')[-1]) - len(header.split('\n')[-1].lstrip())
                indent_str = ' ' * last_line_indent
                new_header = header + f'\n{indent_str}  codeString={{`{code_string_content}`}}'
            else:
                new_header = header + f'\n          codeString={{`{code_string_content}`}}'
                
            new_content += '<ExampleSection' + new_header + part[header_end:]
        else:
            new_content += '<ExampleSection' + part
            
    with open(filepath, 'w') as f:
        f.write(new_content)
        
for f in files_to_fix:
    fix_file(f)
    print(f"Fixed {f}")
