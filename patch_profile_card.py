import re

with open('src/styles.css', 'r') as f:
    css = f.read()

css = re.sub(
    r'\.profile-card\s*{\s*position:\s*relative;\s*z-index:\s*1;\s*display:\s*grid;\s*gap:\s*1\.5rem;\s*max-width:\s*24\.5rem;\s*}',
    r'.profile-card {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  gap: 1.5rem;\n  max-width: 24.5rem;\n  margin-inline: auto;\n  justify-items: start;\n}',
    css
)

with open('src/styles.css', 'w') as f:
    f.write(css)

print("Profile card space patched.")
