import re

with open('src/styles.css', 'r') as f:
    content = f.read()

# Adjust copy position
content = re.sub(
    r"""/\* FINAL HERO COPY POSITION REFINEMENT \*/
@media \(min-width: 1024px\) \{
  \.hero-stage__copy \{
    bottom: 3rem !important; /\* Moved back up from -2rem \*/
  \}
\}
@media \(min-width: 768px\) and \(max-width: 1023px\) \{
  \.hero-stage__copy \{
    bottom: 2rem !important; /\* Moved back up from -2rem \*/
  \}
\}""",
    r"""/* FINAL HERO COPY POSITION REFINEMENT */
@media (min-width: 1024px) {
  .hero-stage__copy {
    bottom: 6rem !important; /* Moved further up */
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .hero-stage__copy {
    bottom: 4.5rem !important; /* Moved further up */
  }
}""",
    content,
    flags=re.DOTALL
)

# Adjust height
content = re.sub(
    r"""/\* FINAL HERO HEIGHT REFINEMENT \*/
\.scene--hero,
\.hero-stage \{
  min-height: max\(100svh, 65rem\) !important;
\}""",
    r"""/* FINAL HERO HEIGHT REFINEMENT */
.scene--hero,
.hero-stage {
  min-height: max(100svh, 56rem) !important;
}""",
    content,
    flags=re.DOTALL
)

with open('src/styles.css', 'w') as f:
    f.write(content)

