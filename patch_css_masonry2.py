with open("src/styles.css", "r") as f:
    css = f.read()

# Make it 1 column on mobile, 2 columns on larger screens
old_css = """.detail-case__gallery--masonry-grid {
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
}"""

new_css = """.detail-case__gallery--masonry-grid {
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
        margin-top: 4rem;
    }
}
"""

if old_css in css:
    css = css.replace(old_css, new_css)
    with open("src/styles.css", "w") as f:
        f.write(css)
    print("Fixed media query.")
else:
    print("Could not find the exact old_rule string.")
    
# Update to use a stronger parallax
with open("src/components/ProjectDetailPage.tsx", "r") as f:
    tsx = f.read()

old_y2 = "const y2 = useTransform(scrollYProgress, [0, 1], [40, -40]);"
new_y2 = "const y2 = useTransform(scrollYProgress, [0, 1], [60, -60]);"
tsx = tsx.replace(old_y2, new_y2)

with open("src/components/ProjectDetailPage.tsx", "w") as f:
    f.write(tsx)

