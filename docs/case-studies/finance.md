---
title: "Finance: Compliance & Risk"
description: "How governance constraints prevent policy-violating approvals and make AI decisions auditable—without relying on prompt discipline."
---

--8<-- "includes/quicknav.html"

# Finance: Compliance & Risk

## The question

Can AI assist credit decisions without violating policy, sector restrictions, or regulatory expectations?

## Failure mode to avoid

Chat-style systems can provide plausible narratives while missing:

- exceptions hidden in footnotes
- cross-document constraints
- sector-specific prohibitions

## What changes with governance constraints

Instead of “asking the model to behave”, we enforce constraints at the system level.

```mermaid
flowchart TB
  Q[Proposed decision] --> V[Validate constraints]
  V -->|Pass| OK[Approve with trace]
  V -->|Fail| NO[Reject with rule + evidence]
```

## Outputs (skeleton)

- rule IDs and rationale for each decision
- non-bypassable constraints
- audit trail suitable for internal review

Next: [Services](../services/index.md).
