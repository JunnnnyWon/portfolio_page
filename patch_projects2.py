import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# remove max-height projects overrides
css = re.sub(
    r'@media\s*\(max-height:\s*51\.25rem\)\s*{[\s\S]*?}\n\n@media',
    lambda m: re.sub(r'\.projects-stage__header-title\s*{[^}]+}', '', 
              re.sub(r'\.projects-stage__backdrop\s*{[^}]+}', '', 
              re.sub(r'\.projects-stage__header\s*h2\s*{[^}]+}', '', m.group(0)))),
    css
)

css = re.sub(
    r'@media\s*\(max-height:\s*43rem\)\s*{[\s\S]*?\.projects-stage__header\s*p\s*{[^}]+}[\s\S]*?\.projects-wall-shell',
    lambda m: re.sub(r'\.projects-stage__header-title\s*{[^}]+}', '', 
              re.sub(r'\.projects-stage__backdrop\s*{[^}]+}', '', 
              re.sub(r'\.projects-stage__header\s*h2\s*{[^}]+}', '', m.group(0)))),
    css
)

with open('src/styles.css', 'w') as f:
    f.write(css)

print("Styles patched 2.")
