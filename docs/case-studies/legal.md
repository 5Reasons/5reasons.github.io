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
        <a class="md-button md-button--primary" href="/services/start/">Start a Conversation</a>
        <a class="md-button" href="/methodology/property-and-knowledge-graphs/">Graphs</a>
        <a class="md-button" href="/methodology/constraints/">Constraints &amp; SHACL</a>
      </div>
    </div>
  </div>
</div>

## The question

<div class="landing-section">
  <div class="landing-card">
    <p>How do we surface contradictions in long contracts where obligations and exceptions are far apart?</p>
  </div>
</div>

<div class="landing-section">
    <img class="glightbox" src="/assets/img/br-008837.png"/>
</div>

## Why chat summaries fail

<div class="landing-section">
  <div class="landing-grid">
    <div class="landing-card"><h3>Structure is the point</h3><p>Contracts are not prose; they are conditional rules with scope and precedence.</p></div>
    <div class="landing-card"><h3>Conflicts are non-local</h3><p>Clause A can silently contradict Clause B across sections and appendices.</p></div>
    <div class="landing-card"><h3>No trace, no accountability</h3><p>You need clause references and logic links, not just a summary paragraph.</p></div>
  </div>
</div>

## Graph representation

<div class="landing-section">
  <div class="landing-callout">
    <p><strong>Model clauses as nodes and dependencies/conflicts as edges.</strong></p>
    <p class="landing-mini">This makes contradictions computable and reviewable.</p>
  </div>

```mermaid
flowchart LR
%% Styles (brModel Standard)
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef r fill:#FFFFB3,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;
classDef s fill:#FFB3B3,stroke-width:0px,color:#000;

R_A(["📄 Clause A<br>requires X"]):::r
R_B(["📄 Clause B<br>forbids X"]):::r
P_X("🧩 X"):::p
S_C(["⚠️ Conflict edge"]):::s

R_A --> P_X
R_B --> P_X
R_A -. "conflict" .-> R_B
```

<p>⚖️ Contracts behave like logic graphs: when two clauses create incompatible constraints on the same object (X), a <strong>conflict edge</strong> becomes computable and reviewable.</p>

</div>

## Diagram: obligation/exception flow

<div class="landing-section">

```mermaid
flowchart TB
%% Styles (brModel Standard)
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef r fill:#FFFFB3,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;
classDef s fill:#FFB3B3,stroke-width:0px,color:#000;

I_C(["📄 Clause"]):::i
P_T("🏷️ Classify type"):::p
R_Type(["obligation / prohibition / exception"]):::r
P_S("🧭 Extract scope + conditions"):::p
P_L("🔗 Link references"):::p
P_D("🔎 Detect conflicts"):::p
R_R(["🧾 Risk register + trace"]):::r
O_Out(["✅ Reviewable issues"]):::o

I_C --> P_T --> R_Type --> P_S --> P_L --> P_D --> R_R --> O_Out
```

<p>🧭 This flow turns prose into structure: classify clause type, extract scope/conditions, link references, then detect conflicts. The output is a <strong>🧾 risk register</strong> with traceable clause paths — not a summary paragraph.</p>

</div>

## Diagram: precedence and exception gates (what overrides what)

<div class="landing-section">

```mermaid
flowchart TB
%% Styles (brModel Standard)
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef r fill:#FFFFB3,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;
classDef s fill:#FFB3B3,stroke-width:0px,color:#000;

I_Q(["🎯 Question / action"]):::i
P_Find("🔎 Find relevant clauses"):::p
R_Set(["📎 Candidate clause set"]):::r
G_Exc{"Exception applies?"}:::s
G_Prec{"Precedence clear?"}:::s
O_OK(["✅ Allowed / required<br>(with clause path)"]):::o
S_Esc(["🛑 Escalate: ambiguous conflict"]):::s
R_Tr(["🧾 Trace bundle<br>(clauses + conditions)"]):::r

I_Q --> P_Find --> R_Set --> G_Exc
G_Exc -->|"yes"| G_Prec
G_Exc -->|"no"| G_Prec

G_Prec -->|"yes"| O_OK --> R_Tr
G_Prec -->|"no"| S_Esc --> R_Tr
```

<p>🚦 The hard part is not finding clauses — it’s deciding whether an <strong>exception</strong> applies and whether <strong>precedence</strong> is unambiguous. When it isn’t, the system must escalate instead of hallucinating certainty.</p>

</div>

## Outputs

<div class="landing-section">
  <div class="landing-grid">
    <div class="landing-card"><h3>Conflict graph</h3><p>Edges with clause references and conditions under which the conflict triggers.</p></div>
    <div class="landing-card"><h3>Risk register</h3><p>Prioritized issues with remediation suggestions and owner workflows.</p></div>
    <div class="landing-card"><h3>Traceable justification</h3><p>Every flag links back to clauses, sources, and logic edges.</p></div>
    <div class="landing-card"><h3>Governance integration</h3><p>Constraints can block prohibited actions and require legal escalation.</p></div>
    <div class="landing-card"><h3>Exception handling</h3><p>Non-local carve-outs and precedence rules surfaced explicitly, so reviewers don’t miss “only if…” conditions.</p></div>
    <div class="landing-card"><h3>Negotiation levers</h3><p>Which clauses drive the most downstream risk, and what edits reduce conflict without breaking the deal intent.</p></div>
  </div>
</div>

## Next steps

<div class="landing-section">
  <div class="landing-card">
    <p>
      <a class="md-button md-button--primary" href="/services/start/">Start a Conversation</a>
      <a class="md-button" href="/services/epistemic-audit/">Epistemic Audit</a>
    </p>
  </div>
</div>
