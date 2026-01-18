---
title: "The Three Laws"
description: "Three operating laws for decision-grade AI: no answer without evidence, order before speed, and humans remain accountable for decisions."
---

--8<-- "includes/quicknav.html"

# The Three Laws

<div class="landing-hero">
	<div class="landing-hero__grid">
		<div>
			<p class="landing-kicker">Operating principles</p>
			<h2 class="landing-title">Three laws for decision-grade AI.</h2>
			<p class="landing-subtitle">
				These are not slogans. They translate directly into architecture: evidence gates, constraint enforcement, and accountable decision ownership.
			</p>
			<div class="landing-cta">
				<a class="md-button md-button--primary" href="../methodology/">Methodology</a>
				<a class="md-button" href="../reasoners/governance/">Governance approach</a>
			</div>
		</div>
		<div class="landing-visual" aria-hidden="true">
			<img src="../assets/img/hero-brmodel.svg" alt="" />
		</div>
	</div>
</div>

<div class="landing-section">
	<h2>Law 1: No answer without evidence</h2>
	<div class="landing-callout">
		<p><strong>If the system can’t point to a source, it should say “I don’t know”.</strong></p>
		<p class="landing-mini">Evidence is a gate: it prevents plausible-but-wrong claims from entering high-stakes workflows.</p>
	</div>
	<div class="landing-card">
		<h3>Implementation requirements</h3>
		<ul>
			<li>Outputs carry citations/provenance (document, section, timestamp, version).</li>
			<li>Claims are separated into facts vs hypotheses vs assumptions.</li>
			<li>Missing evidence triggers abstention or escalation.</li>
		</ul>
	</div>
</div>

<div class="landing-section">
	<h2>Law 2: Order before speed</h2>
	<div class="landing-callout">
		<p><strong>Structure the domain before automating decisions.</strong></p>
		<p class="landing-mini">The fastest way to ship unreliable AI is to automate first and model the domain later.</p>
	</div>
	<div class="landing-card">
		<h3>Implementation requirements</h3>
		<ul>
			<li>Define core concepts and relations (what exists, how it connects).</li>
			<li>Encode constraints (what must never happen; what is allowed only under conditions).</li>
			<li>Version the knowledge layer; treat changes as operational risk.</li>
		</ul>
	</div>
</div>

<div class="landing-section">
	<h2>Law 3: Humans remain accountable</h2>
	<div class="landing-callout">
		<p><strong>AI assists, simulates, and recommends. Humans own responsibility.</strong></p>
		<p class="landing-mini">Accountability can be supported by AI; it cannot be outsourced to it.</p>
	</div>
	<div class="landing-card">
		<h3>Implementation requirements</h3>
		<ul>
			<li>Explicit decision owner per workflow (role, escalation path).</li>
			<li>Audit trail: what was proposed, why, what evidence, what constraints, who approved.</li>
			<li>Clear separation between “advisor mode” and “action mode”.</li>
		</ul>
	</div>
</div>

<div class="landing-section">
	<h2>Diagram: evidence gate (non-negotiable)</h2>

```mermaid
flowchart LR;
	Q["Question / decision"] --> E["Evidence available?"];
	E -->|"No"| A["Abstain / escalate"];
	E -->|"Yes"| V["Verify + trace"];
	V --> O["Output + provenance"];
```

</div>

<div class="landing-section">
	<h2>Diagram: human accountability in the loop</h2>

```mermaid
flowchart TB;
	S["System proposes"] --> J["Human judgment"];
	J -->|"Approve"| X["Execute / publish"];
	J -->|"Reject"| R["Revise / request more evidence"];
	X --> L["Log decision + rationale"];
	R --> L;
```

</div>
