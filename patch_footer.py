import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# Replace note CSS
old_note = r'\.projects-card__note\s*\{[\s\S]*?\}'
new_note = """.projects-card__note {
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  width: 100%;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.6);
  transition: color 300ms;
}
.projects-card:hover .projects-card__note {
  color: #fff;
}"""
css = re.sub(old_note, new_note, css)

old_arrow = r'\.projects-card__arrow\s*\{[\s\S]*?\}'
new_arrow = """.projects-card__arrow {
  position: relative;
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: color-mix(in srgb, var(--project-accent) 80%, white);
  transition: transform 300ms var(--ease-out);
}
.projects-card:hover .projects-card__arrow {
  transform: translateX(4px);
}"""
css = re.sub(old_arrow, new_arrow, css)

# Make sure footer is flex
old_footer = r'\.projects-card__footer\s*\{[\s\S]*?\}'
new_footer = """.projects-card__footer {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}"""
css = re.sub(old_footer, new_footer, css, count=1)

with open('src/styles.css', 'w') as f:
    f.write(css)

print("Footer updated for Editorial.")
