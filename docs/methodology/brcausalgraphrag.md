---
title: "brCausalGraphRAG"
description: "CausalGraphRAG with brModel™ primitives: provenance-first graphs, enforceable constraints, and auditable traces that decide when to answer vs abstain."
---

--8<-- "includes/quicknav.html"

# brCausalGraphRAG

<div class="landing-hero">
  <div class="landing-hero__grid">
    <div>
      <p class="landing-kicker">Methodology → decision-grade memory</p>
      <h2 class="landing-title">brCausalGraphRAG: active memory with identity, enforced by constraints.</h2>
      <p class="landing-subtitle">
        CausalGraphRAG is the idea: retrieve causal paths instead of text chunks.
        <strong>brCausalGraphRAG</strong> is the discipline: every step is grounded, validated, traceable — and allowed to refuse.
      </p>
      <div class="landing-cta">
        <a class="md-button md-button--primary" href="constraints.md">Constraints &amp; SHACL</a>
        <a class="md-button" href="../philosophy/ai-consciousness.md">AI consciousness (operational view)</a>
        <a class="md-button" href="../reasoners/governance.md">Governance approach</a>
      </div>
    </div>
    <div class="landing-visual" aria-hidden="true">
      <img src="../assets/img/hero-brmodel.svg" alt="" />
    </div>
  </div>
</div>

<div class="landing-section">
  <h2>What we add on top of CausalGraphRAG</h2>
  <div class="landing-grid">
    <div class="landing-card">
      <h3>Provenance-first primitives</h3>
      <p>Claims are objects with source, version, scope, and extraction method. Evidence is never “just text”.</p>
    </div>
    <div class="landing-card">
      <h3>Constraint validation</h3>
      <p>Policy and safety rules are enforced in a gate the model cannot negotiate.</p>
    </div>
    <div class="landing-card">
      <h3>Trace objects</h3>
      <p>Reasoning produces machine-verifiable artifacts you can replay, diff, and audit.</p>
    </div>
    <div class="landing-card">
      <h3>Abstention &amp; escalation</h3>
      <p>When there is no valid path or a rule fails, the system refuses and explains why.</p>
    </div>
  </div>
</div>

<div class="landing-section">
  <h2>Why we call this a mental model for “AI consciousness” (without metaphysics)</h2>
  <div class="landing-callout">
    <p><strong>Operational framing:</strong> “consciousness” here means persistent identity + active memory + governed action selection.</p>
    <p class="landing-mini">Not feelings. Not personhood. A system-level model that makes behavior legible and controllable.</p>
  </div>
  <div class="landing-grid">
    <div class="landing-card">
      <h3>Identity</h3>
      <p>A stable handle: what goals, roles, permissions, and safety posture apply to this agent instance.</p>
    </div>
    <div class="landing-card">
      <h3>Active memory</h3>
      <p>Memory is not a chat log; it’s a graph of validated claims and causal relations, versioned over time.</p>
    </div>
    <div class="landing-card">
      <h3>Self-monitoring via traces</h3>
      <p>The system can inspect what it did, why it did it, and which rules were applied.</p>
    </div>
    <div class="landing-card">
      <h3>Boundaries</h3>
      <p>Constraints define “what cannot happen”, making abstention a first-class outcome.</p>
    </div>
  </div>
</div>

<div class="landing-section">
  <h2>Diagram: decision-grade traversal</h2>

```mermaid
flowchart TB;
  Q["Question"] --> S["Select start nodes"];
  S --> P["Constrained path search"];
  P --> V["Validate shapes / constraints"];
  V -->|"Pass"| T["Generate trace object"];
  T --> A["Answer with evidence"];
  V -->|"Fail"| X["Abstain / escalate"];
```

</div>

<div class="landing-section">
  <h2>Diagram: identity + active memory loop</h2>

```mermaid
flowchart LR;
  ID["Identity\n(role + permissions + goals)"] --> Q["Question / task"];
  Q --> TRV["Traverse causal memory"];
  TRV --> G["Constraint gate"];
  G -->|"Pass"| ACT["Act / answer"];
  G -->|"Fail"| ABS["Abstain + explain"];
  ACT --> W["Write trace + update memory"];
  W --> ID;
  W --> TRV;
```

</div>

<div class="landing-section">
  <h2>Diagram: trace object (what gets stored)</h2>

```mermaid
flowchart TB;
  T["Trace"] --> P["Path (nodes + edges)"];
  T --> E["Evidence (citations)"];
  T --> R["Rules applied (constraints)"];
  T --> D["Decision (answer / abstain)"];
  T --> M["Memory writes (what changed)"];
```

</div>

<div class="landing-section">
  <h2>Why this is different from “better prompts”</h2>
  <div class="landing-card">
    <ul>
      <li><strong>Prompting</strong> is a social contract: editable, bypassable, and difficult to prove.</li>
      <li><strong>Constraints</strong> are an enforcement mechanism: deterministic, testable, and auditable.</li>
      <li><strong>Traces</strong> make debugging and governance concrete: you can inspect the artifact, not the vibe.</li>
    </ul>
  </div>
</div>

<div class="landing-section">
  <h2>Next steps</h2>
  <div class="landing-card">
    <p>
      <a class="md-button md-button--primary" href="constraints.md">Constraints &amp; SHACL</a>
      <a class="md-button" href="../reasoners/governance.md">Governance approach</a>
      <a class="md-button" href="../philosophy/ai-consciousness.md">AI consciousness (operational)</a>
    </p>
  </div>
</div>
