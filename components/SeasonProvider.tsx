"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import {
  isSeason,
  seasonForMonth,
  timeOfDayForHour,
  type Season,
  type TimeOfDay,
} from "@/lib/seasons";

type BurstFn = (x: number, y: number) => void;

type SeasonContextValue = {
  season: Season | null;
  timeOfDay: TimeOfDay;
  reducedMotion: boolean;
  setSeason: (season: Season, persist?: boolean) => void;
  burst: BurstFn;
  registerBurst: (fn: BurstFn | null) => void;
};

const SeasonContext = createContext<SeasonContextValue | null>(null);

const COLOR_PROPS = [
  "--sky1", "--sky2", "--ink", "--muted", "--accent", "--h1", "--h2",
  "--h3", "--canopy", "--sun", "--bark", "--rule",
];

function registerAnimatableProps() {
  if (typeof CSS === "undefined" || !("registerProperty" in CSS)) return;
  try {
    COLOR_PROPS.forEach((name) =>
      CSS.registerProperty({ name, syntax: "<color>", inherits: true, initialValue: "#000" }),
    );
    CSS.registerProperty({ name: "--leaf", syntax: "<number>", inherits: true, initialValue: "1" });
    CSS.registerProperty({ name: "--cloud", syntax: "<number>", inherits: true, initialValue: "0" });
  } catch {
    // Already registered (e.g. after a fast refresh).
  }
}

export function SeasonProvider({ children }: { children: React.ReactNode }) {
  const [season, setSeasonState] = useState<Season | null>(null);
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>("day");
  const [reducedMotion, setReducedMotion] = useState(false);
  const burstRef = useRef<BurstFn | null>(null);

  useEffect(() => {
    registerAnimatableProps();
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    const fromDom = document.documentElement.dataset.season;
    let saved: string | null = null;
    try {
      saved = localStorage.getItem("season");
    } catch {}
    setSeasonState(
      isSeason(fromDom) ? fromDom : isSeason(saved) ? saved : seasonForMonth(new Date().getMonth()),
    );

    const updateTod = () => setTimeOfDay(timeOfDayForHour(new Date().getHours()));
    updateTod();
    const id = window.setInterval(updateTod, 600_000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (season) document.documentElement.dataset.season = season;
  }, [season]);

  useEffect(() => {
    document.documentElement.dataset.tod = timeOfDay;
  }, [timeOfDay]);

  const setSeason = useCallback((next: Season, persist = false) => {
    setSeasonState(next);
    if (persist) {
      try {
        localStorage.setItem("season", next);
      } catch {}
    }
  }, []);

  const burst = useCallback<BurstFn>((x, y) => burstRef.current?.(x, y), []);
  const registerBurst = useCallback((fn: BurstFn | null) => {
    burstRef.current = fn;
  }, []);

  const value = useMemo(
    () => ({ season, timeOfDay, reducedMotion, setSeason, burst, registerBurst }),
    [season, timeOfDay, reducedMotion, setSeason, burst, registerBurst],
  );

  return <SeasonContext.Provider value={value}>{children}</SeasonContext.Provider>;
}

export function useSeason() {
  const ctx = useContext(SeasonContext);
  if (!ctx) throw new Error("useSeason must be used inside <SeasonProvider>");
  return ctx;
}
