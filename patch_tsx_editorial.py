import re

with open('src/components/ProjectsSection.tsx', 'r') as f:
    text = f.read()

# Replace everything from <span className="projects-card__bar" down to </motion.button>
pattern = r'<span className="projects-card__bar" aria-hidden="true" />[\s\S]*?(?=</motion\.button>)'

new_content = """<div className="projects-card__top">
                      <div className="projects-card__heading">
                        <span className="projects-card__index">{card.index}</span>
                        <strong className="projects-card__meta">
                          {card.previewLabel}
                        </strong>
                      </div>
                    </div>
                    <div className="projects-card__line" aria-hidden="true"></div>
                    <div className="projects-card__body">
                      <p>{card.summary}</p>
                    </div>
                    <div className="projects-card__line" aria-hidden="true"></div>
                    <div className="projects-card__footer">
                      <span className="projects-card__note">
                        <span>EXPLORE PROJECT</span>
                        <span className="projects-card__arrow" aria-hidden="true" />
                      </span>
                    </div>
                  """

text = re.sub(pattern, new_content, text)

with open('src/components/ProjectsSection.tsx', 'w') as f:
    f.write(text)
    
print("TSX updated for Editorial look.")
