---
title: "Legal: Contract Logic Conflicts"
description: "Graph-based contract analysis to detect clause contradictions and hidden dependencies that chat interfaces routinely miss."
---

--8<-- "includes/quicknav.html"

# Legal: Contract Logic Conflicts

<div class="landing-hero">
  <div class="landing-hero__grid">
    <div>
      <p class="landing-kicker">Case study → legal</p>
      <h2 class="landing-title">Contracts are logic systems. Treat them like logic systems.</h2>
      <p class="landing-subtitle">
        Long agreements hide conflicts because obligations and exceptions are far apart.
        Chat summaries can be fluent while structurally wrong.
      </p>
      <div class="landing-cta">
        <a class="md-button md-button--primary" href="../services/start.md">Start a Conversation</a>
        <a class="md-button" href="../methodology/property-and-knowledge-graphs.md">Graphs</a>
        <a class="md-button" href="../methodology/constraints.md">Constraints &amp; SHACL</a>
      </div>
    </div>
    <div class="landing-visual" aria-hidden="true">
      <img src="../assets/img/hero-brmodel.svg" alt="" />
    </div>
  </div>
</div>

<div class="landing-section">
  <h2>The question</h2>
  <div class="landing-card">
    <p>How do we surface contradictions in long contracts where obligations and exceptions are far apart?</p>
  </div>
</div>

<div class="landing-section">
  <h2>Why chat summaries fail</h2>
  <div class="landing-grid">
    <div class="landing-card"><h3>Structure is the point</h3><p>Contracts are not prose; they are conditional rules with scope and precedence.</p></div>
    <div class="landing-card"><h3>Conflicts are non-local</h3><p>Clause A can silently contradict Clause B across sections and appendices.</p></div>
    <div class="landing-card"><h3>No trace, no accountability</h3><p>You need clause references and logic links, not just a summary paragraph.</p></div>
  </div>
</div>

<div class="landing-section">
  <h2>Graph representation</h2>
  <div class="landing-callout">
    <p><strong>Model clauses as nodes and dependencies/conflicts as edges.</strong></p>
    <p class="landing-mini">This makes contradictions computable and reviewable.</p>
  </div>

```mermaid
graph LR;
  A["Clause A: requires X"] --> X["X"];
  B["Clause B: forbids X"] --> X;
  A -. "conflict" .-> B;
```

</div>

<div class="landing-section">
  <h2>Diagram: obligation/exception flow</h2>

```mermaid
flowchart TB;
  C["Clause"] --> T["Type\n(obligation / prohibition / exception)"];
  T --> S["Scope + conditions"];
  S --> L["Link to referenced clauses"];
  L --> D["Detect conflicts"];
  D --> R["Risk register + trace"];
```

</div>

<div class="landing-section">
  <h2>Outputs</h2>
  <div class="landing-grid">
    <div class="landing-card"><h3>Conflict graph</h3><p>Edges with clause references and conditions under which the conflict triggers.</p></div>
    <div class="landing-card"><h3>Risk register</h3><p>Prioritized issues with remediation suggestions and owner workflows.</p></div>
    <div class="landing-card"><h3>Traceable justification</h3><p>Every flag links back to clauses, sources, and logic edges.</p></div>
    <div class="landing-card"><h3>Governance integration</h3><p>Constraints can block prohibited actions and require legal escalation.</p></div>
  </div>
</div>

<div class="landing-section">
  <h2>Next steps</h2>
  <div class="landing-card">
    <p>
      <a class="md-button md-button--primary" href="../services/start.md">Start a Conversation</a>
      <a class="md-button" href="../services/epistemic-audit.md">Epistemic Audit</a>
    </p>
  </div>
</div>
