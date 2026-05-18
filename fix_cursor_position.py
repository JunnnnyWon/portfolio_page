import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# Specifically target the cursor in the PC screen refinements
# Current is: right: -0.4em !important; top: 1.6em !important;
# Target: right: -0.5em !important; top: 1.4em !important;

css = re.sub(
    r'(/\* PC screen refinements \*/.*?\.hero-stage__cursor \{\s*left: auto !important;\s*right: )-[0-9\.]+em( !important;\s*top: )[0-9\.]+em( !important;)',
    r'\g<1>-0.5em\g<2>1.4em\g<3>',
    css,
    flags=re.DOTALL
)

with open('src/styles.css', 'w') as f:
    f.write(css)

print("Cursor values updated.")
