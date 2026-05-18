import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# Replace projects-card__index
old_index = r'\.projects-card__index\s*\{[\s\S]*?\}'
new_index = """.projects-card__index {
  display: inline-flex;
  align-items: center;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.4);
}"""
css = re.sub(old_index, new_index, css)

# Replace projects-card__meta
old_meta = r'\.projects-card__meta\s*\{[\s\S]*?\}'
new_meta = """.projects-card__meta {
  display: block;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #ffffff;
}"""
css = re.sub(old_meta, new_meta, css)

# Replace body p
old_p = r'\.projects-card__body p\s*\{[\s\S]*?\}'
new_p = """.projects-card__body p {
  margin: 0;
  max-width: 90%;
  font-size: 0.95rem;
  line-height: 1.5;
  font-weight: 300;
  letter-spacing: -0.01em;
  color: rgba(255, 255, 255, 0.8);
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
}"""
css = re.sub(old_p, new_p, css)


# Add .projects-card__line
if ".projects-card__line" not in css:
    css += """
.projects-card__line {
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 1rem 0;
  transition: background 400ms;
}
.projects-card:hover .projects-card__line {
  background: color-mix(in srgb, var(--project-accent) 50%, rgba(255,255,255,0.2));
}
"""

with open('src/styles.css', 'w') as f:
    f.write(css)
    
print("CSS updated for Editorial look.")
