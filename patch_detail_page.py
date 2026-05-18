import re

with open('src/styles.css', 'r') as f:
    css = f.read()

old_detail_page = r"""\.detail-page \{
  --detail-accent: rgba\(188, 151, 255, 0\.88\);
  --detail-accent-soft: rgba\(188, 151, 255, 0\.16\);
  position: fixed;
  inset: 0;
  z-index: 60;
  min-height: 100svh;
  background:
    radial-gradient\(circle at top, color-mix\(in srgb, var\(--detail-accent\) 22%, transparent\), transparent 28%\),
    linear-gradient\(180deg, #121420 0%, #090812 100%\);
  overflow-y: auto;
  overflow-x: clip;
\}

\.detail-page::before \{
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient\(circle at 78% 12%, color-mix\(in srgb, var\(--detail-accent\) 16%, transparent\), transparent 18%\),
    radial-gradient\(circle at 16% 30%, rgba\(255, 255, 255, 0\.05\), transparent 24%\);
  pointer-events: none;
\}"""

new_detail_page = """.detail-page {
  --detail-accent: rgba(188, 151, 255, 0.88);
  --detail-accent-soft: rgba(188, 151, 255, 0.16);
  position: fixed;
  inset: 0;
  z-index: 60;
  min-height: 100svh;
  background-color: #080912;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 3.5rem 3.5rem;
  background-position: center top;
  overflow-y: auto;
  overflow-x: clip;
}

.detail-page::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 50% 0%, color-mix(in srgb, var(--detail-accent) 45%, transparent) 0%, transparent 40%),
    radial-gradient(ellipse at 50% 0%, color-mix(in srgb, var(--detail-accent) 15%, transparent) 0%, transparent 80%);
  pointer-events: none;
  z-index: 0;
}"""

if re.search(old_detail_page, css):
    css = re.sub(old_detail_page, new_detail_page, css)
    with open('src/styles.css', 'w') as f:
        f.write(css)
    print("Detail Page background updated to Black Canvas & Tech Grid!")
else:
    print("Failed to find exact match. Will try a broader replace.")
