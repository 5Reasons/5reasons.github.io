---
title: "LLM + Tool + RAG"
description: "A pragmatic baseline: how tool-use and retrieval reduce hallucinations, where they still fail, and what governance needs beyond prompts."
---

--8<-- "includes/quicknav.html"

# LLM + Tool + RAG

This is the mainstream starting point: LLM reasoning, tools for actions, and retrieval for grounding.

## The baseline architecture

```mermaid
flowchart LR
  U[User] --> L[LLM]
  L -->|Search/Retrieve| R[RAG]
  R --> L
  L -->|Call tools| T[Tools / APIs]
  T --> L
  L --> A[Answer]
```

## Diagram: the missing layer (constraint gate)

```mermaid
flowchart TB
  D[Draft answer/action] --> V[Validate constraints]
  V -->|Pass| O[Output / execute]
  V -->|Fail| X[Abstain + explain]
```

## Where it breaks

- Retrieval returns *relevant text* but not *valid causal paths*.
- The model can still:
  - merge incompatible sources
  - ignore a policy edge case
  - invent a relationship between retrieved facts

## What to add for high-stakes domains

- enforceable constraints (not guidelines)
- provenance as first-class data
- abstention and escalation paths

Next: [CausalGraphRAG](causalgraphrag.md).
