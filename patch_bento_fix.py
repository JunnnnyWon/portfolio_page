import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# Replace the bento grid CSS to fix the layout completely
old_bento = r"/\* Bento Collage Grid for Gallery \*/.*?/\* Adjust gallery header for Bento \*/"
new_bento = """/* Bento Collage Grid for Gallery */
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
    height: 100% !important;
    scroll-snap-align: none !important;
    box-shadow: 
      inset 0 1px 0 rgba(255, 255, 255, 0.08),
      0 12px 24px rgba(0, 0, 0, 0.3) !important;
    gap: 0.8rem !important;
}

/* 1st image spans full width, others take 1 column */
.detail-case__gallery--bento .detail-media:first-child {
    grid-column: 1 / -1;
}

.detail-case__gallery--bento .detail-media__frame {
    width: 100%;
    position: relative;
    border-radius: 0.8rem;
    overflow: hidden;
    background: rgba(0,0,0,0.5);
}

.detail-case__gallery--bento .detail-media:first-child .detail-media__frame {
    aspect-ratio: 16 / 9;
}

.detail-case__gallery--bento .detail-media:not(:first-child) .detail-media__frame {
    aspect-ratio: 4 / 3;
}

.detail-case__gallery--bento .detail-media img,
.detail-case__gallery--bento .detail-media video {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    border-radius: 0 !important; /* Managed by parent frame */
}

/* Adjust gallery header for Bento */"""

css = re.sub(old_bento, new_bento, css, flags=re.DOTALL)

with open('src/styles.css', 'w') as f:
    f.write(css)

print("Bento CSS fixed")
