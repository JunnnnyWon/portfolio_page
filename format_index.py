import re

with open('src/components/ProjectsSection.tsx', 'r') as f:
    text = f.read()

# Change {card.index} to [PRJ_{card.index}]
text = text.replace('<span className="projects-card__index">{card.index}</span>', '<span className="projects-card__index">[PRJ_{card.index}]</span>')

with open('src/components/ProjectsSection.tsx', 'w') as f:
    f.write(text)
print("Index formatted.")
