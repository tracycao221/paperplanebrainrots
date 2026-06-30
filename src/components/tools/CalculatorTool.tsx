"use client";

import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/ui/content";

export function CalculatorTool() {
  const [currentMoney, setCurrentMoney] = useState(500);
  const [moneyPerMinute, setMoneyPerMinute] = useState(120);
  const [minutes, setMinutes] = useState(30);
  const [currentDistance, setCurrentDistance] = useState(80);
  const [upgradeCost, setUpgradeCost] = useState(250);
  const [distanceGain, setDistanceGain] = useState(12);
  const [floorCost, setFloorCost] = useState(1500);

  const result = useMemo(() => {
    const farmedMoney = Math.max(0, moneyPerMinute) * Math.max(0, minutes);
    const totalMoney = Math.max(0, currentMoney) + farmedMoney;
    const upgrades = upgradeCost > 0 ? Math.floor(totalMoney / upgradeCost) : 0;
    const estimatedDistance = Math.max(0, currentDistance) + upgrades * Math.max(0, distanceGain);
    const moneyAfterUpgrades = upgradeCost > 0 ? totalMoney - upgrades * upgradeCost : totalMoney;
    const floorGap = Math.max(0, floorCost - totalMoney);

    let recommendation = "Farm a little longer before spending, then compare the next dumbbell cost with your floor target.";
    if (floorCost > 0 && totalMoney >= floorCost) {
      recommendation = "You can afford the floor target now. Check whether the new floor gives better Brainrot income before buying more dumbbells.";
    } else if (upgrades >= 3) {
      recommendation = "You can afford several dumbbell upgrades. Buy in small batches, test distance, then update the gain number here.";
    } else if (moneyPerMinute > 0 && floorGap / moneyPerMinute <= 10) {
      recommendation = "The next floor is close. Save money unless one more dumbbell unlocks a better Brainrot catch.";
    }

    return { totalMoney, upgrades, estimatedDistance, moneyAfterUpgrades, floorGap, recommendation };
  }, [currentDistance, currentMoney, distanceGain, floorCost, minutes, moneyPerMinute, upgradeCost]);

  const numberInput = (
    label: string,
    value: number,
    setValue: (value: number) => void,
    suffix?: string
  ) => (
    <label className="grid gap-2">
      <span className="text-sm font-bold text-white">{label}</span>
      <div className="flex overflow-hidden rounded-lg border border-white/10 bg-[#111113]">
        <input
          type="number"
          min="0"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
          className="min-w-0 flex-1 bg-transparent px-3 py-3 text-white outline-none"
        />
        {suffix ? <span className="grid place-items-center px-3 text-sm font-bold text-white/55">{suffix}</span> : null}
      </div>
    </label>
  );

  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="content-card">
        <SectionHeader eyebrow="Inputs" title="Estimate your next throw path" />
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {numberInput("Current money", currentMoney, setCurrentMoney)}
          {numberInput("Money per minute", moneyPerMinute, setMoneyPerMinute, "/ min")}
          {numberInput("Farm time", minutes, setMinutes, "min")}
          {numberInput("Current throw distance", currentDistance, setCurrentDistance)}
          {numberInput("Next dumbbell cost", upgradeCost, setUpgradeCost)}
          {numberInput("Distance gain per upgrade", distanceGain, setDistanceGain)}
          {numberInput("Next floor cost", floorCost, setFloorCost)}
        </div>
      </div>

      <div className="content-card">
        <SectionHeader eyebrow="Estimated output" title="Money, upgrades, and distance" />
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">Money after farming</p>
            <p className="mt-2 text-2xl font-extrabold text-white">{Math.floor(result.totalMoney).toLocaleString()}</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">Dumbbells affordable</p>
            <p className="mt-2 text-2xl font-extrabold text-white">{result.upgrades.toLocaleString()}</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">Estimated distance</p>
            <p className="mt-2 text-2xl font-extrabold text-white">{Math.floor(result.estimatedDistance).toLocaleString()}</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">Floor gap</p>
            <p className="mt-2 text-2xl font-extrabold text-white">{Math.floor(result.floorGap).toLocaleString()}</p>
          </div>
        </div>
        <p className="mt-6 text-2xl font-extrabold leading-9 text-white">{result.recommendation}</p>
        <p className="mt-5 text-sm leading-6 text-white/60">
          These are estimated numbers. Replace the defaults with your own in-game money, Brainrot income, dumbbell cost, and floor target after each test throw.
        </p>
      </div>
    </div>
  );
}
