import { useEffect, useLayoutEffect, useState } from "react";
import { AnimatePresence, LazyMotion, MotionConfig, domAnimation } from "motion/react";
import { FloatingNav } from "./components/FloatingNav";
import { HeroSection } from "./components/HeroSection";
import { ProfileSection } from "./components/ProfileSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { CareerSection } from "./components/CareerSection";
import { ContactSection } from "./components/ContactSection";
import { ProjectDetailPage } from "./components/ProjectDetailPage";
import { projectDetails, sectionOrder, type ProjectSlug } from "./data/portfolio";
import { useReducedMotion } from "./hooks/useReducedMotion";
import { useSectionTransitions } from "./hooks/useSectionTransitions";

function jumpToScroll(top: number) {
  const root = document.documentElement;
  const previousBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  window.scrollTo({ top, left: 0, behavior: "auto" });
  root.style.scrollBehavior = previousBehavior;
}

function resolveRoute(pathname: string) {
  const normalized = pathname.replace(/\/+$/, "") || "/";

  if (normalized === "/") {
    return { type: "home" as const };
  }

  const match = normalized.match(/^\/projects\/([^/]+)$/);

  if (!match) {
    return { type: "not-found" as const };
  }

  const slug = match[1] as ProjectSlug;

  if (!projectDetails[slug]) {
    return { type: "not-found" as const };
  }

  return { type: "project" as const, slug };
}

function NotFoundPage() {
  return (
    <div className="detail-page detail-page--violet">
      <main className="detail-shell detail-shell--not-found">
        <section className="detail-hero detail-hero--not-found">
          <div className="detail-hero__copy">
            <span className="detail-hero__eyebrow">404 / CASE STUDY</span>
            <h1>요청한 프로젝트 페이지를 찾지 못했습니다.</h1>
            <p className="detail-hero__summary">
              링크가 바뀌었거나 아직 연결되지 않은 경로입니다. 프로젝트
              섹션으로 돌아가서 다른 카테고리를 선택해 주세요.
            </p>
            <a className="detail-nav__back detail-nav__back--inline" href="/#projects">
              프로젝트 섹션으로 돌아가기
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default function App() {
  const reducedMotion = useReducedMotion();
  const [route, setRoute] = useState(() => resolveRoute(window.location.pathname));
  const [lockedHomeScroll, setLockedHomeScroll] = useState<number | null>(null);
  const { activeId, progress } = useSectionTransitions(sectionOrder);

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    const handlePopState = () => {
      setRoute(resolveRoute(window.location.pathname));
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useLayoutEffect(() => {
    if (route.type !== "project" || lockedHomeScroll == null) {
      return;
    }

    const body = document.body;
    const previousPosition = body.style.position;
    const previousTop = body.style.top;
    const previousLeft = body.style.left;
    const previousRight = body.style.right;
    const previousWidth = body.style.width;
    const previousOverflowY = body.style.overflowY;

    body.style.position = "fixed";
    body.style.top = `-${lockedHomeScroll}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflowY = "scroll";

    return () => {
      body.style.position = previousPosition;
      body.style.top = previousTop;
      body.style.left = previousLeft;
      body.style.right = previousRight;
      body.style.width = previousWidth;
      body.style.overflowY = previousOverflowY;
      jumpToScroll(lockedHomeScroll);
    };
  }, [lockedHomeScroll, route.type]);

  useEffect(() => {
    if (route.type === "project" || lockedHomeScroll == null) {
      return;
    }

    setLockedHomeScroll(null);
  }, [lockedHomeScroll, route.type]);

  const navigateToProject = (slug: ProjectSlug) => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    if (route.type !== "project") {
      setLockedHomeScroll(window.scrollY);
    }
    window.history.pushState({}, "", `/projects/${slug}`);
    setRoute({ type: "project", slug });
  };

  const navigateHome = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    window.history.pushState({}, "", "/");
    setRoute({ type: "home" });
  };

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion={reducedMotion ? "always" : "never"}>
        <div className="app-shell">
          <div className="app-stage">
            <AnimatePresence>
              {activeId !== "hero" ? <FloatingNav activeId={activeId} /> : null}
            </AnimatePresence>

            <main className="portfolio-page">
              <HeroSection
                progress={progress.hero}
                reducedMotion={reducedMotion}
              />
              <ProfileSection
                progress={progress.profile}
                reducedMotion={reducedMotion}
              />
              <ProjectsSection
                progress={progress.projects}
                reducedMotion={reducedMotion}
                onOpenProject={navigateToProject}
              />
              <CareerSection
                progress={progress.career}
                reducedMotion={reducedMotion}
              />
              <ContactSection
                progress={progress.contact}
                reducedMotion={reducedMotion}
              />
            </main>

            {route.type === "project" ? (
              <ProjectDetailPage
                key={route.slug}
                project={projectDetails[route.slug]}
                reducedMotion={reducedMotion}
                onNavigateHome={navigateHome}
              />
            ) : null}

            {route.type === "not-found" ? <NotFoundPage /> : null}
          </div>
        </div>
      </MotionConfig>
    </LazyMotion>
  );
}
