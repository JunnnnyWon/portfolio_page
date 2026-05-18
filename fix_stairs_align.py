import re

with open('src/styles.css', 'r') as f:
    content = f.read()

# Replace the previous block we just appended
content = re.sub(r'/\* STAIRS OVERLAP ADJUSTMENT FOR TABLET & PC \*/.*', '', content, flags=re.DOTALL)

new_stairs_css = """
/* STAIRS OVERLAP ADJUSTMENT FOR TABLET & PC (Like Mobile) */
@media (min-width: 768px) {
  .hero-stage__stairs {
    /* Push stairs so it hugs the right wall perfectly and overflows slightly off screen, like it does in mobile */
    right: -10vw !important; 
    width: 65rem !important; /* Scale it so it maintains the proportion */
  }
}

@media (min-width: 1024px) {
  .hero-stage__stairs {
    right: -8vw !important; 
    width: 75rem !important; 
  }
}
@media (min-width: 1440px) {
  .hero-stage__stairs {
    right: -6vw !important;
    width: 85rem !important;
  }
}
"""

content += new_stairs_css

with open('src/styles.css', 'w') as f:
    f.write(content)

