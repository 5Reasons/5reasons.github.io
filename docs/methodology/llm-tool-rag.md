---
title: "LLM + Tool + RAG"
description: "A pragmatic baseline: how tool-use and retrieval reduce hallucinations, where they still fail, and what governance needs beyond prompts."
---

--8<-- "includes/quicknav.html"

# LLM + Tool + RAG

<div class="landing-hero">
  <div class="landing-hero__grid">
    <div>
      <p class="landing-kicker">Methodology → baseline</p>
      <h2 class="landing-title">The mainstream stack, and the exact point where it fails.</h2>
      <p class="landing-subtitle">
        LLM + Tool + RAG is a strong starting point: retrieval reduces pure invention and tools turn text into action.
        But it still lacks an enforcement layer that makes violations impossible.
      </p>
      <div class="landing-cta">
        <a class="md-button md-button--primary" href="causalgraphrag.md">Upgrade to CausalGraphRAG</a>
        <a class="md-button" href="constraints.md">Add constraints &amp; SHACL</a>
        <a class="md-button" href="core-primitives.md">See core primitives</a>
      </div>
    </div>
    <div class="landing-visual" aria-hidden="true">
      <img src="../assets/img/hero-brmodel.svg" alt="" />
    </div>
  </div>
</div>

<div class="landing-section">
  <h2>The baseline architecture</h2>

```mermaid
flowchart LR;
  U["User"] --> L["LLM"];
  L -->|"Search / retrieve"| R["RAG"];
  R --> L;
  L -->|"Call tools"| T["Tools / APIs"];
  T --> L;
  L --> A["Answer"];
```

</div>

<div class="landing-section">
  <h2>The missing layer: constraint gate</h2>
  <div class="landing-callout">
    <p><strong>Prompting is negotiable. Constraints are enforceable.</strong></p>
    <p class="landing-mini">If a rule matters, it must live in a layer the model cannot “talk its way around”.</p>
  </div>

```mermaid
flowchart TB;
  D["Draft answer / action"] --> V["Validate constraints"];
  V -->|"Pass"| O["Output / execute"];
  V -->|"Fail"| X["Abstain + explain"];
```

</div>

<div class="landing-section">
  <h2>Where it still breaks</h2>
  <div class="landing-grid">
    <div class="landing-card">
      <h3>Retrieval is not reasoning</h3>
      <p>RAG returns relevant text, not a valid causal path. The model can still stitch together incompatible pieces.</p>
    </div>
    <div class="landing-card">
      <h3>Policy is not “just more context”</h3>
      <p>Policies are constraints. If they only exist as text, they are bypassable and hard to audit.</p>
    </div>
    <div class="landing-card">
      <h3>No trace, no accountability</h3>
      <p>Without structured traces, you cannot reliably debug failures or identify which evidence changed the decision.</p>
    </div>
    <div class="landing-card">
      <h3>Silent uncertainty</h3>
      <p>The system can be fluent while wrong; abstention must be a designed outcome, not a polite suggestion.</p>
    </div>
  </div>
</div>

<div class="landing-section">
  <h2>What to add for decision-grade systems</h2>
  <div class="landing-card">
    <ul>
      <li><strong>Enforceable constraints</strong> (not guidelines)</li>
      <li><strong>Provenance-first data</strong> (claims link to sources and versions)</li>
      <li><strong>Trace objects</strong> (machine-verifiable reasoning artifacts)</li>
      <li><strong>Abstention + escalation</strong> (explicit failure modes)</li>
    </ul>
  </div>
</div>

<div class="landing-section">
  <h2>Next step</h2>
  <div class="landing-card">
    <p>
      <a class="md-button md-button--primary" href="causalgraphrag.md">CausalGraphRAG</a>
      <a class="md-button" href="brcausalgraphrag.md">brCausalGraphRAG</a>
    </p>
  </div>
</div>
