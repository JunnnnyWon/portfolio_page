import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# Make sure height itself isn't capping what min-height does.
# If height: 100svh is set, let's override height as well.

pos_css = """
/* OVERRIDE FIXED HEIGHT CAPPING */
.scene--hero,
.hero-stage {
  height: max(100svh, 60rem) !important;
  min-height: max(100svh, 60rem) !important;
}
@media (min-width: 1024px) {
  .scene--hero,
  .hero-stage {
    height: max(100svh, 85rem) !important;
    min-height: max(100svh, 85rem) !important;
  }
}
"""
with open('src/styles.css', 'a') as f:
    f.write("\n" + pos_css)
