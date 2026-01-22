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

## The question

<div class="landing-section">
  <div class="landing-card">
    <p>Can AI assist credit decisions without violating policy, sector restrictions, or regulatory expectations?</p>
  </div>
</div>

<div class="landing-section">
    <img class="glightbox" src="/assets/img/br-008834.png"/>
</div>

## Failure mode to avoid

<div class="landing-section">
  <div class="landing-grid">
    <div class="landing-card"><h3>Footnote exceptions</h3><p>Important clauses live in appendices, edge cases, and “only if…” conditions.</p></div>
    <div class="landing-card"><h3>Cross-document constraints</h3><p>Policies and risk rules are distributed across multiple sources and versions.</p></div>
    <div class="landing-card"><h3>Sector prohibitions</h3><p>Some decisions are disallowed regardless of narrative quality.</p></div>
    <div class="landing-card"><h3>Silent uncertainty</h3><p>Fluent text can hide missing evidence. The system must be able to refuse.</p></div>
    <div class="landing-card"><h3>Proxy discrimination</h3><p>“Neutral” features can encode protected attributes unless governance explicitly constrains them.</p></div>
    <div class="landing-card"><h3>Rule drift</h3><p>When policies change, you need diffs and re-evaluation — not silent grandfathering of past decisions.</p></div>
  </div>
</div>

## What changes with governance constraints

<div class="landing-section">
  <div class="landing-callout">
    <p><strong>Instead of “asking the model to behave”, we enforce constraints at the system level.</strong></p>
    <p class="landing-mini">Every approval or rejection points to the rule and the evidence that triggered it.</p>
  </div>

```mermaid
flowchart TB
%% Styles (brModel Standard)
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef r fill:#FFFFB3,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;
classDef s fill:#FFB3B3,stroke-width:0px,color:#000;

I_Q(["📥 Proposed decision"]):::i
P_V("🔒 Validate constraints"):::p
G_OK{"Constraints pass?"}:::s
O_OK(["✅ Approve + trace"]):::o
S_NO(["🛑 Reject + violations"]):::s
R_T(["🧾 Trace bundle<br>(rules + evidence + inputs)"]):::r

I_Q --> P_V --> G_OK
G_OK -->|"yes"| O_OK --> R_T
G_OK -->|"no"| S_NO --> R_T

%% Clickable nodes
click P_V "/methodology/constraints/" "Constraints & SHACL"
```

<p>💳 The system does not “ask the model to comply”: it runs a <strong>🔒 non-bypassable constraint gate</strong>. The output is either an approval or a rejection — both with a <strong>🧾 trace bundle</strong> showing which rules triggered and what evidence was used.</p>

</div>

## Diagram: constraint taxonomy (examples)

<div class="landing-section">

```mermaid
flowchart LR
%% Styles (brModel Standard)
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef r fill:#FFFFB3,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;
classDef s fill:#FFB3B3,stroke-width:0px,color:#000;

R_P(["📜 Policy library"]):::r
R1(["👤 Role restrictions"]):::r
R2(["🚫 Sector prohibitions"]):::r
R3(["📎 Evidence requirements"]):::r
R4(["📏 Threshold limits"]):::r
R_C(["🧾 Citations + provenance"]):::r

R_P --> R1
R_P --> R2
R_P --> R3 --> R_C
R_P --> R4

%% Clickable nodes
click R_P "/methodology/constraints/" "Constraints"
```

<p>📜 “Constraints” are not one thing: finance needs role controls, hard prohibitions, evidence requirements, and numeric limits — each versioned and enforceable, so policy can’t be bypassed by fluent text.</p>

</div>

## Diagram: policy diffs and re-evaluation loop

<div class="landing-section">

```mermaid
flowchart TB
%% Styles (brModel Standard)
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef r fill:#FFFFB3,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;
classDef s fill:#FFB3B3,stroke-width:0px,color:#000;

I_Upd(["🧩 Policy update"]):::i
R_Diff(["🧾 Policy diff<br>(what changed)"]):::r
P_Reeval("🧪 Re-evaluate impacted decisions"):::p
G_Flip{"Any outcomes flip?"}:::s
O_Rep(["✅ Review bundle<br>(before/after + reasons)"]):::o
S_No(["🛑 No material changes"]):::s

I_Upd --> R_Diff --> P_Reeval --> G_Flip
G_Flip -->|"yes"| O_Rep
G_Flip -->|"no"| S_No
```

<p>🧪 Governance stays stable under change only if policy updates are <strong>diffed</strong> and decisions are <strong>re-evaluated</strong>. This turns “rule drift” into a reviewable artifact, not a silent production risk.</p>

</div>

## Outputs

<div class="landing-section">
  <div class="landing-grid">
    <div class="landing-card"><h3>Rule IDs + rationale</h3><p>Every decision is tied to a specific rule and its evaluated inputs.</p></div>
    <div class="landing-card"><h3>Non-bypassable governance</h3><p>Constraints are enforced in code/data, not in prompt text.</p></div>
    <div class="landing-card"><h3>Audit-ready trail</h3><p>Traces and validation reports suitable for internal review.</p></div>
    <div class="landing-card"><h3>Deterministic abstention</h3><p>When evidence is missing, the system refuses and states what is required.</p></div>
    <div class="landing-card"><h3>Policy diffs over time</h3><p>When rules change, you can see what decisions would flip and why — before changes go live.</p></div>
    <div class="landing-card"><h3>Review bundles</h3><p>Decision artifacts packaged for compliance: evidence, scope, rule triggers, and the exact enforcement path.</p></div>
  </div>
</div>

## Next steps

<div class="landing-section">
  <div class="landing-card">
    <p>
      <a class="md-button md-button--primary" href="/services/">Services</a>
      <a class="md-button" href="/services/start/">Start a Conversation</a>
    </p>
  </div>
</div>
