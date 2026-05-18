import re

with open('src/styles.css', 'r') as f:
    css = f.read()

unified_css = """
/* FINAL POSITION ALIGNMENT */
.hero-stage__wordmark .hero-stage__orb {
  width: 0.72em !important;
  top: -0.05em !important;       
  left: -0.7em !important;    
}

.hero-stage__wordmark .hero-stage__cursor {
  width: 0.65em !important;
  top: 1.55em !important;       
  left: 0.72em !important;
}

@media (min-width: 768px) {
  .hero-stage__wordmark .hero-stage__orb { left: -1.0em !important; top: -0.2em !important; filter: drop-shadow(0 0.8rem 1.6rem rgba(24, 18, 50, 0.4)) !important; }
  .hero-stage__wordmark .hero-stage__cursor { left: 0.9em !important; }
}
"""

with open('src/styles.css', 'a') as f:
    f.write("\n" + unified_css)
