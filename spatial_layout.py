import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# Make the detail-case layout more "Spatial" (side-by-side if large screen, better hierarchy)
case_layout = r"""\.detail-case\s*\{
  display: grid;
  gap: 1\.2rem;
  padding: 1\.8rem;
  border-radius: 2\.2rem;
  border: 1px solid rgba\(255, 255, 255, 0\.03\);
  background: rgba\(20, 22, 35, 0\.3\);
  backdrop-filter: blur\(48px\);
  -webkit-backdrop-filter: blur\(48px\);
  box-shadow: 
    inset 0 1px 1px rgba\(255, 255, 255, 0\.1\),
    0 32px 64px rgba\(0, 0, 0, 0\.5\);
\}"""

new_case_layout = """.detail-case {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.4rem;
  padding: 2.2rem;
  border-radius: 2.4rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  background: linear-gradient(145deg, rgba(20, 22, 35, 0.4), rgba(10, 11, 18, 0.6));
  backdrop-filter: blur(48px);
  -webkit-backdrop-filter: blur(48px);
  box-shadow: 
    inset 0 1px 1px rgba(255, 255, 255, 0.15),
    inset 0 -1px 0 rgba(255, 255, 255, 0.05),
    0 32px 64px rgba(0, 0, 0, 0.7);
}

@media (min-width: 1024px) {
  .detail-case {
    grid-template-columns: 1.2fr 1.8fr; /* Split layout for Spatial UI */
    align-items: center;
  }
}

.detail-case__info {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}

.detail-case__media-window {
  display: block;
  width: 100%;
}
"""

if '.detail-case__info' not in css:
    css = re.sub(case_layout, new_case_layout, css)

with open('src/styles.css', 'w') as f:
    f.write(css)

