import re

pos_css = """
/* FINAL HERO COPY POSITION REFINEMENT */
@media (min-width: 1024px) {
  .hero-stage__copy {
    bottom: 0.5rem !important; /* Moved down from 3rem */
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .hero-stage__copy {
    bottom: 0.5rem !important; /* Moved down from 2rem */
  }
}
"""
with open('src/styles.css', 'a') as f:
    f.write("\n" + pos_css)
