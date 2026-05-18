import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# Remove the weird compensation transform we added and replace it with a cleaner scaling rule
css = re.sub(
    r'/\* VISUAL CENTERING FOR MOBILE \([^)]+\) \*/\s*@media \(max-width: 767px\) \{\s*\.hero-stage__wordmark \{\s*transform: translateX\(calc\(-50% - 0\.4em\)\) rotate\(-7deg\) !important;\s*\}\s*\}',
    r'''/* MOBILE SCALE ADJUSTMENT (ensure wordmark + cursor fits on strictly small screens without overflowing) */
@media (max-width: 480px) {
  .hero-stage__wordmark {
    font-size: clamp(4.8rem, 13vw, 6.45rem) !important;
    transform: translateX(-50%) rotate(-7deg) !important;
  }
}''',
    css,
    flags=re.DOTALL
)

with open('src/styles.css', 'w') as f:
    f.write(css)

print("Removed weird offset and scaled wordmark slightly down for mobile.")
