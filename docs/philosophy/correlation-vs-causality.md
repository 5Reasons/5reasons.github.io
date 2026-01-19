---
title: "Correlation vs Causality"
description: "Correlation predicts; causality intervenes. A practical guide to why correlation breaks under distribution shift and what causal claims require."
---

--8<-- "includes/quicknav.html"

# Correlation vs Causality

<div class="landing-hero">
  <div class="landing-hero__grid">
    <div>
      <p class="landing-kicker">Decision-grade thinking</p>
      <h2 class="landing-title">Correlation predicts. Causality intervenes.</h2>
      <p class="landing-subtitle">
        Correlation answers “what moves together?” Causality answers “what changes what — under intervention?”.
        If your system will change the world, you need causal structure.
      </p>
      <div class="landing-cta">
        <a class="md-button md-button--primary" href="/methodology/causalgraphrag/">CausalGraphRAG</a>
        <a class="md-button" href="/methodology/core-primitives/">Core primitives</a>
      </div>
    </div>
    <div class="landing-visual" aria-hidden="true">
      <img src="../assets/img/hero-brmodel.svg" alt="" />
    </div>
  </div>
</div>

<div class="landing-section">
  <h2>The operational difference</h2>
  <div class="landing-grid">
    <div class="landing-card">
      <h3>Correlation</h3>
      <p>Often enough for prediction when environments are stable and you don’t change the system.</p>
    </div>
    <div class="landing-card">
      <h3>Causality</h3>
      <p>Required for decisions when you will change the system (pricing, policy, treatment, automation).</p>
    </div>
  </div>
</div>

## Two counterfactual statements

- If we **do** $X=x_1$ instead of $X=x_0$, the outcome $Y$ would change.
- If we remove a confounder $C$, the relationship between $X$ and $Y$ may disappear.

## Diagram: confounding vs causal effect

```mermaid
graph LR;
  C["Confounder C"] --> X["X"];
  C --> Y["Y"];
  X --> Y;
```

## Diagram: interventions change the object

```mermaid
flowchart LR;
  Obs["Observational data learns P(Y|X)"] --> Pred["Good prediction (sometimes)"];
  Int["Intervention needs P(Y|do(X))"] --> Dec["Good decisions"];
  Obs -. "not equal" .-> Int;
```

## Common failure mode

A predictive model learns $P(Y|X)$.
When you intervene on $X$, you need $P(Y|do(X))$.
Those are not the same object.

<div class="landing-section">
  <h2>Common traps (and what to do instead)</h2>
  <div class="landing-grid">
    <div class="landing-card">
      <h3>Confounding</h3>
      <p>A third variable drives both X and Y. Fix: model confounders explicitly or design an identification strategy.</p>
    </div>
    <div class="landing-card">
      <h3>Selection bias</h3>
      <p>Your data is a filtered subset of reality. Fix: track selection mechanisms and test robustness.</p>
    </div>
    <div class="landing-card">
      <h3>Distribution shift</h3>
      <p>The world changes after deployment. Fix: monitor drift and revalidate assumptions continuously.</p>
    </div>
    <div class="landing-card">
      <h3>Policy feedback</h3>
      <p>Interventions change incentives and behavior. Fix: explicitly model feedback loops and second-order effects.</p>
    </div>
  </div>
</div>

## Where this connects in our stack

- **Philosophy**: don’t confuse predictive accuracy with reliable intervention.
- **Methodology**: encode causal structure in memory (graphs), then constrain what paths are allowed.

Next: [CausalGraphRAG](../methodology/causalgraphrag.md).
