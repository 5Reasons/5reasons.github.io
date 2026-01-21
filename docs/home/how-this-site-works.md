---
title: "How This Site Works"
description: "How we structure pages, why navigation stays stable, and how posts connect to diagrams and reusable causal models without creating a nav explosion."
---

--8<-- "includes/quicknav.html"

# How This Site Works

<div class="landing-hero">
	<div class="landing-hero__grid">
		<div>
			<p class="landing-kicker">Site conventions</p>
			<h2 class="landing-title">A docs site, run like a product.</h2>
			<p class="landing-subtitle">
				The goal is simple: keep navigation stable, make content discoverable at scale, and ensure every diagram and model has an obvious home.
				This page explains the conventions we actually use today.
			</p>
			<div class="landing-cta">
				<a class="md-button md-button--primary" href="/home/start-here/">Start Here</a>
				<a class="md-button" href="/blog/">Blog</a>
			</div>
		</div>
	</div>
</div>

## Navigation philosophy

This site is intentionally *diagram-first* and *index-driven*.

- The top tabs are stable section entry points.
- Section landing pages (like Blog and Diagram Gallery) carry most discovery.
- Diagrams are not decoration: many of them are interactive navigation.

!!! info
    Some Mermaid diagram nodes are clickable. Hover to see a pointer cursor, then click to navigate.

<div class="landing-section">
	<div class="landing-grid">
		<div class="landing-card">
			<h3>Sidebar is curated</h3>
			<p>The left sidebar is a small tree of durable pages. It should stay calm as the site grows.</p>
		</div>
		<div class="landing-card">
			<h3>Blog scales via indexes</h3>
			<p>We don’t add every post to navigation. Discovery happens through the <strong>Blog index</strong>, built-in <strong>search</strong>, and <strong>Topics</strong>.</p>
		</div>
		<div class="landing-card">
			<h3>Landing pages do the heavy lifting</h3>
			<p>Each section has an overview page that routes readers to the right depth: overview → evergreen → posts/models.</p>
		</div>
	</div>
</div>

## How to read this site

If you only remember one heuristic, use this:

1. Start on a landing page.
2. Follow the diagram.
3. When you want depth, open the evergreen page.
4. When you want examples, open a case study or a blog post.

### Diagram conventions (practical)

- If a diagram node is clickable, it routes you to the relevant page.
- Long labels are allowed to wrap (you can also use `<br>` in labels for deterministic line breaks).
- In dark mode, node label text is kept readable.

## Where content lives (for contributors)

<div class="landing-section">
	<div class="landing-grid">
		<div class="landing-card">
			<h3>Blog posts</h3>
			<p>Posts live in <code>docs/blog/posts/</code>. The Blog index links to them chronologically.</p>
		</div>
		<div class="landing-card">
			<h3>Evergreen pages</h3>
			<p>Stable concepts live in their section folders (e.g., Methodology, Philosophy). Only truly durable pages go into nav.</p>
		</div>
		<div class="landing-card">
			<h3>Experimental drafts</h3>
			<p>Diagram sources live in <code>docs/diagrams/mmd/</code> and rendered previews live in <code>docs/diagrams/img/</code>.</p>
		</div>
	</div>
</div>

## Site structure at a glance

```mermaid
flowchart LR
classDef i fill:#D3D3D3,stroke:#9A9A9A,color:#000,stroke-width:1px;

I_Repo["Repository"]:::i
I_Docs["docs/ (content root)"]:::i
I_Assets["docs/assets/ (CSS + JS)"]:::i
I_Mkdocs["mkdocs.yml (theme + nav + extensions)"]:::i

I_Sections["Sections (top tabs)"]:::i
I_Home["Home (docs/index.md)"]:::i
I_Start["Start Here (docs/home/start-here.md)"]:::i
I_Reasoners["Reasoners/"]:::i
I_Philosophy["Philosophy/"]:::i
I_Methodology["Methodology/"]:::i
I_Services["Services/"]:::i
I_Case["Case Studies/"]:::i
I_Blog["Blog/ (index + topics)"]:::i
I_Diagrams["Diagram Gallery (docs/diagrams/index.md)"]:::i

I_Mermaid["Mermaid diagrams (inline in pages)"]:::i
I_Click["Clickable nodes (diagram navigation)"]:::i
I_Lightbox["Image lightbox for .glightbox"]:::i
I_Modals["Diagram modals (optional)"]:::i
I_LinkFixes["Link fixes + legacy redirects"]:::i
I_Math["Math rendering on instant navigation"]:::i
I_Scroll["Smooth anchor scroll (header-offset)"]:::i

I_DgmSrc["docs/diagrams/mmd/*.mmd"]:::i
I_DgmImg["docs/diagrams/img/*.svg"]:::i
I_RenderWF["GitHub Action: render-diagrams.yml"]:::i
I_DeployWF["GitHub Action: deploy.yml"]:::i
I_Site["site/ (built output)"]:::i

I_Repo --> I_Mkdocs
I_Repo --> I_Docs
I_Docs --> I_Assets
I_Docs --> I_Sections
I_Sections --> I_Home
I_Sections --> I_Start
I_Sections --> I_Reasoners
I_Sections --> I_Philosophy
I_Sections --> I_Methodology
I_Sections --> I_Services
I_Sections --> I_Case
I_Sections --> I_Blog
I_Sections --> I_Diagrams

I_Docs --> I_Mermaid --> I_Click
I_Assets --> I_Lightbox
I_Assets --> I_Modals
I_Assets --> I_LinkFixes
I_Assets --> I_Math
I_Assets --> I_Scroll

I_DgmSrc --> I_RenderWF --> I_DgmImg
I_Repo --> I_DeployWF --> I_Site
```

## Under the hood (what’s actually implemented)

### Fast navigation

The site uses MkDocs Material “instant navigation”, which swaps pages without a full reload. To keep behavior consistent after page swaps, custom scripts subscribe to Material’s `document$` hook when available.

### Links and legacy routes

- Internal links that end with `.md` are rewritten to directory-style URLs (for clean URLs).
- Legacy `/about/*` paths are redirected to `/reasoners/*`.

### Diagrams

- Mermaid is rendered from fenced code blocks.
- Some nodes are clickable via Mermaid `click` directives.
- We apply small runtime fixes so label wrapping and link styling behave consistently.

### Images and large diagrams

- Any image with the `.glightbox` class opens in a small local lightbox (no third-party embed).
- Some pages can optionally open diagrams in a `<dialog>` modal.

## Build and deploy

- Deployment is done via GitHub Actions to GitHub Pages.
- The deploy workflow uses `zensical serve` on CI and pre-renders every Markdown URL into `site/` before publishing.
- Diagram previews are rendered from `.mmd` sources into `.svg` via a separate workflow.