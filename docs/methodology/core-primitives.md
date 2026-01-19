---
title: "Core Primitives"
description: "The smallest building blocks of brModel™: entities, processes, relations, sources, and why provenance is a first-class object in memory systems."
---

--8<-- "includes/quicknav.html"

# Core Primitives

<div class="landing-hero">
	<div class="landing-hero__grid">
		<div>
			<p class="landing-kicker">Methodology → building blocks</p>
			<h2 class="landing-title">The smallest objects that make memory auditable.</h2>
			<p class="landing-subtitle">
				A durable memory system must represent reality in a way that survives model churn.
				That means: the unit of memory is not “a paragraph” — it is a structured object with provenance.
			</p>
			<div class="landing-cta">
				<a class="md-button md-button--primary" href="/methodology/">Methodology overview</a>
				<a class="md-button" href="constraints/">Constraints &amp; SHACL</a>
				<a class="md-button" href="property-and-knowledge-graphs/">Graphs</a>
			</div>
		</div>
		<div class="landing-visual" aria-hidden="true">
			<img src="../assets/img/hero-brmodel.svg" alt="" />
		</div>
	</div>
</div>

<div class="landing-section">
	<h2>What we treat as first-class</h2>
	<div class="landing-grid">
		<div class="landing-card">
			<h3>Entities (subjects/objects)</h3>
			<p>Who/what exists in the domain: people, organizations, devices, molecules, policies, contracts.</p>
		</div>
		<div class="landing-card">
			<h3>Processes (events/transformations)</h3>
			<p>What happens over time: treatments, approvals, payments, failures, audits, experiments.</p>
		</div>
		<div class="landing-card">
			<h3>Relations (edges)</h3>
			<p>How entities connect: causes, depends-on, contraindicates, authorizes, violates, explains.</p>
		</div>
		<div class="landing-card">
			<h3>Sources (provenance objects)</h3>
			<p>Where we learned it: document IDs, versions, timestamps, authors, datasets, and extraction method.</p>
		</div>
	</div>
</div>

<div class="landing-section">
	<h2>Diagram: primitive schema (minimal)</h2>

```mermaid
flowchart TB;
	S["Source"] --> F["Fact (claim)"];
	F --> E1["Entity"];
	F --> P["Process / event"];
	E1 --> R["Relation (edge)"];
	R --> E2["Entity"];
```

</div>

<div class="landing-section">
	<h2>Why provenance matters</h2>
	<div class="landing-callout">
		<p><strong>Without provenance, you can’t audit, debug, or falsify.</strong></p>
		<p class="landing-mini">Provenance turns “an answer” into a decision-grade artifact: it makes claims inspectable and contestable.</p>
	</div>
	<div class="landing-grid">
		<div class="landing-card"><h3>Audit</h3><p>Which source supports this claim? Which version? Under what scope?</p></div>
		<div class="landing-card"><h3>Debug</h3><p>Is the failure data, extraction, constraints, or model behavior?</p></div>
		<div class="landing-card"><h3>Confidence</h3><p>Confidence attaches to evidence quality, not model fluency.</p></div>
		<div class="landing-card"><h3>Falsification</h3><p>What new data would change the conclusion? Which edge is uncertain?</p></div>
	</div>
</div>

<div class="landing-section">
	<h2>Diagram: provenance chain (what “grounded” really means)</h2>

```mermaid
flowchart LR;
	D["Document / dataset"] --> V["Version + timestamp"];
	V --> X["Extraction"];
	X --> C["Claim (fact)"];
	C --> T["Trace step"];
	T --> O["Output"];
```

</div>

<div class="landing-section">
	<h2>Where this connects</h2>
	<div class="landing-card">
		<p>
			<a class="md-button md-button--primary" href="property-and-knowledge-graphs/">Property Graphs &amp; Knowledge Graphs</a>
			<a class="md-button" href="llm-tool-rag/">LLM + Tool + RAG</a>
			<a class="md-button" href="causalgraphrag/">CausalGraphRAG</a>
		</p>
	</div>
</div>
