---
title: "CausalGraphRAG"
description: "From similarity search to causal traversal: how CausalGraphRAG retrieves mechanistic paths with traces, instead of generating plausible text."
---

--8<-- "includes/quicknav.html"

# CausalGraphRAG

RAG retrieves *text chunks*.
CausalGraphRAG retrieves *paths in a causal graph*.

## Why that matters

A path is constrained.
A paragraph is not.

## Minimal flow

```mermaid
flowchart LR
  Q["Question"] --> S["Start node(s)"]; S --> P["Path search with constraints"]; P --> T["Trace + evidence"]; T --> A["Answer or abstain"];
```

## Diagram: why this beats chunk retrieval

```mermaid
flowchart LR
  RAG["RAG retrieves chunks"] --> TXT["Text synthesis"];
  CG["Causal graph retrieves paths"] --> PATH["Mechanism chain"]; PATH --> TRACE["Trace object"]; TRACE --> AUDIT["Auditable decision"];
```

## What you get

- a mechanistic chain (A → B → C)
- a trace that can be audited
- a clear “unknown” when the graph has no valid path
