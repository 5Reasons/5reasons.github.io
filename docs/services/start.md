---
title: "Start a Conversation"
description: "A lightweight entry point: what we need to evaluate fit quickly, and how to start without committing to a large implementation upfront."
---

--8<-- "includes/quicknav.html"

# Start a Conversation

<div class="landing-hero">
	<div class="landing-hero__grid">
		<div>
			<p class="landing-kicker">Services → contact</p>
			<h2 class="landing-title">Start small. Get clarity fast.</h2>
			<p class="landing-subtitle">
				This is a lightweight entry point.
				In one short exchange, we can usually tell whether your problem is best solved with constraints, better evaluation, better semantics — or not with AI at all.
			</p>
			<div class="landing-cta">
				<a class="md-button md-button--primary" href="epistemic-audit/">Epistemic Audit</a>
				<a class="md-button" href="blueprint/">Architecture Blueprint</a>
				<a class="md-button" href="/methodology/">Methodology</a>
			</div>
		</div>
		<div class="landing-visual" aria-hidden="true">
			<img src="../assets/img/hero-brmodel.svg" alt="" />
		</div>
	</div>
</div>

<div class="landing-section">
	<h2>We’re a strong fit if</h2>
	<div class="landing-grid">
		<div class="landing-card"><h3>Hallucination is unacceptable</h3><p>You need a system that can abstain, justify, and prove its boundaries.</p></div>
		<div class="landing-card"><h3>Audits or compliance matter</h3><p>You need traceability and enforceable rules, not “best effort”.</p></div>
		<div class="landing-card"><h3>Your data reality is messy</h3><p>PDF + SQL + KBs + tribal knowledge. The hard part is not the model — it’s the semantics.</p></div>
		<div class="landing-card"><h3>You expect model churn</h3><p>You want an architecture that stays stable even as models change.</p></div>
	</div>
</div>

<div class="landing-section">
	<h2>What we need (minimal)</h2>
	<div class="landing-card">
		<ol>
			<li><strong>The decision</strong> you want to support (and what must never be wrong)</li>
			<li><strong>The data sources</strong> involved (and who owns them)</li>
			<li><strong>The constraints/policies</strong> that govern the domain</li>
		</ol>
	</div>
</div>

<div class="landing-section">
	<h2>Diagram: intake flow</h2>

```mermaid
flowchart LR;
	I["Initial message"] --> D["Decision + risk"];
	D --> S["Sources"];
	S --> C["Constraints"];
	C --> R["Recommendation"];
```

</div>

<div class="landing-section">
	<h2>How to start (recommended)</h2>
	<div class="landing-callout">
		<p><strong>Start with an Epistemic Audit</strong> if you want clarity fast.</p>
		<p class="landing-mini">Start with a Blueprint if you already know you must build durable semantics and constraints.</p>
	</div>

```mermaid
flowchart TB;
	Q["Do you already have clarity</br>on failure modes and constraints?"] -->|"No"| A["Start with Epistemic Audit"];
	Q -->|"Yes"| B["Start with Architecture Blueprint"];
	A --> B;
	B --> I["Implementation (optional)"];
```

	<div class="landing-card">
		<p>
			<a class="md-button md-button--primary" href="epistemic-audit/">Epistemic Audit</a>
			<a class="md-button" href="blueprint/">Architecture Blueprint</a>
			<a class="md-button" href="implementation/">Implementation</a>
		</p>
	</div>
</div>

<div class="landing-section">
	<h2>Contact channel (your call)</h2>
	<div class="landing-card">
		<p>
			Tell me what contact channel you prefer to publish (email address, Calendly link, or another method).
			I’ll place it here and also mirror it in the About section so it’s easy to find.
		</p>
	</div>
</div>
