---
title: "Constraints & SHACL"
description: "How enforceable constraints make policy violations impossible, and why governance must live in the data layer—not in prompts or guidelines."
---

--8<-- "includes/quicknav.html"

<div class="landing-section">
    <img class="glightbox" src="/assets/img/br-008823.png"/>
</div>

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
				<a class="md-button md-button--primary" href="/methodology/brcausalgraphrag/">brCausalGraphRAG</a>
				<a class="md-button" href="/methodology/llm-tool-rag/">LLM + Tool + RAG</a>
				<a class="md-button" href="/reasoners/governance/">Governance approach</a>
			</div>
		</div>
	</div>
</div>

## The problem with prompt-only governance

<div class="landing-section">
	<div class="landing-grid">
		<div class="landing-card"><h3>Editable</h3><p>Instructions can be changed, ignored, or diluted by competing context.</p></div>
		<div class="landing-card"><h3>Bypassable</h3><p>A sufficiently clever prompt can route around “guidelines”.</p></div>
		<div class="landing-card"><h3>Hard to audit</h3><p>You can’t reliably prove which rule was applied, or why an output was allowed.</p></div>
		<div class="landing-card"><h3>Not deterministic</h3><p>Governance becomes a probabilistic behavior, not a system guarantee.</p></div>
		<div class="landing-card"><h3>Not portable</h3><p>Rules don’t travel cleanly across teams, products, and model upgrades; they decay into prompt folklore.</p></div>
		<div class="landing-card"><h3>Unclear failure mode</h3><p>When outputs violate policy, you get excuses instead of a crisp violation report tied to a specific rule.</p></div>
	</div>
</div>

## The constraint approach

<div class="landing-section">
	<div class="landing-callout">
		<p><strong>Encode rules as constraints that validate actions and outputs.</strong></p>
		<p class="landing-mini">The model can propose; the system decides what is allowed.</p>
	</div>

```mermaid
flowchart TB
%% Styles (brModel Standard)
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef r fill:#FFFFB3,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;
classDef s fill:#FFB3B3,stroke-width:0px,color:#000;

I_D(["🗣️ Draft answer / proposed action"]):::i
P_V("🔒 Validate constraints"):::p
R_R(["🧾 Validation report (what rule, what edge)"]):::r
D_OK{"✅ Allowed?"}:::s
O_O(["✅ Allowed + execute + trace"]):::o
S_X(["🛑 Block + abstain + explain"]):::i

I_D --> P_V --> R_R
R_R --> D_OK
D_OK -->|"Yes"| O_O
D_OK -->|"No"| S_X

%% Clickable nodes
click P_V "/methodology/constraints/" "Constraints & SHACL"
click O_O "/methodology/brcausalgraphrag/" "brCausalGraphRAG"
```

<p><strong>Decision mechanism:</strong> a proposal becomes a <strong>🧾 validation report</strong>, then the <strong>✅ allowed?</strong> gate decides. Passing yields <strong>✅ execute + trace</strong>; failing yields <strong>🛑 block/abstain</strong> plus an explanation tied to the violated rule and edge.</p>

</div>

## What SHACL gives you (practically)

<div class="landing-section">
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

## Diagram: SHACL validation pipeline (conceptual)

<div class="landing-section">

```mermaid
 flowchart TB
%% Styles (brModel Standard)
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef r fill:#FFFFB3,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;
classDef s fill:#FFB3B3,stroke-width:0px,color:#000;

I_G(["🕸️ Graph state"]):::i
P_U("✍️ Proposed update (claim / edge / action)"):::p
P_S("📐 SHACL shapes (versioned policy)"):::p
R_R(["🧾 Validation report"]):::r
D_Conf{"✅ Conforms?"}:::s
O_C(["✅ Commit update + audit event"]):::o
S_B(["🛑 Block + return violations"]):::i

I_G --> P_U --> P_S --> R_R
R_R --> D_Conf
D_Conf -->|"Yes"| O_C
D_Conf -->|"No"| S_B

%% Clickable nodes
click P_S "/methodology/constraints/" "Constraints & SHACL"
click R_R "/reasoners/governance/" "Governance"
```

<p><strong>Pipeline meaning:</strong> governance is applied to a <strong>✍️ proposed update</strong> using <strong>📐 versioned SHACL shapes</strong>. The result is a <strong>🧾 report</strong> and a <strong>✅ conforms?</strong> decision: either <strong>✅ commit + audit event</strong> or <strong>🛑 block + return violations</strong>.</p>

</div>

## Examples of enforceable constraints

<div class="landing-section">
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

## Operational result

<div class="landing-section">
	<div class="landing-card">
		<p>
			A system that refuses to cross boundaries and produces a machine-verifiable reason when it abstains.
			This turns governance from “best effort” into an actual property of the system.
		</p>
	</div>
</div>
