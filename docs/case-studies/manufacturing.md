---
title: "Manufacturing: Root-Cause Analysis Across the Supply Chain"
description: "How causal graphs connect process steps, sensor signals, and supplier events into auditable root-cause chains for quality and reliability."
---

--8<-- "includes/quicknav.html"

# Manufacturing: Root-Cause Analysis Across the Supply Chain

<div class="landing-hero">
  <div class="landing-hero__grid">
    <div>
      <p class="landing-kicker">Case study → manufacturing</p>
      <h2 class="landing-title">Quality failures are causal systems, not isolated defects.</h2>
      <p class="landing-subtitle">
        Manufacturing issues rarely have one cause.
        They propagate through process steps, tooling, suppliers, and environmental conditions.
        We make those chains explicit and auditable.
      </p>
      <div class="landing-cta">
        <a class="md-button md-button--primary" href="../services/start/">Start a Conversation</a>
        <a class="md-button" href="../methodology/causalgraphrag/">CausalGraphRAG</a>
        <a class="md-button" href="../services/blueprint/">Architecture Blueprint</a>
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
    <p>
      How do we identify root causes of quality failures when evidence spans sensors, process logs,
      maintenance events, and supplier batches — and decisions must be justified?
    </p>
  </div>
</div>

<div class="landing-section">
  <h2>Failure modes to avoid</h2>
  <div class="landing-grid">
    <div class="landing-card"><h3>Correlation traps</h3><p>Spurious correlations appear in high-dimensional sensor data.</p></div>
    <div class="landing-card"><h3>Missing context</h3><p>Process step dependencies and maintenance history are often disconnected.</p></div>
    <div class="landing-card"><h3>Non-reproducible investigations</h3><p>Root-cause analysis becomes tribal knowledge without traces.</p></div>
    <div class="landing-card"><h3>Unsafe actions</h3><p>Line stops, recalls, and supplier blocks must be governed and reviewed.</p></div>
  </div>
</div>

<div class="landing-section">
  <h2>What changes with causal chains</h2>

```mermaid
flowchart LR;
  B["Batch"] --> S["Supplier event"];
  S --> P["Process step"];
  P --> Q["Quality signal"];
  Q --> F["Failure"];
```

</div>

<div class="landing-section">
  <h2>Diagram: governed RCA workflow</h2>

```mermaid
flowchart TB;
  I["Incident"] --> E["Collect evidence"];
  E --> P["Generate causal path candidates"];
  P --> V["Validate constraints + required evidence"];
  V -->|"Pass"| A["Recommendation + trace"];
  V -->|"Fail"| X["Abstain + request missing data"];
```

</div>

<div class="landing-section">
  <h2>Outputs</h2>
  <div class="landing-grid">
    <div class="landing-card"><h3>Root-cause paths</h3><p>Mechanistic chains with evidence per edge and explicit assumptions.</p></div>
    <div class="landing-card"><h3>Traceable interventions</h3><p>Line adjustments, supplier actions, and mitigations tied to the trace artifact.</p></div>
    <div class="landing-card"><h3>Faster postmortems</h3><p>Investigations become repeatable and comparable over time.</p></div>
    <div class="landing-card"><h3>Governed escalation</h3><p>High-impact actions trigger review gates and mandatory sign-offs.</p></div>
  </div>
</div>

<div class="landing-section">
  <h2>Next steps</h2>
  <div class="landing-card">
    <p>
      <a class="md-button md-button--primary" href="../services/epistemic-audit/">Epistemic Audit</a>
      <a class="md-button" href="../services/implementation/">Implementation</a>
    </p>
  </div>
</div>
