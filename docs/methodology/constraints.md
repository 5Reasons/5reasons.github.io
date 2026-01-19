---
title: "Constraints & SHACL"
description: "How enforceable constraints make policy violations impossible, and why governance must live in the data layer—not in prompts or guidelines."
---

--8<-- "includes/quicknav.html"

# Constraints & SHACL

<div class="landing-hero">
	<div class="landing-hero__grid">
		<div>
			<p class="landing-kicker">Methodology → governance</p>
			<h2 class="landing-title">If a rule matters, it must be enforceable.</h2>
			<p class="landing-subtitle">
				Constraints move governance out of “prompt etiquette” and into a layer that can validate, block, and explain.
				SHACL is one practical way to formalize those constraints for graph-shaped data.
			</p>
			<div class="landing-cta">
				<a class="md-button md-button--primary" href="brcausalgraphrag/">brCausalGraphRAG</a>
				<a class="md-button" href="llm-tool-rag/">LLM + Tool + RAG</a>
				<a class="md-button" href="/reasoners/governance/">Governance approach</a>
			</div>
		</div>
	</div>
</div>

<div class="landing-section">
	<h2>The problem with prompt-only governance</h2>
	<div class="landing-grid">
		<div class="landing-card"><h3>Editable</h3><p>Instructions can be changed, ignored, or diluted by competing context.</p></div>
		<div class="landing-card"><h3>Bypassable</h3><p>A sufficiently clever prompt can route around “guidelines”.</p></div>
		<div class="landing-card"><h3>Hard to audit</h3><p>You can’t reliably prove which rule was applied, or why an output was allowed.</p></div>
		<div class="landing-card"><h3>Not deterministic</h3><p>Governance becomes a probabilistic behavior, not a system guarantee.</p></div>
		<div class="landing-card"><h3>Not portable</h3><p>Rules don’t travel cleanly across teams, products, and model upgrades; they decay into prompt folklore.</p></div>
		<div class="landing-card"><h3>Unclear failure mode</h3><p>When outputs violate policy, you get excuses instead of a crisp violation report tied to a specific rule.</p></div>
	</div>
</div>

<div class="landing-section">
	<h2>The constraint approach</h2>
	<div class="landing-callout">
		<p><strong>Encode rules as constraints that validate actions and outputs.</strong></p>
		<p class="landing-mini">The model can propose; the system decides what is allowed.</p>
	</div>

```mermaid
flowchart TB;
	D["Draft answer / action"] --> V["Validate constraints"];
	V -->|"Pass"| O["Output / execute"];
	V -->|"Fail"| X["Abstain + explain + log trace"];
```

</div>

<div class="landing-section">
	<h2>What SHACL gives you (practically)</h2>
	<div class="landing-grid">
		<div class="landing-card">
			<h3>Shape validation</h3>
			<p>"This claim must have these fields"; "this edge is only allowed between these types".</p>
		</div>
		<div class="landing-card">
			<h3>Policy-as-data</h3>
			<p>Rules live next to the schema and can be versioned, tested, and reviewed.</p>
		</div>
		<div class="landing-card">
			<h3>Machine-verifiable failures</h3>
			<p>When the system refuses, it can point to the violated shape and the offending node/edge.</p>
		</div>
		<div class="landing-card">
			<h3>Composable governance</h3>
			<p>Multiple rule sets (domain, safety, org policy) can be applied as separate validation layers.</p>
		</div>
		<div class="landing-card">
			<h3>Deterministic enforcement</h3>
			<p>Conformance is a yes/no property of the data. That makes “allowed vs blocked” predictable and testable.</p>
		</div>
		<div class="landing-card">
			<h3>Reviewable change control</h3>
			<p>Constraint changes can be code-reviewed and versioned like any other policy artifact, with diffs and rollbacks.</p>
		</div>
	</div>
</div>

<div class="landing-section">
	<h2>Diagram: SHACL validation pipeline (conceptual)</h2>

```mermaid
flowchart LR;
	G["Graph state"] --> P["Proposed update</br>(claim/edge)"];
	P --> S["SHACL shapes"];
	S --> R["Validation report"];
	R -->|"Conforms"| C["Commit update"];
	R -->|"Violations"| B["Block + return violations"];
```

</div>

<div class="landing-section">
	<h2>Examples of enforceable constraints</h2>
	<div class="landing-card">
		<ul>
			<li><strong>Role-based prohibitions</strong>: certain actions cannot be executed under a role.</li>
			<li><strong>Sector restrictions</strong>: domain-specific rules (e.g., medical, legal, finance) must gate outputs.</li>
			<li><strong>Required provenance</strong>: high-stakes claims must link to source objects and versions.</li>
			<li><strong>Threshold limits</strong>: numeric or confidence thresholds for allowed decisions.</li>
			<li><strong>Mandatory escalation</strong>: some cases must route to human review.</li>
		</ul>
	</div>
</div>

<div class="landing-section">
	<h2>Operational result</h2>
	<div class="landing-card">
		<p>
			A system that refuses to cross boundaries and produces a machine-verifiable reason when it abstains.
			This turns governance from “best effort” into an actual property of the system.
		</p>
	</div>
</div>
