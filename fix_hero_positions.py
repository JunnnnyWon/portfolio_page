import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# I will append new CSS to override the positioning:
# 1. PC full screen (min-width: 1024px) wordmark `top` needs to be moved up. The container has top: 22.35rem, then 21.75rem, up to 26rem at 1024px.
# 2. Orb overlapping 'P' top-left.
# 3. Cursor clicking 'O' bottom-right.

pos_css = """
/* FINAL HERO POSITION & OVERLAP REFINEMENTS */

/* Move the entire group higher on PC screens */
@media (min-width: 1024px) {
  .hero-stage__wordmark {
    top: 18rem !important; /* Moved up from 26rem */
  }
}

/* Orb: Overlapping top-left of P */
.hero-stage__wordmark .hero-stage__orb {
  width: 0.6em !important;
  /* Top of P */
  top: -0.1em !important;       
  /* Left of P, partially overlapping */
  left: -0.25em !important;    
}

/* Cursor: Clicking bottom-right of O (the last O in FOLIO) */
.hero-stage__wordmark .hero-stage__cursor {
  width: 0.6em !important;
  /* Bottom of FOLIO */
  top: 1.6em !important;       
  /* Right of FOLIO, pointing inwards */
  left: 0.85em !important;
}

@media (min-width: 768px) {
  .hero-stage__wordmark .hero-stage__orb { 
    left: -0.3em !important; 
    top: -0.15em !important; 
  }
  .hero-stage__wordmark .hero-stage__cursor { 
    left: 0.9em !important; 
    top: 1.65em !important;
  }
}
"""

with open('src/styles.css', 'a') as f:
    f.write("\n" + pos_css)
