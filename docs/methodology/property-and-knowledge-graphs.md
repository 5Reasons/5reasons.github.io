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
    <div class="landing-visual" aria-hidden="true">
      <img src="../assets/img/hero-brmodel.svg" alt="" />
    </div>
  </div>
</div>

<div class="landing-section">
  <h2>Two graph families (and what each optimizes)</h2>
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
  </div>
</div>

<div class="landing-section">
  <h2>Diagram: data vs meaning</h2>

```mermaid
flowchart LR;
  PG["Property graph</br>(nodes/edges + properties)"] --> KG["Knowledge graph</br>(ontology + constraints + meaning)"];
  KG --> Q["Queries with validity guarantees"];
```

</div>

<div class="landing-section">
  <h2>Where graphs help — and where they mislead</h2>
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
  </div>
</div>

<div class="landing-section">
  <h2>Diagram: provenance as a first-class object</h2>

```mermaid
flowchart TB;
  S["Source document"] --> V["Version + scope"];
  V --> F["Claim / fact"];
  F --> E["Edge assertion"];
  E --> C["Constraint validation"];
```

</div>

<div class="landing-section">
  <h2>Practical rule</h2>
  <div class="landing-card">
    <ul>
      <li>If you need speed and flexible ingestion: start with a <strong>property graph</strong>.</li>
      <li>If you need governance, auditability, and correctness: add <strong>knowledge-graph semantics</strong> (types + constraints + provenance).</li>
      <li>If you need “why, not just what”: build <strong>causal traversal</strong> on top (paths + traces + abstention).</li>
    </ul>
  </div>
</div>

<div class="landing-section">
  <h2>Next steps</h2>
  <div class="landing-card">
    <p>
      <a class="md-button md-button--primary" href="llm-tool-rag/">LLM + Tool + RAG</a>
      <a class="md-button" href="causalgraphrag/">CausalGraphRAG</a>
      <a class="md-button" href="brcausalgraphrag/">brCausalGraphRAG</a>
    </p>
  </div>
</div>
