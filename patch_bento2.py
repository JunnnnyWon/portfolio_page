with open("src/styles.css", "r") as f:
    css = f.read()

import re

# Remove the first Bento Collage block
css = re.sub(r'/\* Bento Collage Grid for Gallery \*/.*?/\* Adjust gallery header for Bento \*/', '/* Adjust gallery header for Bento */', css, flags=re.DOTALL)

# Replace the Critical Bento Grid block at the end again
start = css.find("/* Critical Bento Grid Sizing Overrides */")
if start != -1:
    css = css[:start]

new_bento = """/* Bento Collage Grid for Gallery */
.detail-case__gallery--bento {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 1.2rem !important;
    overflow: visible !important;
    touch-action: auto !important;
    scroll-snap-type: none !important;
    padding-bottom: 0 !important;
}

.detail-case__gallery--bento .detail-media {
    flex: unset !important;
    display: flex !important;
    flex-direction: column !important;
    width: 100% !important;
    height: auto !important;
    scroll-snap-align: none !important;
    box-shadow: none !important;
    border: none !important;
    background: transparent !important;
    padding: 0 !important;
    gap: 0.8rem !important;
}

/* 1st image spans full width, others take 1 column */
.detail-case__gallery--bento .detail-media:first-child {
    grid-column: 1 / -1 !important;
}

.detail-case__gallery--bento .detail-media__frame {
    width: 100% !important;
    height: auto !important;
    position: relative !important;
    border-radius: 0.8rem !important;
    overflow: hidden !important;
}

.detail-case__gallery--bento .detail-media img,
.detail-case__gallery--bento .detail-media video {
    position: relative !important;
    display: block !important;
    width: 100% !important;
    height: auto !important;
    object-fit: contain !important;
    border-radius: 0.8rem !important;
    background: rgba(0,0,0,0.2) !important;
}
"""

with open("src/styles.css", "w") as f:
    f.write(css + "\n" + new_bento)

print("Applied fix.")
