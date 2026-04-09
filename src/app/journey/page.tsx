import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journey Timeline",
  description:
    "The full timeline of the lanark.house home-buying journey: from first open house to possession day.",
};

const phases = [
  {
    name: "Discovery",
    color: "#918d87",
    events: [
      {
        date: "March 2024",
        title: "First Open House",
        description: "Visited a condo in Glenbrook, Calgary. The journey begins.",
      },
      {
        date: "September 2024",
        title: "More Open Houses",
        description:
          "Continued exploring options across Calgary and surrounding areas.",
      },
      {
        date: "October 27, 2024",
        title: "Cochrane Open House",
        description: "Visited 333 Clydesdale Way, Cochrane.",
      },
      {
        date: "November 8, 2024",
        title: "Mortgage Appointment",
        description:
          "Met with Trina Foot to begin the mortgage pre-approval process.",
      },
    ],
  },
  {
    name: "Douglas Homes",
    color: "#e85050",
    events: [
      {
        date: "November 12, 2024",
        title: "Met Trish Braun",
        description:
          "Signed Douglas Homes contract. Trish Braun refused to provide a sample contract beforehand.",
      },
      {
        date: "November 14, 2024",
        title: "Schedule C Denied",
        description:
          "Trish stated that Schedule C (Home Warranty) would not be provided until closing.",
      },
      {
        date: "November 18, 2024",
        title: "Plot Plan Dispute",
        description:
          "Discovered 8-inch discrepancy between architectural guidelines and as-built property. Douglas Homes refused to seek a waiver.",
      },
      {
        date: "November 20, 2024",
        title: "Deal Collapses",
        description:
          "Douglas Homes refused to resolve the plot plan discrepancy. Deal terminated. Rating: 1/5.",
      },
    ],
  },
  {
    name: "Jayman Built",
    color: "#e8b355",
    events: [
      {
        date: "March 4, 2025",
        title: "Purchase Agreement Received",
        description:
          "Began the purchase process for 71 Legacy Reach Court SE in the Legacy community.",
      },
      {
        date: "April 10–11, 2025",
        title: "Shower Specification Dispute",
        description:
          "Conflicting specs from sales: first 70\" with 5mm glass, then 75\" with 6mm — neither matching the brochure's 80\" with 10mm.",
      },
      {
        date: "April 11–27, 2025",
        title: "Management Silence",
        description:
          "Requested escalation to Sales Manager Michael Klassen. No response for 16+ days despite multiple follow-ups.",
      },
      {
        date: "Early May 2025",
        title: "Builder Terminates",
        description:
          "Jayman Built terminated the purchase agreement rather than resolve the shower dispute. Rating: 2/5.",
      },
    ],
  },
  {
    name: "Sterling Homes",
    color: "#52c41a",
    events: [
      {
        date: "May 3, 2025",
        title: "First Contact with Sterling",
        description:
          "Met Jason Tang. Immediate contrast — collaborative, transparent, and professional.",
      },
      {
        date: "May 21, 2025",
        title: "Mortgage Approved",
        description: "CIBC mortgage approved for 728 Langley Terrace SE.",
      },
      {
        date: "May 27, 2025",
        title: "New Home Walkthrough",
        description:
          "Walked through the home at 728 Langley Terrace with the Sterling team.",
      },
      {
        date: "May 28, 2025",
        title: "Home Inspection",
        description:
          "Marty Keough from Nook & Cranny completed a thorough home inspection.",
      },
      {
        date: "June 2, 2025",
        title: "POSSESSION DAY",
        description:
          "Took possession of 728 Langley Terrace SE, Airdrie AB T4A 3R1. Rating: 4/5.",
      },
      {
        date: "July 16, 2025",
        title: "First Warranty Request",
        description:
          "Filed warranty request #J158004. Beginning of post-possession phase.",
      },
      {
        date: "September 4, 2025",
        title: "Seasonal Work Complete",
        description: "Driveway, walkway concrete pour, and fence/deck work completed.",
      },
      {
        date: "April 2026",
        title: "Ongoing Warranty Management",
        description:
          "Sterling HomeBase warranty portal launched. 28 outstanding items being tracked.",
      },
    ],
  },
];

export default function JourneyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-display text-3xl font-bold mb-2">Journey Timeline</h1>
      <p className="text-[var(--color-text-muted)] mb-10">
        March 2024 to April 2026 — 18 months of navigating the new home
        purchase process in Alberta.
      </p>

      <div className="space-y-12">
        {phases.map((phase) => (
          <section key={phase.name}>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: phase.color }}
              />
              <h2 className="font-display text-xl font-bold">{phase.name}</h2>
            </div>

            <div className="ml-1.5 space-y-0">
              {phase.events.map((event, i) => (
                <div
                  key={i}
                  className="relative pl-8 pb-8 border-l-2 last:border-l-0 last:pb-0"
                  style={{ borderColor: phase.color }}
                >
                  <div
                    className="absolute -left-[9px] top-0 w-4 h-4 rounded-full"
                    style={{ backgroundColor: phase.color }}
                  />
                  <time className="text-sm text-[var(--color-text-muted)]">
                    {event.date}
                  </time>
                  <h3 className="text-lg font-medium mt-1">{event.title}</h3>
                  <p className="mt-1 text-[var(--color-text-muted)]">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
