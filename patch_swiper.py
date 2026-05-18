import re

with open('src/components/ProjectDetailPage.tsx', 'r') as f:
    text = f.read()

# Let's insert the drag tracking logic inside StandardMediaGallery
insert_target = r"""  const galleryRef = useRef<HTMLDivElement \| null>\(null\);
  const \[frameSize, setFrameSize\] = useState<GalleryFrameSize \| null>\(null\);"""

drag_logic = """  const galleryRef = useRef<HTMLDivElement | null>(null);
  const [frameSize, setFrameSize] = useState<GalleryFrameSize | null>(null);

  // Drag-to-scroll (Swipe) state for PC
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!galleryRef.current) return;
    isDragging.current = true;
    galleryRef.current.style.cursor = "grabbing";
    galleryRef.current.style.scrollSnapType = "none"; // Disable snap while dragging
    startX.current = e.pageX - galleryRef.current.offsetLeft;
    scrollLeft.current = galleryRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    if (!galleryRef.current) return;
    isDragging.current = false;
    galleryRef.current.style.cursor = "grab";
    galleryRef.current.style.scrollSnapType = "x mandatory";
  };

  const onMouseUp = () => {
    if (!galleryRef.current) return;
    isDragging.current = false;
    galleryRef.current.style.cursor = "grab";
    galleryRef.current.style.scrollSnapType = "x mandatory";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !galleryRef.current) return;
    e.preventDefault();
    const x = e.pageX - galleryRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // scroll speed multiplier
    galleryRef.current.scrollLeft = scrollLeft.current - walk;
  };"""

text = re.sub(insert_target, drag_logic, text)

# Now attach the handlers to the gallery div
div_target = r"""<div ref=\{galleryRef\} className="detail-case__gallery" style=\{galleryStyle\}>"""
div_replacement = """<div 
        ref={galleryRef} 
        className="detail-case__gallery" 
        style={{ ...galleryStyle, cursor: "grab" }}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >"""

text = re.sub(div_target, div_replacement, text)

with open('src/components/ProjectDetailPage.tsx', 'w') as f:
    f.write(text)

print("Drag-to-scroll applied!")
