import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# Fix rewards-card frame sizing
global_fix = """
/* Global Image Fixes */
.rewards-card__frame {
    width: 100%;
    position: relative;
    aspect-ratio: 16 / 9;
    border-radius: 0.8rem;
    overflow: hidden;
    background: rgba(0,0,0,0.5);
}

.rewards-card--featured .rewards-card__frame {
    aspect-ratio: 16 / 9 !important;
}

.rewards-card__frame img,
.rewards-card__frame video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0;
}
"""

css += global_fix

with open('src/styles.css', 'w') as f:
    f.write(css)

print("Global image fix applied")
