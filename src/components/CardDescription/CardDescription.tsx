import { useState } from "react";

import avatarImage from "../assets/card-description/avatar.png";
import badgeIcon from "../assets/card-description/badge.svg";
import chevronDownIcon from "../assets/card-description/chevron-down.svg";
import thumbsUpIcon from "../assets/card-description/thumbs-up.svg";
import "./CardDescription.css";

const DEFAULT_INSTRUCTIONS = `🔔 Why Choose Us? 🔔
⏱ 24/7 Online Services
⚡ Safe & Fast Delivery
----------------------------------------------------`;

export type CardDescriptionProps = {
  sellerName?: string;
  feedbackScore?: string;
  reviewCount?: string;
  reviewHref?: string;
  instructions?: string;
  avatarSrc?: string;
  defaultExpanded?: boolean;
};

export function CardDescription({
  sellerName = "TokenHut",
  feedbackScore = "99.7%",
  reviewCount = "4,088 reviews",
  reviewHref = "#",
  instructions = DEFAULT_INSTRUCTIONS,
  avatarSrc = avatarImage,
  defaultExpanded = false,
}: CardDescriptionProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <article className="card-description">
      <div className="card-description__label">
        <h3 className="card-description__heading">Seller</h3>
      </div>

      <div className="card-description__user-info">
        <div className="card-description__user">
          <img
            className="card-description__avatar"
            src={avatarSrc}
            alt=""
            width={48}
            height={48}
          />

          <div className="card-description__user-details">
            <div className="card-description__username-row">
              <span className="card-description__username">{sellerName}</span>
              <img
                className="card-description__badge"
                src={badgeIcon}
                alt=""
                width={16}
                height={16}
              />
            </div>

            <div className="card-description__stats">
              <div className="card-description__feedback">
                <img
                  className="card-description__thumbs-up"
                  src={thumbsUpIcon}
                  alt=""
                  width={18}
                  height={18}
                />
                <span className="card-description__feedback-score">{feedbackScore}</span>
              </div>

              <a className="card-description__reviews" href={reviewHref}>
                {reviewCount}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="card-description__description">
        <div
          className={`card-description__instructions${expanded ? " card-description__instructions--expanded" : ""}`}
        >
          <h3 className="card-description__heading">Delivery instructions</h3>

          <div className="card-description__instructions-body">
            {instructions.split("\n").map((line, index) => (
              <p key={index} className="card-description__instruction-line">
                {line}
              </p>
            ))}
          </div>

          {!expanded && (
            <div className="card-description__fade" aria-hidden="true" />
          )}

          <button
            type="button"
            className="card-description__toggle"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
          >
            <span>{expanded ? "Hide instructions" : "View full instructions"}</span>
            <img
              className={`card-description__chevron${expanded ? " card-description__chevron--up" : ""}`}
              src={chevronDownIcon}
              alt=""
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </article>
  );
}
