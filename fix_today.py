import re

with open('src/styles.css', 'r') as f:
    text = f.read()

# 1. Parallax clipping fix
text = re.sub(r'(\.detail-case__gallery-shell--masonry\s*\{[^}]*?overflow:\s*)hidden(;)', r'\1visible\2', text)

# 2. figure margin fix
text = re.sub(r'(\.masonry-item\s*\{[^\}]*?width:\s*100%;\s*)\}', r'\1margin: 0;\n}', text)

# 3. detail-shell max-width at 1024px expansion (if it exists like before)
text = re.sub(r'(\.detail-shell\s*\{\s*max-width:\s*)62rem(;)', r'\1 84rem\2', text)

# 4. detail-case 1024px grid layout and alignment
text = re.sub(
    r'(grid-template-columns:\s*)1\.2fr\s+1\.8fr(;\s*/\* Split layout[^\n]*\n\s*align-items:\s*)center(;)',
    r'\1 1fr 2fr\2start\3',
    text
)

with open('src/styles.css', 'w') as f:
    f.write(text)

print("Applied fixes to restored CSS")
