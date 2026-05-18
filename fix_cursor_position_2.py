import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# Specifically target the cursor in the PC screen refinements
css = re.sub(
    r'(/\* PC screen refinements \*/.*?\.hero-stage__cursor \{\s*left: auto !important;\s*right: -0\.5em !important;\s*top: )1\.4em( !important;)',
    r'\g<1>1.45em\g<2>',
    css,
    flags=re.DOTALL
)

with open('src/styles.css', 'w') as f:
    f.write(css)

print("Cursor top value updated to 1.45em.")
