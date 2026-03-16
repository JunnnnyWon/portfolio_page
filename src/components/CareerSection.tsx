import { useEffect, useRef, useState, type CSSProperties } from "react";
import { activities, awards } from "../data/portfolio";
import { BriefcaseIcon, TrophyIcon } from "./Icons";

type CareerSectionProps = {
  progress: number;
  reducedMotion: boolean;
};

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

export function CareerSection({
  progress,
  reducedMotion,
}: CareerSectionProps) {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [timelineProgress, setTimelineProgress] = useState(clamp(progress));
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const updateTimelineState = () => {
      const timeline = timelineRef.current;
      if (!timeline) {
        return;
      }

      const entries = Array.from(
        timeline.querySelectorAll<HTMLElement>(".timeline-entry"),
      );
      if (!entries.length) {
        return;
      }

      const timelineRect = timeline.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const anchorY = viewportHeight * 0.46;
      const rawProgress = (anchorY - timelineRect.top) / Math.max(timelineRect.height, 1);
      const nextTimelineProgress = clamp(rawProgress);

      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      entries.forEach((entry, index) => {
        const rect = entry.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - anchorY);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      setTimelineProgress(nextTimelineProgress);
      setActiveIndex(nearestIndex);
    };

    updateTimelineState();
    window.addEventListener("scroll", updateTimelineState, { passive: true });
    window.addEventListener("resize", updateTimelineState);

    return () => {
      window.removeEventListener("scroll", updateTimelineState);
      window.removeEventListener("resize", updateTimelineState);
    };
  }, []);

  return (
    <section
      id="career"
      className="scene scene--career"
      style={{ ["--career-progress" as string]: `${timelineProgress}` }}
    >
      <div className="career-stage">
        <div className="career-stage__heading">
          <span>CAREER &amp; HONORS</span>
          <h2>경력 및 수상</h2>
        </div>

        <section className="career-stage__block">
          <div className="career-stage__label">
            <TrophyIcon className="career-stage__label-icon" />
            <h3>Awards</h3>
          </div>

          <div className="career-stage__award-list">
            {awards.map((award) => (
              <article key={`${award.badge}-${award.title}`} className="award-card">
                <span className="award-card__badge">{award.badge}</span>
                <h4>{award.title}</h4>
                <p>{award.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="career-stage__block">
          <div className="career-stage__label">
            <BriefcaseIcon className="career-stage__label-icon" />
            <h3>Activities</h3>
          </div>

          <div className="career-timeline" ref={timelineRef}>
            <div className="career-timeline__line" />
            <div className="career-timeline__line-fill" />

            {activities.map((item, index) => {
              const distance = Math.abs(index - activeIndex);
              const entryProgress = clamp(1 - distance * 0.45);
              const status =
                index < activeIndex
                  ? "completed"
                  : index === activeIndex
                  ? "active"
                  : "inactive";

              return (
                <article
                  key={`${item.category}-${item.title}-${item.meta}`}
                  className={`timeline-entry timeline-entry--${status}`}
                  style={
                    {
                      ["--entry-progress" as string]: `${reducedMotion ? (status !== "inactive" ? 1 : 0) : entryProgress}`,
                    } as CSSProperties
                  }
                >
                  <span className="timeline-entry__dot" />
                  <div className="timeline-entry__body">
                    <span className="timeline-entry__category">{item.category}</span>
                    <h4>{item.title}</h4>
                    <small>{item.meta}</small>
                    <p>{item.description}</p>
                    <div className="timeline-entry__tags">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
}
