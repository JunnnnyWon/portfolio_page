import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# Remove old visual/preview rules
css = re.sub(r'\.projects-card__visual\s*\{[^}]*\}', '', css)
css = re.sub(r'\.projects-card__preview.*?\}\s*(?=\.projects-card|\@media|$)', '', css, flags=re.DOTALL)
# The above regex might be tricky, let's keep it simpler or just skip it if it's not breaking anything. However, removing old ::before is safer.

# We appended at the end, so let's just make sure the new one overrides the old one (which it natively does in CSS by being last).
# But to be clean we could find the first one and delete it.
first_before = r'\.projects-card::before\s*\{[\s\S]*?\}'
matches = list(re.finditer(first_before, css))
if len(matches) > 1:
    css = css[:matches[0].start()] + css[matches[0].end():]
    
with open('src/styles.css', 'w') as f:
    f.write(css)
