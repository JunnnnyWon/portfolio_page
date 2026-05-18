import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# Remove anything after "/* FINAL HERO POSITION & OVERLAP REFINEMENTS */" or similar blocks
css = re.sub(r'/\* FINAL HERO POSITION & OVERLAP REFINEMENTS \*/.*', '', css, flags=re.DOTALL)
css = re.sub(r'/\* ADJUST ORB AND CURSOR EXACT PLACEMENT \*/.*', '', css, flags=re.DOTALL)

final_css = """/* FINAL HERO POSITION & OVERLAP REFINEMENTS */

/* Move the entire group higher on PC screens */
@media (min-width: 1024px) {
  .hero-stage__wordmark {
    top: 12rem !important; /* Moved significantly higher up from 18rem */
  }
}

/* Base positions (mobile) */
.hero-stage__wordmark .hero-stage__orb {
  width: 0.6em !important;
  top: -0.5em !important;       
  left: -0.15em !important;    
}

.hero-stage__wordmark .hero-stage__cursor {
  width: 0.6em !important;
  left: auto !important;
  right: -0.2em !important;
  top: 1.6em !important;       
}

/* PC screen refinements */
@media (min-width: 768px) {
  .hero-stage__wordmark .hero-stage__orb { 
    left: -0.15em !important; 
    top: -0.7em !important; 
  }
  .hero-stage__wordmark .hero-stage__cursor { 
    left: auto !important;
    right: -0.25em !important; 
    top: 1.6em !important;
  }
}
"""

with open('src/styles.css', 'w') as f:
    f.write(css.strip() + "\n\n" + final_css)

print("CSS updated.")
