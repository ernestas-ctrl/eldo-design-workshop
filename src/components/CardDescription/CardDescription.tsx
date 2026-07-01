import avatarImage from "../../assets/card-description/avatar.png";
import badgeIcon from "../../assets/card-description/badge.svg";
import chevronDownIcon from "../../assets/card-description/chevron-down.svg";
import thumbsUpIcon from "../../assets/card-description/thumbs-up.svg";
import "./CardDescription.css";

export type CardDescriptionProps = {
  sellerLabel?: string;
  username?: string;
  avatarSrc?: string;
  feedbackScore?: string;
  reviewCount?: string;
  instructionsTitle?: string;
  instructions?: string[];
  onReviewsClick?: () => void;
  onViewFullInstructions?: () => void;
};

const defaultInstructions = [
  "🔔 Why Choose Us? 🔔",
  "⏱ 24/7 Online Services",
  "⚡ Safe & Fast Delivery",
  "----------------------------------------------------",
];

export function CardDescription({
  sellerLabel = "Seller",
  username = "TokenHut",
  avatarSrc = avatarImage,
  feedbackScore = "99.7%",
  reviewCount = "4,088 reviews",
  instructionsTitle = "Delivery instructions",
  instructions = defaultInstructions,
  onReviewsClick,
  onViewFullInstructions,
}: CardDescriptionProps) {
  return (
    <article className="card-description" data-name="card description">
      <header className="card-description__label">
        <h2 className="card-description__label-text">{sellerLabel}</h2>
      </header>

      <section className="card-description__user-info" aria-label="Seller profile">
        <div className="card-description__user-row">
          <div className="card-description__avatar">
            <img src={avatarSrc} alt="" width={48} height={48} />
          </div>

          <div className="card-description__user-details">
            <div className="card-description__username-row">
              <p className="card-description__username">{username}</p>
              <span className="card-description__badge" aria-hidden="true">
                <img src={badgeIcon} alt="" />
              </span>
            </div>

            <div className="card-description__stats">
              <div className="card-description__feedback">
                <span className="card-description__feedback-icon" aria-hidden="true">
                  <img src={thumbsUpIcon} alt="" />
                </span>
                <p className="card-description__feedback-score">{feedbackScore}</p>
              </div>

              <button
                type="button"
                className="card-description__reviews-link"
                onClick={onReviewsClick}
              >
                {reviewCount}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="card-description__description">
        <div className="card-description__description-inner">
          <h3 className="card-description__description-title">
            {instructionsTitle}
          </h3>

          <div className="card-description__description-content">
            {instructions.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <button
            type="button"
            className="card-description__view-full"
            onClick={onViewFullInstructions}
          >
            <span className="card-description__view-full-text">
              View full instructions
            </span>
            <span className="card-description__view-full-icon" aria-hidden="true">
              <img src={chevronDownIcon} alt="" />
            </span>
          </button>
        </div>
      </section>
    </article>
  );
}
