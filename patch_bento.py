with open("src/styles.css", "r") as f:
    css = f.read()

import re

# Find the critical bento overrides and replace them with a simpler flex/grid layout
# that uses aspect-ratio or natural sizing without `position: absolute` breaking it.
start = css.find("/* Critical Bento Grid Sizing Overrides */")
if start != -1:
    new_css = css[:start] + """/* Critical Bento Grid Sizing Overrides */
.detail-case__gallery--bento {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr)) !important;
    gap: 1.2rem !important;
    align-items: start !important;
}

.detail-case__gallery--bento .detail-media {
    display: block !important;
    height: auto !important;
    box-shadow: none !important;
    border: none !important;
    background: transparent !important;
    padding: 0 !important;
}

.detail-case__gallery--bento .detail-media:first-child {
    grid-column: 1 / -1 !important;
}

.detail-case__gallery--bento .detail-media__frame {
    width: 100% !important;
    height: auto !important;
    position: relative !important;
    border-radius: 0.8rem !important;
    overflow: hidden !important;
    padding-bottom: 0 !important;
    aspect-ratio: auto !important;
}

.detail-case__gallery--bento .detail-media img,
.detail-case__gallery--bento .detail-media video {
    position: relative !important;
    display: block !important;
    width: 100% !important;
    height: auto !important;
    object-fit: contain !important;
    border-radius: 0.8rem !important;
}
"""
    with open("src/styles.css", "w") as f:
        f.write(new_css)
    print("Patched css at the end.")
else:
    print("Could not find the section.")
