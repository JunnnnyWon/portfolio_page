import { motion } from "motion/react";
import {
  type CSSProperties,
  useEffect,
  useRef,
  useState,
} from "react";
import { type ProjectDetail, type ProjectDetailMedia } from "../data/portfolio";
import { fadeUp, quickTransition, staggerChildren } from "../lib/motion";

type ProjectDetailPageProps = {
  project: ProjectDetail;
  reducedMotion: boolean;
  onNavigateHome: () => void;
};

type GalleryMediaElement = HTMLImageElement | HTMLVideoElement;

type GalleryFrameSize = {
  width: number;
  height: number;
};

const DEFAULT_GALLERY_FRAME_HEIGHT = 380;
const COMPACT_GALLERY_FRAME_HEIGHT = 300;
const MOBILE_FIT_GALLERY_MAX_WIDTH = 320;

type GalleryContent = {
  slug: string;
  media: ProjectDetailMedia[];
  headerLabel?: string;
  hintLabel?: string;
};

type MediaGalleryProps = {
  gallery: GalleryContent;
};

function HackathonRewardsGallery({ gallery }: MediaGalleryProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const [progress, setProgress] = useState(0);
  const maxIndex = Math.max(0, gallery.media.length - 1);
  const trackHeight = Math.max(320, gallery.media.length * 360);
  const activeIndex = Math.max(0, Math.min(maxIndex, Math.round(progress)));
  const visibleRange = 2.6;

  useEffect(() => {
    const scroller = scrollRef.current;

    if (!scroller) {
      return;
    }

    const update = () => {
      const top = scroller.scrollTop;
      const maxScroll = Math.max(1, scroller.scrollHeight - scroller.clientHeight);
      const nextProgress = (top / maxScroll) * maxIndex;
      setProgress((current) =>
        Math.abs(current - nextProgress) < 0.01 ? current : nextProgress,
      );
      frameRef.current = null;
    };

    const handleScroll = () => {
      if (frameRef.current !== null) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(update);
    };

    update();
    scroller.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      scroller.removeEventListener("scroll", handleScroll);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };
  }, [maxIndex]);

  useEffect(() => {
    const viewport = viewportRef.current;
    const scroller = scrollRef.current;

    if (
      !(viewport instanceof HTMLDivElement) ||
      !(scroller instanceof HTMLDivElement)
    ) {
      return;
    }

    let touchMode: "gallery" | "locked" | null = null;
    let lastTouchY = 0;

    const isActiveFramePoint = (clientX: number, clientY: number) => {
      const activeFrame = viewport.querySelector(
        ".hyper-card.is-active .hyper-card__frame",
      );

      if (!(activeFrame instanceof HTMLElement)) {
        return false;
      }

      const rect = activeFrame.getBoundingClientRect();
      return (
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom
      );
    };

    const routeDelta = (deltaY: number, mode: "gallery" | "locked") => {
      if (mode === "gallery") {
        scroller.scrollTop += deltaY;
      }
    };

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      routeDelta(
        event.deltaY,
        isActiveFramePoint(event.clientX, event.clientY) ? "gallery" : "locked",
      );
    };

    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      touchMode =
        touch && isActiveFramePoint(touch.clientX, touch.clientY)
          ? "gallery"
          : "locked";
      lastTouchY = touch?.clientY ?? 0;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!touchMode) {
        return;
      }

      const nextTouchY = event.touches[0]?.clientY ?? lastTouchY;
      const deltaY = lastTouchY - nextTouchY;
      lastTouchY = nextTouchY;

      event.preventDefault();
      routeDelta(deltaY, touchMode);
    };

    const resetRedirect = () => {
      touchMode = null;
      lastTouchY = 0;
    };

    viewport.addEventListener("wheel", handleWheel, { passive: false, capture: true });
    viewport.addEventListener("touchstart", handleTouchStart, {
      passive: false,
      capture: true,
    });
    viewport.addEventListener("touchmove", handleTouchMove, {
      passive: false,
      capture: true,
    });
    viewport.addEventListener("touchend", resetRedirect, { capture: true });
    viewport.addEventListener("touchcancel", resetRedirect, { capture: true });

    return () => {
      viewport.removeEventListener("wheel", handleWheel, true);
      viewport.removeEventListener("touchstart", handleTouchStart, true);
      viewport.removeEventListener("touchmove", handleTouchMove, true);
      viewport.removeEventListener("touchend", resetRedirect, true);
      viewport.removeEventListener("touchcancel", resetRedirect, true);
    };
  }, []);

  return (
    <div className="hyper-gallery">
      <div ref={viewportRef} className="hyper-gallery__viewport">
        <div className="hyper-gallery__scanlines" />
        <div className="hyper-gallery__vignette" />
        <div className="hyper-gallery__noise" />
        <div className="hyper-gallery__edge-guard hyper-gallery__edge-guard--left" />
        <div className="hyper-gallery__edge-guard hyper-gallery__edge-guard--right" />

        <div ref={scrollRef} className="hyper-gallery__scroll">
          <div
            className="hyper-gallery__track"
            style={{ height: `${trackHeight}px` }}
          >
            <div className="hyper-gallery__sticky">
              <div className="hyper-gallery__world">
                {gallery.media.map((item, index) => {
                  const offset = index - progress;
                  const distance = Math.abs(offset);

                  if (distance > visibleRange) {
                    return null;
                  }

                  const depth = 220 - distance * 260;
                  const translateY = offset * 58;
                  const rotateX = offset * -7;
                  const rotateY = offset * -14;
                  const scale = Math.max(0.68, 1 - distance * 0.16);
                  const opacity = Math.max(0.16, 1 - distance * 0.26);
                  const cardTitle = item.title ?? `ITEM ${String(index + 1).padStart(2, "0")}`;
                  const cardMeta = item.meta ?? ["HACKATHON", `ID-${String(index + 1).padStart(3, "0")}`];

                  return (
                    <article
                      key={`${gallery.slug}-${item.src}`}
                      className={`hyper-card${index === activeIndex ? " is-active" : ""}`}
                      style={
                        {
                          transform: `translate3d(-50%, calc(-50% + ${translateY}px), ${depth}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
                          opacity,
                          zIndex: 1000 - Math.round(distance * 100),
                        } as CSSProperties
                      }
                    >
                      <div className="hyper-card__chrome">
                        <span>{cardMeta[0]}</span>
                        <span>{cardMeta[1]}</span>
                      </div>
                      <div className="hyper-card__frame">
                        {item.type === "image" ? (
                          <img
                            src={item.src}
                            alt={item.alt}
                            loading="lazy"
                            decoding="async"
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
                      <div className="hyper-card__copy">
                        <div className="hyper-card__copy-top">
                          <span>{cardMeta[0]}</span>
                          <span>{cardMeta[1]}</span>
                        </div>
                        <h3>{cardTitle}</h3>
                        <p>{item.caption ?? item.alt}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StandardMediaGallery({ gallery }: MediaGalleryProps) {
  const mediaRefs = useRef(new Map<string, GalleryMediaElement>());
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const [frameSize, setFrameSize] = useState<GalleryFrameSize | null>(null);
  const isShadowCorridor = gallery.slug === "shadow-corridor";
  const isDevelopmentShowcase =
    gallery.slug === "vesta" || gallery.slug === "kpi-overload";
  const maxFrameHeight =
    isShadowCorridor || isDevelopmentShowcase
      ? COMPACT_GALLERY_FRAME_HEIGHT
      : DEFAULT_GALLERY_FRAME_HEIGHT;

  const updateFrameSize = () => {
    if (isShadowCorridor) {
      const baseNode = mediaRefs.current.get(gallery.media[0]?.src ?? "");

      if (!baseNode) {
        return;
      }

      const baseWidth =
        baseNode instanceof HTMLVideoElement
          ? baseNode.videoWidth
          : baseNode.naturalWidth;
      const baseHeight =
        baseNode instanceof HTMLVideoElement
          ? baseNode.videoHeight
          : baseNode.naturalHeight;

      if (baseWidth > 0 && baseHeight > 0) {
        const galleryWidth =
          galleryRef.current?.clientWidth ?? window.innerWidth;
        const maxFrameWidth = Math.max(
          220,
          Math.min(galleryWidth - 32, 520),
        );
        const scale = Math.min(
          1,
          maxFrameHeight / baseHeight,
          maxFrameWidth / baseWidth,
        );
        const nextSize = {
          width: Math.round(baseWidth * scale),
          height: Math.round(baseHeight * scale),
        };

        setFrameSize((current) => {
          if (
            current &&
            current.width === nextSize.width &&
            current.height === nextSize.height
          ) {
            return current;
          }

          return nextSize;
        });
      }

      return;
    }

    const galleryWidth =
      galleryRef.current?.clientWidth ?? window.innerWidth;
    const maxFrameWidth = isDevelopmentShowcase
      ? Math.max(
          220,
          Math.min(galleryWidth - 24, MOBILE_FIT_GALLERY_MAX_WIDTH),
        )
      : Number.POSITIVE_INFINITY;

    const measured = Array.from(mediaRefs.current.values())
      .map((node) => {
        const width =
          node instanceof HTMLVideoElement ? node.videoWidth : node.naturalWidth;
        const height =
          node instanceof HTMLVideoElement ? node.videoHeight : node.naturalHeight;

        if (width <= 0 || height <= 0) {
          return null;
        }

        const scale = Math.min(1, maxFrameHeight / height, maxFrameWidth / width);

        return {
          width: Math.round(width * scale),
          height: Math.round(height * scale),
        };
      })
      .filter((size): size is GalleryFrameSize => size !== null);

    if (!measured.length) {
      return;
    }

    const nextSize = measured.reduce<GalleryFrameSize>(
      (largest, current) => ({
        width: Math.max(largest.width, current.width),
        height: Math.max(largest.height, current.height),
      }),
      measured[0],
    );

    setFrameSize((current) => {
      if (
        current &&
        current.width === nextSize.width &&
        current.height === nextSize.height
      ) {
        return current;
      }

      return nextSize;
    });
  };

  useEffect(() => {
    setFrameSize(null);
    window.requestAnimationFrame(updateFrameSize);
  }, [gallery.slug, maxFrameHeight]);

  useEffect(() => {
    const handleResize = () => {
      window.requestAnimationFrame(updateFrameSize);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [gallery.slug, maxFrameHeight]);

  const getScaledWidth = (src: string) => {
    if (frameSize === null) {
      return undefined;
    }

    if (isShadowCorridor || isDevelopmentShowcase) {
      return frameSize.width;
    }

    const node = mediaRefs.current.get(src);

    if (!node) {
      return frameSize.width;
    }

    const width =
      node instanceof HTMLVideoElement ? node.videoWidth : node.naturalWidth;
    const height =
      node instanceof HTMLVideoElement ? node.videoHeight : node.naturalHeight;

    if (width <= 0 || height <= 0) {
      return frameSize.width;
    }

    return Math.round((width * frameSize.height) / height);
  };

  const galleryStyle =
    frameSize !== null
      ? ({
          "--detail-gallery-frame-height": `${frameSize.height}px`,
        } as CSSProperties)
      : undefined;

  return (
    <div className="detail-case__gallery-shell">
      <div className="detail-case__gallery-header">
        <span>{gallery.headerLabel ?? "Gallery"}</span>
        <small>{gallery.hintLabel ?? "Swipe to browse"}</small>
      </div>

      <div ref={galleryRef} className="detail-case__gallery" style={galleryStyle}>
        {gallery.media.map((item) => (
          <figure
            key={`${gallery.slug}-${item.src}`}
            className={`detail-media detail-media--${item.type}`}
            style={
              frameSize !== null
                ? ({
                    "--detail-gallery-media-width": `${getScaledWidth(item.src) ?? frameSize.width}px`,
                    "--detail-gallery-media-height": `${frameSize.height}px`,
                  } as CSSProperties)
                : undefined
            }
          >
            <div className="detail-media__frame">
              {item.type === "image" ? (
                <img
                  ref={(node) => {
                    if (node) {
                      mediaRefs.current.set(item.src, node);
                    } else {
                      mediaRefs.current.delete(item.src);
                    }
                  }}
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  onLoad={() => {
                    window.requestAnimationFrame(updateFrameSize);
                  }}
                />
              ) : (
                <video
                  ref={(node) => {
                    if (node) {
                      mediaRefs.current.set(item.src, node);
                    } else {
                      mediaRefs.current.delete(item.src);
                    }
                  }}
                  src={item.src}
                  poster={item.poster}
                  controls
                  preload="metadata"
                  playsInline
                  onLoadedMetadata={() => {
                    window.requestAnimationFrame(updateFrameSize);
                  }}
                />
              )}
            </div>
            {item.caption ? <figcaption>{item.caption}</figcaption> : null}
          </figure>
        ))}
      </div>
    </div>
  );
}

function MediaGallery({ gallery }: MediaGalleryProps) {
  if (gallery.slug === "hackathon-rewards") {
    return <HackathonRewardsGallery gallery={gallery} />;
  }

  return <StandardMediaGallery gallery={gallery} />;
}

export function ProjectDetailPage({
  project,
  reducedMotion,
  onNavigateHome,
}: ProjectDetailPageProps) {
  const reveal = reducedMotion ? undefined : "hidden";
  const isGalleryOnlyProject =
    project.slug === "hackathon" && Boolean(project.rewardsGallery);
  const pageTitle = isGalleryOnlyProject ? "Project" : "Projects";
  const pageRef = useRef<HTMLDivElement | null>(null);
  const hasCaseStudies = (project.caseStudies?.length ?? 0) > 0;

  useEffect(() => {
    pageRef.current?.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [project.slug]);

  return (
    <div
      ref={pageRef}
      className={`detail-page detail-page--${project.accent}`}
    >
      <header className="detail-nav">
        <button
          type="button"
          className="detail-nav__back"
          onClick={(event) => {
            event.preventDefault();
            event.currentTarget.blur();
            onNavigateHome();
          }}
        >
          포트폴리오로 돌아가기
        </button>
      </header>

      <main className={`detail-shell${isGalleryOnlyProject ? " detail-shell--gallery" : ""}`}>
        <motion.section
          className={`detail-title${isGalleryOnlyProject ? " detail-title--gallery" : ""}`}
          variants={staggerChildren(0.08)}
          initial={reveal}
          animate="visible"
        >
          <motion.span className="detail-title__backdrop" variants={fadeUp(14)}>
            {pageTitle}
          </motion.span>
          <motion.h1 variants={fadeUp(20)}>{pageTitle}</motion.h1>
          {isGalleryOnlyProject && project.rewardsGallery ? (
            <motion.div className="detail-title__gallery-meta" variants={fadeUp(22)}>
              <span className="detail-title__gallery-kicker">Reward Gallery</span>
            </motion.div>
          ) : null}
        </motion.section>

        {hasCaseStudies ? (
          <motion.section
            id="projects-list"
            className="detail-section detail-section--projects"
            variants={staggerChildren(0.08)}
            initial={reveal}
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            <div className="detail-case-list">
              {project.caseStudies?.map((caseStudy, index) => (
                <motion.article
                  key={caseStudy.slug}
                  className="detail-case"
                  variants={fadeUp(22)}
                  whileHover={reducedMotion ? undefined : { y: -4 }}
                  transition={quickTransition}
                >
                  <div className="detail-case__copy">
                    <div className="detail-case__heading">
                      <span className="detail-case__index">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      <div className="detail-case__eyebrow-group">
                        <small>{caseStudy.eyebrow}</small>
                        <span>{caseStudy.period}</span>
                      </div>
                    </div>

                    <div className="detail-case__title-row">
                      <h3>{caseStudy.title}</h3>
                      {caseStudy.award ? (
                        <span className="detail-case__award">{caseStudy.award}</span>
                      ) : null}
                    </div>

                    <p className="detail-case__summary">{caseStudy.summary}</p>

                    <div className="detail-case__facts">
                      <span className="detail-case__fact">
                        <em>Role</em>
                        {caseStudy.role}
                      </span>
                      {caseStudy.award ? (
                        <span className="detail-case__fact detail-case__fact--accent">
                          <em>Status</em>
                          {caseStudy.award}
                        </span>
                      ) : null}
                    </div>

                    <MediaGallery
                      gallery={{
                        slug: caseStudy.slug,
                        media: caseStudy.media,
                      }}
                    />

                    <ul className="detail-case__highlights">
                      {caseStudy.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>

                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>
        ) : (
          <>
            {isGalleryOnlyProject ? null : (
              <motion.section
                id="overview"
                className="detail-section"
                variants={staggerChildren(0.08)}
                initial={reveal}
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.div className="detail-section__header" variants={fadeUp(18)}>
                  <span>Overview</span>
                  <h2>{project.overviewHeading}</h2>
                </motion.div>

                <div className="detail-panel-grid">
                  {project.overview.map((panel) => (
                    <motion.article
                      key={panel.title}
                      className="detail-panel"
                      variants={fadeUp(20)}
                      whileHover={reducedMotion ? undefined : { y: -4 }}
                      transition={quickTransition}
                    >
                      <h3>{panel.title}</h3>
                      <p>{panel.body}</p>
                    </motion.article>
                  ))}
                </div>
              </motion.section>
            )}

            {project.rewardsGallery ? (
              <motion.section
                id="rewards"
                className={`detail-section${isGalleryOnlyProject ? " detail-section--gallery-only" : ""}`}
                variants={staggerChildren(0.08)}
                initial={reveal}
                whileInView="visible"
                viewport={{ once: true, amount: 0.18 }}
              >
                {isGalleryOnlyProject ? null : (
                  <motion.div className="detail-section__header" variants={fadeUp(18)}>
                    <span>Rewards</span>
                    <h2>{project.rewardsGallery.title}</h2>
                    <p className="detail-section__lead">{project.rewardsGallery.summary}</p>
                  </motion.div>
                )}

                <MediaGallery
                  gallery={{
                    slug: project.rewardsGallery.slug,
                    media: project.rewardsGallery.media,
                    headerLabel: "Reward Gallery",
                    hintLabel: "Swipe to browse",
                  }}
                />
              </motion.section>
            ) : null}

            {isGalleryOnlyProject ? null : (
              <motion.section
                id="process"
                className="detail-section"
                variants={staggerChildren(0.08)}
                initial={reveal}
                whileInView="visible"
                viewport={{ once: true, amount: 0.18 }}
              >
                <motion.div className="detail-section__header" variants={fadeUp(18)}>
                  <span>Process</span>
                  <h2>아이디어가 결과물로 보이기까지의 흐름</h2>
                </motion.div>

                <div className="detail-timeline">
                  {project.steps.map((step) => (
                    <motion.article
                      key={step.phase}
                      className="detail-step"
                      variants={fadeUp(20)}
                    >
                      <span className="detail-step__phase">{step.phase}</span>
                      <div className="detail-step__body">
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.section>
            )}
          </>
        )}
      </main>
    </div>
  );
}
