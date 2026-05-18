import re

with open('src/styles.css', 'r') as f:
    content = f.read()

# Make sure all wordmark font-sizes have !important
content = re.sub(
    r'@media \(min-width: 480px\) \{\n  \.hero-stage__wordmark \{ font-size: clamp\((.*?)\); \}\n\}',
    r'@media (min-width: 480px) {\n  .hero-stage__wordmark { font-size: clamp(\1) !important; }\n}',
    content
)
content = re.sub(
    r'@media \(min-width: 768px\) \{\n  \.hero-stage__wordmark \{ font-size: clamp\((.*?)\); \}',
    r'@media (min-width: 768px) {\n  .hero-stage__wordmark { font-size: clamp(\1) !important; }',
    content
)
content = re.sub(
    r'@media \(min-width: 1024px\) \{\n  \.hero-stage__wordmark \{ font-size: clamp\((.*?)\); \}',
    r'@media (min-width: 1024px) {\n  .hero-stage__wordmark { font-size: clamp(\1) !important; }',
    content
)

with open('src/styles.css', 'w') as f:
    f.write(content)

