with open("src/styles.css", "r") as f:
    css = f.read()

# Replace the bento grid template to also have row flow
old_rule = """.detail-case__gallery--bento {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 1.2rem !important;
    overflow: visible !important;
    touch-action: auto !important;
    scroll-snap-type: none !important;
    padding-bottom: 0 !important;
}"""

new_rule = """.detail-case__gallery--bento {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    grid-auto-flow: row !important;
    gap: 1.2rem !important;
    overflow: visible !important;
    touch-action: auto !important;
    scroll-snap-type: none !important;
    padding-bottom: 0 !important;
}"""

if old_rule in css:
    css = css.replace(old_rule, new_rule)
    with open("src/styles.css", "w") as f:
        f.write(css)
    print("Fixed grid-auto-flow.")
else:
    print("Could not find the exact old_rule string.")
