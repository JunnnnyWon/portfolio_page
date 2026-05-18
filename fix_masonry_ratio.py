with open("src/styles.css", "r") as f:
    css = f.read()

masonry_fix = """
/* Fix forced aspect ratios from global classes */
.masonry-item .detail-media__frame {
    aspect-ratio: auto !important;
    height: auto !important;
}

.masonry-item img,
.masonry-item video {
    position: relative !important; /* Remove absolute if it was set */
    height: auto !important;
    object-fit: contain !important;
}
"""

with open("src/styles.css", "a") as f:
    f.write("\n" + masonry_fix)
print("done ratio fix")
