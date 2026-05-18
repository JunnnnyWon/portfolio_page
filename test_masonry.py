with open("src/styles.css", "r") as f:
    css = f.read()

new_css = """
.detail-case__gallery-shell--masonry {
    width: 100%;
    min-width: 0;
    overflow: hidden;
    padding-top: 2rem;
    padding-bottom: 6rem; /* Extends bottom so down-parallax doesn't clip */
}

/* Let's remove the huge margin-top and rely entirely on parallax for offset */
.masonry-column--2 {
    margin-top: 0 !important; 
    padding-top: 4rem; /* Padding stretches the column box without pushing it out of bounds */
}
"""

if ".detail-case__gallery-shell--masonry {" in css:
    css = css.replace(""".detail-case__gallery-shell--masonry {
    width: 100%;
    min-width: 0;
    overflow: visible;
    padding-block: 2rem;
}""", """.detail-case__gallery-shell--masonry {
    width: 100%;
    min-width: 0;
    overflow: hidden;
    padding-top: 2rem;
    padding-bottom: 8rem;
}""")

    css = css.replace("""    .masonry-column--2 {
        margin-top: 4rem;
    }""", """    .masonry-column--2 {
        padding-top: 4rem;
    }""")
    
    with open("src/styles.css", "w") as f:
        f.write(css)
    print("Fixed.")
else:
    print("Not found.")
