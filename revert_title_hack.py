with open("src/styles.css", "r") as f:
    css = f.read()

# remove keeping-all for title h1 specifically since it's now flex
css += """
.detail-case__title-row h3 {
  word-break: break-word !important; 
}
"""

with open("src/styles.css", "w") as f:
    f.write(css)

