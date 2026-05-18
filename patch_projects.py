import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# 1. Update the base styles for projects header to match career
css = re.sub(
    r'\.projects-stage__header-title\s*{[^}]+}',
    r'.projects-stage__header-title {\n  position: relative;\n  padding-bottom: 0.2rem;\n}',
    css
)

css = re.sub(
    r'\.projects-stage__backdrop\s*{[^}]+}',
    r'.projects-stage__backdrop {\n  display: block;\n  margin-bottom: -0.35rem;\n  font-size: clamp(1.5rem, 7vw, 2.2rem);\n  font-weight: 900;\n  color: rgba(255, 255, 255, 0.38);\n  filter: blur(0.9px);\n}',
    css
)

css = re.sub(
    r'\.projects-stage__header\s*h2\s*{[^}]+}',
    r'.projects-stage__header h2 {\n  margin: 0;\n  font-size: clamp(2rem, 9vw, 2.75rem);\n  font-weight: 900;\n  letter-spacing: -0.08em;\n}',
    css
)

# Also update the base projects-stage__header to flex column, left aligned
css = re.sub(
    r'\.projects-stage__header\s*{\s*position:\s*relative;\s*z-index:\s*0;\s*display:\s*grid;\s*gap:\s*0\.72rem;\s*padding-top:\s*0\.35rem;\s*}',
    r'.projects-stage__header {\n  position: relative;\n  z-index: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.72rem;\n  align-items: flex-start;\n}',
    css
)

# 2. Remove min-width 768px overrides that center the header
css = re.sub(
    r'\.projects-stage__header\s*{\s*justify-items:\s*center;\s*width:\s*100%;\s*text-align:\s*center;\s*}',
    r'.projects-stage__header {\n  width: 100%;\n}',
    css
)

css = re.sub(r'\.projects-stage__header-title\s*{\s*position:\s*relative;\s*width:\s*100%;\s*display:\s*grid;\s*justify-items:\s*center;\s*overflow:\s*visible;\s*}', '', css)

css = re.sub(
    r'\.projects-stage__backdrop\s*{\s*position:\s*absolute;\s*left:\s*50%;\s*top:\s*0;\s*width:\s*max-content;\s*transform:\s*translateX\(-50%\)[^}]+}',
    '',
    css
)

css = re.sub(
    r'\.projects-stage__header\s*h2\s*{\s*max-width:\s*none;\s*margin-inline:\s*auto;\s*margin-top:\s*-0\.35rem;\s*font-size:\s*clamp\(3\.4rem,\s*6vw,\s*4\.8rem\);\s*}',
    r'.projects-stage__header h2 {\n  font-size: clamp(2.4rem, 5vw, 3.2rem);\n}',
    css
)

css = re.sub(
    r'\.projects-stage__header\s*p\s*{\s*max-width:\s*30rem;\s*margin-inline:\s*auto;\s*font-size:\s*1rem;\s*}',
    r'.projects-stage__header p {\n  max-width: 30rem;\n  font-size: 1rem;\n}',
    css
)

# 3. Remove overrides in showcase and stack
blocks_to_remove = [
    r'\.projects-stage--(showcase|stack)\s*\.projects-stage__header-title\s*{[^}]+}',
    r'\.projects-stage--(showcase|stack)\s*\.projects-stage__backdrop\s*{[^}]+}',
    r'\.projects-stage--(showcase|stack)\s*\.projects-stage__header\s*h2\s*{[^}]+}'
]
for block in blocks_to_remove:
    css = re.sub(block, '', css)

# 4. Remove max-height and larger screen overrides
css = re.sub(
    r'@media\s*\(min-width:\s*1024px\)\s*{[\s\S]*?\.projects-stage__header\s*h2\s*{[^}]+}[\s\S]*?}',
    lambda m: re.sub(r'\.projects-stage__backdrop\s*{[^}]+}', r'.projects-stage__backdrop {\n    font-size: clamp(2rem, 3.5vw, 2.8rem);\n  }', re.sub(r'\.projects-stage__header\s*h2\s*{[^}]+}', r'.projects-stage__header h2 {\n    font-size: clamp(2.6rem, 4.5vw, 3.6rem);\n  }', m.group(0))),
    css
)

with open('src/styles.css', 'w') as f:
    f.write(css)

print("Styles patched.")
