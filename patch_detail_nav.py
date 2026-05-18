import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# Make detail layout match the new style 
old_nav_back = r"""\.detail-nav__back \{
  appearance: none;
  cursor: pointer;
  font-family: inherit;
  line-height: 1;
  color: rgba\(255, 255, 255, 0\.94\);
  background: color-mix\(in srgb, var\(--detail-accent-soft\) 86%, rgba\(255, 255, 255, 0\.05\)\);
  border: 1px solid color-mix\(in srgb, var\(--detail-accent\) 22%, rgba\(255, 255, 255, 0\.08\)\);
\}"""

new_nav_back = """.detail-nav__back {
  appearance: none;
  cursor: pointer;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  line-height: 1;
  color: rgba(255, 255, 255, 0.7);
  background: #080912;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 300ms;
}

.detail-nav__back:hover {
  color: #fff;
  border-color: color-mix(in srgb, var(--detail-accent) 50%, rgba(255,255,255,0.4));
  background: color-mix(in srgb, var(--detail-accent) 15%, #080912);
}"""

if re.search(old_nav_back, css):
    css = re.sub(old_nav_back, new_nav_back, css)
    with open('src/styles.css', 'w') as f:
        f.write(css)
    print("Nav Back updated!")
else:
    print("Nav Back not found exactly.")
