import { sectionLabels, type SectionId } from "../data/portfolio";

type FloatingNavProps = {
  activeId: SectionId;
};

const order: SectionId[] = ["hero", "profile", "projects", "career", "contact"];

export function FloatingNav({ activeId }: FloatingNavProps) {
  return (
    <header className="floating-nav">
      <div className="floating-nav__brand">
        <strong>조원준 포트폴리오</strong>
        <span>CHO WON JUN</span>
      </div>

      <nav className="floating-nav__links" aria-label="포트폴리오 섹션">
        {order.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={id === activeId ? "is-active" : undefined}
          >
            {sectionLabels[id]}
          </a>
        ))}
      </nav>
    </header>
  );
}
