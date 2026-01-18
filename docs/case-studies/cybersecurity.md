---
title: "Cybersecurity: SOC Decisions With Evidence Paths"
description: "How causal traversal, playbook constraints, and trace objects turn incident triage into auditable decisions instead of brittle chat workflows."
---

--8<-- "includes/quicknav.html"

# Cybersecurity: SOC Decisions With Evidence Paths

<div class="landing-hero">
  <div class="landing-hero__grid">
    <div>
      <p class="landing-kicker">Case study → cybersecurity</p>
      <h2 class="landing-title">Incident response needs traces, not vibes.</h2>
      <p class="landing-subtitle">
        Security operations combine messy telemetry, fast timelines, and strict playbooks.
        The system must connect evidence into defensible chains — and enforce what actions are allowed.
      </p>
      <div class="landing-cta">
        <a class="md-button md-button--primary" href="../services/start/">Start a Conversation</a>
        <a class="md-button" href="../methodology/causalgraphrag/">CausalGraphRAG</a>
        <a class="md-button" href="../methodology/constraints/">Constraints &amp; SHACL</a>
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
      Can AI support SOC triage and response while preserving chain-of-custody, enforcing playbooks,
      and producing incident traces that withstand review?
    </p>
  </div>
</div>

<div class="landing-section">
  <h2>Failure modes to avoid</h2>
  <div class="landing-grid">
    <div class="landing-card"><h3>Hallucinated links</h3><p>Invented relationships between events can send responders down the wrong path.</p></div>
    <div class="landing-card"><h3>Action without authorization</h3><p>Some responses must be gated by role, environment, and blast-radius constraints.</p></div>
    <div class="landing-card"><h3>Lost provenance</h3><p>If you cannot show where a claim came from, you cannot justify the response.</p></div>
    <div class="landing-card"><h3>Non-replayable decisions</h3><p>You need a trace you can replay later, not a transient chat transcript.</p></div>
  </div>
</div>

<div class="landing-section">
  <h2>What changes with causal memory + playbook constraints</h2>

```mermaid
flowchart TB;
  A["Alert"] --> E["Expand evidence graph"];
  E --> P["Causal path candidates"];
  P --> G["Playbook constraint gate"];
  G -->|"Pass"| R["Recommended response + trace"];
  G -->|"Fail"| X["Abstain + escalate"];
```

</div>

<div class="landing-section">
  <h2>Diagram: incident trace object (conceptual)</h2>

```mermaid
flowchart TB;
  T["Incident trace"] --> EV["Evidence (telemetry)"];
  T --> H["Hypotheses + paths"];
  T --> RU["Rules applied"];
  T --> AC["Actions taken / blocked"];
  T --> TS["Timestamps + scope"];
```

</div>

<div class="landing-section">
  <h2>Outputs</h2>
  <div class="landing-grid">
    <div class="landing-card"><h3>Defensible hypotheses</h3><p>Mechanistic chains that connect alerts to likely causes with evidence per edge.</p></div>
    <div class="landing-card"><h3>Governed responses</h3><p>Actions are constrained by playbooks, roles, environments, and blast radius.</p></div>
    <div class="landing-card"><h3>Replayable incident traces</h3><p>Postmortems become faster because the reasoning artifact is explicit.</p></div>
    <div class="landing-card"><h3>Safer automation</h3><p>Abstention is a designed outcome when evidence or authorization is insufficient.</p></div>
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
