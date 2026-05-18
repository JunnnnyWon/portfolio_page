import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# 1. Update the base styles for profile-card__heading to match career
css = re.sub(
    r'\.profile-card__heading\s*{[^}]+}',
    r'.profile-card__heading {\n  position: relative;\n  padding-bottom: 0.2rem;\n}',
    css
)

css = re.sub(
    r'\.profile-card__heading\s*span\s*{[^}]+}',
    r'.profile-card__heading span {\n  display: block;\n  margin-bottom: -0.35rem;\n  font-size: clamp(1.5rem, 7vw, 2.2rem);\n  font-weight: 900;\n  color: rgba(255, 255, 255, 0.38);\n  filter: blur(0.9px);\n}',
    css
)

css = re.sub(
    r'\.profile-card__heading\s*h2\s*{[^}]+}',
    r'.profile-card__heading h2 {\n  margin: 0;\n  font-size: clamp(2rem, 9vw, 2.75rem);\n  font-weight: 900;\n  letter-spacing: -0.08em;\n}',
    css
)

# 2. Remove min-width 1024px overrides 
css = re.sub(
    r'@media\s*\(min-width:\s*1024px\)\s*{[\s\S]*?\.profile-card__heading\s*h2\s*{[^}]+}[\s\S]*?}',
    lambda m: re.sub(r'\.profile-card__heading\s*span\s*{[^}]+}', r'.profile-card__heading span {\n    font-size: clamp(1.8rem, 4vw, 2.6rem);\n  }', re.sub(r'\.profile-card__heading\s*h2\s*{[^}]+}', r'.profile-card__heading h2 {\n    font-size: clamp(2.4rem, 5vw, 3.2rem);\n  }', m.group(0))),
    css
)

# 3. Remove min-width 1280px overrides
css = re.sub(
    r'@media\s*\(min-width:\s*1280px\)\s*{[\s\S]*?\.profile-card__heading\s*h2\s*{[^}]+}[\s\S]*?}',
    lambda m: re.sub(r'\.profile-card__heading\s*span\s*{[^}]+}', r'.profile-card__heading span {\n    font-size: clamp(2rem, 3.5vw, 2.8rem);\n  }', re.sub(r'\.profile-card__heading\s*h2\s*{[^}]+}', r'.profile-card__heading h2 {\n    font-size: clamp(2.6rem, 4.5vw, 3.6rem);\n  }', m.group(0))),
    css
)


with open('src/styles.css', 'w') as f:
    f.write(css)

print("Profile heading patched.")
