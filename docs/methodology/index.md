---
title: "brModel™ Methodology"
description: "A causal operating system for AI memory: structured entities, constraints, and auditable reasoning traces that reduce hallucinations in production systems."
---

--8<-- "includes/quicknav.html"

# brModel™ Methodology

A universal operating system for AI memory.

Instead of starting with “Which LLM?”, we start with **memory** and **constraints**: the parts that survive model churn.

## Mental model

brModel™ treats knowledge as a **causal graph**, not a pile of text chunks.

- Facts become nodes with provenance.
- Relationships encode causality and permitted transformations.
- Rules become constraints that can be enforced.

```mermaid
flowchart LR
  Q[User question] --> R[Retrieve facts]
  R --> C[Causal graph traversal]
  C --> T[Trace + citations]
  T --> A[Answer or abstain]
```

## The cognitive stack (high level)

We separate immutable reality from decision-making layers:

- **Facts & provenance** (what happened, where it came from)
- **Domain models** (what concepts mean)
- **Constraints** (what is allowed)
- **Plans & predictions** (what to do next, and what might happen)

```mermaid
flowchart TB
  subgraph Objective
    F[Facts + sources]
    M[Domain model]
    G[Governance constraints]
  end
  subgraph Decision
    P[Plan / prescription]
    S[Simulation / prediction]
  end
  F --> M --> G --> P --> S
```

## Why this reduces hallucinations

- A model can’t “invent a relationship” if it must traverse an existing graph edge.
- A policy can’t be bypassed if it’s encoded as a constraint.
- Debugging becomes possible because you can locate failure modes (data vs. model vs. rules).

## Concepts (symmetrically scoped)

Methodology is the *how*. Philosophy is the *why*.

- Philosophy: [AI Agent vs Agentic AI](../philosophy/ai-agent-vs-agentic-ai.md)
- Philosophy: [Correlation vs Causality](../philosophy/correlation-vs-causality.md)
- Methodology: [Property Graphs & Knowledge Graphs](property-and-knowledge-graphs.md)
- Methodology: [LLM + Tool + RAG](llm-tool-rag.md)
- Methodology: [CausalGraphRAG](causalgraphrag.md)
- Methodology: [brCausalGraphRAG](brcausalgraphrag.md)

## Model diagrams (open in modal)

Click any diagram to open it in a modal and inspect the model without leaving the page.

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
flowchart TB
  subgraph ToolUse["AI Agent (tool-using)"]
    U[User] --> Q[Question]
    Q --> L[LLM]
    L --> T[Tools]
    T --> L
    L --> A[Answer]
  end

  subgraph Agentic["Agentic AI (system property)"]
    G[Goal] --> P[Plan]
    P --> X[Act]
    X --> O[Observe]
    O --> M[Memory]
    M --> P
    O --> V[Validate constraints]
    V -->|Fail| S[Stop / Abstain / Escalate]
    V -->|Pass| P
  end
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
graph LR
  C[Confounder C] --> X[X]
  C --> Y[Y]
  X --> Y
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
flowchart LR
  PG["Property Graph (nodes/edges + properties)"] --> KG["Knowledge Graph (ontology + constraints + meaning)"]
  KG --> Q[Queries with validity guarantees]
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
flowchart LR
  U[User] --> L[LLM]
  L -->|Search/Retrieve| R[RAG]
  R --> L
  L -->|Call tools| T[Tools / APIs]
  T --> L
  L --> A[Answer]
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
flowchart LR
  Q[Question] --> S[Start node(s)]
  S --> P[Path search with constraints]
  P --> T[Trace + evidence]
  T --> A[Answer or abstain]
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
flowchart TB
  Q[Question] --> S[Select start nodes]
  S --> P[Constrained path search]
  P --> V[Validate shapes/constraints]
  V -->|Pass| T[Generate trace object]
  T --> A[Answer with evidence]
  V -->|Fail| X[Abstain / Escalate]
    </div>
  </div>
</dialog>

## Next pages (skeleton)

- Engagement patterns: [Services](../services/index.md)
- Applied outcomes: [Case Studies](../case-studies/index.md)
- Real example: [SK Biomedicine](../case-studies/biomedicine.md)
