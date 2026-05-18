import re

with open('src/styles.css', 'r') as f:
    css = f.read()

css = re.sub(
    r'\.profile-card__subcopy\s*{\s*margin-top:\s*0\.45rem;\s*max-width:\s*20rem;\s*margin-inline:\s*auto;\s*font-size:\s*0\.95rem;\s*line-height:\s*1\.62;\s*color:\s*rgba\(255,\s*255,\s*255,\s*0\.72\);\s*}',
    r'.profile-card__subcopy {\n  margin-top: 0.45rem;\n  max-width: 20rem;\n  font-size: 0.95rem;\n  line-height: 1.62;\n  color: rgba(255, 255, 255, 0.72);\n}',
    css
)

css = re.sub(
    r'\.profile-card__editor\s*{\s*display:\s*grid;\s*gap:\s*0\.7rem;\s*width:\s*min\(100%,\s*22\.1rem\);\s*margin-top:\s*-0\.05rem;\s*justify-items:\s*center;\s*}',
    r'.profile-card__editor {\n  display: grid;\n  gap: 0.7rem;\n  width: min(100%, 22.1rem);\n  margin-top: -0.05rem;\n  justify-items: start;\n}',
    css
)

with open('src/styles.css', 'w') as f:
    f.write(css)

print("Subcopy patched.")
