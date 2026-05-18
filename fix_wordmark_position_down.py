import re

with open('src/styles.css', 'r') as f:
    content = f.read()

content = re.sub(
    r'/\* Unified large screen Wordmark position \(Tablet \+ PC\) \*/\n@media \(min-width: 768px\) \{\n  \.hero-stage__wordmark \{\n    top: 15rem !important; /\* Raised up.*?\*/\n  \}\n\}\n@media \(min-width: 1024px\) \{\n  \.hero-stage__wordmark \{\n    top: 13rem !important; /\* PC is slightly higher \*/\n  \}\n\}',
    r"""/* Unified large screen Wordmark position (Tablet + PC) */
@media (min-width: 768px) {
  .hero-stage__wordmark {
    top: 18rem !important; /* Moved down for better centering on tablet */
  }
}
@media (min-width: 1024px) {
  .hero-stage__wordmark {
    top: 16rem !important; /* Moved down for better centering on PC */
  }
}""",
    content,
    flags=re.M | re.DOTALL
)

with open('src/styles.css', 'w') as f:
    f.write(content)

