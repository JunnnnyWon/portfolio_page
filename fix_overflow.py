import re

with open('src/styles.css', 'r') as f:
    css = f.read()

pos_css = """
/* PREVENT HORIZONTAL OVERFLOW GLOBALLY */
html, body {
  overflow-x: hidden;
}
"""

with open('src/styles.css', 'a') as f:
    f.write("\n" + pos_css)

