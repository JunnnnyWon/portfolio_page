import re

with open('src/styles.css', 'r') as f:
    content = f.read()

content = re.sub(r'/\* STAIRS OVERLAP ADJUSTMENT FOR TABLET & PC \(Like Mobile\) \*/.*', '', content, flags=re.DOTALL)

new_stairs_css = """
/* STAIRS OVERLAP ADJUSTMENT FOR TABLET & PC (Like Mobile) */
@media (min-width: 768px) {
  .hero-stage__stairs {
    right: -15rem !important; /* Force more overlap */
    width: 55rem !important; 
  }
}

@media (min-width: 1024px) {
  .hero-stage__stairs {
    right: -25rem !important; /* Substantial overlap to match mobile proportion */
    width: 65rem !important; 
  }
}
@media (min-width: 1440px) {
  .hero-stage__stairs {
    right: -30rem !important; /* Aggressive push outward */
    width: 75rem !important;
  }
}
"""

content += new_stairs_css

with open('src/styles.css', 'w') as f:
    f.write(content)

