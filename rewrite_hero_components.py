import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# We will wrap PORTFOLIO, Orb, and Cursor in a relative scalable wrapper. 
# But user just wants Orb and cursor to scale and move exactly like "PORTFOLIO".
# The easiest way is to use `em` values based on a container's font-size, 
# but currently .hero-stage__wordmark has the clamp() applied to its <span> elements.
# If we apply the font-size clamp to .hero-stage__wordmark as the base, 
# and move .hero-stage__orb and .hero-stage__cursor INSIDE .hero-stage__wordmark in TSX, 
# they can scale using `em`.

with open('src/components/HeroSection.tsx', 'r') as f:
    tsx = f.read()

# Make the TSX look like this:
old_tsx = """          <img
            className="hero-stage__orb"
            src="/assets/hero/orb.png"
            alt=""
          />
          <div className="hero-stage__wordmark">
            <span className="hero-stage__wordmark-port">PORT</span>
            <span className="hero-stage__wordmark-folio">FOLIO</span>
          </div>
          <img
            className="hero-stage__cursor"
            src="/assets/hero/cursor.png"
            alt=""
          />"""

new_tsx = """          <div className="hero-stage__wordmark">
            <img className="hero-stage__orb" src="/assets/hero/orb.png" alt="" />
            <span className="hero-stage__wordmark-port">PORT</span>
            <span className="hero-stage__wordmark-folio">FOLIO</span>
            <img className="hero-stage__cursor" src="/assets/hero/cursor.png" alt="" />
          </div>"""

if old_tsx in tsx:
    with open('src/components/HeroSection.tsx', 'w') as f:
        f.write(tsx.replace(old_tsx, new_tsx))
    print("Replaced TSX hierarchy.")
else:
    print("TSX NOT FOUND.")
