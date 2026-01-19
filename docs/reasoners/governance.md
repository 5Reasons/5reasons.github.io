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
      <div class="landing-proof" aria-label="Highlights">
        <span class="landing-pill">Enforcement layer</span>
        <span class="landing-pill">Traceable refusals</span>
        <span class="landing-pill">Immutable provenance</span>
        <span class="landing-pill">Fact vs hypothesis separation</span>
      </div>
    </div>
    <div class="landing-visual" aria-hidden="true">
      <img src="../assets/img/hero-brmodel.svg" alt="" />
    </div>
  </div>
</div>

<div class="landing-section">
  <h2>Two layers of governance</h2>
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

<div class="landing-section">
  <h2>Why constraints beat prompts</h2>
  <div class="landing-callout">
    <p><strong>A model can be persuaded. A constraint cannot.</strong></p>
    <p class="landing-mini">Prompt discipline is a useful interface pattern — but it is not a security boundary.</p>
  </div>
</div>

<div class="landing-section">
  <h2>Decision lifecycle (with refusal as a first-class outcome)</h2>

```mermaid
flowchart TB
  Q["Proposed action / answer"] --> V["Validate constraints</br>(governance)"];
  V -->|"Pass"| T["Attach trace + evidence</br>(audit-ready)"];
  V -->|"Fail"| A["Abstain / escalate</br>(never guess)"];
```

</div>

<div class="landing-section">
  <h2>Practical design choices</h2>
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

<div class="landing-section">
  <h2>Where this fits</h2>
  <div class="landing-card">
    <p>
      <a class="md-button md-button--primary" href="/methodology/constraints/">Methodology → Constraints</a>
      <a class="md-button" href="operating-model/">Operating model</a>
      <a class="md-button" href="/services/">Services</a>
    </p>
  </div>
</div>
