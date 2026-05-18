masonry_css = """
/* Parallax Masonry Grid */
.detail-case__gallery-shell--masonry {
    width: 100%;
    min-width: 0;
    overflow: visible; /* Prevents clipping! */
    padding-top: 2rem;
    padding-bottom: 8rem;
}

.detail-case__gallery--masonry-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.4rem;
    align-items: start;
    overflow: visible;
}

.masonry-column {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
}

@media (min-width: 768px) {
    .detail-case__gallery--masonry-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1.2rem;
    }
    .masonry-column {
        gap: 2rem;
    }
    .masonry-column--2 {
        padding-top: 4rem; /* Use padding instead of margin for bounding rect */
    }
}

.masonry-item {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 100%;
    margin: 0; /* Reset figure margins */
}

.masonry-item .detail-media__frame {
    width: 100% !important;
    position: relative !important;
    border-radius: 0.8rem !important;
    overflow: hidden !important;
    background: rgba(0,0,0,0.5) !important;
    height: auto !important;
    aspect-ratio: auto !important;
}

.masonry-item img,
.masonry-item video {
    display: block !important;
    position: relative !important;
    width: 100% !important;
    height: auto !important;
    object-fit: contain !important;
    border-radius: 0.8rem !important;
}

.masonry-item figcaption {
    font-size: 0.8rem;
    line-height: 1.62;
    color: rgba(233, 237, 255, 0.7);
    margin: 0;
}
"""

with open("src/styles.css", "a") as f:
    f.write("\n" + masonry_css)

print("Masonry CSS rebuilt.")
