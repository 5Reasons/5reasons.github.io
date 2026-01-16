---
title: "brCausalGraphRAG"
description: "CausalGraphRAG with brModel™ primitives: provenance-first graphs, enforceable constraints, and auditable traces that decide when to answer vs abstain."
---

--8<-- "includes/quicknav.html"

# brCausalGraphRAG

CausalGraphRAG is the idea.
**brCausalGraphRAG** is the implementation discipline.

## What we add on top of CausalGraphRAG

- **Provenance-first primitives** (every claim carries a source object)
- **Constraint validation** (policy and safety are enforced)
- **Trace objects** (machine-verifiable reasoning paths)
- **Abstention mechanics** (refuse action/answers without a valid path)

## Diagram: decision-grade traversal

```mermaid
flowchart TB
  Q[Question] --> S[Select start nodes]
  S --> P[Constrained path search]
  P --> V[Validate shapes/constraints]
  V -->|Pass| T[Generate trace object]
  T --> A[Answer with evidence]
  V -->|Fail| X[Abstain / Escalate]
```

## Diagram: trace object (what gets stored)

```mermaid
flowchart TB
  T[Trace] --> P["Path (nodes + edges)"]
  T --> E["Evidence (citations)"]
  T --> R["Rules applied (constraints)"]
  T --> D["Decision (answer/abstain)"]
```

## Why this is different from “better prompts”

Prompting is a social contract.
Constraints are an enforcement mechanism.

Next: [Governance Approach](../reasoners/governance.md).
