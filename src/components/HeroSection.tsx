import { motion, useScroll, useTransform } from "motion/react";
import { fadeUp, staggerChildren } from "../lib/motion";

type HeroSectionProps = {
  progress: number;
  reducedMotion: boolean;
};

export function HeroSection({ progress: _progress, reducedMotion }: HeroSectionProps) {
  const reveal = reducedMotion ? undefined : "hidden";
  const animate = "visible";

  // Scroll-driven parallax for 3D depth effect
  const { scrollYProgress } = useScroll();
  const stairsY = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [-30, 30]);
  const orbY = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [-15, 15]);

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
          <motion.img
            className="hero-stage__stairs"
            src="/assets/hero/figma-stairs.png"
            alt=""
            style={{ y: stairsY }}
          />
          <div className="hero-stage__wordmark">
            <motion.img
              className="hero-stage__orb"
              src="/assets/hero/orb.png"
              alt=""
              style={{ y: orbY }}
            />
            <span className="hero-stage__wordmark-port">PORT</span>
            <span className="hero-stage__wordmark-folio">FOLIO</span>
            <img className="hero-stage__cursor" src="/assets/hero/cursor.png" alt="" />
          </div>
        </motion.div>

        <motion.div
          className="hero-stage__copy"
          variants={staggerChildren(0.08, 0.14)}
          initial={reveal}
          animate={animate}
        >
          <motion.p className="hero-stage__intro" variants={fadeUp(18)}>
            AI 기술과 3D 엔진을 연결해, 실험을 사용자가 직접 체감하는 콘텐츠로
            구현합니다. <strong>조원준</strong>입니다.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
