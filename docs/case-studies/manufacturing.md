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
        <a class="md-button md-button--primary" href="/services/start/">Start a Conversation</a>
        <a class="md-button" href="/methodology/causalgraphrag/">CausalGraphRAG</a>
        <a class="md-button" href="/services/blueprint/">Architecture Blueprint</a>
      </div>
    </div>
  </div>
</div>

## The question

<div class="landing-section">
  <div class="landing-card">
    <p>
      How do we identify root causes of quality failures when evidence spans sensors, process logs,
      maintenance events, and supplier batches — and decisions must be justified?
    </p>
  </div>
</div>

## Failure modes to avoid

<div class="landing-section">
  <div class="landing-grid">
    <div class="landing-card"><h3>Correlation traps</h3><p>Spurious correlations appear in high-dimensional sensor data.</p></div>
    <div class="landing-card"><h3>Missing context</h3><p>Process step dependencies and maintenance history are often disconnected.</p></div>
    <div class="landing-card"><h3>Non-reproducible investigations</h3><p>Root-cause analysis becomes tribal knowledge without traces.</p></div>
    <div class="landing-card"><h3>Unsafe actions</h3><p>Line stops, recalls, and supplier blocks must be governed and reviewed.</p></div>
    <div class="landing-card"><h3>Batch confounding</h3><p>Supplier lots, shifts, and ambient conditions can confound signals unless modeled explicitly.</p></div>
    <div class="landing-card"><h3>Measurement drift</h3><p>Sensor calibration and threshold changes can look like process change without a provenance trail.</p></div>
  </div>
</div>

## What changes with causal chains

<div class="landing-section">

```mermaid
flowchart LR
%% Styles (brModel Standard)
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef r fill:#FFFFB3,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;
classDef s fill:#FFB3B3,stroke-width:0px,color:#000;

I_B(["📦 Batch"]):::i
P_S("🏭 Supplier event"):::p
P_P("⚙️ Process step"):::p
R_Q(["📈 Quality signal"]):::r
S_F(["⚠️ Failure"]):::s

I_B --> P_S --> P_P --> R_Q --> S_F
```

<p>🏭 Quality failures propagate through systems: batches and supplier events flow into process steps and sensor signals. A causal chain makes that propagation explicit — and auditable.</p>

</div>

## Diagram: governed RCA workflow

<div class="landing-section">

```mermaid
flowchart TB
%% Styles (brModel Standard)
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef r fill:#FFFFB3,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;
classDef s fill:#FFB3B3,stroke-width:0px,color:#000;

I_Inc(["⚠️ Incident"]):::i
P_E("📎 Collect evidence"):::p
P_Path("🧭 Generate causal paths"):::p
P_V("🔒 Validate constraints + required evidence"):::p
G_OK{"Gates pass?"}:::s
O_A(["✅ Recommendation + trace"]):::o
S_X(["🛑 Abstain + request missing data"]):::s

I_Inc --> P_E --> P_Path --> P_V --> G_OK
G_OK -->|"yes"| O_A
G_OK -->|"no"| S_X

%% Clickable nodes
click P_V "/methodology/constraints/" "Constraints & SHACL"
click P_Path "/methodology/causalgraphrag/" "CausalGraphRAG"
```

<p>🔁 RCA becomes reproducible when it’s gated: you generate candidate causal paths, then validate required evidence and constraints. If gates fail, the correct output is <strong>abstention</strong> with an explicit missing-data request.</p>

</div>

## Diagram: intervention approval gates (preventing unsafe fixes)

<div class="landing-section">

```mermaid
flowchart TB
%% Styles (brModel Standard)
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef r fill:#FFFFB3,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;
classDef s fill:#FFB3B3,stroke-width:0px,color:#000;

I_Fix(["🧩 Proposed intervention<br>(tooling, recipe, supplier)"]):::i
G_Impact{"High impact?"}:::s
G_Ev{"Evidence sufficient?"}:::s
G_Safe{"Safety constraints pass?"}:::s
O_Do(["✅ Execute change + trace"]):::o
S_Rev(["🛑 Require review / sign-off"]):::s
R_Tr(["🧾 Change trace bundle"]):::r

I_Fix --> G_Impact
G_Impact -->|"yes"| G_Ev
G_Impact -->|"no"| G_Ev

G_Ev -->|"no"| S_Rev --> R_Tr
G_Ev -->|"yes"| G_Safe

G_Safe -->|"yes"| O_Do --> R_Tr
G_Safe -->|"no"| S_Rev --> R_Tr
```

<p>🚦 The fix is also a governed decision: before changing a line, supplier, or process step, the system gates on impact, evidence, and safety constraints. Every intervention produces a trace bundle for later postmortems.</p>

</div>

## Outputs

<div class="landing-section">
  <div class="landing-grid">
    <div class="landing-card"><h3>Root-cause paths</h3><p>Mechanistic chains with evidence per edge and explicit assumptions.</p></div>
    <div class="landing-card"><h3>Traceable interventions</h3><p>Line adjustments, supplier actions, and mitigations tied to the trace artifact.</p></div>
    <div class="landing-card"><h3>Faster postmortems</h3><p>Investigations become repeatable and comparable over time.</p></div>
    <div class="landing-card"><h3>Governed escalation</h3><p>High-impact actions trigger review gates and mandatory sign-offs.</p></div>
    <div class="landing-card"><h3>Supplier propagation map</h3><p>How upstream batch and supplier events flow into downstream quality signals — with evidence per link.</p></div>
    <div class="landing-card"><h3>Change-impact analysis</h3><p>Before you adjust a process, the system can show which constraints, steps, and failure modes the change touches.</p></div>
  </div>
</div>

## Next steps

<div class="landing-section">
  <div class="landing-card">
    <p>
      <a class="md-button md-button--primary" href="/services/epistemic-audit/">Epistemic Audit</a>
      <a class="md-button" href="/services/implementation/">Implementation</a>
    </p>
  </div>
</div>
