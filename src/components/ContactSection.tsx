import { motion } from "motion/react";
import { contactCards } from "../data/portfolio";
import { fadeUp, quickTransition, staggerChildren } from "../lib/motion";
import { MailIcon, MapPinIcon, PhoneIcon } from "./Icons";

type ContactSectionProps = {
  progress: number;
  reducedMotion: boolean;
};

export function ContactSection({
  progress,
  reducedMotion,
}: ContactSectionProps) {
  const eased = reducedMotion ? 0 : progress;
  const burstScale = 0.92 - eased * 0.05;
  const reveal = reducedMotion ? undefined : "hidden";

  const iconMap = {
    email: MailIcon,
    phone: PhoneIcon,
    location: MapPinIcon,
  } as const;

  return (
    <section id="contact" className="scene scene--contact">
      <div className="scene__sticky contact-stage">
        <img
          className="contact-stage__burst"
          src="/assets/contact/star-burst.png"
          alt=""
          aria-hidden="true"
          style={{ ["--burst-scale" as string]: `${burstScale}` }}
        />
        <div className="contact-stage__overlay" />

        <motion.div
          className="contact-stage__header"
          variants={staggerChildren(0.08)}
          initial={reveal}
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.span variants={fadeUp(18)}>CONTACT ME</motion.span>
          <motion.h2 variants={fadeUp(24)}>
            함께 새로운
            <br />
            아이디어를 구현해봐요.
          </motion.h2>
          <motion.p variants={fadeUp(18)}>
            AI 및 3D 그래픽스 관련 프로젝트, 협업, 또는 가벼운 커피챗도
            환영합니다. 아래 연락처를 통해 편하게 메시지 남겨주세요.
          </motion.p>
        </motion.div>

        <motion.div
          className="contact-stage__cards"
          variants={staggerChildren(0.1, 0.08)}
          initial={reveal}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {contactCards.map((item) => (
            <motion.article
              key={item.key}
              className="contact-card"
              variants={fadeUp(22)}
              whileHover={reducedMotion ? undefined : { y: -4, scale: 1.01 }}
              transition={quickTransition}
            >
              <div className="contact-card__icon">
                {(() => {
                  const Icon = iconMap[item.key as keyof typeof iconMap];
                  return <Icon className="contact-card__icon-svg" />;
                })()}
              </div>
              <h3>{item.label}</h3>
              <p>{item.value}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.footer
          className="contact-stage__footer"
          variants={staggerChildren(0.08)}
          initial={reveal}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p variants={fadeUp(18)}>© 2026 CHO WON JUN PORTFOLIO.</motion.p>
          <motion.p variants={fadeUp(18)}>DESIGNED &amp; BUILT FOR EXCELLENCE.</motion.p>
        </motion.footer>
      </div>
    </section>
  );
}
