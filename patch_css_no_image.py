import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# Add typography styles
no_image_css = """
/* No-Image Typography & Aura */
.projects-card__top,
.projects-card__body,
.projects-card__footer {
  position: relative;
  z-index: 1;
}

.projects-card__body {
  margin-top: auto;
  padding-top: 4rem;
}

.projects-card__typography {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  border-radius: 1.7rem;
}

.projects-card__huge-index {
  position: absolute;
  right: -5%;
  bottom: -15%;
  font-size: clamp(10rem, 25vw, 15rem);
  font-weight: 900;
  line-height: 0.8;
  letter-spacing: -0.06em;
  color: rgba(255,255,255,0.015);
  z-index: 0;
  transition: transform 600ms var(--ease-out), color 600ms;
}

.projects-card:hover .projects-card__huge-index {
  transform: translateY(-5%) scale(1.05);
  color: rgba(255,255,255,0.035);
}

.projects-card__marquee {
  position: absolute;
  top: 40%;
  left: -20%;
  width: 140%;
  transform: translateY(-50%) rotate(-4deg);
  opacity: 0.04;
  transition: opacity 400ms, transform 500ms var(--ease-out);
  z-index: 1;
  display: flex;
  overflow: hidden;
}

.projects-card:hover .projects-card__marquee {
  opacity: 0.12;
  transform: translateY(-50%) rotate(-2deg) scale(1.05);
}

.projects-card__marquee-track {
  display: flex;
  gap: 1rem;
  white-space: nowrap;
  animation: txt-marquee 30s linear infinite;
  will-change: transform;
}

.projects-card__marquee-track span {
  font-size: clamp(3.5rem, 8vw, 5rem);
  font-weight: 900;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255,255,255,0.8);
}

@keyframes txt-marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Enhancing the Aura (before) */
.projects-card::before {
  content: "";
  position: absolute;
  inset: auto -20% -50% -20%;
  height: 120%;
  border-radius: 50%;
  background: radial-gradient(circle, color-mix(in srgb, var(--project-accent) 26%, transparent), transparent 70%);
  opacity: 0.4;
  filter: blur(40px);
  pointer-events: none;
  transition: opacity 400ms, transform 600ms;
}

.projects-card:hover::before {
  opacity: 0.7;
  transform: scale(1.1) translateY(-10%);
}
"""

css = css + "\n" + no_image_css

with open('src/styles.css', 'w') as f:
    f.write(css)

print("Appended new CSS.")
