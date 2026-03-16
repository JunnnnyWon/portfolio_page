import { motion } from "motion/react";
import { projectCards, type ProjectSlug } from "../data/portfolio";
import { fadeUp, quickTransition, staggerChildren } from "../lib/motion";

type ProjectsSectionProps = {
  progress: number;
  reducedMotion: boolean;
  onOpenProject: (slug: ProjectSlug) => void;
};

export function ProjectsSection({
  progress,
  reducedMotion,
  onOpenProject,
}: ProjectsSectionProps) {
  const featuredProjects = projectCards.slice(0, 3);
  const reveal = reducedMotion ? undefined : "hidden";
  const previewSlots = ["one", "two", "three"] as const;

  return (
    <section id="projects" className="scene scene--projects">
      <div
        className="projects-stage projects-stage--showcase"
        data-reduced-motion={reducedMotion}
        style={{ ["--projects-progress" as string]: `${progress}` }}
      >
        <motion.div
          className="projects-stage__header"
          variants={staggerChildren(0.08)}
          initial={reveal}
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.div
            className="projects-stage__header-title"
            variants={fadeUp(20)}
          >
            <span className="projects-stage__backdrop">PROJECTS</span>
            <h2>주요 작업물</h2>
          </motion.div>
          <motion.span
            className="projects-stage__underline"
            aria-hidden="true"
            variants={fadeUp(20)}
          />
          <motion.p variants={fadeUp(20)}>
            작업 성격별로 바로 들어갈 수 있게 세 갈래로 정리했습니다. 각
            카드를 누르면 해당 카테고리의 상세 페이지로 이어집니다.
          </motion.p>
        </motion.div>

        <div className="projects-showcase">
          <motion.ol
            className="projects-card-stack"
            aria-label="주요 작업물 목록"
            variants={staggerChildren(0.12, 0.06)}
            initial={reveal}
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
          >
            {featuredProjects.map((card, index) => (
              <li key={card.index}>
                <motion.button
                  type="button"
                  className={`projects-card projects-card--${card.accent}`}
                  onClick={(event) => {
                    event.preventDefault();
                    event.currentTarget.blur();
                    onOpenProject(card.slug);
                  }}
                  variants={fadeUp(28)}
                  whileHover={
                    reducedMotion
                      ? undefined
                      : { y: -7, scale: 1.01, x: index % 2 === 0 ? 3 : -3 }
                  }
                  whileTap={reducedMotion ? undefined : { scale: 0.995 }}
                  transition={quickTransition}
                  aria-label={`${card.title} 상세 페이지로 이동`}
                >
                  <span className="projects-card__bar" aria-hidden="true" />
                  <div className="projects-card__top">
                    <div className="projects-card__heading">
                      <span className="projects-card__index">{card.index}</span>
                      <strong className="projects-card__meta">
                        {card.previewLabel}
                      </strong>
                    </div>

                    <motion.span
                      className="projects-card__spark"
                      aria-hidden="true"
                      animate={
                        reducedMotion
                          ? undefined
                          : {
                              rotate: [0, 18, 0, -18, 0],
                              scale: [1, 1.08, 1, 1.08, 1],
                            }
                      }
                      transition={{
                        duration: 4.8 + index * 0.35,
                        ease: "easeInOut",
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.2,
                      }}
                    />
                  </div>

                  <div className="projects-card__body">
                    <div className="projects-card__visual" aria-hidden="true">
                      {card.previewMedia.map((preview, previewIndex) => (
                        <figure
                          key={preview.src}
                          className={`projects-card__preview projects-card__preview--${previewSlots[previewIndex]}`}
                        >
                          <img src={preview.src} alt="" loading="lazy" />
                        </figure>
                      ))}
                    </div>
                    <p>{card.summary}</p>
                  </div>

                  <div className="projects-card__footer">
                    <span className="projects-card__note">
                      <span>자세히 보기</span>
                      <span className="projects-card__arrow" aria-hidden="true" />
                    </span>
                  </div>
                </motion.button>
              </li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
