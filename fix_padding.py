import re

with open('src/styles.css', 'r') as f:
    css = f.read()

css = re.sub(
    r'\.detail-case\s*\{\s*display:\s*grid;\s*gap:\s*1rem;\s*padding:\s*1\.2rem;\s*border-radius:\s*6px;\s*border:\s*1px\s*solid\s*rgba\(255\,\s*255\,\s*255\,\s*0\.08\);\s*background:\s*#0B0D19;\s*\}',
    """.detail-case {
  display: grid;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #0B0D19;
}""", css)

with open('src/styles.css', 'w') as f:
    f.write(css)
