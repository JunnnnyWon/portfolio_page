import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# 1. Revert grid for projects-card-stack
css = re.sub(
    r'\.projects-card-stack\s*{\s*display:\s*grid;\s*gap:\s*1rem;\s*margin:\s*0;\s*padding:\s*0;\s*list-style:\s*none;\s*}',
    r'.projects-card-stack {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: relative;\n}',
    css
)

css = re.sub(
    r'@media\s*\(min-width:\s*768px\)\s*{[\s\S]*?\.projects-card-stack\s*{[^}]+}\s*\.projects-card-stack\s*>\s*li:first-child\s*{[^}]+}[\s\S]*?}',
    lambda m: re.sub(r'\.projects-card-stack\s*{\s*grid-template-columns:\s*repeat\(2,\s*1fr\);\s*}\s*\.projects-card-stack\s*>\s*li:first-child\s*{\s*grid-column:\s*1\s*/\s*-1;\s*}', '', m.group(0)),
    css
)

# 2. Add sticky styles to li
sticky_styles = """
.projects-card-stack > li {
  list-style: none;
  position: sticky;
  top: calc(var(--nav-height, 6rem) + 1.5rem + var(--stack-offset, 0px));
}

.projects-card-stack > li:nth-child(1) { --stack-offset: 0rem; }
.projects-card-stack > li:nth-child(2) { --stack-offset: 2rem; }
.projects-card-stack > li:nth-child(3) { --stack-offset: 4rem; }
"""

css = re.sub(
    r'\.projects-card-stack\s*>\s*li\s*{\s*list-style:\s*none;\s*}',
    sticky_styles,
    css
)

with open('src/styles.css', 'w') as f:
    f.write(css)

print("Sticky stack patched.")
