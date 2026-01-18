---
title: "Insurance: Claims & Underwriting Under Constraints"
description: "How constraint-gated reasoning and traceable evidence reduce claims leakage and underwriting risk—without turning policy into prompt text."
---

<!-- markdownlint-disable MD033 MD025 -->

--8<-- "includes/quicknav.html"

# Insurance: Claims & Underwriting Under Constraints

<div class="landing-hero">
  <div class="landing-hero__grid">
    <div>
      <p class="landing-kicker">Case study → insurance</p>
      <h2 class="landing-title">Insurance decisions are governed actions, not “smart guesses”.</h2>
      <p class="landing-subtitle">
        Claims and underwriting workflows combine policy rules, evidence, exceptions, and legal constraints.
        A decision-grade system must be able to <strong>prove why</strong> a decision was allowed — or refuse.
      </p>
      <div class="landing-cta">
        <a class="md-button md-button--primary" href="../services/start/">Start a Conversation</a>
        <a class="md-button" href="../methodology/constraints/">Constraints &amp; SHACL</a>
        <a class="md-button" href="../services/epistemic-audit/">Epistemic Audit</a>
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
      Can AI assist claims and underwriting decisions while enforcing policy, fraud controls, and regulatory constraints —
      and producing an audit-ready trail?
    </p>
  </div>
</div>

<div class="landing-section">
  <h2>Failure modes to avoid</h2>
  <div class="landing-grid">
    <div class="landing-card"><h3>Policy as prose</h3><p>Policies contain non-local exceptions and precedence rules that text summaries routinely flatten.</p></div>
    <div class="landing-card"><h3>Evidence leakage</h3><p>Approvals without defensible evidence paths lead to leakage, disputes, and adverse selection.</p></div>
    <div class="landing-card"><h3>Fraud blind spots</h3><p>Fraud signals are multi-source and relational; similarity search misses structured contradictions.</p></div>
    <div class="landing-card"><h3>Unbounded automation</h3><p>High-risk actions must be constrained and sometimes escalated, not “handled end-to-end”.</p></div>
  </div>
</div>

<div class="landing-section">
  <h2>What changes with constraint-gated reasoning</h2>
  <div class="landing-callout">
    <p><strong>The model can propose; the system decides what is allowed.</strong></p>
    <p class="landing-mini">Every step is validated against policy shapes, required evidence, and role permissions.</p>
  </div>

```mermaid
flowchart TB;
  C["Claim / underwriting proposal"] --> E["Evidence set"];
  E --> P["Policy rules"];
  P --> V["Constraint gate"];
  V -->|"Pass"| OK["Approve + trace"];
  V -->|"Fail"| NO["Reject / escalate + violations"];
```

</div>

<div class="landing-section">
  <h2>Diagram: typical causal/evidence path (illustrative)</h2>

```mermaid
flowchart LR;
  EV["Evidence"] --> F["Finding"];
  F --> R["Risk factor"];
  R --> D["Decision impact"];
  D --> T["Trace"];
```

</div>

<div class="landing-section">
  <h2>Outputs</h2>
  <div class="landing-grid">
    <div class="landing-card"><h3>Audit-ready traces</h3><p>Decision, evidence, rules applied, and policy violations (if any).</p></div>
    <div class="landing-card"><h3>Deterministic abstention</h3><p>If required evidence is missing, the system refuses and states what must be provided.</p></div>
    <div class="landing-card"><h3>Fraud investigation graph</h3><p>Relational signals and contradictions surfaced as navigable structures.</p></div>
    <div class="landing-card"><h3>Governable automation</h3><p>Explicit boundaries for what can be auto-approved vs what must escalate.</p></div>
  </div>
</div>

<div class="landing-section">
  <h2>Next steps</h2>
  <div class="landing-card">
    <p>
      <a class="md-button md-button--primary" href="../services/epistemic-audit/">Epistemic Audit</a>
      <a class="md-button" href="../services/blueprint/">Architecture Blueprint</a>
    </p>
  </div>
</div>
