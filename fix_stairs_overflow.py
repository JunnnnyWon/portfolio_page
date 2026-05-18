import re

with open('src/styles.css', 'r') as f:
    css = f.read()

pos_css = """
/* PREVENT STAIRS FROM CAUSING HORIZONTAL SCROLL AND BREAKING MEDIA QUERIES */
.hero-stage {
  overflow: hidden !important;
}
.app-shell, .app-stage {
  overflow-x: hidden;
  width: 100%;
}
"""

with open('src/styles.css', 'a') as f:
    f.write("\n" + pos_css)

