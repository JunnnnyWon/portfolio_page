import re

with open('src/styles.css', 'r') as f:
    css = f.read()

pos_css = """
/* VISUAL CENTERING FOR MOBILE (compensate for the cursor sticking out) */
@media (max-width: 767px) {
  .hero-stage__wordmark {
    transform: translateX(calc(-50% - 0.4em)) rotate(-7deg) !important;
  }
}
"""

with open('src/styles.css', 'a') as f:
    f.write("\n" + pos_css)
