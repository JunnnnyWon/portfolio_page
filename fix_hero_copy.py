import re

with open('src/styles.css', 'r') as f:
    content = f.read()

# Look for the PC root override
content = re.sub(
    r'/\* FINAL HERO COPY POSITION REFINEMENT \*/.*?@media \(min-width: 1024px\) \{\n  \.hero-stage__copy \{\n    bottom: -2rem !important; /\* Moved down from 3rem \*/\n  \}\n\}\n@media \(min-width: 768px\) and \(max-width: 1023px\) \{\n  \.hero-stage__copy \{\n    bottom: -2rem !important; /\* Moved down from 2rem \*/\n  \}\n\}',
    r"""/* FINAL HERO COPY POSITION REFINEMENT */
@media (min-width: 1024px) {
  .hero-stage__copy {
    bottom: 3rem !important; /* Moved back up from -2rem */
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .hero-stage__copy {
    bottom: 2rem !important; /* Moved back up from -2rem */
  }
}""",
    content,
    flags=re.DOTALL
)

with open('src/styles.css', 'w') as f:
    f.write(content)

