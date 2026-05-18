import re

with open('src/styles.css', 'r') as f:
    content = f.read()

# Fix 768px
content = re.sub(
    r'(\.hero-stage__role {\n\s*top: 9rem;\n\s*right: 3rem;\n\s*font-size: clamp\(2\.4rem, 4\.5vw, 3\.6rem\);\n\s*})',
    r'.hero-stage__role {\n    top: 9rem;\n    left: 3rem;\n    right: 3rem;\n    font-size: clamp(2.2rem, 4vw, 3.2rem); /* Size reduced */\n  }',
    content
)

# Fix 1024px
content = re.sub(
    r'(\.hero-stage__role {\n\s*top: 9\.5rem;\n\s*right: 4rem;\n\s*font-size: clamp\(2\.8rem, 4vw, 4rem\);\n\s*})',
    r'.hero-stage__role {\n    top: 9.5rem;\n    left: 4rem;\n    right: 4rem;\n    font-size: clamp(2.4rem, 3.5vw, 3.4rem); /* Size reduced and aligned to left: 4rem */\n  }',
    content
)

with open('src/styles.css', 'w') as f:
    f.write(content)

