---
title: "Implementation"
description: "From blueprint to production: building a glass-box memory layer, enforceable governance, traces, monitoring, and training your team to run it."
---

--8<-- "includes/quicknav.html"

# Implementation

<div class="landing-hero">
	<div class="landing-hero__grid">
		<div>
			<p class="landing-kicker">Services → execution</p>
			<h2 class="landing-title">Build the glass-box stack: constraints, traces, and measurable reliability.</h2>
			<p class="landing-subtitle">
				Implementation is where the Blueprint becomes an operational system.
				The key deliverable is not “a chatbot” — it’s a governed memory layer that decides when to answer, when to abstain, and how to prove why.
			</p>
			<div class="landing-cta">
				<a class="md-button md-button--primary" href="start.md">Start a Conversation</a>
				<a class="md-button" href="blueprint.md">Architecture Blueprint</a>
				<a class="md-button" href="../methodology/brcausalgraphrag.md">brCausalGraphRAG</a>
			</div>
		</div>
		<div class="landing-visual" aria-hidden="true">
			<img src="../assets/img/hero-brmodel.svg" alt="" />
		</div>
	</div>
</div>

<div class="landing-section">
	<h2>Typical components</h2>
	<div class="landing-grid">
		<div class="landing-card"><h3>Graph memory + provenance</h3><p>Claims as objects with sources, versions, and scope.</p></div>
		<div class="landing-card"><h3>Retrieval + traversal services</h3><p>Similarity for discovery; causal traversal for mechanistic paths.</p></div>
		<div class="landing-card"><h3>Constraint validation</h3><p>Enforce policies and safety rules in a gate the model cannot bypass.</p></div>
		<div class="landing-card"><h3>Trace generation</h3><p>Store machine-verifiable artifacts: evidence, rules applied, decisions, and memory writes.</p></div>
		<div class="landing-card"><h3>Operational monitoring</h3><p>Reliability metrics, drift detection, evaluation harnesses, and incident playbooks.</p></div>
		<div class="landing-card"><h3>Team handover</h3><p>Documentation, training, and measured success criteria.</p></div>
	</div>
</div>

<div class="landing-section">
	<h2>Diagram: the glass-box stack</h2>

```mermaid
flowchart TB;
	U["User"] --> Q["Question"];
	Q --> R["Retrieve evidence"];
	R --> P["Traverse causal paths"];
	P --> G["Constraint gate"];
	G -->|"Pass"| A["Answer / act"];
	G -->|"Fail"| X["Abstain + explain"];
	A --> T["Trace store"];
	X --> T;
```

</div>

<div class="landing-section">
	<h2>How we ship (so reliability is observable)</h2>
	<div class="landing-callout">
		<p><strong>We treat governance and evaluation as first-class features.</strong></p>
		<p class="landing-mini">If you can’t measure it, you can’t run it.</p>
	</div>

```mermaid
flowchart LR;
	B["Build"] --> E["Evaluate"];
	E -->|"Meets gates"| R["Release"];
	E -->|"Fails"| F["Fix model/data/constraints"];
	R --> M["Monitor"];
	M --> E;
```

</div>

<div class="landing-section">
	<h2>Handover</h2>
	<div class="landing-card">
		<ul>
			<li>Documentation and operational playbooks</li>
			<li>Training for engineers and domain owners</li>
			<li>Success criteria and reliability dashboards</li>
		</ul>
		<p>
			<a class="md-button md-button--primary" href="partnership.md">Ongoing Partnership</a>
		</p>
	</div>
</div>
