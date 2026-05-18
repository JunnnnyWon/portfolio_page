import re

pos_css = """
/* ADJUST ORB AND CURSOR EXACT PLACEMENT */
.hero-stage__wordmark .hero-stage__orb {
  /* Move closer to P */
  left: -0.1em !important;    
  top: -0.1em !important;
}

.hero-stage__wordmark .hero-stage__cursor {
  /* Move exactly to bottom right of O */
  left: 0.6em !important;
  top: 1.55em !important;
}

@media (min-width: 768px) {
  .hero-stage__wordmark .hero-stage__orb { 
    left: -0.15em !important; 
  }
  .hero-stage__wordmark .hero-stage__cursor { 
    left: 0.65em !important; 
  }
}
"""
with open('src/styles.css', 'a') as f:
    f.write("\n" + pos_css)
