import re

with open('src/styles.css', 'r') as f:
    content = f.read()

old_block = r"/\* --- MOBILE SPECIFIC FIXES --- \*/.*?@media \(max-width: 767px\) \{.*?\n\}"

new_block = """/* --- MOBILE SPECIFIC FIXES --- */
@media (max-width: 767px) {
  /* Scale down the entire PORTFOLIO + Orb + Cursor group so it doesn't touch the edges */
  .hero-stage__wordmark {
    font-size: clamp(5rem, 16vw, 7.5rem) !important;
  }

  /* Move the Cursor to the bottom right of the second 'O' on mobile */
  .hero-stage__wordmark .hero-stage__cursor {
    right: -0.3em !important;
    top: 1.35em !important;
    transform: rotate(7deg) scale(0.9) !important;
  }
}"""

content = re.sub(old_block, new_block, content, flags=re.DOTALL)

with open('src/styles.css', 'w') as f:
    f.write(content)

