import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# 1. Detail Page Background (Remove Grid, add deep space void with light rendering)
old_bg = r"""\.detail-page \{
  --detail-accent: rgba\(188, 151, 255, 0\.88\);
  --detail-accent-soft: rgba\(188, 151, 255, 0\.16\);
  position: fixed;
  inset: 0;
  z-index: 60;
  min-height: 100svh;
  background-color: #080912;
  background-image:\s*linear-gradient\([^)]+\),\s*linear-gradient\([^)]+\);
  background-size: 3\.5rem 3\.5rem;
  background-position: center top;
  overflow-y: auto;
  overflow-x: clip;
\}

\.detail-page::before \{
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient\(circle at 50% 0%, color-mix\(in srgb, var\(--detail-accent\) 45%, transparent\) 0%, transparent 40%\),
    radial-gradient\(ellipse at 50% 0%, color-mix\(in srgb, var\(--detail-accent\) 15%, transparent\) 0%, transparent 80%\);
  pointer-events: none;
  z-index: 0;
\}"""

new_bg = """.detail-page {
  --detail-accent: rgba(188, 151, 255, 0.88);
  --detail-accent-soft: rgba(188, 151, 255, 0.16);
  position: fixed;
  inset: 0;
  z-index: 60;
  min-height: 100svh;
  background-color: #030408;
  background-image: none;
  overflow-y: auto;
  overflow-x: clip;
}

.detail-page::before {
  content: "";
  position: absolute;
  inset: -20%;
  background:
    radial-gradient(circle at 50% 0%, color-mix(in srgb, var(--detail-accent) 25%, transparent) 0%, transparent 35%),
    radial-gradient(circle at 80% 30%, color-mix(in srgb, var(--detail-accent) 8%, transparent) 0%, transparent 40%),
    radial-gradient(circle at 20% 70%, color-mix(in srgb, var(--detail-accent) 5%, transparent) 0%, transparent 40%);
  filter: blur(60px);
  pointer-events: none;
  z-index: 0;
}"""

if re.search(old_bg, css):
    css = re.sub(old_bg, new_bg, css)
else:
    # broad replace
    css = re.sub(r'\.detail-page\s*\{[^}]*\}', new_bg.split('\n\n')[0], css)
    css = re.sub(r'\.detail-page::before\s*\{[^}]*\}', new_bg.split('\n\n')[1], css)


# 2. Components: Replace Bento with Spatial UI (Volumes, blur, drop shadows, rounded corners)
replacements = {
    r'\.detail-panel\s*\{[^}]*\}': """.detail-panel {
  display: grid;
  gap: 0.8rem;
  padding: 1.8rem;
  border-radius: 2.2rem;
  background: rgba(20, 22, 35, 0.2);
  backdrop-filter: blur(48px);
  -webkit-backdrop-filter: blur(48px);
  border: 1px solid rgba(255, 255, 255, 0.03);
  box-shadow: 
    inset 0 1px 1px rgba(255, 255, 255, 0.1),
    0 24px 48px rgba(0, 0, 0, 0.4);
}""",
    r'\.detail-step\s*\{[^}]*\}': """.detail-step {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 0.82rem;
  align-items: start;
  padding: 1.2rem;
  border-radius: 1.6rem;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.04);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
}""",
    r'\.detail-outcomes li\s*\{[^}]*\}': """.detail-outcomes li {
  position: relative;
  padding: 1.2rem 1.2rem 1.2rem 2.8rem;
  border-radius: 1.4rem;
  border: 1px solid rgba(255, 255, 255, 0.04);
  background: rgba(255, 255, 255, 0.02);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
}""",
    r'\.detail-case\s*\{[^}]*\}': """.detail-case {
  display: grid;
  gap: 1.2rem;
  padding: 1.8rem;
  border-radius: 2.2rem;
  border: 1px solid rgba(255, 255, 255, 0.03);
  background: rgba(20, 22, 35, 0.3);
  backdrop-filter: blur(48px);
  -webkit-backdrop-filter: blur(48px);
  box-shadow: 
    inset 0 1px 1px rgba(255, 255, 255, 0.1),
    0 32px 64px rgba(0, 0, 0, 0.5);
}""",
    r'\.rewards-card\s*\{[^}]*\}': """.rewards-card {
  position: relative;
  display: grid;
  gap: 0.9rem;
  padding: 1rem;
  border-radius: 1.8rem;
  border: 1px solid rgba(255, 255, 255, 0.03);
  background: rgba(20, 22, 35, 0.25);
  backdrop-filter: blur(32px);
  -webkit-backdrop-filter: blur(32px);
  box-shadow: 
    inset 0 1px 1px rgba(255, 255, 255, 0.08),
    0 16px 32px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}""",
    r'\.detail-media\s*\{[^}]*\}': """.detail-media {
  position: relative;
  display: grid;
  gap: 0.72rem;
  padding: 0.8rem;
  border-radius: 1.6rem;
  border: 1px solid rgba(255, 255, 255, 0.04);
  background: rgba(255, 255, 255, 0.02);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
}""",
    r'\.detail-media__frame\s*\{[^}]*\}': """.detail-media__frame {
  position: relative;
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.03);
  box-shadow: inset 0 4px 12px rgba(0, 0, 0, 0.5);
}""",
    # Smooth pill tags instead of angular chips
    r'\.detail-case__tags span\s*\{[^}]*\}': """.detail-case__tags span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  background: color-mix(in srgb, var(--detail-accent) 15%, transparent);
  border: 1px solid color-mix(in srgb, var(--detail-accent) 30%, transparent);
  font-size: 0.65rem;
  letter-spacing: 0.05em;
  color: color-mix(in srgb, var(--detail-accent) 80%, white);
}""",
    r'\.rewards-card__chip\s*\{[^}]*\}': """.rewards-card__chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  font-family: inherit;
  background: color-mix(in srgb, var(--detail-accent) 15%, transparent);
  border: 1px solid color-mix(in srgb, var(--detail-accent) 30%, transparent);
  font-size: 0.65rem;
  letter-spacing: 0.05em;
  color: color-mix(in srgb, var(--detail-accent) 80%, white);
}""",
    r'\.detail-case__index\s*\{[^}]*\}': """.detail-case__index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.3rem;
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--detail-accent) 40%, transparent);
  background: color-mix(in srgb, var(--detail-accent) 20%, transparent);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: color-mix(in srgb, var(--detail-accent) 90%, white);
}""",
    r'\.detail-step__phase\s*\{[^}]*\}': """.detail-step__phase {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.5rem;
  padding: 0.4rem 0.6rem;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--detail-accent) 40%, transparent);
  background: color-mix(in srgb, var(--detail-accent) 20%, transparent);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: color-mix(in srgb, var(--detail-accent) 90%, white);
}"""
}

for pattern, repl in replacements.items():
    css = re.sub(pattern, repl, css)

with open('src/styles.css', 'w') as f:
    f.write(css)

print("Spatial UI applied!")
