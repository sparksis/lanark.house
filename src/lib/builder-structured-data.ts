/**
 * Per-builder JSON-LD structured data for LocalBusiness and FAQPage schemas.
 */

type BuilderStructuredData = {
  localBusiness: Record<string, unknown>;
  faqPage: Record<string, unknown>;
};

export const builderStructuredData: Record<string, BuilderStructuredData> = {
  "douglas-homes": {
    localBusiness: {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      name: "Douglas Homes",
      url: "https://www.douglashomes.ca",
      address: {
        "@type": "PostalAddress",
        streetAddress: "#12B, 4101 19 Street NE",
        addressLocality: "Calgary",
        addressRegion: "AB",
        addressCountry: "CA",
      },
      description:
        "Douglas Homes is a Calgary-area production home builder. This review covers a spec home purchase in Lanark Landing (Melcor), Airdrie \u2014 specifically Phase 4, Block 13, Lot 1 at 204 Langwell Common SE, Airdrie, AB.",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "1",
        bestRating: "5",
        worstRating: "1",
        reviewCount: "1",
      },
      review: {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Colton English",
        },
        datePublished: "2024-11-20",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "1",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "Serious transparency issues during the purchase process for a spec home at 204 Langwell Common SE, Airdrie (Lanark Landing, Phase 4, Block 13, Lot 1). The salesperson refused to provide the Home Warranty (Schedule C) before closing, DocuSign documents arrived through a numbered Alberta corporation rather than Douglas Homes\u2019 corporate account, the lot was 8 inches narrower than other Ferny 3 models with no explanation, and the contract contained the wrong legal name. The deal collapsed within 8 days of signing when Douglas Homes refused to seek a waiver for the lot discrepancy.",
      },
    },
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Douglas Homes a reputable builder in Calgary?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Based on a documented purchase experience in Airdrie\u2019s Lanark Landing community, Douglas Homes raised significant transparency concerns \u2014 including a refusal to provide the Home Warranty Schedule before closing, DocuSign documents arriving through a numbered Alberta corporation, and a salesperson unable to explain an 8-inch discrepancy in the lot width compared to other Ferny 3 models. The purchase at 204 Langwell Common SE collapsed within 8 days of signing on November 12, 2024.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Ferny 3 model by Douglas Homes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Ferny 3 is a single-family home model built by Douglas Homes. It features nine-foot main floor ceilings, eight-foot basement ceilings, hardwood throughout the main level, quartz countertops, and a detached two-car garage (20\u2019 \u00d7 20\u2019). A corner-lot variant in Lanark Landing (Phase 4, Block 13, Lot 1 at 204 Langwell Common SE, Airdrie) measured 19.4 feet wide rather than the standard 20 feet, eliminating the second linen closet from the floor plan.",
          },
        },
        {
          "@type": "Question",
          name: "Does Douglas Homes provide the Home Warranty (Schedule C) before closing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "According to one buyer\u2019s documented experience, the Douglas Homes salesperson stated that Schedule C (Home Warranty) was not attached to the purchase contract and that the buyer was not entitled to view it until closing. Under Alberta\u2019s New Home Buyer Protection Act, home warranty disclosure is required. Buyers should explicitly request and review warranty documentation before signing.",
          },
        },
        {
          "@type": "Question",
          name: "Does Douglas Homes use DocuSign for contracts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Douglas Homes does use electronic signing. However, one buyer noted that the DocuSign invitation came through a numbered Alberta corporation rather than a Douglas Homes corporate account. When raised with office staff, they were unable to explain the routing. The contract documents were also sent from a personal email address rather than a corporate one.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the Douglas Homes Lanark Landing sales centre?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Douglas Homes Lanark Landing sales centre is located at #12B, 4101 19 Street NE, Calgary, AB. The Lanark Landing community itself is in Airdrie, Alberta, developed by Melcor Developments.",
          },
        },
      ],
    },
  },
  "jayman-built": {
    localBusiness: {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      name: "Jayman Built",
      url: "https://www.jayman.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Calgary",
        addressRegion: "AB",
        addressCountry: "CA",
      },
      description:
        "Jayman Built is one of Alberta\u2019s largest home builders. This review covers a purchase attempt in the Legacy community, Calgary \u2014 specifically the Avid 20 model with revised ensuite at 71 Legacy Reach Court SE, Calgary, AB.",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "2",
        bestRating: "5",
        worstRating: "1",
        reviewCount: "1",
      },
      review: {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Colton English",
        },
        datePublished: "2025-04-28",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "2",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "My experience with Jayman Built\u2019s Avid 20 model at 71 Legacy Reach Court SE, Calgary (Legacy community) was defined by a shower specification dispute. The marketing brochure promised an 80\" height, 10 mil glass shower door, but the contract was vague. When I asked for clarification, specs kept changing: first to 70\"/5mil, then 75\"/6mil. After requesting escalation to the sales manager (Michael Klassen), I experienced 16 days of silence. After a formal dispute letter to VP Stephanie Myers, Jayman terminated the purchase agreement in early May 2025 rather than resolve the disagreement. Get every specification in writing before signing with Jayman Built.",
      },
    },
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Jayman Built a trustworthy home builder in Calgary?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jayman Built is one of Alberta\u2019s largest and most established home builders. However, one buyer\u2019s experience in the Legacy community (Calgary) involved a dispute over shower specifications that appeared in marketing materials but were vague in the contract. When escalated, the builder chose to terminate the purchase agreement rather than resolve the discrepancy. Prospective buyers should ensure every specification from brochures and sales conversations is explicitly written into the contract.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Jayman Built Avid 20 model?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Avid 20 is a single-family home model offered by Jayman Built. The version at 71 Legacy Reach Court SE, Calgary included a Revised Ensuite upgrade ($7,820) creating a 4-piece ensuite, and a Fit and Finish Extra package ($12,600). The Navien NPE 240A tankless water heater was also specified. Marketing materials referenced an 80\" height, chrome frame, 10 mil glass shower door \u2014 however, the contract wording was vague and specifications were later revised downward by the sales team.",
          },
        },
        {
          "@type": "Question",
          name: "How do I escalate a complaint with Jayman Built?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jayman Built\u2019s escalation path runs from your Sales Associate to Sales Manager to VP of Sales. One buyer experienced a 16-day response delay after requesting escalation to the sales manager before reaching out directly by email. If you do not receive a response within a reasonable timeframe, escalate directly to the VP level in writing, keeping copies of all correspondence.",
          },
        },
        {
          "@type": "Question",
          name: "What is included in the Jayman Built Fit and Finish package?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Fit and Finish Extra (2) package at Jayman Built was priced at $12,600 for the Legacy Avid 20 model. It covers interior upgrade selections beyond the builder\u2019s standard finishes. Always confirm exactly which items are included in writing, as marketing materials and verbal descriptions may differ from the final contract.",
          },
        },
        {
          "@type": "Question",
          name: "Does Jayman Built include a tankless water heater?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Jayman Built Avid 20 at 71 Legacy Reach Court SE, Calgary was specified to include a Navien NPE 240A tankless water heater. This was one of several specifications that became part of a purchase dispute. Confirm all included appliances and mechanical systems are listed by make and model in your contract before signing.",
          },
        },
      ],
    },
  },
  "sterling-homes": {
    localBusiness: {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      name: "Sterling Homes",
      url: "https://www.sterlingcalgary.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "37 Quarry Park Blvd SE",
        addressLocality: "Calgary",
        addressRegion: "AB",
        addressCountry: "CA",
      },
      description:
        "Sterling Homes is an Alberta home builder. This review covers a quick-possession Luna model purchase at 728 Langley Terrace SE, Airdrie, AB T4A 3R1 (job #J158004), with possession on June 2, 2025.",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "3",
        bestRating: "5",
        worstRating: "1",
        reviewCount: "1",
      },
      review: {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Colton English",
        },
        datePublished: "2025-07-12",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "3",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "Sterling Homes delivered my Luna model at 728 Langley Terrace SE, Airdrie (T4A 3R1, job #J158004) on June 2, 2025, on time and at the agreed price. The pre-possession home inspection returned a clean report. However, post-possession brought challenges: a site supervisor who provided dangerously incorrect information about foam off-gassing safety timelines on possession day; an eavestrough deficiency that took repeated follow-up to address; a hot water system failure first observed in December 2025 that required months of warranty follow-up; and the mandatory Virtuo warranty app had a critical bug on Google Pixel Android devices. Sterling Homes has potential but needs to improve post-possession communication and site supervisor conduct.",
      },
    },
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Sterling Homes a good builder in Airdrie?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sterling Homes delivered a completed Luna model at 728 Langley Terrace SE, Airdrie on June 2, 2025 on time and at the agreed price. The pre-possession home inspection by Nook & Cranny Home Inspections returned a remarkably clean report. Post-possession, however, several warranty issues emerged: a foam off-gassing safety incident on possession day, eavestrough concerns requiring repeated follow-up, and a persistent hot water system failure first noticed in December 2025. The one-year builder warranty expires June 2, 2026.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Sterling Homes Luna model?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Luna is a single-family quick-possession model offered by Sterling Homes. The Luna at 728 Langley Terrace SE, Airdrie (job #J158004) was a quick-possession home, allowing the buyer to inspect the finished product before signing. Features included 50-year roofing tiles. Quick possession was a major advantage \u2014 the buyer could see exactly what they were purchasing, avoiding the specification ambiguities that had plagued earlier builder experiences.",
          },
        },
        {
          "@type": "Question",
          name: "How do I submit a warranty claim with Sterling Homes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sterling Homes uses the Virtuo app as the primary warranty communication tool after possession. Note that one homeowner reported a significant bug in the Virtuo app on Android devices (specifically Google Pixel), which prevented reliable use. If you experience issues with the app, contact the warranty team directly by email. The Sterling Homes warranty team can include representatives such as an warranty administrator and field technicians who handle inspection and repair scheduling.",
          },
        },
        {
          "@type": "Question",
          name: "What is a quick-possession home with Sterling Homes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A quick-possession home is a spec home that is already under construction or nearly complete when you purchase it. Sterling Homes offers quick-possession inventory in communities like Airdrie. The key advantage is that you can see and inspect the actual home \u2014 not a show suite or floor plan \u2014 before signing. This eliminates uncertainty about specifications, finishes, and dimensions that can arise with pre-sale purchases.",
          },
        },
        {
          "@type": "Question",
          name: "Does Sterling Homes build in Airdrie?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Sterling Homes builds in Airdrie, Alberta. The Luna model quick-possession home at 728 Langley Terrace SE, Airdrie, AB T4A 3R1 (job #J158004) was purchased and occupied in June 2025. Sterling Homes\u2019 sales team can be reached at sterlingcalgary.com.",
          },
        },
      ],
    },
  },
};
