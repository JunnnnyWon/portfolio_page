import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# Make the gallery shell and frame more responsive
css += """
.detail-case__media-window {
    width: 100%;
    min-width: 0; 
}
.detail-case__gallery-shell {
    width: 100%;
    min-width: 0;
}
.detail-case__gallery {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 1rem;
    padding-bottom: 1rem;
    min-width: 0;
}
.detail-media {
    flex: 0 0 100%;
    scroll-snap-align: start;
    width: 100%;
}
.detail-media__frame {
    aspect-ratio: 16 / 9;
    width: 100%;
    height: auto;
}
.detail-media img,
.detail-media video {
    width: 100%;
    height: 100%;
    object-fit: cover !important; 
    border-radius: 0.8rem;
}
"""

with open('src/styles.css', 'w') as f:
    f.write(css)
