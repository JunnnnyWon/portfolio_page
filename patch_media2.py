import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# Make sure figcaption goes full width too
css = css.replace('width: var(--detail-gallery-media-width, 15.5rem);', 'width: 100%;')

with open('src/styles.css', 'w') as f:
    f.write(css)

