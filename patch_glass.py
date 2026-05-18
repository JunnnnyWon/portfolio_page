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
  border: 1px solid rgba\(255, 255, 255, 0\.08\);
  background:
    linear-gradient\(180deg, rgba\(16, 19, 45, 0\.92\), rgba\(8, 11, 28, 0\.98\)\),
    rgba\(10, 12, 26, 0\.94\);
  box-shadow:
    0 18px 36px rgba\(2, 7, 28, 0\.2\),
    inset 0 1px 0 rgba\(255, 255, 255, 0\.04\);
  transition:
    border-color 220ms var\(--ease-out\),
    box-shadow 220ms var\(--ease-out\),
    background 220ms var\(--ease-out\);
  isolation: isolate;
  appearance: none;
  text-align: left;
  font: inherit;
  color: inherit;
  cursor: pointer;
\}[\s\S]*?\.projects-card:hover \{
  border-color: color-mix\(in srgb, var\(--project-accent\) 24%, rgba\(255, 255, 255, 0\.08\)\);
  box-shadow:
    0 24px 44px rgba\(2, 7, 28, 0\.28\),
    inset 0 1px 0 rgba\(255, 255, 255, 0\.06\);
\}"""

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
  border: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(15, 18, 35, 0.25);
  backdrop-filter: blur(28px);
  -webkit-backdrop-filter: blur(28px);
  box-shadow:
    0 24px 48px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -1px 0 rgba(255, 255, 255, 0.02);
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
  background: linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0) 40%, rgba(255,255,255,0.03));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  opacity: 0;
  transition: opacity 400ms var(--ease-out);
}

.projects-card:hover {
  background: rgba(22, 26, 50, 0.35);
  border-color: transparent;
  box-shadow:
    0 32px 64px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.15),
    0 0 32px color-mix(in srgb, var(--project-accent) 20%, transparent);
}

.projects-card:hover::after {
  opacity: 1;
  background: linear-gradient(135deg, color-mix(in srgb, var(--project-accent) 60%, rgba(255,255,255,0.4)), transparent 50%, color-mix(in srgb, var(--project-accent) 20%, transparent));
}"""

if re.search(old_card, css):
    css = re.sub(old_card, new_card, css)
    with open('src/styles.css', 'w') as f:
        f.write(css)
    print("Glassmorphism style replaced successfully.")
else:
    print("Could not find match. Falling back to alternative replacement method.")
