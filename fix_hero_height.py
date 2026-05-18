import re

pos_css = """
/* FINAL HERO HEIGHT REFINEMENT */
.scene--hero,
.hero-stage {
  min-height: max(100svh, 65rem) !important;
}
@media (min-width: 1024px) {
  .scene--hero,
  .hero-stage {
    min-height: max(100svh, 75rem) !important;
  }
}
"""
with open('src/styles.css', 'a') as f:
    f.write("\n" + pos_css)
