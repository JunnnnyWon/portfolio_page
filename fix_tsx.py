import re

with open('src/components/ProjectsSection.tsx', 'r') as f:
    text = f.read()

pattern = r'(<div className="projects-card__marquee-track">[\s\S]*?</div>)'

replacement = r"""\1
                          <div className="projects-card__marquee-track projects-card__marquee-track--reverse">
                            <span>{card.previewLabel} ✦ </span>
                            <span>{card.previewLabel} ✦ </span>
                            <span>{card.previewLabel} ✦ </span>
                            <span>{card.previewLabel} ✦ </span>
                            <span>{card.previewLabel} ✦ </span>
                            <span>{card.previewLabel} ✦ </span>
                          </div>"""

new_text = re.sub(pattern, replacement, text, count=1)

with open('src/components/ProjectsSection.tsx', 'w') as f:
    f.write(new_text)

print("TSX properly replaced.")
