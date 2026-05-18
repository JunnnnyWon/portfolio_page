import re

with open('src/styles.css', 'r') as f:
    content = f.read()

content = re.sub(r'/\* STAIRS OVERLAP ADJUSTMENT FOR TABLET & PC \(Like Mobile\) \*/.*', '', content, flags=re.DOTALL)

new_stairs_css = """
/* STAIRS OVERLAP ADJUSTMENT FOR TABLET & PC (Like Mobile) */
@media (min-width: 768px) {
  .hero-stage__stairs {
    right: -22rem !important; /* Force more overlap for tablet */
    width: 55rem !important; 
  }
}

@media (min-width: 1024px) {
  .hero-stage__stairs {
    right: -25rem !important; 
    top: -5rem !important; /* Pull stairs up on desktop */
    width: 65rem !important; 
  }
}
@media (min-width: 1440px) {
  .hero-stage__stairs {
    right: -30rem !important; 
    top: -10rem !important; /* Pull stairs up more on large desktop */
    width: 75rem !important;
  }
}
"""

content += new_stairs_css

with open('src/styles.css', 'w') as f:
    f.write(content)

