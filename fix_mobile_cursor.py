import re

with open('src/styles.css', 'r') as f:
    content = f.read()

# remove old mobile cursor fixes
content = re.sub(r'/\* MOBILE CURSOR FIX \*/.*?/\* REMOVE CURSOR ROTATION INHERITED FROM WORDMARK \*/', '/* REMOVE CURSOR ROTATION INHERITED FROM WORDMARK */', content, flags=re.DOTALL)
content = re.sub(r'/\* MOBILE SCALE ADJUSTMENT.*?\*/\n@media \(max-width: \d+px\) \{.*?\}\n', '', content, flags=re.DOTALL)

# Add new elegant mobile scale adjustment 
new_css = """

/* --- MOBILE SPECIFIC FIXES --- */
@media (max-width: 767px) {
  /* Scale down the entire PORTFOLIO + Orb + Cursor group so it doesn't touch the edges */
  .hero-stage__wordmark {
    font-size: clamp(3rem, 10vw, 4.5rem) !important;
  }

  /* Move the Cursor to the bottom right of the second 'O' on mobile */
  .hero-stage__wordmark .hero-stage__cursor {
    right: 0.1em !important;
    top: 1.1em !important;
    transform: rotate(5deg) scale(0.9) !important;
  }
}
"""

content += new_css

with open('src/styles.css', 'w') as f:
    f.write(content)

