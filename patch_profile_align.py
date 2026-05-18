import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# Fix name alignment
css = re.sub(
    r'\.profile-card__name\s*{\s*position:\s*relative;\s*z-index:\s*1;\s*margin:\s*0;\s*text-align:\s*center;',
    r'.profile-card__name {\n  position: relative;\n  z-index: 1;\n  margin: 0;\n  text-align: left;',
    css
)

css = re.sub(
    r'\.profile-card__headline,\s*\.profile-card__subcopy\s*{\s*margin:\s*0;\s*text-align:\s*center;\s*}',
    r'.profile-card__headline,\n.profile-card__subcopy {\n  margin: 0;\n  text-align: left;\n}',
    css
)

with open('src/styles.css', 'w') as f:
    f.write(css)

print("Profile align patched.")
