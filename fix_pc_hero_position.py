import re

with open('src/styles.css', 'r') as f:
    content = f.read()

# Look for the PC root override
content = re.sub(
    r'@media \(min-width: 1024px\) \{\n  \.hero-stage__wordmark \{\n    top: 12rem !important; /\* Moved significantly higher up from 18rem \*/\n  \}\n\}',
    r"""@media (min-width: 1024px) {
  .hero-stage__wordmark {
    top: 19rem !important; /* Moved back down to prevent overlapping the text above */
  }
}""",
    content,
    flags=re.M
)

with open('src/styles.css', 'w') as f:
    f.write(content)

