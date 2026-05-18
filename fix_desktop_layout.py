import re
with open('src/styles.css', 'r') as f:
    css = f.read()

desktop_css = """
/* Desktop Detail Page Layout Enhancements */
@media (min-width: 1024px) {
  .detail-case { 
    grid-template-columns: 1fr 2fr !important;
    align-items: start !important;
  }
}
"""

with open('src/styles.css', 'a') as f:
    f.write("\n" + desktop_css)

