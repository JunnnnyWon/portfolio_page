import re
with open('src/styles.css', 'r') as f:
    text = f.read()

text = re.sub(
    r'(grid-template-columns:\s*)1\.2fr\s+1\.8fr(;\s*/\* Split layout[^\n]*\n\s*align-items:\s*)center(;)',
    r'\1 1fr 2fr\2start\3',
    text
)

with open('src/styles.css', 'w') as f:
    f.write(text)
