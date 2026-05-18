import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# remove old media query overrides for preview cards
css = re.sub(
    r'\.projects-card__preview--two\s*{\s*width:\s*clamp\(5\.6rem,\s*26vw,\s*6\.9rem\);\s*}',
    '',
    css
)

with open('src/styles.css', 'w') as f:
    f.write(css)

print("Media queries for fanning patched.")
