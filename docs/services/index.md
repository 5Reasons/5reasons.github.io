---
title: "Services"
description: "From epistemic audit to causal architecture blueprints to production implementation: engagement models for deterministic, auditable AI systems."
---

--8<-- "includes/quicknav.html"

# Services

<div class="landing-hero">
	<div class="landing-hero__grid">
		<div>
			<p class="landing-kicker">Services → engagements</p>
			<h2 class="landing-title">We don’t sell licenses. We sell epistemic safety.</h2>
			<p class="landing-subtitle">
				You can only trust an AI system if you can explain what it did, why it did it, and what would change the decision.
				Our services are designed to reduce hallucination risk and make outcomes measurable.
			</p>
			<div class="landing-cta">
				<a class="md-button md-button--primary" href="start.md">Start a Conversation</a>
				<a class="md-button" href="../methodology/index.md">See the methodology</a>
				<a class="md-button" href="../reasoners/governance.md">Governance approach</a>
			</div>
		</div>
	</div>
</div>

<div class="landing-section">
	<h2>Engagements (pick the risk level you’re in)</h2>
	<div class="landing-grid">
		<div class="landing-card">
			<h3>Epistemic Audit</h3>
			<p>Diagnosis: where hallucinations come from in your stack, and what a decision-grade roadmap looks like.</p>
			<p><a class="md-button md-button--primary" href="epistemic-audit.md">Explore</a></p>
		</div>
		<div class="landing-card">
			<h3>Architecture Blueprint</h3>
			<p>Design: ontology, constraints, ingestion strategy, and a client-owned reference architecture.</p>
			<p><a class="md-button md-button--primary" href="blueprint.md">Explore</a></p>
		</div>
		<div class="landing-card">
			<h3>Implementation</h3>
			<p>Execution: build the glass-box memory layer, enforcement gates, traces, monitoring, and team handover.</p>
			<p><a class="md-button md-button--primary" href="implementation.md">Explore</a></p>
		</div>
		<div class="landing-card">
			<h3>Ongoing Partnership</h3>
			<p>Retainer: continuous audits, governance updates, model reviews, and reliability tracking.</p>
			<p><a class="md-button md-button--primary" href="partnership.md">Explore</a></p>
		</div>
	</div>
</div>

<div class="landing-section">
	<h2>Diagram: how engagements fit together</h2>

```mermaid
flowchart LR;
	S["Start a conversation"] --> A["Epistemic audit"];
	A --> B["Architecture blueprint"];
	B --> I["Implementation"];
	I --> P["Ongoing partnership"];
```

</div>

<div class="landing-section">
	<h2>Diagram: the risk-reduction loop we build</h2>

```mermaid
flowchart TB;
	D["Data reality"] --> M["Memory model + provenance"];
	M --> G["Constraint gate"];
	G --> T["Trace objects"];
	T --> R["Review + measurement"];
	R --> M;
```

</div>

<div class="landing-section">
	<h2>Ready to discuss fit?</h2>
	<div class="landing-card">
		<p>
			The fastest start is usually an <strong>Epistemic Audit</strong>.
			If you already have clarity and sponsorship, go straight to a <strong>Blueprint</strong>.
		</p>
		<p><a class="md-button md-button--primary" href="start.md">Start a Conversation</a></p>
	</div>
</div>
