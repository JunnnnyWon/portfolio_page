import { motion } from "motion/react";
import type { ReactNode } from "react";
import {
  operatingServices,
  showcaseRepos,
  supportPrograms,
  type ShowcaseRepo,
} from "../data/portfolio";
import { fadeUp, quickTransition, staggerChildren } from "../lib/motion";

type GithubSectionProps = {
  progress: number;
  reducedMotion: boolean;
};

function RepoLinks({ repo }: { repo: ShowcaseRepo }) {
  return (
    <div className="project-row__links">
      {repo.homepage ? (
        <a
          href={repo.homepage}
          target="_blank"
          rel="noopener noreferrer"
          className={`project-row__link ${
            repo.kind === "service" ? "project-row__link--service" : ""
          }`}
          aria-label={`${repo.name} 서비스 열기`}
        >
          <span>{repo.kind === "service" ? "서비스 열기" : "Live"}</span>
          <span aria-hidden="true">↗</span>
        </a>
      ) : null}
      {repo.repoUrl ? (
        <a
          href={repo.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-row__link project-row__link--muted"
          aria-label={`${repo.name} GitHub 저장소 열기`}
        >
          <span>GitHub</span>
          <span aria-hidden="true">↗</span>
        </a>
      ) : null}
    </div>
  );
}

function ProjectRow({
  repo,
  reducedMotion,
  variant,
}: {
  repo: ShowcaseRepo;
  reducedMotion: boolean;
  variant: "service" | "repository";
}) {
  const stack = repo.stack?.filter(
    (item) => item.toLowerCase() !== repo.language?.toLowerCase(),
  );

  return (
    <motion.li
      className={`project-row project-row--${variant}`}
      variants={fadeUp(24)}
      whileHover={reducedMotion ? undefined : { x: 3 }}
      transition={quickTransition}
    >
      <div className="project-row__inner">
        <div className="project-row__body">
          <div className="project-row__eyebrow">
            <span>{repo.context ?? repo.role}</span>
          </div>
          <div className="project-row__title-line">
            <h3>{repo.name}</h3>
            <span className="project-row__arrow" aria-hidden="true">
              ↗
            </span>
          </div>
          <p>{repo.description}</p>
          {stack?.length ? (
            <div className="project-row__stack" aria-label="기술 스택">
              {stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          ) : null}
        </div>
        <RepoLinks repo={repo} />
      </div>
    </motion.li>
  );
}

function ProjectGroup({
  label,
  count,
  children,
  reducedMotion,
}: {
  label: string;
  count: string;
  children: ReactNode;
  reducedMotion: boolean;
}) {
  return (
    <motion.div
      className="project-group"
      variants={staggerChildren(0.08, 0.04)}
      initial={reducedMotion ? undefined : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
    >
      <div className="project-group__heading">
        <span>{label}</span>
        <span>{count}</span>
      </div>
      {children}
    </motion.div>
  );
}

export function GithubSection({
  progress,
  reducedMotion,
}: GithubSectionProps) {
  const reveal = reducedMotion ? undefined : "hidden";

  return (
    <section id="projects" className="scene scene--github">
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
          <motion.div className="career-stage__heading" variants={fadeUp(20)}>
            <h2>대표 저장소</h2>
          </motion.div>
          <motion.p variants={fadeUp(20)}>
            실험을 작동하는 결과물로 옮긴 프로젝트와 실제로 배포·운영 중인 서비스를 기록합니다.
          </motion.p>
        </motion.div>

        <div className="projects-showcase">
          <div className="repo-showcase">
            <ProjectGroup
              label="배포 서비스"
              count="3 SERVICES"
              reducedMotion={reducedMotion}
            >
              <motion.ol className="project-list" aria-label="배포 및 운영 중인 서비스 목록">
                {operatingServices.map((repo) => (
                  <ProjectRow
                    key={repo.name}
                    repo={repo}
                    reducedMotion={reducedMotion}
                    variant="service"
                  />
                ))}
              </motion.ol>
            </ProjectGroup>

            <ProjectGroup
              label="대표 저장소"
              count="4 REPOSITORIES"
              reducedMotion={reducedMotion}
            >
              <motion.ol className="project-list" aria-label="대표 GitHub 저장소 목록">
                {showcaseRepos
                  .filter((repo) => repo.kind === "repository")
                  .map((repo) => (
                    <ProjectRow
                      key={repo.name}
                      repo={repo}
                      reducedMotion={reducedMotion}
                      variant="repository"
                    />
                  ))}
              </motion.ol>
            </ProjectGroup>

            <motion.div className="program-strip" variants={fadeUp(18)}>
              <div className="project-group__heading">
                <span>선정 지원사업</span>
                <span>5 PROGRAMS</span>
              </div>
              <div className="program-strip__items">
                {supportPrograms.map((program) => (
                  <span key={program}>{program}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
