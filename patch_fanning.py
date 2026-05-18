import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# Make all preview cards share transition and position baseline
css = re.sub(
    r'\.projects-card__preview\s*{\s*position:\s*absolute;([\s\S]*?)transform-origin:\s*center;\s*}',
    r'.projects-card__preview {\n  position: absolute;\n\g<1>transform-origin: bottom center;\n  transition: transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}',
    css
)

# Remove the old preview positioning and animations
old_block_pattern = r'\.projects-card__preview--one\s*{[\s\S]*?@keyframes\s*projects-card-float-two\s*{[\s\S]*?}\s*}'
new_block = """
.projects-card__preview--one,
.projects-card__preview--two,
.projects-card__preview--three {
  left: 50%;
  top: 1.5rem;
}

.projects-card__preview--one {
  transform: translateX(-50%) rotate(-5deg) translateX(-15%);
  z-index: 1;
}

.projects-card__preview--two {
  width: clamp(6.1rem, 29vw, 8.6rem);
  transform: translateX(-50%) rotate(0deg) translateY(-0.8rem);
  z-index: 3;
}

.projects-card__preview--three {
  transform: translateX(-50%) rotate(5deg) translateX(15%);
  z-index: 2;
}

.projects-card:hover .projects-card__preview--one {
  transform: translateX(-50%) rotate(-14deg) translateX(-110%) translateY(0.5rem);
}

.projects-card:hover .projects-card__preview--two {
  transform: translateX(-50%) rotate(0deg) translateY(-2rem) scale(1.04);
}

.projects-card:hover .projects-card__preview--three {
  transform: translateX(-50%) rotate(14deg) translateX(110%) translateY(0.5rem);
}
"""

css = re.sub(old_block_pattern, new_block.strip() + '\n', css)

with open('src/styles.css', 'w') as f:
    f.write(css)

print("Fanning effect patched.")
