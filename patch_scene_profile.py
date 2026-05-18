import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# Replace place-items: center with justify-content: center or nothing since card handles width
css = re.sub(
    r'\.scene--profile\s*{\s*padding:\s*calc\(var\(--nav-height\)\s*\+\s*3\.5rem\)\s*var\(--page-edge\)\s*5rem;\s*display:\s*grid;\s*place-items:\s*center;\s*}',
    r'.scene--profile {\n    padding: calc(var(--nav-height) + 3.5rem) var(--page-edge) 5rem;\n  }',
    css
)

# And make .profile-card take 100% width but max-width constrained
css = re.sub(
    r'\.profile-card\s*{\s*max-width:\s*36rem;\s*gap:\s*2rem;\s*}',
    r'.profile-card {\n    width: 100%;\n    max-width: 42rem;\n    gap: 2rem;\n  }',
    css
)

css = re.sub(
    r'\.profile-card\s*{\s*max-width:\s*40rem;\s*gap:\s*2\.4rem;\s*}',
    r'.profile-card {\n    width: 100%;\n    max-width: 48rem;\n    gap: 2.4rem;\n  }',
    css
)

# Also fix the base .profile-card
css = re.sub(
    r'max-width:\s*24\.5rem;\s*margin-inline:\s*auto;\s*justify-items:\s*start;\s*}',
    r'width: min(100%, 24.5rem);\n  margin-inline: auto;\n}',
    css
)


with open('src/styles.css', 'w') as f:
    f.write(css)

print("Scene profile patched.")
