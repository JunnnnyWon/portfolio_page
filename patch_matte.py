import re

with open('src/styles.css', 'r') as f:
    css = f.read()

old_card = r"""\.projects-card \{
  --project-accent: rgba\(132, 155, 255, 0\.84\);
  --project-accent-soft: rgba\(132, 155, 255, 0\.16\);
  position: relative;
  display: grid;
  gap: 1\.08rem;
  width: 100%;
  min-height: 18\.6rem;
  padding: 1\.2rem 1\.18rem 1\.22rem;
  overflow: hidden;
  border-radius: 1\.7rem;
  border: 1px solid rgba\(255, 255, 255, 0\.05\);
  background: rgba\(12, 14, 28, 0\.15\);
  backdrop-filter: blur\(28px\);
  -webkit-backdrop-filter: blur\(28px\);
  box-shadow:
    0 24px 48px rgba\(0, 0, 0, 0\.3\),
    inset 0 1px 0 rgba\(255, 255, 255, 0\.1\),
    inset 0 -1px 0 rgba\(255, 255, 255, 0\.02\);
  transition:
    border-color 300ms var\(--ease-out\),
    box-shadow 300ms var\(--ease-out\),
    background 300ms var\(--ease-out\),
    transform 300ms var\(--ease-out\);
  isolation: isolate;
  appearance: none;
  text-align: left;
  font: inherit;
  color: inherit;
  cursor: pointer;
\}[\s\S]*?\.projects-card:hover::after \{[\s\S]*?\}"""

new_card = """.projects-card {
  --project-accent: rgba(132, 155, 255, 0.84);
  --project-accent-soft: rgba(132, 155, 255, 0.16);
  position: relative;
  display: grid;
  gap: 1.08rem;
  width: 100%;
  min-height: 18.6rem;
  padding: 1.2rem 1.18rem 1.22rem;
  overflow: hidden;
  border-radius: 1.7rem;
  border: 1px solid rgba(255, 255, 255, 0.03);
  background: #080912;
  box-shadow:
    0 24px 48px rgba(0, 0, 0, 0.8),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  transition:
    border-color 300ms var(--ease-out),
    box-shadow 300ms var(--ease-out),
    background 300ms var(--ease-out),
    transform 300ms var(--ease-out);
  isolation: isolate;
  appearance: none;
  text-align: left;
  font: inherit;
  color: inherit;
  cursor: pointer;
}

.projects-card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0) 40%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  opacity: 1;
  transition: opacity 400ms var(--ease-out);
}

.projects-card:hover {
  background: #0b0d19;
  border-color: transparent;
  box-shadow:
    0 32px 64px rgba(0, 0, 0, 0.9),
    inset 0 1px 0 rgba(255, 255, 255, 0.08),
    0 0 40px color-mix(in srgb, var(--project-accent) 15%, transparent);
}

.projects-card:hover::after {
  opacity: 1;
  background: linear-gradient(135deg, color-mix(in srgb, var(--project-accent) 50%, rgba(255,255,255,0.2)), transparent 60%);
}"""

if re.search(old_card, css):
    css = re.sub(old_card, new_card, css)
    with open('src/styles.css', 'w') as f:
        f.write(css)
    print("Matte Obsidian style applied successfully.")
else:
    print("Could not find match. Falling back to alternative replacement method.")
