import re

with open('src/styles.css', 'r') as f:
    content = f.read()

# Fix wordmark PC top
content = re.sub(
    r'@media \(min-width: 1024px\) \{\n  \.hero-stage__wordmark \{\n    top: 19rem !important;.*?\}\n\}',
    r"""/* Unified large screen Wordmark position (Tablet + PC) */
@media (min-width: 768px) {
  .hero-stage__wordmark {
    top: 15rem !important; /* Raised up into the ample space below role text to prevent squishing bottom */
  }
}
@media (min-width: 1024px) {
  .hero-stage__wordmark {
    top: 13rem !important; /* PC is slightly higher */
  }
}""",
    content,
    flags=re.M | re.DOTALL
)

# Fix copy position - bring back down slightly
content = re.sub(
    r'/\* FINAL HERO COPY POSITION REFINEMENT \*/.*?@media \(min-width: 1024px\) \{\n  \.hero-stage__copy \{\n    bottom: 6rem !important;.*?\}\n\}\n@media \(min-width: 768px\) and \(max-width: 1023px\) \{\n  \.hero-stage__copy \{\n    bottom: 4\.5rem !important;.*?\}\n\}',
    r"""/* FINAL HERO COPY POSITION REFINEMENT */
@media (min-width: 1024px) {
  .hero-stage__copy {
    bottom: 4rem !important; /* Balanced */
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .hero-stage__copy {
    bottom: 3.5rem !important; /* Balanced */
  }
}""",
    content,
    flags=re.M | re.DOTALL
)

with open('src/styles.css', 'w') as f:
    f.write(content)

