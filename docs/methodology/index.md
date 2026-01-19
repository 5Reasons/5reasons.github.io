---
title: "brModel™ Methodology"
description: "A causal operating system for AI memory: structured entities, constraints, and auditable reasoning traces that reduce hallucinations in production systems."
---

--8<-- "includes/quicknav.html"

# brModel™ Methodology

<div class="landing-hero">
  <div class="landing-hero__grid">
    <div>
      <p class="landing-kicker">Methodology</p>
      <h2 class="landing-title">A causal operating system for AI memory.</h2>
      <p class="landing-subtitle">
        Instead of starting with “Which LLM?”, we start with <strong>memory</strong> and <strong>constraints</strong> — the parts that survive model churn.
        The goal is decision-grade behavior: traceable, governable, and able to abstain.
      </p>
      <div class="landing-cta">
        <a class="md-button md-button--primary" href="core-primitives/">Core primitives</a>
        <a class="md-button" href="constraints/">Constraints &amp; SHACL</a>
        <a class="md-button" href="/reasoners/governance/">Governance approach</a>
      </div>
    </div>
  </div>
</div>

<div class="landing-section">
  <h2>Mental model</h2>
  <div class="landing-callout">
    <p><strong>brModel™ treats knowledge as a causal graph, not a pile of text chunks.</strong></p>
    <p class="landing-mini">Facts become nodes with provenance; relationships encode mechanisms and allowed transformations; rules become enforceable constraints.</p>
  </div>

<div class="landing-card" style="margin-top: 14px;">
  <p class="landing-mini"><strong>Audio:</strong> Simulating Interventions With Executable Causal Clauses</p>
  <audio controls preload="none" style="width: 100%;">
    <source src="\assets\Simulating_Interventions_With_Executable_Causal_Clauses.m4a" type="audio/mp4" />
    Your browser does not support the audio element.
  </audio>
</div>

```mermaid
flowchart LR;
  Q["User question"] --> R["Retrieve facts"];
  R --> C["Causal graph traversal"];
  C --> T["Trace + citations"];
  T --> A["Answer or abstain"];
```

</div>

<div class="landing-section">
  <h2>The cognitive stack (high level)</h2>
  <div class="landing-card">
    <p>We separate immutable reality from decision-making layers:</p>
    <ul>
      <li><strong>Facts &amp; provenance</strong> (what happened, where it came from)</li>
      <li><strong>Domain models</strong> (what concepts mean)</li>
      <li><strong>Constraints</strong> (what is allowed)</li>
      <li><strong>Plans &amp; predictions</strong> (what to do next, and what might happen)</li>
    </ul>
  </div>

```mermaid
flowchart TB;
  subgraph Objective["Objective layer"];
    F["Facts + sources"];
    M["Domain model"];
    G["Governance constraints"];
  end;
  subgraph Decision["Decision layer"];
    P["Plan / prescription"];
    S["Simulation / prediction"];
  end;
  F --> M --> G --> P --> S;
```

</div>

<div class="landing-section">
  <h2>Why this reduces hallucinations</h2>
  <div class="landing-grid">
    <div class="landing-card">
      <h3>Edges constrain reasoning</h3>
      <p>A model can’t “invent a relationship” if it must traverse an existing graph edge.</p>
    </div>
    <div class="landing-card">
      <h3>Constraints enforce policy</h3>
      <p>A policy can’t be bypassed if it’s encoded as an enforcement gate.</p>
    </div>
    <div class="landing-card">
      <h3>Debugging becomes concrete</h3>
      <p>You can localize failures to data, model behavior, or missing rules.</p>
    </div>
  </div>
</div>

<div class="landing-section">
  <h2>Concept map (how vs why)</h2>
  <div class="landing-card">
    <p>Methodology is the <em>how</em>. Philosophy is the <em>why</em>.</p>
    <ul>
      <li><strong>Philosophy</strong>: <a href="/philosophy/ai-agent-vs-agentic-ai/">AI Agent vs Agentic AI</a></li>
      <li><strong>Philosophy</strong>: <a href="/philosophy/correlation-vs-causality/">Correlation vs Causality</a></li>
      <li><strong>Philosophy</strong>: <a href="/philosophy/ai-consciousness/">AI Consciousness (operational view)</a></li>
      <li><strong>Methodology</strong>: <a href="property-and-knowledge-graphs/">Property Graphs &amp; Knowledge Graphs</a></li>
      <li><strong>Methodology</strong>: <a href="llm-tool-rag/">LLM + Tool + RAG</a></li>
      <li><strong>Methodology</strong>: <a href="causalgraphrag/">CausalGraphRAG</a></li>
      <li><strong>Methodology</strong>: <a href="brcausalgraphrag/">brCausalGraphRAG</a></li>
    </ul>
  </div>
</div>

<div class="landing-section">
  <h2>Model diagrams (open in modal)</h2>
  <p class="landing-mini">Click any diagram to open it in a modal and inspect the model without leaving the page.</p>

<p>
  <a class="diagram-open" href="#" data-diagram-target="diagram-ai-agent-vs-agentic-ai">AI Agent vs Agentic AI</a>
  <a class="diagram-open" href="#" data-diagram-target="diagram-correlation-vs-causality">Correlation vs Causality</a>
  <a class="diagram-open" href="#" data-diagram-target="diagram-property-and-knowledge-graphs">Property &amp; Knowledge Graphs</a>
  <a class="diagram-open" href="#" data-diagram-target="diagram-llm-tool-rag">LLM + Tool + RAG</a>
  <a class="diagram-open" href="#" data-diagram-target="diagram-causalgraphrag">CausalGraphRAG</a>
  <a class="diagram-open" href="#" data-diagram-target="diagram-brcausalgraphrag">brCausalGraphRAG</a>
</p>

<dialog id="diagram-ai-agent-vs-agentic-ai" class="diagram-modal">
  <div class="diagram-modal__header">
    <p class="diagram-modal__title">AI Agent vs Agentic AI</p>
    <button class="diagram-modal__close" type="button" data-diagram-close>Close</button>
  </div>
  <div class="diagram-modal__body">
    <div class="mermaid">
flowchart TB;
  subgraph ToolUse["AI Agent (tool-using)"];
    U["User"] --> Q["Question"];
    Q --> L["LLM"];
    L --> T["Tools"];
    T --> L;
    L --> A["Answer"];
  end;

  subgraph Agentic["Agentic AI (system property)"];
    G["Goal"] --> P["Plan"];
    P --> X["Act"];
    X --> O["Observe"];
    O --> M["Memory"];
    M --> P;
    O --> V["Validate constraints"];
    V -->|"Fail"| S["Stop / abstain / escalate"];
    V -->|"Pass"| P;
  end;
    </div>
  </div>
</dialog>

<dialog id="diagram-correlation-vs-causality" class="diagram-modal">
  <div class="diagram-modal__header">
    <p class="diagram-modal__title">Correlation vs Causality (confounding)</p>
    <button class="diagram-modal__close" type="button" data-diagram-close>Close</button>
  </div>
  <div class="diagram-modal__body">
    <div class="mermaid">
graph LR;
  C["Confounder C"] --> X["X"];
  C --> Y["Y"];
  X --> Y;
    </div>
  </div>
</dialog>

<dialog id="diagram-property-and-knowledge-graphs" class="diagram-modal">
  <div class="diagram-modal__header">
    <p class="diagram-modal__title">Property Graphs vs Knowledge Graphs</p>
    <button class="diagram-modal__close" type="button" data-diagram-close>Close</button>
  </div>
  <div class="diagram-modal__body">
    <div class="mermaid">
flowchart LR;
  PG["Property Graph (nodes/edges + properties)"] --> KG["Knowledge Graph (ontology + constraints + meaning)"];
  KG --> Q["Queries with validity guarantees"];
    </div>
  </div>
</dialog>

<dialog id="diagram-llm-tool-rag" class="diagram-modal">
  <div class="diagram-modal__header">
    <p class="diagram-modal__title">LLM + Tool + RAG (baseline)</p>
    <button class="diagram-modal__close" type="button" data-diagram-close>Close</button>
  </div>
  <div class="diagram-modal__body">
    <div class="mermaid">
flowchart LR;
  U["User"] --> L["LLM"];
  L -->|"Search / retrieve"| R["RAG"];
  R --> L;
  L -->|"Call tools"| T["Tools / APIs"];
  T --> L;
  L --> A["Answer"];
    </div>
  </div>
</dialog>

<dialog id="diagram-causalgraphrag" class="diagram-modal">
  <div class="diagram-modal__header">
    <p class="diagram-modal__title">CausalGraphRAG (paths, not paragraphs)</p>
    <button class="diagram-modal__close" type="button" data-diagram-close>Close</button>
  </div>
  <div class="diagram-modal__body">
    <div class="mermaid">
flowchart LR;
  Q["Question"] --> S["Start node(s)"];
  S --> P["Path search with constraints"];
  P --> T["Trace + evidence"];
  T --> A["Answer or abstain"];
    </div>
  </div>
</dialog>

<dialog id="diagram-brcausalgraphrag" class="diagram-modal">
  <div class="diagram-modal__header">
    <p class="diagram-modal__title">brCausalGraphRAG (decision-grade)</p>
    <button class="diagram-modal__close" type="button" data-diagram-close>Close</button>
  </div>
  <div class="diagram-modal__body">
    <div class="mermaid">
flowchart TB;
  Q["Question"] --> S["Select start nodes"];
  S --> P["Constrained path search"];
  P --> V["Validate shapes / constraints"];
  V -->|"Pass"| T["Generate trace object"];
  T --> A["Answer with evidence"];
  V -->|"Fail"| X["Abstain / escalate"];
    </div>
  </div>
</dialog>

## Next pages (skeleton)

- Engagement patterns: [Services](../services/)
- Applied outcomes: [Case Studies](../case-studies/)
- Real example: [SK Biomedicine](../case-studies/biomedicine/)
