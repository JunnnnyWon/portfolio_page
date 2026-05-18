import re
with open('src/styles.css', 'r') as f:
    css = f.read()

# Base
css = re.sub(
    r'\.projects-wall-shell\s*{\s*position:\s*relative;\s*z-index:\s*2;\s*margin-top:\s*-5\.2rem;\s*padding-top:\s*4\.4rem;\s*}',
    r'.projects-wall-shell {\n  position: relative;\n  z-index: 2;\n  margin-top: 1rem;\n}',
    css
)
# Note: I'll just use a general script to remove margin-top: -X; padding-top: Y; on projects-wall-shell
css = re.sub(r'margin-top:\s*-[0-9.]+rem;\s*padding-top:\s*[0-9.]+rem;', 'margin-top: 1rem;', css)

with open('src/styles.css', 'w') as f:
    f.write(css)

print("Margins patched.")
