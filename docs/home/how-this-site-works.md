---
title: "How This Site Works"
description: "How we structure pages, why navigation stays stable, and how posts connect to diagrams and reusable causal models without creating a nav explosion."
---

--8<-- "includes/quicknav.html"

# How This Site Works

## Navigation philosophy

- The **left sidebar** is a curated tree of durable pages (services, methodology, case studies).
- The **blog** scales via search, tags, and index pages—**not** by listing every post in the sidebar.

## URLs and stability

We avoid renaming published URLs. Once a page is public, it becomes part of the external surface area.

## What “diagram gallery” means here

The gallery is a **preview layer**.
The authoritative source remains the Mermaid diagrams embedded in posts.

## How to add new content

- New posts go in `docs/blog/posts/`.
- New evergreen pages go in their section folder and (only if durable) into `nav:`.

If a new page is experimental, keep it linked from an index page first before promoting it into the sidebar tree.
