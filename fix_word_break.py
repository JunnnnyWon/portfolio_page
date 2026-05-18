with open('src/styles.css', 'r') as f:
    c = f.read()

c += "\n/* Ensure clean Korean word breaks */\n.detail-case * { word-break: keep-all !important; overflow-wrap: break-word; }\n"

with open('src/styles.css', 'w') as f:
    f.write(c)
