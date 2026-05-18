import re
with open('src/styles.css', 'r') as f:
    text = f.read()

# 1. Broaden the detail-shell max-width at 1024px
text = re.sub(
    r'(\.detail-shell\s*\{\s*max-width:\s*)62rem(;)',
    r'\1 84rem\2',
    text
)

# 2. Change the 3 instances of detail-case inside @media (min-width: 1024px)
# from:
#     grid-template-columns: 1.2fr 1.8fr; /* Split layout for Spatial UI */
#     align-items: center;
# to:
#     grid-template-columns: 1fr 2fr;
#     align-items: start;

text = re.sub(
    r'(grid-template-columns:\s*)1\.2fr\s+1\.8fr(;\s*/\* Split layout[^\n]*\n\s*align-items:\s*)center(;)',
    r'\1 1fr 2fr\2start\3',
    text
)

# 3. Make the detail-case__info sticky at 1024px.
# We can just define it at the bottom of the file
text += "\n\n/* Desktop Sticky Text Fix */\n@media (min-width: 1024px) {\n  .detail-case__info {\n    position: sticky;\n    top: 8rem;\n  }\n}\n"

with open('src/styles.css', 'w') as f:
    f.write(text)

