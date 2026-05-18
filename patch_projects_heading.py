with open("src/styles.css", "r") as f:
    css = f.read()

# Make it left aligned on min-width 768px
import re
css = css.replace("""  .projects-stage__header {
    justify-items: center;
    width: 100%;
    text-align: center;
  }""", """  .projects-stage__header {
    justify-items: flex-start;
    width: 100%;
    text-align: left;
  }""")

# Remove specific rules for .projects-stage__header h2 so it inherits the sizing from .career-stage__heading h2
lines = css.split('\n')

with open("src/styles.css", "w") as f:
    f.write(css)

