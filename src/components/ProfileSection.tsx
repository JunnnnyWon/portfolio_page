import {
  startTransition,
  useEffect,
  useState,
  type CSSProperties,
} from "react";
import { useReducedMotion } from "motion/react";
import { profileModes, roleHistory, socialLinks, techStack } from "../data/portfolio";
import { GithubIcon, LinkedInIcon } from "./Icons";

type ProfileSectionProps = {
  progress: number;
  reducedMotion: boolean;
};

const TYPE_INTERVAL_MS = 55;

const socialIconMap = {
  github: GithubIcon,
  linkedin: LinkedInIcon,
} as const;

export function ProfileSection({
  progress,
  reducedMotion,
}: ProfileSectionProps) {
  const systemReducedMotion = useReducedMotion();
  const still = reducedMotion || systemReducedMotion === true;

  const eased = reducedMotion ? 1 : progress;
  const cardOffset = (1 - eased) * 42;
  const metaOffset = (1 - eased) * 56;

  const [activeModeIndex, setActiveModeIndex] = useState(
    Math.max(
      0,
      profileModes.findIndex((mode) => mode.id === "dev"),
    ),
  );
  const activeMode = profileModes[activeModeIndex];

  const [typed, setTyped] = useState(() =>
    still ? activeMode.prompt : "",
  );

  useEffect(() => {
    if (still) {
      setTyped(activeMode.prompt);
      return;
    }

    setTyped("");
    let length = 0;
    const id = window.setInterval(() => {
      length += 1;
      setTyped(activeMode.prompt.slice(0, length));
      if (length >= activeMode.prompt.length) window.clearInterval(id);
    }, TYPE_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [activeMode.prompt, still]);

  const selectMode = (nextIndex: number) => {
    startTransition(() => {
      setActiveModeIndex(nextIndex);
    });
  };

  const cycleMode = () => {
    selectMode((activeModeIndex + 1) % profileModes.length);
  };

  return (
    <section id="profile" className="scene scene--profile">
      <div className="scene__sticky profile-stage">
        <div
          className="profile-card"
          style={
            {
              transform: `translateY(${cardOffset}px)`,
              ["--profile-mode-accent" as string]: activeMode.accent,
            } as CSSProperties
          }
        >
          <div className="profile-card__heading">
            <span>PROFILE</span>
            <h2>프로필</h2>
          </div>

          <div className="prompt-console" role="group" aria-label="프로필 생성 콘솔">
            <div
              className="prompt-console__presets"
              role="tablist"
              aria-label="프로필 생성 프리셋"
            >
              {profileModes.map((mode, index) => (
                <button
                  key={mode.id}
                  type="button"
                  role="tab"
                  aria-selected={index === activeModeIndex}
                  className={
                    index === activeModeIndex
                      ? "prompt-console__preset is-active"
                      : "prompt-console__preset"
                  }
                  onClick={() => selectMode(index)}
                >
                  {mode.label}
                </button>
              ))}
            </div>

            <div className="prompt-console__bar">
              <span className="prompt-console__prefix" aria-hidden="true">
                ›
              </span>
              <p className="prompt-console__text" aria-live="polite">
                {typed}
                <span className="prompt-console__cursor" aria-hidden="true" />
              </p>
              <button
                type="button"
                className="prompt-console__generate"
                onClick={cycleMode}
              >
                Generate
              </button>
            </div>
          </div>

          <div
            className="profile-output"
            key={activeMode.id}
            data-still={still}
          >
            <div className="profile-output__portrait">
              <img
                className="profile-output__photo"
                src="/assets/profile/profile-photo.png"
                alt="조원준 프로필 사진"
              />
              <div className="profile-output__photo-overlay" aria-hidden="true" />
            </div>

            <div className="profile-card__name-wrap">
              <h3 className="profile-card__name">조원준</h3>
              <p className="profile-card__headline">{activeMode.headline}</p>
              <p className="profile-card__subcopy">{activeMode.subcopy}</p>

              <div className="profile-social" aria-label="소셜 링크">
                {socialLinks.map((item) => {
                  const Icon = socialIconMap[item.key];
                  return (
                    <a
                      key={item.key}
                      className="profile-social__link"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="profile-social__icon" />
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            className="profile-card__meta"
            style={{ transform: `translateY(${metaOffset}px)` }}
          >
            <div className="profile-card__roles">
              {roleHistory.map((item) => (
                <article
                  key={item.order}
                  className={
                    activeMode.highlightedRoles.includes(item.order)
                      ? "profile-role is-active"
                      : "profile-role"
                  }
                >
                  <span className="profile-role__order">{item.order}</span>
                  <div className="profile-role__body">
                    <small>{item.label}</small>
                    <strong>{item.value}</strong>
                  </div>
                </article>
              ))}
            </div>

            <div className="profile-card__tech">
              <p>가용 기술 스택</p>
              <div className="profile-card__tech-grid">
                {techStack.map((stack) => (
                  <span
                    key={stack}
                    className={
                      activeMode.highlightedStacks.includes(stack)
                        ? "is-active"
                        : undefined
                    }
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
