---
title: "Governance Approach"
description: "Governance by design: how we encode rules as enforceable constraints and produce audit-ready traces for every high-stakes AI output."
---

--8<-- "includes/quicknav.html"

# Governance Approach

<div class="landing-hero">
  <div class="landing-hero__grid">
    <div>
      <p class="landing-kicker">Safety and compliance</p>
      <h2 class="landing-title">Governance is not a PDF. Governance is enforced structure.</h2>
      <p class="landing-subtitle">
        In high-stakes systems, “please follow the policy” is not governance.
        Governance means the system is <strong>architecturally unable</strong> to produce invalid actions — and can show exactly why it refused.
      </p>
      <div class="landing-cta">
        <a class="md-button md-button--primary" href="/methodology/constraints/">Constraints &amp; SHACL</a>
        <a class="md-button" href="/services/">Services</a>
        <a class="md-button" href="/case-studies/">Case studies</a>
      </div>
    </div>
  </div>
</div>

## Two layers of governance

<div class="landing-section">
  <div class="landing-grid">
    <div class="landing-card">
      <h3>Interpretation layer</h3>
      <p>Policies, procedures, definitions of allowed actions, and escalation pathways. This is where humans specify intent.</p>
    </div>
    <div class="landing-card">
      <h3>Enforcement layer</h3>
      <p>Constraints that make policy violations technically impossible (validation rules, permissions, invariants, and hard blocks).</p>
    </div>
    <div class="landing-card">
      <h3>Audit layer</h3>
      <p>Trace logs, source provenance, and change history: who/what/when/why for every decision and refusal.</p>
    </div>
  </div>
</div>

## Why constraints beat prompts

<div class="landing-section">
  <div class="landing-callout">
    <p><strong>A model can be persuaded. A constraint cannot.</strong></p>
    <p class="landing-mini">Prompt discipline is a useful interface pattern — but it is not a security boundary.</p>
  </div>
</div>

## Decision lifecycle (with refusal as a first-class outcome)

<div class="landing-section">

```mermaid
flowchart TB
%% Styles (brModel Standard)
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef r fill:#FFFFB3,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;
classDef s fill:#FFB3B3,stroke-width:0px,color:#000;

I_Proposal(["📥 Proposed action / answer"]):::i

P_Policy("📜 Interpret policy (what is allowed)"):::p
P_Validate("🔒 Validate constraints (enforcement)"):::p
G_Check{"Valid?"}:::s

R_Evidence(["🔎 Evidence set (sources + provenance)"]):::r
R_Trace(["🧾 Trace log (who/what/why/when)"]):::r
O_Commit(["✅ Commit decision (audit-ready output)"]):::o

R_Refusal(["🛑 Refusal record (reason + missing evidence)"]):::r
P_Escalate("🧑‍⚖️ Escalate to owner (request exception)"):::p
O_Abstain(["🟨 Abstain safely (no guess)"]):::o

I_Proposal --> P_Policy --> P_Validate --> G_Check
G_Check -->|"yes"| R_Evidence --> R_Trace --> O_Commit
G_Check -->|"no"| R_Refusal --> P_Escalate --> O_Abstain

%% Clickable nodes
click P_Validate "/methodology/constraints/" "Constraints & SHACL"
click R_Trace "/methodology/llm-tool-rag/" "LLM + Tool + RAG"
click P_Escalate "/services/start/" "Start a conversation"
```

<p>🔒 The key mechanism is a <strong>validity gate</strong>: proposals must pass enforceable constraints to become actions, and failures produce a first-class <strong>refusal record</strong> plus an explicit escalation path.</p>

</div>

## Practical design choices

<div class="landing-section">
  <div class="landing-grid">
    <div class="landing-card">
      <h3>Encode critical rules as constraints</h3>
      <p>Compliance, safety, and policy rules become validation logic (e.g., SHACL-style shapes) — not optional guidelines.</p>
    </div>
    <div class="landing-card">
      <h3>Keep facts and provenance immutable</h3>
      <p>Facts don’t get overwritten. Source links remain stable so audits can reproduce outcomes.</p>
    </div>
    <div class="landing-card">
      <h3>Separate fact from hypothesis</h3>
      <p>Predictions and simulations are labeled and isolated so they never masquerade as evidence.</p>
    </div>
  </div>
  <div class="landing-grid">
    <div class="landing-card">
      <h3>Log every trace</h3>
      <p>Every path and refusal is recorded with stable identifiers, timestamps, and sources.</p>
    </div>
    <div class="landing-card">
      <h3>Make escalation explicit</h3>
      <p>When the system refuses, it should say what is missing and who can authorize exceptions.</p>
    </div>
    <div class="landing-card">
      <h3>Measure governance coverage</h3>
      <p>Track which constraints are enforced, which are missing, and how often refusals occur.</p>
    </div>
  </div>
</div>

## Where this fits

<div class="landing-section">
  <div class="landing-card">
    <p>
      <a class="md-button md-button--primary" href="/methodology/constraints/">Methodology → Constraints</a>
      <a class="md-button" href="/reasoners/operating-model/">Operating model</a>
      <a class="md-button" href="/services/">Services</a>
    </p>
  </div>
</div>
