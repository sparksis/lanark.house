"use client";

import { useState, useEffect } from "react";

type CheckItem = {
  id: string;
  label: string;
};

type Phase = {
  name: string;
  items: CheckItem[];
};

const phases: Phase[] = [
  {
    name: "1. Research & Preparation",
    items: [
      { id: "r1", label: "Set a realistic budget (include closing costs, furniture, moving)" },
      { id: "r2", label: "Get mortgage pre-approval from at least 2 lenders" },
      { id: "r3", label: "Research builders: reviews, ratings, warranty history" },
      { id: "r4", label: "Visit model homes and open houses" },
      { id: "r5", label: "Understand HOA rules and restrictive covenants" },
      { id: "r6", label: "Check builder's BBB rating and complaint history" },
    ],
  },
  {
    name: "2. Builder Selection",
    items: [
      { id: "b1", label: "Request a sample contract BEFORE signing anything" },
      { id: "b2", label: "Verify the builder's legal name matches the contract" },
      { id: "b3", label: "Ask about the e-signing process and verify legitimacy" },
      { id: "b4", label: "Get all verbal promises in writing" },
      { id: "b5", label: "Compare at least 3 builders before committing" },
      { id: "b6", label: "Check for plot plan discrepancies" },
    ],
  },
  {
    name: "3. Contract Review",
    items: [
      { id: "c1", label: "Read every line of the contract — no exceptions" },
      { id: "c2", label: "Verify all specifications match brochure/verbal promises" },
      { id: "c3", label: "Confirm your legal name is correct on all documents" },
      { id: "c4", label: "Understand the deposit structure and timeline" },
      { id: "c5", label: "Review cancellation and termination clauses" },
      { id: "c6", label: "Have a lawyer review the contract if possible" },
    ],
  },
  {
    name: "4. Financing & Legal",
    items: [
      { id: "f1", label: "Finalize mortgage approval" },
      { id: "f2", label: "Arrange homeowner's insurance" },
      { id: "f3", label: "Set up a real estate lawyer for closing" },
      { id: "f4", label: "Review title search results" },
      { id: "f5", label: "Confirm all conditions are waived" },
    ],
  },
  {
    name: "5. Pre-Possession",
    items: [
      { id: "p1", label: "Attend pre-drywall walkthrough" },
      { id: "p2", label: "Hire an independent home inspector" },
      { id: "p3", label: "Document all deficiencies with photos and notes" },
      { id: "p4", label: "Confirm possession date and key handover process" },
      { id: "p5", label: "Set up utilities (gas, electric, water, internet)" },
      { id: "p6", label: "Arrange moving logistics" },
    ],
  },
  {
    name: "6. Post-Possession",
    items: [
      { id: "pp1", label: "Complete possession day walkthrough with builder" },
      { id: "pp2", label: "File warranty requests promptly — document everything" },
      { id: "pp3", label: "Track all outstanding items with dates and photos" },
      { id: "pp4", label: "Follow up on seasonal work (landscaping, grading)" },
      { id: "pp5", label: "Test all appliances, plumbing, HVAC within first week" },
      { id: "pp6", label: "Register smart home devices and extended warranties" },
    ],
  },
];

export default function ChecklistPage() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem("checklist");
      if (saved) setChecked(JSON.parse(saved));
    } catch {
      // localStorage unavailable
    }
  }, []);

  function toggle(id: string) {
    setChecked((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem("checklist", JSON.stringify(next));
      } catch {
        // localStorage unavailable
      }
      return next;
    });
  }

  const totalItems = phases.reduce((sum, p) => sum + p.items.length, 0);
  const checkedCount = Object.values(checked).filter(Boolean).length;
  const progress = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-display text-3xl font-bold mb-2">
        New Home Buyer Checklist
      </h1>
      <p className="text-[var(--color-text-muted)] mb-6">
        A comprehensive checklist based on lessons learned from 18 months of
        navigating builders. Your progress is saved locally.
      </p>

      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-[var(--color-text-muted)]">
            {checkedCount} of {totalItems} complete
          </span>
          <span className="text-[var(--color-accent)] font-medium">
            {progress}%
          </span>
        </div>
        <div className="w-full h-2 bg-[var(--color-surface-card)] rounded-full border border-[var(--color-border)]">
          <div
            className="h-full bg-[var(--color-accent)] rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="space-y-8">
        {phases.map((phase) => {
          const phaseChecked = phase.items.filter((i) => checked[i.id]).length;
          return (
            <section key={phase.name}>
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-display text-lg font-bold">
                  {phase.name}
                </h2>
                <span className="text-sm text-[var(--color-text-muted)]">
                  {phaseChecked}/{phase.items.length}
                </span>
              </div>
              <div className="space-y-2">
                {phase.items.map((item) => (
                  <label
                    key={item.id}
                    className="flex items-start gap-3 p-3 rounded-lg bg-[var(--color-surface-card)] border border-[var(--color-border)] cursor-pointer hover:border-[var(--color-accent)] transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={!!checked[item.id]}
                      onChange={() => toggle(item.id)}
                      className="mt-0.5 accent-[var(--color-accent)]"
                    />
                    <span
                      className={
                        checked[item.id]
                          ? "line-through text-[var(--color-text-muted)]"
                          : ""
                      }
                    >
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
