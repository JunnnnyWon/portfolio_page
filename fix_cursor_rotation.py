import re

pos_css = """
/* REMOVE CURSOR ROTATION INHERITED FROM WORDMARK */
.hero-stage__wordmark .hero-stage__cursor {
  transform: rotate(7deg) !important;
}
"""
with open('src/styles.css', 'a') as f:
    f.write("\n" + pos_css)
