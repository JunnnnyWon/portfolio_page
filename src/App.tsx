import { AnimatePresence, LazyMotion, MotionConfig, domAnimation } from "motion/react";
import { FloatingNav } from "./components/FloatingNav";
import { HeroSection } from "./components/HeroSection";
import { ProfileSection } from "./components/ProfileSection";
import { GithubSection } from "./components/GithubSection";
import { CareerSection } from "./components/CareerSection";
import { ContactSection } from "./components/ContactSection";
import { sectionOrder } from "./data/portfolio";
import { useReducedMotion } from "./hooks/useReducedMotion";
import { useSectionTransitions } from "./hooks/useSectionTransitions";

export default function App() {
  const reducedMotion = useReducedMotion();
  const { activeId, progress } = useSectionTransitions(sectionOrder);

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
              <GithubSection
                progress={progress.projects}
                reducedMotion={reducedMotion}
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
          </div>
        </div>
      </MotionConfig>
    </LazyMotion>
  );
}
