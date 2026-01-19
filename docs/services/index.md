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
				<a class="md-button md-button--primary" href="start/">Start a Conversation</a>
				<a class="md-button" href="/methodology/">See the methodology</a>
				<a class="md-button" href="/reasoners/governance/">Governance approach</a>
			</div>
		</div>
	</div>
</div>

## Engagements (pick the risk level you’re in)

<div class="landing-section">
	<div class="landing-grid">
		<div class="landing-card">
			<h3>Epistemic Audit</h3>
			<p>Diagnosis: where hallucinations come from in your stack, and what a decision-grade roadmap looks like.</p>
			<p><a class="md-button md-button--primary" href="epistemic-audit/">Explore</a></p>
		</div>
		<div class="landing-card">
			<h3>Architecture Blueprint</h3>
			<p>Design: ontology, constraints, ingestion strategy, and a client-owned reference architecture.</p>
			<p><a class="md-button md-button--primary" href="blueprint/">Explore</a></p>
		</div>
		<div class="landing-card">
			<h3>Red-Team Evaluation Sprint</h3>
			<p>Stress test: adversarial prompts, policy edge cases, drift scenarios, and “unknown” handling — before it hits production.</p>
			<p><a class="md-button md-button--primary" href="epistemic-audit/">Explore</a></p>
		</div>
		<div class="landing-card">
			<h3>Implementation</h3>
			<p>Execution: build the glass-box memory layer, enforcement gates, traces, monitoring, and team handover.</p>
			<p><a class="md-button md-button--primary" href="implementation/">Explore</a></p>
		</div>
		<div class="landing-card">
			<h3>Governance &amp; Constraints Pack</h3>
			<p>Policy-as-code: encode rules, escalation paths, and shape validation so the system can deterministically block violations.</p>
			<p><a class="md-button md-button--primary" href="blueprint/">Explore</a></p>
		</div>
		<div class="landing-card">
			<h3>Ongoing Partnership</h3>
			<p>Retainer: continuous audits, governance updates, model reviews, and reliability tracking.</p>
			<p><a class="md-button md-button--primary" href="partnership/">Explore</a></p>
		</div>
	</div>
</div>

## Diagram: how engagements fit together

<div class="landing-section">

```mermaid
flowchart LR;
	S["Start a conversation"] --> A["Epistemic audit"];
	A --> B["Architecture blueprint"];
	B --> I["Implementation"];
	I --> P["Ongoing partnership"];
```

</div>

## Diagram: the risk-reduction loop we build

<div class="landing-section">

```mermaid
flowchart TB;
	D["Data reality"] --> M["Memory model + provenance"];
	M --> G["Constraint gate"];
	G --> T["Trace objects"];
	T --> R["Review + measurement"];
	R --> M;
```

</div>

## Ready to discuss fit?

<div class="landing-section">
	<div class="landing-card">
		<p>
			The fastest start is usually an <strong>Epistemic Audit</strong>.
			If you already have clarity and sponsorship, go straight to a <strong>Blueprint</strong>.
		</p>
		<p><a class="md-button md-button--primary" href="start/">Start a Conversation</a></p>
	</div>
</div>
