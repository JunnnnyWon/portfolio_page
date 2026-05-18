import re

with open('src/styles.css', 'r') as f:
    content = f.read()

content = re.sub(
    r'@media \(min-width: 1024px\) \{\n  \.scene--hero,\n  \.hero-stage \{\n    min-height: max\(100svh, 75rem\) !important;\n  \}\n\}',
    r"""@media (min-width: 1024px) {
  .scene--hero,
  .hero-stage {
    min-height: max(100svh, 60rem) !important; /* Reduced from 75rem so it fits on 1080p/900p monitors without scrolling */
  }
}""",
    content,
    flags=re.M | re.DOTALL
)

with open('src/styles.css', 'w') as f:
    f.write(content)

