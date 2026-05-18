import re

with open('src/styles.css', 'r') as f:
    content = f.read()

# Remove the old override capping that was setting height to 85rem
content = re.sub(
    r'/\* OVERRIDE FIXED HEIGHT CAPPING \*/\nid.*?\}\n\}',
    '',
    content,
    flags=re.DOTALL
)

# And specifically remove this old block to be safe:
content = re.sub(
    r'/\* OVERRIDE FIXED HEIGHT CAPPING \*/\n\.scene--hero,\n\.hero-stage \{\n  height: max\(100svh, 60rem\) !important;\n  min-height: max\(100svh, 60rem\) !important;\n\}\n@media \(min-width: 1024px\) \{\n  \.scene--hero,\n  \.hero-stage \{\n    height: max\(100svh, 85rem\) !important;\n    min-height: max\(100svh, 85rem\) !important;\n  \}\n\}',
    '',
    content,
    flags=re.DOTALL
)


with open('src/styles.css', 'w') as f:
    f.write(content)

