import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# Make the bottom padding of projects scene a bit larger so you can scroll past the last sticky card
css = re.sub(
    r'\.scene--projects\s*{\s*padding:\s*calc\(var\(--nav-height\)\s*\+\s*2\.4rem\)\s*var\(--page-edge\)\s*8rem;\s*',
    r'.scene--projects {\n  padding: calc(var(--nav-height) + 2.4rem) var(--page-edge) 16rem;\n',
    css
)

css = re.sub(
    r'\.scene--projects\s*{\s*padding:\s*calc\(var\(--nav-height\)\s*\+\s*3rem\)\s*var\(--page-edge\)\s*9rem;\s*',
    r'.scene--projects {\n    padding: calc(var(--nav-height) + 3rem) var(--page-edge) 18rem;\n',
    css
)

with open('src/styles.css', 'w') as f:
    f.write(css)

print("Sticky stack padding adjusted.")
