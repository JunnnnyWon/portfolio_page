import re

with open('src/styles.css', 'r') as f:
    content = f.read()

new_stairs_css = """

/* STAIRS OVERLAP ADJUSTMENT FOR TABLET & PC */
@media (min-width: 768px) {
  .hero-stage__stairs {
    /* Push stairs significantly to the right so it overflows similarly to mobile */
    right: -15rem !important; /* Overflow ~240px */
    width: 60rem !important;
  }
}
@media (min-width: 1024px) {
  .hero-stage__stairs {
    right: -24rem !important; /* Push further out on larger screens */
    width: 72rem !important;
  }
}
"""

content += new_stairs_css

with open('src/styles.css', 'w') as f:
    f.write(content)

