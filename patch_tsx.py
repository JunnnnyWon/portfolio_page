with open("src/components/ProjectDetailPage.tsx", "r") as f:
    content = f.read()

import re

# Add useScroll, useTransform into motion imports
content = re.sub(r'import\s+\{\s*motion\s*\}\s+from\s+"motion/react";', 'import { motion, useScroll, useTransform } from "motion/react";', content)

# Export pageRef logic from props
if 'pageRef?: React.RefObject<HTMLDivElement | null>;' not in content:
    content = content.replace('type MediaGalleryProps = {', 'type MediaGalleryProps = {\n  pageRef?: React.RefObject<HTMLDivElement | null>;')

# Update StandardMediaGallery
old_standard = """function StandardMediaGallery({ gallery }: MediaGalleryProps) {
  return (
    <div className="detail-case__gallery-shell">
      <div className="detail-case__gallery-header">
        <span>{gallery.headerLabel ?? "Gallery"}</span>
        <small>{gallery.hintLabel ?? `${gallery.media.length} items insight`}</small>
      </div>

      <div className="detail-case__gallery detail-case__gallery--bento">
        {gallery.media.map((item, idx) => (
          <figure
            key={`${gallery.slug}-${item.src}`}
            className={`detail-media detail-media--${item.type} bento-item-${idx}`}
          >
            <div className="detail-media__frame">
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                />
              ) : (
                <video
                  src={item.src}
                  poster={item.poster}
                  controls
                  preload="metadata"
                  playsInline
                />
              )}
            </div>
            {item.caption ? <figcaption>{item.caption}</figcaption> : null}
          </figure>
        ))}
      </div>
    </div>
  );
}"""

new_standard = """function StandardMediaGallery({ gallery, pageRef }: MediaGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Provide the scroll container if available to track actual scroll position
    container: pageRef as any,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const y2 = useTransform(scrollYProgress, [0, 1], [40, -40]);

  // Split media into two columns for Masonry Parallax Effect
  const column1 = gallery.media.filter((_, i) => i % 2 === 0);
  const column2 = gallery.media.filter((_, i) => i % 2 === 1);

  const renderMedia = (item: ProjectDetailMedia, idx: number, colIndex: number) => (
    <figure
      key={`${gallery.slug}-${item.src}-${colIndex}-${idx}`}
      className={`detail-media detail-media--${item.type} masonry-item`}
    >
      <div className="detail-media__frame">
        {item.type === "image" ? (
          <img src={item.src} alt={item.alt} loading="lazy" />
        ) : (
          <video
            src={item.src}
            poster={item.poster}
            controls
            preload="metadata"
            playsInline
          />
        )}
      </div>
      {item.caption && <figcaption>{item.caption}</figcaption>}
    </figure>
  );

  return (
    <div className="detail-case__gallery-shell detail-case__gallery-shell--masonry" ref={containerRef}>
      <div className="detail-case__gallery-header">
        <span>{gallery.headerLabel ?? "Gallery"}</span>
        <small>{gallery.hintLabel ?? `${gallery.media.length} items insight`}</small>
      </div>

      <div className="detail-case__gallery--masonry-grid">
        <motion.div style={{ y: y1 }} className="masonry-column masonry-column--1">
          {column1.map((item, i) => renderMedia(item, i, 1))}
        </motion.div>
        
        <motion.div style={{ y: y2 }} className="masonry-column masonry-column--2">
          {column2.map((item, i) => renderMedia(item, i, 2))}
        </motion.div>
      </div>
    </div>
  );
}"""

content = content.replace(old_standard, new_standard)

# Forward pageRef in MediaGallery
content = content.replace('function MediaGallery({ gallery }: MediaGalleryProps) {', 'function MediaGallery({ gallery, pageRef }: MediaGalleryProps) {')
content = content.replace('<StandardMediaGallery gallery={gallery} />', '<StandardMediaGallery gallery={gallery} pageRef={pageRef} />')

# Update call sites
content = content.replace('<MediaGallery\n                      gallery={{', '<MediaGallery\n                      pageRef={pageRef}\n                      gallery={{')
content = content.replace('<MediaGallery\n                  gallery={{', '<MediaGallery\n                  pageRef={pageRef}\n                  gallery={{')

with open("src/components/ProjectDetailPage.tsx", "w") as f:
    f.write(content)
print("done tsx")
