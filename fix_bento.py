import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# Fix detail-case__index 
css = re.sub(
    r'\.detail-case__index\s*\{[^}]*\}',
    """.detail-case__index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.3rem;
  padding: 0.3rem 0.6rem;
  border-radius: 2px;
  border: 1px solid color-mix(in srgb, var(--detail-accent) 30%, rgba(255, 255, 255, 0.1));
  background: transparent;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.68rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  color: color-mix(in srgb, var(--detail-accent) 80%, white);
}""", css)

# Make images sharp too
css = re.sub(
    r'\.detail-media\s*\{[^}]*\}',
    """.detail-media {
  position: relative;
  display: grid;
  gap: 0.72rem;
  padding: 0.66rem;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: #0B0D19;
}""", css)

css = re.sub(
    r'\.detail-media__frame\s*\{[^}]*\}',
    """.detail-media__frame {
  position: relative;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.04);
}""", css)

with open('src/styles.css', 'w') as f:
    f.write(css)
