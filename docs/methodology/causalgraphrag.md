---
title: "CausalGraphRAG"
description: "From similarity search to causal traversal: how CausalGraphRAG retrieves mechanistic paths with traces, instead of generating plausible text."
---

--8<-- "includes/quicknav.html"

# CausalGraphRAG

<div class="landing-hero">
  <div class="landing-hero__grid">
    <div>
      <p class="landing-kicker">Methodology → causal retrieval</p>
      <h2 class="landing-title">Stop retrieving paragraphs. Start retrieving mechanisms.</h2>
      <p class="landing-subtitle">
        Classic RAG retrieves text chunks and asks the model to stitch them into an explanation.
        CausalGraphRAG retrieves <em>paths</em> in a causal graph — then produces a trace you can audit.
      </p>
      <div class="landing-cta">
        <a class="md-button md-button--primary" href="brcausalgraphrag.md">brCausalGraphRAG</a>
        <a class="md-button" href="constraints.md">Constraints &amp; SHACL</a>
        <a class="md-button" href="property-and-knowledge-graphs.md">Graphs</a>
      </div>
    </div>
    <div class="landing-visual" aria-hidden="true">
      <img src="../assets/img/hero-brmodel.svg" alt="" />
    </div>
  </div>
</div>

<div class="landing-section">
  <h2>Why this matters</h2>
  <div class="landing-grid">
    <div class="landing-card">
      <h3>A path is constrained</h3>
      <p>Edges can be typed, validated, and governed. The system can reject paths that violate rules.</p>
    </div>
    <div class="landing-card">
      <h3>A paragraph is not</h3>
      <p>Text can contain contradictions, missing assumptions, and policy violations while still sounding coherent.</p>
    </div>
    <div class="landing-card">
      <h3>Mechanism &gt; relevance</h3>
      <p>Similarity finds “about the topic”. Causal traversal targets “explains the outcome”.</p>
    </div>
    <div class="landing-card">
      <h3>Unknown is an output</h3>
      <p>If no valid path exists, the correct behavior is abstention with a falsification plan.</p>
    </div>
  </div>
</div>

<div class="landing-section">
  <h2>Minimal flow</h2>

```mermaid
flowchart LR;
  Q["Question"] --> S["Start node(s)"];
  S --> P["Path search (with constraints)"];
  P --> T["Trace + evidence"];
  T --> A["Answer or abstain"];
```

</div>

<div class="landing-section">
  <h2>Diagram: why this beats chunk retrieval</h2>

```mermaid
flowchart LR;
  RAG["RAG retrieves chunks"] --> TXT["Text synthesis"];
  CG["Causal graph retrieves paths"] --> PATH["Mechanism chain"];
  PATH --> TRACE["Trace object"];
  TRACE --> AUDIT["Auditable decision"];
```

</div>

<div class="landing-section">
  <h2>Diagram: validity gates (how abstention becomes deterministic)</h2>

```mermaid
flowchart TB;
  P["Candidate path"] --> V1["Edge/type validity"];
  V1 --> V2["Provenance requirements"];
  V2 --> V3["Policy constraints"];
  V3 -->|"Pass"| T["Emit trace"];
  V3 -->|"Fail"| X["Abstain + explain"];
```

</div>

<div class="landing-section">
  <h2>What you get (operationally)</h2>
  <div class="landing-card">
    <ul>
      <li>A mechanistic chain (A → B → C), not a narrative collage</li>
      <li>A trace object you can store, diff, audit, and replay</li>
      <li>A crisp “unknown” when the graph has no valid path</li>
    </ul>
  </div>
</div>
