import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# Make the frame explicitly shape the image
fix = """
/* Critical Bento Grid Sizing Overrides */
.detail-case__gallery--bento {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 1.2rem !important;
}

.detail-case__gallery--bento .detail-media {
    display: block !important;
    height: auto !important;
    box-shadow: none !important;
    border: none !important;
    background: transparent !important;
    padding: 0 !important;
}

.detail-case__gallery--bento .detail-media__frame {
    width: 100% !important;
    padding-bottom: 56.25% !important; /* 16:9 fallback */
    height: 0 !important;
    position: relative !important;
    border-radius: 0.8rem !important;
    overflow: hidden !important;
}

.detail-case__gallery--bento .detail-media:first-child .detail-media__frame {
    padding-bottom: 56.25% !important; /* 16:9 */
}

.detail-case__gallery--bento .detail-media:not(:first-child) .detail-media__frame {
    padding-bottom: 75% !important; /* 4:3 */
}

.detail-case__gallery--bento .detail-media img,
.detail-case__gallery--bento .detail-media video {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    border-radius: 0.8rem !important;
}
"""

css += fix

with open('src/styles.css', 'w') as f:
    f.write(css)
