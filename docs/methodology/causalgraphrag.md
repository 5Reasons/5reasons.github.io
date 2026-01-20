---
title: "CausalGraphRAG"
description: "From similarity search to causal traversal: how CausalGraphRAG retrieves mechanistic paths with traces, instead of generating plausible text."
---

--8<-- "includes/quicknav.html"

# CausalGraphRAG

<div class="landing-section">
    <img class="glightbox" src="/assets/img/br-008809.png"/>
</div>

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
        <a class="md-button md-button--primary" href="brcausalgraphrag/">brCausalGraphRAG</a>
        <a class="md-button" href="constraints/">Constraints &amp; SHACL</a>
        <a class="md-button" href="property-and-knowledge-graphs/">Graphs</a>
      </div>
    </div>
  </div>
</div>

## Why this matters

<div class="landing-section">
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
    <div class="landing-card">
      <h3>Debuggable failures</h3>
      <p>When something goes wrong, you can localize the break: which edge failed validation, which source is missing, or which constraint blocked the path.</p>
    </div>
    <div class="landing-card">
      <h3>Better under change</h3>
      <p>As policies evolve and evidence shifts, constraints and provenance gates keep behavior stable — and make necessary updates explicit instead of silent.</p>
    </div>
  </div>
</div>

## Advantages (why this is the future)

<div class="landing-section">
  <div class="landing-grid">
    <div class="landing-card">
      <h3>Decision-grade outputs</h3>
      <p>Outputs are constrained by structure, not vibes. You get answers that are checkable — and abstention when checks fail.</p>
    </div>
    <div class="landing-card">
      <h3>Auditability by default</h3>
      <p>Every result is a trace object linked to evidence and versions. That’s how you pass reviews, regulators, and internal postmortems.</p>
    </div>
    <div class="landing-card">
      <h3>Governance becomes enforceable</h3>
      <p>Policies live as constraints, not paragraphs. The system can deterministically reject invalid paths and forbidden assertions.</p>
    </div>
    <div class="landing-card">
      <h3>Faster iteration</h3>
      <p>When you change rules, you update constraints and schemas — not prompt folklore. Failures become reproducible and fixable.</p>
    </div>
    <div class="landing-card">
      <h3>Composable across domains</h3>
      <p>The same primitives and gates work across medicine, finance, security, and law. Only the graph content changes, not the logic.</p>
    </div>
    <div class="landing-card">
      <h3>Lower long-term cost</h3>
      <p>Model churn stops being existential. When memory and validity live outside the LLM, you can swap models without rewriting reality.</p>
    </div>
  </div>
</div>

## Minimal flow

<div class="landing-section">

```mermaid
flowchart LR;
  Q["Question"] --> S["Start node(s)"];
  S --> P["Path search (with constraints)"];
  P --> T["Trace + evidence"];
  T --> A["Answer or abstain"];
```

</div>

## Diagram: why this beats chunk retrieval

<div class="landing-section">

```mermaid
flowchart LR;
  RAG["RAG retrieves chunks"] --> TXT["Text synthesis"];
  CG["Causal graph retrieves paths"] --> PATH["Mechanism chain"];
  PATH --> TRACE["Trace object"];
  TRACE --> AUDIT["Auditable decision"];
```

</div>

## Diagram: validity gates (how abstention becomes deterministic)

<div class="landing-section">

```mermaid
flowchart TB;
  P["Candidate path"] --> V1["Edge/type validity"];
  V1 --> V2["Provenance requirements"];
  V2 --> V3["Policy constraints"];
  V3 -->|"Pass"| T["Emit trace"];
  V3 -->|"Fail"| X["Abstain + explain"];
```

</div>

## What you get (operationally)

<div class="landing-section">
  <div class="landing-card">
    <ul>
      <li>A mechanistic chain (A → B → C), not a narrative collage</li>
      <li>A trace object you can store, diff, audit, and replay</li>
      <li>A crisp “unknown” when the graph has no valid path</li>
    </ul>
  </div>
</div>
