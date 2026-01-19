---
title: "Finance: Compliance & Risk"
description: "How governance constraints prevent policy-violating approvals and make AI decisions auditable—without relying on prompt discipline."
---

--8<-- "includes/quicknav.html"

# Finance: Compliance & Risk

<div class="landing-hero">
  <div class="landing-hero__grid">
    <div>
      <p class="landing-kicker">Case study → finance</p>
      <h2 class="landing-title">Compliance by design: decisions that can’t “talk their way around” policy.</h2>
      <p class="landing-subtitle">
        Financial decisions are not just predictions. They are governed actions.
        We make policy enforcement deterministic and produce traces suitable for audit.
      </p>
      <div class="landing-cta">
        <a class="md-button md-button--primary" href="/services/start/">Start a Conversation</a>
        <a class="md-button" href="/methodology/constraints/">Constraints &amp; SHACL</a>
        <a class="md-button" href="/services/epistemic-audit/">Epistemic Audit</a>
      </div>
    </div>
  </div>
</div>

<div class="landing-section">
  <h2>The question</h2>
  <div class="landing-card">
    <p>Can AI assist credit decisions without violating policy, sector restrictions, or regulatory expectations?</p>
  </div>
</div>

<div class="landing-section">
  <h2>Failure mode to avoid</h2>
  <div class="landing-grid">
    <div class="landing-card"><h3>Footnote exceptions</h3><p>Important clauses live in appendices, edge cases, and “only if…” conditions.</p></div>
    <div class="landing-card"><h3>Cross-document constraints</h3><p>Policies and risk rules are distributed across multiple sources and versions.</p></div>
    <div class="landing-card"><h3>Sector prohibitions</h3><p>Some decisions are disallowed regardless of narrative quality.</p></div>
    <div class="landing-card"><h3>Silent uncertainty</h3><p>Fluent text can hide missing evidence. The system must be able to refuse.</p></div>
    <div class="landing-card"><h3>Proxy discrimination</h3><p>“Neutral” features can encode protected attributes unless governance explicitly constrains them.</p></div>
    <div class="landing-card"><h3>Rule drift</h3><p>When policies change, you need diffs and re-evaluation — not silent grandfathering of past decisions.</p></div>
  </div>
</div>

<div class="landing-section">
  <h2>What changes with governance constraints</h2>
  <div class="landing-callout">
    <p><strong>Instead of “asking the model to behave”, we enforce constraints at the system level.</strong></p>
    <p class="landing-mini">Every approval or rejection points to the rule and the evidence that triggered it.</p>
  </div>

```mermaid
flowchart TB;
  Q["Proposed decision"] --> V["Validate constraints"];
  V -->|"Pass"| OK["Approve with trace"];
  V -->|"Fail"| NO["Reject with rule + evidence"];
```

</div>

<div class="landing-section">
  <h2>Diagram: constraint taxonomy (examples)</h2>

```mermaid
flowchart LR;
  P["Policies"] --> R1["Role restrictions"];
  P --> R2["Sector prohibitions"];
  P --> R3["Evidence requirements"];
  P --> R4["Threshold limits"];
  R3 --> C["Citations + provenance"];
```

</div>

<div class="landing-section">
  <h2>Outputs</h2>
  <div class="landing-grid">
    <div class="landing-card"><h3>Rule IDs + rationale</h3><p>Every decision is tied to a specific rule and its evaluated inputs.</p></div>
    <div class="landing-card"><h3>Non-bypassable governance</h3><p>Constraints are enforced in code/data, not in prompt text.</p></div>
    <div class="landing-card"><h3>Audit-ready trail</h3><p>Traces and validation reports suitable for internal review.</p></div>
    <div class="landing-card"><h3>Deterministic abstention</h3><p>When evidence is missing, the system refuses and states what is required.</p></div>
    <div class="landing-card"><h3>Policy diffs over time</h3><p>When rules change, you can see what decisions would flip and why — before changes go live.</p></div>
    <div class="landing-card"><h3>Review bundles</h3><p>Decision artifacts packaged for compliance: evidence, scope, rule triggers, and the exact enforcement path.</p></div>
  </div>
</div>

<div class="landing-section">
  <h2>Next steps</h2>
  <div class="landing-card">
    <p>
      <a class="md-button md-button--primary" href="/services/">Services</a>
      <a class="md-button" href="/services/start/">Start a Conversation</a>
    </p>
  </div>
</div>
