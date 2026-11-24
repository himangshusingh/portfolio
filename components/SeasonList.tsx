"use client";

import { substackCard } from "@/lib/content";
import { SEASONS, seasonLabels } from "@/lib/seasons";
import { useSeason } from "./SeasonProvider";

export function SeasonList() {
  const { season, setSeason, burst } = useSeason();

  return (
    <ul className="sea">
      {SEASONS.map((s) => (
        <li key={s}>
          <button
            type="button"
            aria-pressed={season === s}
            onClick={(e) => {
              setSeason(s, true);
              const r = e.currentTarget.getBoundingClientRect();
              burst(r.left + 24, r.top + r.height / 2);
            }}
          >
            {seasonLabels[s]} <span>{substackCard.counts[s]} pieces</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
