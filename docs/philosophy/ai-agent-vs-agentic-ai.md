---
title: "AI Agent vs Agentic AI"
description: "Why ‘agent’ is not a product category: the difference between a tool-using assistant and an agentic system with autonomy, governance, and failure handling."
---

--8<-- "includes/quicknav.html"

<div class="landing-section">
    <img class="glightbox" src="/assets/img/br-008827.png"/>
</div>

# AI Agent vs Agentic AI

<div class="landing-hero">
  <div class="landing-hero__grid">
    <div>
      <p class="landing-kicker">Terminology that matters</p>
      <h2 class="landing-title">Tool-use is not autonomy.</h2>
      <p class="landing-subtitle">
        People use “agent” and “agentic” interchangeably — and then wonder why deployments fail.
        The difference is not marketing language. It is a difference in <strong>risk surface</strong>.
      </p>
      <div class="landing-cta">
        <a class="md-button md-button--primary" href="/reasoners/governance/">Governance approach</a>
        <a class="md-button" href="/methodology/constraints/">Constraints &amp; SHACL</a>
        <a class="md-button" href="/philosophy/probabilistic-ai/">Why probabilistic AI fails</a>
      </div>
    </div>
  </div>
</div>

## The distinction

<div class="landing-section">
  <div class="landing-grid">
    <div class="landing-card">
      <h3>AI agent (tool-using)</h3>
      <p>A model that can call tools (search, code, APIs) to complete a task, typically within a bounded interaction.</p>
    </div>
    <div class="landing-card">
      <h3>Agentic AI (system property)</h3>
      <p>Autonomy + iteration + memory + action loops that continue over time. If you deploy this, you are shipping a process.</p>
    </div>
    <div class="landing-card">
      <h3>Abstention</h3>
      <p>Refuse to act when evidence is insufficient or constraints fail.</p>
    </div>
  </div>
</div>

## What changes when a system becomes agentic

<div class="landing-section">
  <div class="landing-grid">
    <div class="landing-card">
      <h3>Feedback loops</h3>
      <p>Actions change the world; the world changes the next action. Errors compound.</p>
    </div>
    <div class="landing-card">
      <h3>Stopping conditions</h3>
      <p>“Keep going” is not a control policy. You need explicit stop, timeout, and escalation rules.</p>
    </div>
    <div class="landing-card">
      <h3>Governance constraints</h3>
      <p>Define what must never happen and enforce it at runtime.</p>
    </div>
  </div>
</div>

## Diagram: from tool-use to autonomy

```mermaid
flowchart TB;
  subgraph ToolUse["AI Agent (tool-using)"];
  direction TB
    U["User"] --> Q["Question"];
    Q --> L["LLM"];
    L --> T["Tools"];
    T --> L;
    L --> A["Answer"];
  end;

  subgraph Agentic["Agentic AI (system property)"];
  direction TB
    G["Goal"] --> P["Plan"];
    P --> X["Act"];
    X --> O["Observe"];
    O --> M["Memory"];
    M --> P;
    O --> V["Validate constraints"];
    V -->|"Fail"| S["Stop / abstain / escalate"];
    V -->|"Pass"| P;
  end;
```

## Diagram: governance gate (the non-negotiable)

```mermaid
flowchart LR;
  A["Proposed action"] --> V["Validate constraints"];
  V -->|"Pass"| E["Execute"];
  V -->|"Fail"| S["Stop / escalate"];
```

## Practical implication

If you want agentic behavior in a high-stakes domain, the core design question is:

> What mechanisms prevent the system from acting on a wrong belief?

Next: [Governance Approach](../reasoners/governance.md) and [Constraints & SHACL](../methodology/constraints.md).
