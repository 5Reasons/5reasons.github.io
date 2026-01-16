---
title: "SK Biomedicine: Mechanism Discovery"
description: "How causal pathfinding turns scattered biomedical evidence into auditable mechanistic chains—moving from correlation to explanation."
---

--8<-- "includes/quicknav.html"

# SK Biomedicine: Mechanism Discovery

## The question

How do we uncover mechanistic chains (not just correlations) around targets like **CA IX** in tumor microenvironments?

## Why probabilistic search fails

A document-first approach often returns:

- “Some studies suggest association …”
- “Evidence is mixed …”

That language is *honest*, but not operational: it doesn’t produce a mechanistic chain you can test.

## What we do instead

We encode entities, interactions, and provenance into a causal graph and run directed pathfinding (impact analysis, root cause analysis, or mechanism search).

```mermaid
flowchart LR
  CA[CA IX] --> pH[Extracellular pH]
  pH --> Prot[Proteases]
  Prot --> Inv[Invasiveness]
```

## Outputs (skeleton)

- traceable causal path(s) with supporting sources
- hypothesis candidates ranked by mechanism plausibility
- a model that can be iterated as new studies arrive

Next: [Contact](../contact/index.md) or explore [Methodology](../methodology/index.md).
