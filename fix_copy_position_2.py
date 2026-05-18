import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# Replace the specific values in the final block
css = re.sub(
    r'(/\* FINAL HERO COPY POSITION REFINEMENT \*/.*?\.hero-stage__copy \{\s*bottom: )0\.5rem( !important;\s*/\* Moved down from 3rem \*/\s*\}.*?\.hero-stage__copy \{\s*bottom: )0\.5rem( !important;\s*/\* Moved down from 2rem \*/)',
    r'\g<1>-2rem\g<2>-2rem\g<3>',
    css,
    flags=re.DOTALL
)

with open('src/styles.css', 'w') as f:
    f.write(css)

print("Copy values updated.")
