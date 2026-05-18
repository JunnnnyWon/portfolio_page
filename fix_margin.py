import re
with open('src/styles.css', 'r') as f:
    css = f.read()
css = css.replace('.projects-card__body {\n  margin-top: auto;\n  padding-top: 4rem;\n}', '.projects-card__body {\n  margin-top: auto;\n}')
with open('src/styles.css', 'w') as f:
    f.write(css)
