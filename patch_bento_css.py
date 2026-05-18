import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# Add Bento Grid styles at the end
bento_css = """
/* Bento Collage Grid for Gallery */
.detail-case__gallery--bento {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 1.2rem;
    overflow: visible !important;
    touch-action: auto !important;
    scroll-snap-type: none !important;
    padding-bottom: 0 !important;
}

.detail-case__gallery--bento .detail-media {
    flex: unset !important;
    display: flex;
    flex-direction: column;
    width: 100% !important;
    scroll-snap-align: none !important;
    box-shadow: 
      inset 0 1px 0 rgba(255, 255, 255, 0.08),
      0 12px 24px rgba(0, 0, 0, 0.3) !important;
}

/* 1st image spans full width, others take 1 column */
.detail-case__gallery--bento .detail-media:first-child {
    grid-column: 1 / -1;
}

.detail-case__gallery--bento .detail-media:first-child .detail-media__frame {
    aspect-ratio: 16 / 9;
}

.detail-case__gallery--bento .detail-media:not(:first-child) .detail-media__frame {
    aspect-ratio: 4 / 3;
}

.detail-case__gallery--bento .detail-media__frame {
    width: 100%;
    height: auto;
    position: relative;
    border-radius: 0.8rem;
    overflow: hidden;
}

.detail-case__gallery--bento .detail-media img,
.detail-case__gallery--bento .detail-media video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover !important;
}

/* Adjust gallery header for Bento */
.detail-case__gallery-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 1.2rem;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.detail-case__gallery-header span {
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.9);
}

.detail-case__gallery-header small {
    font-size: 0.75rem;
    color: color-mix(in srgb, var(--detail-accent) 60%, rgba(255,255,255,0.4));
}
"""

css += bento_css

with open('src/styles.css', 'w') as f:
    f.write(css)

print("CSS Patched")
