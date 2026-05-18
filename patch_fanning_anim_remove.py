import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# remove old media query overrides for preview cards
css = re.sub(
    r'@keyframes\s*projects-card-float-three\s*{[\s\S]*?}\s*}',
    '',
    css
)

with open('src/styles.css', 'w') as f:
    f.write(css)

print("Float anim removed.")
