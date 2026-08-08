import { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";
import { activities, awards } from "../data/portfolio";
import { fadeUp, quickTransition, staggerChildren } from "../lib/motion";

type CareerSectionProps = {
  progress: number;
  reducedMotion: boolean;
};

const FEATURED_TITLES = [
  "부산 ICT 이노베이션 해커톤",
  "대구 AI·빅데이터 해커톤",
  "중국 길림대 국제 게임잼",
];

const FILTERS = [
  { key: "all", label: "전체" },
  { key: "hackathon", label: "해커톤" },
  { key: "competition", label: "대회" },
  { key: "ai", label: "AI" },
  { key: "education", label: "연구" },
  { key: "business", label: "창업" },
] as const;

type FilterKey = (typeof FILTERS)[number]["key"];

function Countup({ to, still }: { to: number; still: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (still || !inView) {
      node.textContent = String(to);
      return;
    }

    const controls = animate(0, to, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (value) => {
        node.textContent = String(Math.round(value));
      },
    });

    return () => controls.stop();
  }, [inView, still, to]);

  return <span ref={ref}>{to}</span>;
}

export function CareerSection({ reducedMotion }: CareerSectionProps) {
  const systemReducedMotion = useReducedMotion();
  const still = reducedMotion || systemReducedMotion === true;

  const [filter, setFilter] = useState<FilterKey>("all");

  const featured = useMemo(
    () =>
      FEATURED_TITLES.map(
        (title) => awards.find((award) => award.title === title)!,
      ).sort((a, b) => b.year - a.year),
    [],
  );

  const rest = useMemo(
    () =>
      awards
        .filter((award) => !FEATURED_TITLES.includes(award.title))
        .sort((a, b) => {
          if (a.title === "Unist 슈퍼컴퓨팅캠프") return 1;
          if (b.title === "Unist 슈퍼컴퓨팅캠프") return -1;
          return b.year - a.year;
        }),
    [],
  );

  const availableFilters = useMemo(() => {
    const present = new Set(rest.map((award) => award.category));
    return FILTERS.filter((f) => f.key === "all" || present.has(f.key));
  }, [rest]);

  const visible = useMemo(
    () =>
      filter === "all"
        ? rest
        : rest.filter((award) => award.category === filter),
    [filter, rest],
  );

  const years = awards.map((award) => award.year);
  const spanStart = Math.min(...years);
  const spanEnd = Math.max(...years);

  const journalGroups = useMemo(() => {
    const sorted = [...activities].sort((a, b) => b.year - a.year);
    const groups: { year: number; entries: typeof sorted }[] = [];
    for (const activity of sorted) {
      const group = groups.find((g) => g.year === activity.year);
      if (group) group.entries.push(activity);
      else groups.push({ year: activity.year, entries: [activity] });
    }
    return groups;
  }, []);

  const enter = still
    ? {}
    : {
        variants: staggerChildren(0.06),
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, margin: "-60px" },
      };

  const item = still ? {} : { variants: fadeUp(24) };

  return (
    <section id="career" className="scene scene--career">
      <div className="career-stage">
        <div className="career-stage__heading">
          <span>CAREER &amp; HONORS</span>
          <h2>경력 및 수상</h2>
        </div>

        <section className="honors">
          <div className="honors__backdrop" aria-hidden="true" />

          <motion.dl className="honor-stats" {...enter}>
            <motion.div className="honor-stat" {...item}>
              <dt className="honor-stat__label">수상</dt>
              <dd className="honor-stat__value">
                <span>{awards.length}</span>
                <span className="honor-stat__unit">건</span>
              </dd>
            </motion.div>

            <motion.div className="honor-stat" {...item}>
              <dt className="honor-stat__label">활동</dt>
              <dd className="honor-stat__value">
                <Countup to={activities.length} still={still} />
                <span className="honor-stat__unit">건</span>
              </dd>
            </motion.div>

            <motion.div className="honor-stat" {...item}>
              <dt className="honor-stat__label">활동 기간</dt>
              <dd className="honor-stat__value">
                {spanStart}
                <span className="honor-stat__range">~</span>
                {spanEnd}
              </dd>
            </motion.div>
          </motion.dl>

          <motion.ol className="honor-lead" {...enter}>
            {featured.map((award) => (
              <motion.li
                key={award.title}
                className="honor-lead__row"
                whileHover={still ? undefined : { y: -2 }}
                transition={quickTransition}
                {...item}
              >
                <div className="honor-lead__aside">
                  <p className="honor-lead__badge">{award.badge}</p>
                  <p className="honor-lead__year">{award.year}</p>
                </div>
                <div className="honor-lead__body">
                  <h3 className="honor-lead__title">{award.title}</h3>
                  <p className="honor-lead__desc">{award.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>

          <div className="honor-browse">
            <div className="honor-filters" role="group" aria-label="수상 분야 필터">
              {availableFilters.map((option) => (
                <button
                  key={option.key}
                  type="button"
                  className="honor-filter"
                  aria-pressed={filter === option.key}
                  onClick={() => setFilter(option.key)}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <motion.ul className="honor-grid" layout={!still}>
              <AnimatePresence mode="popLayout" initial={false}>
                {visible.map((award) => (
                  <motion.li
                    key={award.title}
                    className="honor-entry"
                    layout={!still}
                    initial={still ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={still ? undefined : { opacity: 0, y: -8 }}
                    transition={quickTransition}
                  >
                    <p className="honor-entry__meta">
                      <span className="honor-entry__badge">{award.badge}</span>
                      <span className="honor-entry__year">{award.year}</span>
                    </p>
                    <h4 className="honor-entry__title">{award.title}</h4>
                    <p className="honor-entry__desc">{award.description}</p>
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
          </div>
        </section>

        <motion.section className="journey" {...enter}>
          <div className="journey__backdrop" aria-hidden="true" />

          <motion.h3 className="journey__title" {...item}>
            활동
          </motion.h3>

          <div className="journey-log">
            {journalGroups.map((group) => (
              <motion.div className="journey-log__group" key={group.year} {...item}>
                <p className="journey-log__year">{group.year}</p>
                <ul className="journey-log__entries">
                  {group.entries.map((activity) => (
                    <li
                      key={`${activity.title}-${activity.meta}`}
                      className="journey-log__entry"
                    >
                      <h5>{activity.title}</h5>
                      <p className="journey-log__role">{activity.meta}</p>
                      <p className="journey-log__desc">{activity.description}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  );
}
