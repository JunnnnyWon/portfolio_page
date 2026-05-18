import re

with open('src/styles.css', 'r') as f:
    content = f.read()

content = re.sub(
    r'@media \(min-width: 1024px\) \{\n  \.scene--hero,\n  \.hero-stage \{\n    min-height: max\(100svh, 60rem\) !important;.*?\}\n\}',
    r"""@media (min-width: 1024px) {
  .scene--hero,
  .hero-stage {
    min-height: max(100svh, 54rem) !important; /* Perfect height to fit one page comfortably */
  }
}""",
    content,
    flags=re.M | re.DOTALL
)

with open('src/styles.css', 'w') as f:
    f.write(content)

