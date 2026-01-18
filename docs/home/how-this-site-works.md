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
				The goal is simple: keep navigation stable, make content discoverable at scale, and ensure every model/diagram has a clear home.
				This page explains how we do that.
			</p>
			<div class="landing-cta">
				<a class="md-button md-button--primary" href="../home/start-here/">Start Here</a>
				<a class="md-button" href="../blog/">Blog</a>
				<a class="md-button" href="../diagrams/">Diagram gallery</a>
			</div>
			<div class="landing-proof" aria-label="Highlights">
				<span class="landing-pill">Minimal nav, maximal scale</span>
				<span class="landing-pill">Stable URLs</span>
				<span class="landing-pill">Inline Mermaid is canonical</span>
				<span class="landing-pill">Search-first discovery</span>
			</div>
		</div>
		<div class="landing-visual" aria-hidden="true">
			<img src="../assets/img/hero-brmodel.svg" alt="" />
		</div>
	</div>
</div>

<div class="landing-section">
	<h2>Navigation philosophy</h2>
	<div class="landing-grid">
		<div class="landing-card">
			<h3>Sidebar is curated</h3>
			<p>The left sidebar is a small tree of durable pages (Services, Methodology, Case Studies). It should stay calm as the site grows.</p>
		</div>
		<div class="landing-card">
			<h3>Blog scales via indexes</h3>
			<p>We don’t add every post to navigation. Discovery happens through <strong>Blog index</strong>, <strong>search</strong>, and <strong>topics</strong>.</p>
		</div>
		<div class="landing-card">
			<h3>Landing pages do the heavy lifting</h3>
			<p>Each section has an overview page that routes readers to the right depth: overview → evergreen → posts/models.</p>
		</div>
	</div>
</div>

<div class="landing-section">
	<h2>URL stability</h2>
	<div class="landing-callout">
		<p><strong>We avoid renaming published URLs.</strong> Once a page is public, it becomes part of the external surface area (bookmarks, references, search).</p>
		<p class="landing-mini">If a rename is ever unavoidable, we treat it as a migration (and ask first if it affects published links).</p>
	</div>
</div>

<div class="landing-section">
	<h2>What the “Diagram Gallery” means</h2>
	<div class="landing-grid">
		<div class="landing-card">
			<h3>Gallery = preview layer</h3>
			<p>It’s a browsing surface: quick scanning of models and patterns.</p>
		</div>
		<div class="landing-card">
			<h3>Inline Mermaid is canonical</h3>
			<p>The authoritative source remains Mermaid blocks embedded in pages/posts. Gallery images are optional previews.</p>
		</div>
		<div class="landing-card">
			<h3>Deterministic naming</h3>
			<p>When we add “primary” diagrams, we keep slugs consistent across post, .mmd, and .svg names for long-term sanity.</p>
		</div>
	</div>
	<p><a class="md-button" href="../diagrams/">Open diagram gallery</a></p>
</div>

<div class="landing-section">
	<h2>Where content lives</h2>
	<div class="landing-grid">
		<div class="landing-card">
			<h3>Blog posts</h3>
			<p>New posts go in <code>docs/blog/posts/</code>. The Blog index links to them chronologically.</p>
		</div>
		<div class="landing-card">
			<h3>Evergreen pages</h3>
			<p>Stable concepts live in their section folders (e.g., Methodology, Philosophy). Only truly durable pages go into nav.</p>
		</div>
		<div class="landing-card">
			<h3>Experimental drafts</h3>
			<p>Keep experimental pages linked from an index page first. Promote to navigation only after they stabilize.</p>
		</div>
	</div>
</div>

<div class="landing-section">
	<h2>Local preview workflow</h2>
	<div class="landing-card">
		<p>For day-to-day writing and design iteration, run the dev server and refresh.</p>
		<ul>
			<li>Use <code>python -m zensical serve --config-file mkdocs.yml</code> for live preview.</li>
			<li>Some Zensical builds may not emit HTML via <code>build</code>; preview via <code>serve</code> is the reliable workflow here.</li>
		</ul>
	</div>
</div>
