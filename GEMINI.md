# Gemini Project Configuration (GEMINI.md)

This file contains project-specific context and instructions for the Gemini agent.

## Project Overview

`lanark.house` is a personal blog built with Jekyll. The blog documents the owner's journey of buying and building a new home, including two unsuccessful purchase attempts before the final, successful purchase. The tone is personal and narrative.

## Author Persona: Colton English

I am a single homeowner and a versatile software developer. This blog is my personal chronicle of navigating the complexities of new home construction, a journey that has been markedly different from my previous experience buying a condominium. My time as a condo owner, which included serving on the condo board, gave me a unique perspective on property management, financial planning, and vendor relations.

Professionally, I am a detail-oriented developer with a strong focus on Java, proficient in languages like JavaScript and TypeScript, and skilled with tools such as Linux, Git, and various CI/CD pipelines. My career has included roles as a Senior Software Developer, Technical Team Lead, and Programmer Analyst. I studied Computer Information Systems at Red Deer Polytechnic and Computer Science at The University of Lethbridge. My LinkedIn vanity name is sparksis.

My analytical nature and high value on transparency are evident in my meticulous record-keeping and proactive approach to understanding the intricate processes of real estate. Through this blog, I reflect on the challenges and successes of building a new home, hoping to offer insights for others on a similar path.

## Key Technologies

-   **Static Site Generator:** Jekyll
-   **Content Format:** Markdown (`.markdown`)
-   **Templating:** Liquid

## Project Conventions

### Blog Posts

-   **File Naming:** `YYYY-MM-DD-title-of-post.markdown`
-   **Location:** `_posts/`
-   **Front Matter:**
    -   `layout: post`
    -   `title: "Post Title"`
    -   `date: YYYY-MM-DD HH:MM:SS -0700`
    -   `categories: [category1, category2]`
    -   `tags: [tag1, tag2, tag3]`

### Tone and Style

-   The writing style should be personal, narrative, and reflective.
-   Posts should tell a story and share lessons learned from the home-buying experience.

## User Preferences & Key Narrative Points

The user's home-buying journey involved three distinct phases with three different builders. Understanding this narrative is key to understanding the blog's content. The correct chronological order is: Douglas Homes -> Jayman Built -> Sterling Homes.

### 1. Douglas Homes (Late 2024)

This was the **first** unsuccessful purchase attempt.

*   **Issues:** This experience was defined by a lack of transparency and communication challenges.
    *   The builder's representative refused to provide a sample contract for review prior to signing.
    *   There were misrepresentations regarding the HOA rules and restrictive covenants.
    *   A major conflict arose over an 8-inch plot plan discrepancy between the architectural guidelines and the as-built property.
    *   The builder was unwilling to seek a formal waiver for this discrepancy from the developer (Melcor) or the architectural committee (E2 and Associates), leading to the deal's collapse in November 2024.

### 2. Jayman Built (Early 2025)

This was the **second** unsuccessful purchase attempt, which took place in the community of **Legacy**.

*   **Property:** 71 Legacy Reach Court SE
*   **Issues:** The core of this dispute was a contract discrepancy.
    *   The purchase agreement, received around March 4, 2025, did not include the larger, upgraded ensuite shower that had been verbally discussed and agreed upon.
    *   Attempts to resolve this discrepancy and get the desired feature formally added to the contract were unsuccessful, leading to the second collapsed deal.
    *   Meticulous records of this attempt are stored in the "Legacy House (archived)" folder on Google Drive.

### 3. Sterling Homes (Mid-2025)

This was the **final and successful** purchase.

*   **Property:** 728 Langley Terrace
*   **Timeline:**
    *   **May 3, 2025:** Initial contact and information received.
    *   **May 21, 2025:** Mortgage approval secured with CIBC (after also engaging with ATB).
    *   **May 28, 2025:** Home inspection completed.
    *   **June 2, 2025:** Closing date.
*   **Positive Outcomes:** This experience was a significant improvement over the previous two.
    *   The process was collaborative and transparent.
    *   The final home was more affordable than the Jayman property.
    *   It included key desired features like a full-height tile bathroom and a front garage.
    *   The quick-possession timeline was a major advantage, allowing the user to move in far sooner than if they had proceeded with either of the other two builders.

## Key Contacts

*   **Trish Braun** (Douglas Homes): trish.braun@shaw.ca
*   **Erin Cripps** (Melcor): ecripps@melcor.ca
*   **Jason Tang** (Sterling Homes): lanark@sterlingcalgary.com
*   **Chad** (iNet Media): chad@inet-media.ca

## Workflow Rules

-   **Create Posts as Drafts:** When creating new blog posts, they should be created as drafts. This means they should be placed in the `_drafts` directory and the filename should not contain a date (e.g., `my-new-post.markdown`). The `date` field in the front matter should be omitted.

## Tooling & Context Sources

To regain the full context of the user's home-buying journey, use the following tools and sources:

*   **Google Drive:**
    *   Use `GOOGLE_DRIVE-FIND-FOLDER` to locate the `"Legacy House (archived)"` folder. This contains all documents related to the Jayman Built purchase attempt.
    *   Use `GOOGLE_DRIVE-LIST-FILES` to explore the contents of this folder and its subdirectories (`signed purchase agreements`, `Cost Evaluation`, etc.).

*   **Gmail:**
    *   Use `GMAIL-FIND-EMAIL` with the query `label:ye'-olde-house-legacy-home` to find all emails related to the Jayman Built experience.
    *   Use `GMAIL-FIND-EMAIL` with queries for key contacts like `"Jason Tang"`, `"Trish Braun"`, or `"Kori-Lynn Corbin"` to find correspondence related to the other purchase attempts.

*   **Local Filesystem:**
    *   Use `list_directory` on `_uploads/` to find relevant documents, especially within the `_uploads/728 Langley Terrace-20250712T212845Z-1-001/728 Langley Terrace/` directory, which contains all documents for the successful Sterling Homes purchase.
    *   Use `read_many_files` on the `_posts`, `_drafts`, and `_grievances` directories to get the user's own narrative of events.

*   **Notion:**
    *   **Database ID:** `22ea6dfd-466f-80a1-be0d-c2dcfb33c6bc`
    *   **To retrieve outstanding tasks:** Use `API-post-database-query` with the `database_id` `22ea6dfd-466f-80a1-be0d-c2dcfb33c6bc`.
    *   **To create a new task:** Use `API-post-page` with the `parent.database_id` as `22ea6dfd-466f-80a1-be0d-c2dcfb33c6bc`.
