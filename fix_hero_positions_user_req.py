import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# Replace the specific values in the final block
css = re.sub(
    r'(/\* PC screen refinements \*/.*?top: )-0\.7em( !important;.*?right: )-0\.25em( !important;)',
    r'\g<1>-0.3em\g<2>-0.4em\g<3>',
    css,
    flags=re.DOTALL
)

with open('src/styles.css', 'w') as f:
    f.write(css)

print("Values updated.")
