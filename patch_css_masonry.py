with open("src/styles.css", "r") as f:
    css = f.read()

masonry_css = """
/* Parallax Masonry Grid */
.detail-case__gallery-shell--masonry {
    width: 100%;
    min-width: 0;
    overflow: hidden; /* prevents parallax items from expanding window */
    padding-block: 2rem;
}

.detail-case__gallery--masonry-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.2rem;
    align-items: start;
    overflow: visible;
}

.masonry-column {
    display: flex;
    flex-direction: column;
    gap: 2rem; /* bigger vertical gap */
}

/* Offset the second column initially if desired, or let parallax do its job */
.masonry-column--2 {
    margin-top: 4rem; /* Initial stagger */
}

.masonry-item {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 100%;
}

.masonry-item .detail-media__frame {
    width: 100%;
    position: relative;
    border-radius: 0.8rem;
    overflow: hidden;
    background: rgba(0,0,0,0.5);
    /* natural height! */
    height: auto;
}

.masonry-item img,
.masonry-item video {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 0.8rem;
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
print("done css")
