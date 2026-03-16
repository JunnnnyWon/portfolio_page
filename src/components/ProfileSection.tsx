import { startTransition, useState, type CSSProperties } from "react";
import { profileModes, roleHistory, techStack } from "../data/portfolio";

type ProfileSectionProps = {
  progress: number;
  reducedMotion: boolean;
};

export function ProfileSection({
  progress,
  reducedMotion,
}: ProfileSectionProps) {
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
        <div className="profile-stage__background" aria-hidden="true">
          <img
            className="profile-stage__ellipse profile-stage__ellipse--top"
            src="/assets/profile/ellipse-8.svg"
            alt=""
          />
          <img
            className="profile-stage__ellipse profile-stage__ellipse--bottom"
            src="/assets/profile/ellipse-7.svg"
            alt=""
          />
          <img
            className="profile-stage__noise"
            src="/assets/profile/noise.png"
            alt=""
          />
        </div>

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

          <div className="profile-card__canvas">
            <div className="profile-card__frame">
              <div className="profile-card__photo-shell">
                <img
                  className="profile-card__photo"
                  src="/assets/profile/profile-photo.png"
                  alt="조원준 프로필 사진"
                />
                <div
                  className="profile-card__photo-overlay"
                  aria-hidden="true"
                />
                <div className="profile-card__photo-frame" aria-hidden="true" />
              </div>
            </div>

            <div className="profile-card__editor">
              <div className="profile-editor__toolbar">
                <span className="profile-editor__chip">Generative Fill</span>
                <span className="profile-editor__icon profile-editor__icon--crop" />
                <span className="profile-editor__icon profile-editor__icon--layers" />
                <span className="profile-editor__icon profile-editor__icon--spark" />
                <span className="profile-editor__icon profile-editor__icon--mask" />
                <span className="profile-editor__dots">...</span>
                <span className="profile-editor__mute">Deselect</span>
              </div>

              <div
                className="profile-editor__modes"
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
                        ? "profile-editor__mode is-active"
                        : "profile-editor__mode"
                    }
                    onClick={() => selectMode(index)}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>

              <div className="profile-editor__prompt" role="group" aria-label="생성 프롬프트">
                <span className="profile-editor__scroll" />
                <button
                  type="button"
                  className="profile-editor__prompt-text"
                  onClick={cycleMode}
                  aria-label={`${activeMode.prompt} 프리셋 순환`}
                >
                  {activeMode.prompt}
                </button>
                <span className="profile-editor__action">
                  <button
                    type="button"
                    className="profile-editor__generate"
                    onClick={cycleMode}
                  >
                    Generate
                  </button>
                  <span className="profile-editor__check" aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>

          <div className="profile-card__name-wrap">
            <h3 className="profile-card__name">조원준</h3>
            <p className="profile-card__headline">{activeMode.headline}</p>
            <p className="profile-card__subcopy">{activeMode.subcopy}</p>
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
