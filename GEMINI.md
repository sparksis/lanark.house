# Gemini Project Configuration (GEMINI.md)

This file contains project-specific context and instructions for the Gemini agent.

## Project Overview

`lanark.house` is a personal blog built with Jekyll. The blog documents the owner's journey of buying and building a new home. The tone is personal and narrative.

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

## User Preferences

-   The user wants to document the entire home-buying process from start to finish.
-   The user is currently working with TD Bank for their mortgage.
-   The user has switched builders at least once.

## Workflow Rules

-   **Create Posts as Drafts:** When creating new blog posts, they should be created as drafts. This means they should be placed in the `_drafts` directory and the filename should not contain a date (e.g., `my-new-post.markdown`). The `date` field in the front matter should be omitted.

