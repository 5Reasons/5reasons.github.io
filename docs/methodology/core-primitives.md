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
	</div>
</div>

<div class="landing-section">
	<h2>What we treat as first-class</h2>
	<div class="landing-grid">
		<div class="landing-card">
			<h3>Subjects (actors)</h3>
			<p>Who acts in the domain: people, teams, organizations, services, devices. Subjects have capacity and can initiate processes and decisions.</p>
		</div>
		<div class="landing-card">
			<h3>Objects (things acted on)</h3>
			<p>What is produced, consumed, owned, transferred, or constrained: contracts, assets, claims, datasets, molecules, configurations. Objects carry “what changes hands”.</p>
		</div>
		<div class="landing-card">
			<h3>Processes (events/transformations)</h3>
			<p>What happens over time: treatments, approvals, payments, failures, audits, experiments. They explain how the state of entities changes.</p>
		</div>
		<div class="landing-card">
			<h3>Relations</h3>
			<p>How things are connected in reality: agreements, authorizations, obligations, dependencies, contraindications, violations, explanations, causal links. Relations are queryable and auditable.</p>
		</div>
		<div class="landing-card">
			<h3>Sources (provenance objects)</h3>
			<p>Where we learned it: document IDs, versions, timestamps, authors, datasets, and extraction method. Provenance turns memory into evidence.</p>
		</div>
		<div class="landing-card">
			<h3>Interactions (meta-ontology)</h3>
			<p>Every domain model reduces to two reusable interaction families: <strong>Edge – Influence</strong> (one thing affects another) and <strong>Edge – Inheritance</strong> (one thing specializes another).</p>
		</div>
	</div>
</div>

<div class="landing-section">
	<h2>The meta-ontology (why this is interdisciplinary)</h2>
	<div class="landing-callout">
		<p><strong>We separate “what exists” from “how it interacts”.</strong></p>
		<p class="landing-mini">The same abstract building blocks work in biotech, finance, cybersecurity, and law because they describe structure, change, and evidence — not a specific discipline.</p>
	</div>
	<div class="landing-grid">
		<div class="landing-card">
			<h3>Element</h3>
			<p>An abstract “thing” in some categorical state. In the domain layer it becomes Source, Subject, Process, Relation, or Object.</p>
		</div>
		<div class="landing-card">
			<h3>Metric</h3>
			<p>A quantifiable attribute of an Element (a measurable state). Metrics make monitoring, drift detection, and audits concrete.</p>
		</div>
		<div class="landing-card">
			<h3>Cause</h3>
			<p>An abstract driver of change: rules, conditions, or mechanisms that initiate or constrain transitions (what can change what, and when).</p>
		</div>
		<div class="landing-card">
			<h3>Transfer</h3>
			<p>A mediator of movement or transformation: how change propagates (energy, information, matter, workflow) through the system.</p>
		</div>
				<div class="landing-card">
			<h3>Edge – Inheritance</h3>
			<p>Specialization and reuse. It lets a specific object inherit structure/behavior from an abstract parent — keeping schemas consistent as the system grows.</p>
			<details>
				<summary>Examples</summary>
				<p><strong>Apply</strong>: apply a learned rule/pattern (Cause) to a concrete case (Element).<br/>
				<strong>Teach</strong>: generalize from concrete evidence (Element) into an abstract rule/pattern (Cause).</p>
			</details>
		</div>
		<div class="landing-card">
			<h3>Edge – Influence</h3>
			<p>Interaction and dependency. It captures how one object affects another — including triggers, propagation, feedback, and measurable deltas.</p>
			<details>
				<summary>Examples</summary>
				<p><strong>Unit</strong>: a Metric defines units for an Element’s measurable attribute.<br/>
				<strong>Affect</strong>: a Cause triggers a Transfer (a transformation starts).<br/>
				<strong>Input/Output</strong>: Transfers change Metrics; Metric changes can generate Transfers.<br/>
				<strong>Effect</strong>: feedback from an Element back into the Causes acting on it.<br/>
				<strong>Rest (diff)</strong>: represent a difference between two states for a Metric.</p>
			</details>
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
	E1 --> R["Relation"];
	R --> E2["Entity"];
```

</div>

<div class="landing-section">
	<h2>Diagram: meta-ontology → domain DSL</h2>

```mermaid
flowchart TB;
	subgraph Schema[Schema layer (Memory)]
		E[Element] -->|has| M[Metric];
		C[Cause] -->|affect| T[Transfer];
		E -.->|influence| E;
		E -.->|inheritance| E;
	end
	
	subgraph DSL[DSL layer (WisdomGraph)]
		Src[Source]:::dsl;
		Subj[Subject]:::dsl;
		Proc[Process]:::dsl;
		Rel[Relation]:::dsl;
		Obj[Object]:::dsl;
	end

	E --> Src;
	E --> Subj;
	E --> Proc;
	E --> Rel;
	E --> Obj;

	classDef dsl fill:#eef,stroke:#99f,stroke-width:1px;
```

</div>

<div class="landing-section">
	<h2>WisdomGraph: the five domain-facing interfaces</h2>
	<div class="landing-grid">
		<div class="landing-card">
			<h3>Source</h3>
			<p>The origin of information and context: discipline, system, dataset, document stream. It anchors provenance and scope.</p>
		</div>
		<div class="landing-card">
			<h3>Subject</h3>
			<p>An active agent with capacity to act: person, organization, device, service, CPU. Subjects initiate actions and consume constraints.</p>
		</div>
		<div class="landing-card">
			<h3>Process</h3>
			<p>A sequence over time that transforms inputs into outputs: procedure, workflow, mechanism. Processes explain how outcomes are produced.</p>
		</div>
		<div class="landing-card">
			<h3>Relation</h3>
			<p>A connection in “space” (not necessarily physical): dependency, interaction, association, pathway. Relations are how systems coordinate.</p>
		</div>
		<div class="landing-card">
			<h3>Object</h3>
			<p>A thing being moved or transformed: resource, artifact, contract, data, substance, tool. Objects carry “matter” in the abstract sense.</p>
		</div>
		<div class="landing-card">
			<h3>Complexity reduction</h3>
			<p>These five interfaces are causally composable via a finite set of relation types. That reduction is what makes messy real systems modelable, testable, and governable.</p>
		</div>
	</div>
	<div class="landing-callout">
		<p><strong>Why it helps:</strong> different domains use different nouns, but they rhyme. This gives the memory system stable handles that survive model churn and taxonomy drift.</p>
	</div>
</div>

<div class="landing-section">
	<h2>Why provenance matters</h2>
	<div class="landing-callout">
		<p><strong>Without provenance, you can’t audit, debug, or falsify.</strong></p>
		<p class="landing-mini">Provenance turns “an answer” into a decision-grade artifact: it makes claims inspectable and contestable.</p>
	</div>
	<div class="landing-grid">
		<div class="landing-card"><h3>Audit</h3><p>Provenance makes claims auditable: which source supports this, which version, what time window, and under what scope and assumptions.</p></div>
		<div class="landing-card"><h3>Debug</h3><p>Provenance narrows failures fast: was it the data, extraction, constraints, or model behavior — and which specific artifact introduced the error.</p></div>
		<div class="landing-card"><h3>Confidence</h3><p>Provenance shifts confidence from fluency to evidence: trust attaches to source quality, traceability, and constraint satisfaction, not wording.</p></div>
		<div class="landing-card"><h3>Falsification</h3><p>Provenance makes disagreement actionable: which edge is uncertain, what counterevidence would flip it, and what new data would decide.</p></div>
		<div class="landing-card"><h3>Reproducibility</h3><p>Provenance enables reproducibility: re-run extraction, replay traces, and verify outputs across model versions, schema changes, and evolving knowledge.</p></div>
		<div class="landing-card"><h3>Governance</h3><p>Provenance enables permissions, accountability, and lifecycle controls: who asserted what, when it changed, and who approved it.</p></div>
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
