---
title: "Property Graphs & Knowledge Graphs"
description: "Property graphs store rich attributes; knowledge graphs enforce meaning. When to use each, and how to keep provenance and constraints first-class."
---

--8<-- "includes/quicknav.html"

<div class="landing-hero">
  <div class="landing-hero__grid">
    <div>
      <p class="landing-kicker">Methodology → representation</p>
      <h2 class="landing-title">Graphs are memory with structure — but not all structure is causal.</h2>
      <p class="landing-subtitle">
        Teams often say “knowledge graph” when they really mean “a graph database”.
        The difference matters because governance and meaning live in different layers than traversal and retrieval.
      </p>
      <div class="landing-cta">
        <a class="md-button md-button--primary" href="core-primitives/">Core primitives</a>
        <a class="md-button" href="constraints/">Constraints &amp; SHACL</a>
        <a class="md-button" href="causalgraphrag/">CausalGraphRAG</a>
      </div>
    </div>
  </div>
</div>

## Two graph families (and what each optimizes)

<div class="landing-section">
  <div class="landing-grid">
    <div class="landing-card">
      <h3>Property graph</h3>
      <p><strong>Purpose:</strong> engineering ergonomics and fast traversal.</p>
      <p><strong>Data model:</strong> nodes/edges with arbitrary key-value properties.</p>
      <p><strong>Typical wins:</strong> exploration, neighborhood expansion, ranking, path queries.</p>
    </div>
    <div class="landing-card">
      <h3>Knowledge graph</h3>
      <p><strong>Purpose:</strong> semantics, interoperability, and governance.</p>
      <p><strong>Data model:</strong> typed concepts and relations, explicit meaning, validation rules.</p>
      <p><strong>Typical wins:</strong> schema discipline, policy enforcement, consistent interpretation.</p>
    </div>
    <div class="landing-card">
      <h3>Hybrid (often best)</h3>
      <p><strong>Point:</strong> not every problem fits one graph style.</p>
      <p><strong>Pattern:</strong> use a property graph for fast retrieval and workflows, then layer knowledge-graph semantics for meaning, constraints, and audit.</p>
      <p><strong>Result:</strong> speed without losing correctness when stakes rise.</p>
    </div>
  </div>
</div>

## Diagram: data vs meaning

<div class="landing-section">

```mermaid
flowchart LR;
  PG["Property graph</br>(nodes/edges + properties)"] --> KG["Knowledge graph</br>(ontology + constraints + meaning)"];
  KG --> Q["Queries with validity guarantees"];
```

</div>

## Where graphs help — and where they mislead

<div class="landing-section">
  <div class="landing-callout">
    <p><strong>A graph can store "what is connected" without storing "why it is true".</strong></p>
    <p class="landing-mini">Causal claims require mechanisms and counterfactual commitments; paths alone are not enough.</p>
  </div>
  <div class="landing-grid">
    <div class="landing-card">
      <h3>Great for</h3>
      <ul>
        <li>Navigation: “show me what relates to X”</li>
        <li>Evidence clusters: “what supports this claim”</li>
        <li>Governance: “is this assertion even allowed”</li>
      </ul>
    </div>
    <div class="landing-card">
      <h3>Risky for</h3>
      <ul>
        <li>Equating proximity with causality</li>
        <li>Mixing incompatible sources without noticing</li>
        <li>Smuggling policy decisions into “similarity” heuristics</li>
      </ul>
    </div>

    <div class="landing-card">
      <h3>Helps when you need traceability</h3>
      <p>Graphs shine when each edge is an inspectable claim with provenance. You can ask not only <em>what</em> connects, but <em>which source</em> says so and under what scope.</p>
    </div>

    <div class="landing-card">
      <h3>Misleads when you skip semantics</h3>
      <p>If relations aren’t typed and validated, traversal blends different meanings into one path. The output looks coherent, but it may be logically invalid or policy-violating.</p>
    </div>

    <div class="landing-card">
      <h3>Helps when the world changes</h3>
      <p>With versioned sources and constraints, you can detect drift: what changed, which edges became stale, and which decisions must be revalidated after deployment.</p>
    </div>

    <div class="landing-card">
      <h3>Misleads under optimization pressure</h3>
      <p>When graphs drive ranking or automation, agents learn to game proxies. Without guardrails and counterfactual checks, “best path” becomes a policy choice disguised as retrieval.</p>
    </div>
  </div>
</div>

## Diagram: provenance as a first-class object

<div class="landing-section">

```mermaid
flowchart TB;
  S["Source document"] --> V["Version + scope"];
  V --> F["Claim / fact"];
  F --> E["Edge assertion"];
  E --> C["Constraint validation"];
```

</div>

## Practical rule

<div class="landing-section">
  <div class="landing-card">
    <ul>
      <li>If you need speed and flexible ingestion: start with a <strong>property graph</strong>.</li>
      <li>If you need governance, auditability, and correctness: add <strong>knowledge-graph semantics</strong> (types + constraints + provenance).</li>
      <li>If you need “why, not just what”: build <strong>causal traversal</strong> on top (paths + traces + abstention).</li>
    </ul>
  </div>
</div>

## Next steps

<div class="landing-section">
  <div class="landing-card">
    <p>
      <a class="md-button md-button--primary" href="llm-tool-rag/">LLM + Tool + RAG</a>
      <a class="md-button" href="causalgraphrag/">CausalGraphRAG</a>
      <a class="md-button" href="brcausalgraphrag/">brCausalGraphRAG</a>
    </p>
  </div>
</div>
