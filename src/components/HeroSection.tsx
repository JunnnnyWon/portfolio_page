import { motion } from "motion/react";
import { fadeUp, quickTransition, staggerChildren } from "../lib/motion";

type HeroSectionProps = {
  progress: number;
  reducedMotion: boolean;
};

export function HeroSection({ progress: _progress, reducedMotion }: HeroSectionProps) {
  const reveal = reducedMotion ? undefined : "hidden";
  const animate = "visible";

  return (
    <section id="hero" className="scene scene--hero">
      <div className="hero-stage">
        <motion.div
          className="hero-stage__brand"
          variants={fadeUp(18)}
          initial={reveal}
          animate={animate}
        >
          <strong>조원준 포트폴리오</strong>
          <span>CHO WON JUN</span>
        </motion.div>

        <motion.nav
          className="hero-stage__nav"
          aria-label="히어로 섹션 탐색"
          variants={staggerChildren(0.06)}
          initial={reveal}
          animate={animate}
        >
          <motion.a href="#profile" variants={fadeUp(18, 0.04)} whileHover={{ y: -1.5 }} transition={quickTransition}>소개</motion.a>
          <motion.a href="#projects" variants={fadeUp(18, 0.08)} whileHover={{ y: -1.5 }} transition={quickTransition}>프로젝트</motion.a>
          <motion.a href="#contact" variants={fadeUp(18, 0.12)} whileHover={{ y: -1.5 }} transition={quickTransition}>연락처</motion.a>
        </motion.nav>

        <motion.h1
          className="hero-stage__role"
          variants={fadeUp(28, 0.08)}
          initial={reveal}
          animate={animate}
        >
          AI 콘텐츠 &amp; 3D엔진 개발자
        </motion.h1>

        <motion.div
          className="hero-stage__visual"
          aria-hidden="true"
          initial={reveal ? { opacity: 0, scale: 0.96 } : false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            className="hero-stage__stairs"
            src="/assets/hero/figma-stairs.png"
            alt=""
          />
          <img
            className="hero-stage__orb"
            src="/assets/hero/orb.png"
            alt=""
          />
          <div className="hero-stage__wordmark">
            <span className="hero-stage__wordmark-port">PORT</span>
            <span className="hero-stage__wordmark-folio">FOLIO</span>
          </div>
          <img
            className="hero-stage__cursor"
            src="/assets/hero/cursor.png"
            alt=""
          />
        </motion.div>

        <motion.div
          className="hero-stage__copy"
          variants={staggerChildren(0.08, 0.14)}
          initial={reveal}
          animate={animate}
        >
          <motion.p className="hero-stage__intro" variants={fadeUp(18)}>
            AI와 3D 엔진의 접점에서, 사용자가 직접 체감할 수 있는 콘텐츠를
            만드는 개발자로 성장해가고자 합니다.
          </motion.p>
          <motion.p className="hero-stage__body" variants={fadeUp(18)}>
            안녕하세요! 저는 AI 기술과 3D 엔진을 기반으로 콘텐츠를 개발하는{" "}
            <strong>조원준</strong>입니다. 새로운 기술을 빠르게 익히고, 이를
            실제로 구현 가능한 형태로 정리해내는 과정도 중요하게 생각합니다.
          </motion.p>
          <motion.div className="hero-stage__stars" variants={fadeUp(18)}>
            ✦ ✦ ✦
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
