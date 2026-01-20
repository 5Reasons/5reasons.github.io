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
				<a class="md-button md-button--primary" href="/home/start-here/">Start Here</a>
				<a class="md-button" href="/blog/">Blog</a>
			</div>
		</div>
	</div>
</div>

## Navigation philosophy

<div class="landing-section">
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

## Where content lives

<div class="landing-section">
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