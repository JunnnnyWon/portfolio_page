import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# Instead of rewriting everything manually, let's just append a strong override 
# that leverages font-size on the `.hero-stage__wordmark` wrap 
# to coordinate the orb and the cursor. The spans will scale down to `1em` 
# because we will move the `clamp()` up to `.hero-stage__wordmark`.

unified_css = """
/* UNIFIED HERO GROUPING OVERRIDE */
.hero-stage__wordmark {
  /* Set root scale here */
  font-size: clamp(6.45rem, 16.3vw, 7.25rem);
  position: absolute;
  /* Top position will just stay as it is (it's absolute anyway) */
}

/* Base values relative to font-size */
.hero-stage__wordmark-port {
  font-size: 0.9em !important; 
}
.hero-stage__wordmark-folio {
  font-size: 1.0em !important; 
}

/* Because Orb and Cursor are now INSIDE .hero-stage__wordmark, 
   we can position them relative to the wordmark's grid! */
.hero-stage__wordmark {
  position: absolute; /* Already absolute */
  /* Remove old orb and cursor absolutes relative to stage, make them relative to wordmark */
}

.hero-stage__wordmark .hero-stage__orb {
  position: absolute;
  width: 0.8em !important;     /* scales based on wordmark */
  top: -0.32em !important;       /* moves up relative to PORT */
  left: -0.9em !important;     /* moves left relative to PORT */
}

.hero-stage__wordmark .hero-stage__cursor {
  position: absolute;
  width: 0.73em !important;
  top: 1.4em !important;       /* below FOLIO */
  left: 1em !important;
}

/* Remove media query clamps, let them be completely dictated by the wordmark font-size root */
@media (min-width: 480px) {
  .hero-stage__wordmark { font-size: clamp(7.5rem, 13vw, 11rem); }
}
@media (min-width: 768px) {
  .hero-stage__wordmark { font-size: clamp(8.5rem, 12vw, 13rem); }
  .hero-stage__wordmark .hero-stage__orb { left: -1.2em !important; }
}
@media (min-width: 1024px) {
  .hero-stage__wordmark { font-size: clamp(9.5rem, 11vw, 14rem); }
  .hero-stage__wordmark .hero-stage__orb { left: -1.4em !important; top: -0.4em !important; }
}
"""

with open('src/styles.css', 'a') as f:
    f.write("\n" + unified_css)

print("Unified scaling appended.")

