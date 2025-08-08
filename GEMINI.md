# Gemini Project Configuration (GEMINI.md)

This file contains project-specific context and instructions for the Gemini agent.

## Project Overview

`lanark.house` is a personal blog built with Jekyll. The blog documents the owner's journey of buying and building a new home, including two unsuccessful purchase attempts before the final, successful purchase. The tone is personal and narrative.

## Author Persona: Colton English

I am a single homeowner and a versatile software developer. This blog is my personal chronicle of navigating the complexities of new home construction, a journey that has been markedly different from my previous experience buying a condominium. My time as a condo owner, which included serving on the condo board, gave me a unique perspective on property management, financial planning, and vendor relations.

Professionally, I am a detail-oriented developer with a strong focus on Java, proficient in languages like JavaScript and TypeScript, and skilled with tools such as Linux, Git, and various CI/CD pipelines. My career has included roles as a Senior Software Developer, Technical Team Lead, and Programmer Analyst. I studied Computer Information Systems at Red Deer Polytechnic and Computer Science at The University of Lethbridge. My LinkedIn vanity name is sparksis.

My analytical nature and high value on transparency are evident in my meticulous record-keeping and proactive approach to understanding the intricate processes of real estate. Through this blog, I reflect on the challenges and successes of building a new home, hoping to offer insights for others on a similar path.

## Project Goals and Target Audience

**Overall Goal:** Create 2-3 long-form blog posts for each of the three builders (Douglas Homes, Jayman Built, and Sterling Homes) detailing the user's home-buying experience.

**Target Audience:** Potential new home buyers who are researching builders and looking for authentic, detailed reviews of their experiences.

**Authorial Intent:** The posts should be written in the persona of "Colton English," but revised to be less self-referential and more focused on the universal lessons for a new home buyer. The goal is to provide valuable insights and cautionary tales that can help other buyers navigate the complexities of the home-buying process.

## SEO and Keyword Strategy

Blog post titles, descriptions, and tags have been updated to improve search engine optimization. The strategy focuses on incorporating relevant keywords such as "Douglas Homes Calgary review," "Jayman Built Calgary review," "Sterling Homes Calgary review," "new home builder complaints," and "new home warranty Alberta" to attract potential home buyers searching for information on these builders and related topics.

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
    *   The dispute involved issues with the specifications of the ensuite shower and communication delays.
    *   The buyer, Colton English, raised concerns about discrepancies in the ensuite shower specifications and communication delays.
    *   Jayman decided to terminate the purchase agreement and return the deposit.
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
*   **Warranty & Service:**
    *   Emails from sterlingcalgary.com relate to warranty and repair work for 728 Langley Terrace.
    *   Issues include roof, drywall, eavestrough, fireplace, and smart home installation coordination.

## Key Contacts

*   **Trish Braun** (Douglas Homes): trish.braun@shaw.ca
*   **Erin Cripps** (Melcor): ecripps@melcor.ca
*   **Jason Tang** (Sterling Homes): lanark@sterlingcalgary.com
*   **Chad** (iNet Media): chad@inet-media.ca
*   **Kara Junk** (Jayman Built): kjunk@jayman.com
*   **Stephanie Myers** (Jayman Built): SMyers@jayman.com
*   **Lisa Werner** (Jayman Built): lwerner@jayman.com
*   **David Hooge** (Jayman Built): dhooge@jayman.com
*   **Jay Westman** (Jayman Built): jwestman@jayman.com
*   **Brent Moulding** (Sterling Homes): bmoulding@sterlingcalgary.com
*   **Jaspreet Gill** (Sterling Homes): jaspreet.gill@sterlingcalgary.com
*   **Deborah Curran** (Sterling Homes): deborah.curran@sterlingcalgary.com
*   **Classic Fireplace** (Vendor): (403) 279-4448
*   **Shaun Loughren** (Enercare/Classic Fireplace Service Manager): Shaun.Loughren@enercare.ca

## Workflow Rules

-   **Create Posts as Drafts:** When creating new blog posts, they should be created as drafts. This means they should be placed in the `_drafts` directory and the filename should not contain a date (e.g., `my-new-post.markdown`). The `date` field in the front matter should be omitted.
-   **Content Generation:** When creating new blog posts, use the `openai_chat` tool to generate longer and more detailed content. Provide the tool with appropriate context and grounding from the user's emails, Google Drive documents, and existing blog posts.

## Notion Page Formatting Preferences

-   **Notion Page Formatting for Compelling Narratives:** When creating or updating Notion pages for compelling narratives (e.g., for Sterling Warranty), adhere to the following structure for optimal readability and impact:
    *   **Document Hierarchy:** Blocks should be structured hierarchically. Top-level elements (like main titles and introductory paragraphs) should be direct children of the page. Sub-elements (like nested bullet points, to-do items, or content within toggles) should be children of their respective parent blocks.
    *   **Main Title:** Use a `heading_3` block for the main title of the document.
    *   **Introductory Paragraph:** Follow the main title with a `paragraph` block containing the introductory text.
    *   **Thesis Elements (Main Points):** Use `bulleted_list_item` blocks for top-level thesis elements.
    *   **Sub-points/Details:** Use nested `bulleted_list_item` blocks for sub-points or details under a thesis element.
    *   **Embedded Links:** For visual documentation or reports, embed links as nested `file` blocks (for Excel/PDF) or nested `paragraph` blocks with `mention` (for Google Photos) under the relevant `bulleted_list_item`.
    *   **Code Blocks:** For code snippets or diagrams (like Mermaid), use a `code` block with `language: "plain text"` if the content is not directly executable or rendered by Notion.
    *   **Action Items:** Use `to_do` blocks for specific action items.
    *   **Concluding Statement:** Use a `toggle` block for the concluding statement, with the actual text as a nested `paragraph` block.
    *   **Avoid Extraneous Blocks:** Ensure no empty or redundant blocks are present.

## Notion API Interaction Guidelines

-   **Notion Kanban Board:** The Notion database is effectively a Kanban board, and its child pages are treated as individual cards.
-   **Collaboration Preference:** When working with Notion Kanban pages, prioritize adding comments to the page rather than directly updating existing blocks. If a block update is necessary, explicitly ask for user confirmation before proceeding.
-   **Prioritize Patching over Deletion/Recreation:** When modifying existing Notion pages, always prioritize patching existing blocks. Avoid deleting and recreating blocks unless absolutely necessary and explicitly confirmed by the user, as this corrupts the page's history.
-   **Serial Patching for Dependent Operations:** For operations on a single Notion page or interdependent blocks, perform patches serially to prevent `409 Conflict` errors and ensure correct ordering.
-   **Group Atomic Changes:** Where possible, group related changes into larger, more complete `API-patch-block-children` requests to minimize API calls and maintain content integrity. Avoid attempting parallel operations on the same Notion page or interdependent blocks.

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
    *   **To create a new task:** Use `API-post-page` with the `parent.database_id` as `22ea6dfd-466f-80a1-be0d-c2dcfb33c6bc`.# My Best Practices for Notion API Interaction

This document outlines my best practices for interacting with the Notion API, consolidating key learnings and established protocols for efficient, accurate, and user-compliant operations.

## 1. Core Principles for Notion Interaction

### 1.1 User Directives

- **Block Deletion Prohibition:** I am strictly prohibited from using `API_delete_a_block`. Content requiring removal or correction must be updated via `API_update_a_block`. If updating is infeasible, I shall append corrected content and inform the user, allowing the user to manage obsolete blocks.
- **Content Duplication Avoidance:** When correcting or updating, I modify existing blocks rather than appending new, redundant ones.
- **Strict Page Confinement:** I interact solely with the Notion page explicitly designated by the user. Accessing or modifying other Notion pages or databases is forbidden without explicit instruction.
- **Internal Documentation Exclusivity:** All my internal learnings, operational strategies, and detailed documentation pertinent to my functions reside exclusively within this `GEMINI.md` file. Notion pages are for content display, API capability demonstration, or user-specific data storage.

### 1.2 API Limitations

- **Character Limits:** I recognize that certain block types (e.g., `paragraph`) have character limits (e.g., 2000 characters). Large text segments must be split into multiple blocks.
- **Rate Limiting:** To prevent `conflict_error` (HTTP 409) responses, I avoid excessive rapid requests. Pauses or batch operations are required to mitigate rate limiting.

## 2. Block Management Strategies

### 2.1 Adding Blocks

- I use `API_patch_block_children` to append new blocks to a page or as children to existing blocks.
- Adherence to Notion API documentation for specific JSON structures (e.g., `paragraph`, `heading_1`, `bulleted_list_item`, `code`, `image`, `video`, `to_do`, `toggle`, `table_of_contents`, `callout`, `divider`, `equation`, `bookmark`, `column_list`, `table`, `synced_block`) is mandatory.

### 2.2 Updating Blocks

- I employ `API_update_a_block` to modify existing blocks, upholding the "no deletion, no duplication" directive.
- When updating, I provide the `block_id` and the specific block type object containing properties to be updated.

### 2.3 Handling Unsupported Block Types

- Certain block types (e.g., `child_page`, `child_database`) cannot be directly appended as children via `API_patch_block_children`. For these, dedicated endpoints like `Create a page` or `Create a database` must be invoked.
- For visual representation of unsupported Notion features (e.g., complex tables), I devise workarounds (e.g., using `paragraph` blocks with delimiters for tabular data).

## 3. Mastering Rich Text Formatting

Precision in rich text formatting is a critical operational requirement for me.

### 3.1 Rich Text Object Structure

- The `rich_text` property is an **array** of rich text objects.
- Each object within this array must possess a `"type": "text"` property.
- Within each rich text object, a `text` object containing the `"content"` (the actual string) is present.
- **Crucially, the `annotations` object (for bold, italic, code, color, etc.) must be a **sibling** to the `text` object, not nested within it.**

**Correct Request Structure for Rich Text with Annotations:**
```json
"rich_text": [
    {
        "type": "text",
        "text": {
            "content": "This is normal text. "
        }
    },
    {
        "type": "text",
        "text": {
            "content": "This part is bold.",
            "link": null // Optional: include if there's a link
        },
        "annotations": {
            "bold": true,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
        }
    },
    {
        "type": "text",
        "text": {
            "content": "This part is code.",
            "link": null
        },
        "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": true,
            "color": "default"
        }
    }
]
```

**Common Pitfall (Incorrect Structure):**
```json
"rich_text": [
    {
        "type": "text",
        "text": {
            "content": "This text has bad annotations.",
            "annotations": { // INCORRECT PLACEMENT: DO NOT PUT ANNOTATIONS HERE
                "code": true
            }
        }
    }
]
```

### 3.2 Applying Specific Styles

- **Bold:** Set `"bold": true` within `annotations`.
- **Italic:** Set `"italic": true` within `annotations`.
- **Strikethrough:** Set `"strikethrough": true` within `annotations`.
- **Underline:** Set `"underline": true` within `annotations`.
- **Inline Code:** Set `"code": true` within `annotations`.
- **Color:** Set `"color": "green"` (or other valid color) within `annotations`.
- **Combinations:** Multiple annotations may be applied to a single text segment within the same `annotations` object.

## 4. Workflow and Self-Correction

- **Pre-Transmission Validation:** I internally validate JSON payloads against expected Notion API structures before `API_patch_block_children` or `API_update_a_block` calls.
- **Error Analysis:** I meticulously analyze API error messages, which frequently indicate validation failures.
- **Failure Documentation:** For each failed attempt, I document the specific error, erroneous approach, and rectified solution within `GEMINI.md`, building a robust knowledge base.
- **Iterative Verification:** Following each API call, I verify the outcome on the Notion page. Success is not assumed solely based on API response.

## 5. Notion Editing Capabilities and Limitations

This section details my Notion editing capabilities and limitations, based on my available tools and operational parameters.

My primary Notion interaction is via the Notion API, operating within its defined functionalities and constraints.

### 5.1 Tools Utilized for Notion Editing:

- `API_patch_page`: Updates existing Notion page properties (e.g., title, cover, icon, archived status).
- `API_patch_block_children`: My most versatile tool for appending new content (e.g., paragraphs, bulleted lists, to-do items, embeds, code blocks) as children to existing pages or blocks.
- `API_update_a_block`: Modifies specific block properties, primarily `rich_text` content for certain block types (e.g., paragraphs, headings, bulleted lists) or `checked` status for `to_do` blocks.
- `API_create_a_comment`: Adds comments to Notion pages or blocks; the user's preferred method for Kanban card updates.
- `API_post_page`: Creates new Notion pages, including database entries.
- `API_create_a_database`: Establishes new Notion databases.
- `API_update_a_database`: Modifies existing Notion database properties (e.g., title, description, property schema).

### 5.2 Editable/Updatable Elements:

- **Page Properties:** I can alter a page's title, set/remove its cover image, update its icon (emoji or external file), and manage its archived status.
- **Block Content:**
    - I can append new blocks as children to any existing page or container block.
    - For existing blocks, I can update their `rich_text` content. If a paragraph block contains text, I replace the entire text with new rich text. I can also modify a `to_do` block's `checked` status.
- **Comments:** I can add new comments to any page or block; the user's preferred method for Kanban card updates.

### 5.3 Inherent Limitations and Workarounds:

- **Arbitrary Text Modification within Existing Rich Text:** A significant limitation. I cannot directly find and replace substrings within existing rich text blocks. To change even a single word in a paragraph, I must provide the entire new `rich_text` content via `API_update_a_block`. This requires first retrieving the block's current content via `retrieve_a_block`, internal modification, and then transmitting the complete updated content.
- **Complex Block Type Handling:** While I create numerous standard block types, direct editing of highly complex or nested block structures may require meticulous JSON structure handling.
- **Direct Block Order Manipulation:** I cannot directly reorder existing blocks. Altering order typically involves deleting and re-creating blocks in the desired sequence, a practice generally discouraged due to potential history corruption.
- **Existing Comment Editing:** I cannot edit comments already posted. Only new comment additions are supported.

### 5.4 Internal Guidelines and User Preferences:

- **Prioritization of Patching over Deletion/Recreation:** My core mandate is to modify existing content rather than deleting and recreating it, preserving page history for both blocks and pages.
- **Serial Patching for Dependent Operations:** When executing multiple changes to a single page or interdependent blocks, I perform these operations sequentially to prevent 409 Conflict errors and ensure correct ordering.
- **Atomic Change Grouping:** Where feasible, I group related changes into larger `API_patch_block_children` requests to minimize API calls.
- **Notion Kanban Board Interpretation:** As per `GEMINI.md` configuration, I understand the Notion database functions as a Kanban board, with child pages treated as individual cards.
- **Collaboration Preference (User Instruction):** The user prefers I prioritize adding comments to Kanban cards for updates, rather than directly modifying page blocks.
- **Explicit Confirmation for Block Updates:** If direct block updating (as opposed to adding a comment) is necessary, I will explicitly request user confirmation prior to proceeding.
- **Rich Text Formatting in Comments:** I employ rich text formatting within comments to enhance clarity for both human users and other LLMs.

In summary, I effectively manage and update Notion content, with operations consistently mediated by the API's structure. I adhere to user preferences and maintain data integrity while providing clear and contextual updates.