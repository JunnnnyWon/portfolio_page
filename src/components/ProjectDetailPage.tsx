import { motion, useScroll, useTransform } from "motion/react";
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
  pageRef?: React.RefObject<HTMLDivElement | null>;
  gallery: GalleryContent;
};

function HackathonRewardsGallery({ gallery }: MediaGalleryProps) {
  return (
    <div className="rewards-gallery">
      <div className="rewards-gallery__intro">
        <span>{gallery.headerLabel ?? "Selected Rewards"}</span>
        <small>{gallery.hintLabel ?? `${gallery.media.length} highlights`}</small>
      </div>

      <div className="rewards-gallery__grid">
        {gallery.media.map((item, index) => {
          const cardTitle =
            item.title ?? `Reward ${String(index + 1).padStart(2, "0")}`;

          return (
            <article
              key={`${gallery.slug}-${item.src}`}
              className={`rewards-card${index === 0 ? " rewards-card--featured" : ""}`}
            >
              <div className="rewards-card__frame">
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

              <div className="rewards-card__body">
                <div className="rewards-card__eyebrow">
                  <span className="rewards-card__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.meta?.map((entry) => (
                    <span key={`${item.src}-${entry}`} className="rewards-card__chip">
                      {entry}
                    </span>
                  ))}
                </div>

                <h3>{cardTitle}</h3>
                <p>{item.caption ?? item.alt}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function StandardMediaGallery({ gallery, pageRef }: MediaGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Provide the scroll container if available to track actual scroll position
    container: pageRef as any,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const y2 = useTransform(scrollYProgress, [0, 1], [60, -60]);

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
}

function MediaGallery({ gallery, pageRef }: MediaGalleryProps) {
  if (gallery.slug === "hackathon-rewards") {
    return <HackathonRewardsGallery gallery={gallery} />;
  }

  return <StandardMediaGallery gallery={gallery} pageRef={pageRef} />;
}

export function ProjectDetailPage({
  project,
  reducedMotion,
  onNavigateHome,
}: ProjectDetailPageProps) {
  const reveal = reducedMotion ? undefined : "hidden";
  const isGalleryOnlyProject =
    project.slug === "hackathon" && Boolean(project.rewardsGallery);
  const pageTitle = isGalleryOnlyProject ? "Rewards" : "Projects";
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
          ← BACK TO PORTFOLIO
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
              <span className="detail-title__gallery-kicker">Selected Rewards</span>
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
                  <div className="detail-case__info">
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

                    <ul className="detail-case__highlights">
                      {caseStudy.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-case__media-window">
                    <MediaGallery
                      pageRef={pageRef}
                      gallery={{
                        slug: caseStudy.slug,
                        media: caseStudy.media,
                      }}
                    />
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
                  pageRef={pageRef}
                  gallery={{
                    slug: project.rewardsGallery.slug,
                    media: project.rewardsGallery.media,
                    headerLabel: "Selected Rewards",
                    hintLabel: "Hackathon highlights",
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
