---
title: "Architecture Blueprint"
description: "Designing your domain’s causal memory and governance: ontology, constraints, ingestion strategy, and a reference architecture you can own."
---

--8<-- "includes/quicknav.html"

# Architecture Blueprint

<div class="landing-hero">
	<div class="landing-hero__grid">
		<div>
			<p class="landing-kicker">Services → design</p>
			<h2 class="landing-title">Turn domain knowledge into a system you can own.</h2>
			<p class="landing-subtitle">
				The Blueprint phase converts scattered expertise into durable semantics, enforceable constraints, and a reference architecture.
				The goal is straightforward: make reliability a property of the system, not a hope inside prompts.
			</p>
			<div class="landing-cta">
				<a class="md-button md-button--primary" href="start/">Start a Conversation</a>
				<a class="md-button" href="implementation/">Implementation</a>
				<a class="md-button" href="../methodology/core-primitives/">Core primitives</a>
			</div>
		</div>
		<div class="landing-visual" aria-hidden="true">
			<img src="../assets/img/hero-brmodel.svg" alt="" />
		</div>
	</div>
</div>

<div class="landing-section">
	<h2>Outputs</h2>
	<div class="landing-grid">
		<div class="landing-card">
			<h3>Domain model</h3>
			<p>Concepts + relations that describe what exists, what happens, and what matters in decisions.</p>
		</div>
		<div class="landing-card">
			<h3>Constraint model</h3>
			<p>Rules the system must enforce: what must never happen, what must be proven, what must be escalated.</p>
		</div>
		<div class="landing-card">
			<h3>Ingestion strategy</h3>
			<p>How facts and sources enter: provenance, versioning, extraction methods, and validation gates.</p>
		</div>
		<div class="landing-card">
			<h3>Reference architecture</h3>
			<p>Components and responsibilities: retrieval, traversal, constraint gate, trace store, evaluation, monitoring.</p>
		</div>
	</div>
</div>

<div class="landing-section">
	<h2>Diagram: blueprint layers</h2>

```mermaid
flowchart TB;
	D["Domain semantics</br>(ontology + meaning)"] --> C["Constraints</br>(what must never happen)"];
	C --> I["Ingestion</br>(provenance + validation)"];
	I --> S["System architecture</br>(services + responsibilities)"];
	S --> O["Operational metrics</br>(reliability + drift)"];
```

</div>

<div class="landing-section">
	<h2>Why clients like this phase</h2>
	<div class="landing-callout">
		<p><strong>Because it reduces vendor lock-in.</strong></p>
		<p class="landing-mini">You own the semantics and constraints even when models change.</p>
	</div>

```mermaid
flowchart LR;
	SEM["Your semantics + constraints"] --> M1["Model A"];
	SEM --> M2["Model B"];
	SEM --> M3["Model C"];
	M1 --> OUT["Decision-grade outputs"];
	M2 --> OUT;
	M3 --> OUT;
```

</div>

<div class="landing-section">
	<h2>What happens next</h2>
	<div class="landing-card">
		<p>
			The Blueprint becomes the build plan for a glass-box implementation: enforceable gates, traces, monitoring, and a team-ready handover.
		</p>
		<p>
			<a class="md-button md-button--primary" href="implementation/">Implementation</a>
			<a class="md-button" href="partnership/">Ongoing Partnership</a>
		</p>
	</div>
</div>
