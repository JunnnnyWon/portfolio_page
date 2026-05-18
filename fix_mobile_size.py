import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# Replace the mobile scale adjustment block
css = re.sub(
    r'/\* MOBILE SCALE ADJUSTMENT.*?@media \(max-width: 480px\) \{\s*\.hero-stage__wordmark \{\s*font-size: clamp\([^)]+\) !important;\s*transform: translateX\(-50%\) rotate\(-7deg\) !important;\s*\}\s*\}',
    r'''/* MOBILE SCALE ADJUSTMENT (ensure wordmark + cursor fits on strictly small screens without overflowing) */
@media (max-width: 480px) {
  .hero-stage__wordmark {
    font-size: clamp(3.5rem, 10.5vw, 5rem) !important;
    transform: translateX(-50%) rotate(-7deg) !important;
  }
}''',
    css,
    flags=re.DOTALL
)

with open('src/styles.css', 'w') as f:
    f.write(css)

print("Scaled down mobile wordmark size.")
