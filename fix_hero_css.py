import re
with open('src/styles.css', 'r') as f:
    css = f.read()

# We need to change the wordmark block:
# It's currently:
# .hero-stage__wordmark {
#   top: 22.35rem; ...
# }
# We want it to just have the clamp on itself, and relative positioning.
# Wait, actually, let's just make the .hero-stage__wordmark absolute 
# and use its font-size property with clamp!
# Then the children are relative (em).
