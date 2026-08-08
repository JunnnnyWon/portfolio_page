import { motion } from "motion/react";
import { contactCards } from "../data/portfolio";
import { fadeUp, quickTransition, staggerChildren } from "../lib/motion";

type ContactSectionProps = {
  progress: number;
  reducedMotion: boolean;
};

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

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

        {/* Contact Info Cards */}
        <motion.div
          className="contact-stage__cards"
          variants={staggerChildren(0.1, 0.08)}
          initial={reveal}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {contactCards.map((item) => {
            const Icon = iconMap[item.key as keyof typeof iconMap];
            return (
              <motion.div
                key={item.key}
                className="contact-card"
                variants={fadeUp(22)}
                whileHover={reducedMotion ? undefined : { y: -4, scale: 1.01 }}
                transition={quickTransition}
              >
                <div className="contact-card__icon">
                  {Icon && <Icon />}
                </div>
                <h3>{item.label}</h3>
                {item.key === "email" ? (
                  <a href={`mailto:${item.value}`}>{item.value}</a>
                ) : item.key === "phone" ? (
                  <a href={`tel:${item.value.replaceAll("-", "")}`}>{item.value}</a>
                ) : (
                  <p>{item.value}</p>
                )}
              </motion.div>
            );
          })}
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
