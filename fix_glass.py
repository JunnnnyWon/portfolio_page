import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# Make sure blur works across mobile devices well, and reduce background opacity a little bit to ensure the aura shines brilliantly
css = css.replace('background: rgba(15, 18, 35, 0.25);', 'background: rgba(12, 14, 28, 0.15);')
css = css.replace('background: rgba(22, 26, 50, 0.35);', 'background: rgba(18, 22, 40, 0.25);')

with open('src/styles.css', 'w') as f:
    f.write(css)
