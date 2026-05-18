import re

with open('src/components/ProjectsSection.tsx', 'r') as f:
    tsx_content = f.read()

old_tsx = r"""<div className="projects-card__marquee">
                          <div className="projects-card__marquee-track">
                            <span>{card.previewLabel} ✦ </span>
                            <span>{card.previewLabel} ✦ </span>
                            <span>{card.previewLabel} ✦ </span>
                            <span>{card.previewLabel} ✦ </span>
                            <span>{card.previewLabel} ✦ </span>
                            <span>{card.previewLabel} ✦ </span>
                          </div>
                        </div>"""

new_tsx = """<div className="projects-card__marquee">
                          <div className="projects-card__marquee-track">
                            <span>{card.previewLabel} ✦ </span>
                            <span>{card.previewLabel} ✦ </span>
                            <span>{card.previewLabel} ✦ </span>
                            <span>{card.previewLabel} ✦ </span>
                            <span>{card.previewLabel} ✦ </span>
                            <span>{card.previewLabel} ✦ </span>
                          </div>
                          <div className="projects-card__marquee-track projects-card__marquee-track--reverse">
                            <span>{card.previewLabel} ✦ </span>
                            <span>{card.previewLabel} ✦ </span>
                            <span>{card.previewLabel} ✦ </span>
                            <span>{card.previewLabel} ✦ </span>
                            <span>{card.previewLabel} ✦ </span>
                            <span>{card.previewLabel} ✦ </span>
                          </div>
                        </div>"""

if old_tsx in tsx_content:
    tsx_content = tsx_content.replace(old_tsx, new_tsx)
    with open('src/components/ProjectsSection.tsx', 'w') as f:
        f.write(tsx_content)
    print("TSX updated.")
else:
    print("Could not find exact TSX match.")

with open('src/styles.css', 'r') as f:
    css_content = f.read()

# Make the wrapper flex-column and give it more gap, increase rotation angle
css_content = re.sub(
    r'\.projects-card__marquee\s*\{([^\}]+)transform:\s*translateY\(-50\%\)\s*rotate\(-4deg\);([^\}]+)display:\s*flex;([^\}]+)\}',
    r'.projects-card__marquee {\1transform: translateY(-50%) rotate(-12deg);\2display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\3}',
    css_content
)

# Fix hover rotation as well
css_content = re.sub(
    r'\.projects-card:hover\s*\.projects-card__marquee\s*\{([^\}]+)transform:\s*translateY\(-50\%\)\s*rotate\(-2deg\)\s*scale\(1\.05\);([^\}]+)\}',
    r'.projects-card:hover .projects-card__marquee {\1transform: translateY(-50%) rotate(-8deg) scale(1.05);\2}',
    css_content
)

# Add reverse track CSS
if '.projects-card__marquee-track--reverse' not in css_content:
    reverse_css = """
.projects-card__marquee-track--reverse {
  animation-direction: reverse;
  animation-duration: 35s;
}"""
    # Insert it after .projects-card__marquee-track rule
    css_content = re.sub(
        r'(\.projects-card__marquee-track\s*\{[^\}]+\})',
        r'\1' + reverse_css,
        css_content
    )

with open('src/styles.css', 'w') as f:
    f.write(css_content)
print("CSS updated.")
