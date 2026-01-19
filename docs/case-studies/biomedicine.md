---
title: "SK Biomedicine: Mechanism Discovery"
description: "How causal pathfinding turns scattered biomedical evidence into auditable mechanistic chains—moving from correlation to explanation."
---

--8<-- "includes/quicknav.html"

# SK Biomedicine: Mechanism Discovery

<div class="landing-hero">
  <div class="landing-hero__grid">
    <div>
      <p class="landing-kicker">Case study → biomedicine</p>
      <h2 class="landing-title">Mechanism discovery: from “relevant papers” to testable causal chains.</h2>
      <p class="landing-subtitle">
        The question is not whether two concepts co-occur in text.
        The question is whether there is a mechanistic chain you can inspect, challenge, and experimentally validate.
      </p>
      <div class="landing-cta">
        <a class="md-button md-button--primary" href="/services/start/">Start a Conversation</a>
        <a class="md-button" href="/methodology/causalgraphrag/">CausalGraphRAG</a>
        <a class="md-button" href="/methodology/constraints/">Constraints &amp; SHACL</a>
      </div>
    </div>
  </div>
</div>

<div class="landing-section">
  <h2>The causal question</h2>
  <div class="landing-card">
    <p>
      How do we uncover mechanistic chains (not just correlations) around targets like <strong>CA IX</strong> in tumor microenvironments?
    </p>
  </div>
</div>

<div class="landing-section">
  <h2>Why probabilistic search fails (even when it is “honest”)</h2>
  <div class="landing-grid">
    <div class="landing-card">
      <h3>Retrieval returns relevance</h3>
      <p>“Here are papers about CA IX” does not equal “here is a chain that explains the outcome.”</p>
    </div>
    <div class="landing-card">
      <h3>Text summaries blur mechanisms</h3>
      <p>Models can produce cautious language (“evidence is mixed”) without specifying what would falsify which link.</p>
    </div>
    <div class="landing-card">
      <h3>No trace = no lab plan</h3>
      <p>Without a structured path and citations per edge, you can’t design targeted experiments.</p>
    </div>
  </div>
</div>

<div class="landing-section">
  <h2>What changes with causal traversal</h2>
  <div class="landing-callout">
    <p><strong>We encode entities, interactions, and provenance into a causal graph and run directed pathfinding.</strong></p>
    <p class="landing-mini">The output is a candidate mechanism with evidence per edge — or an abstention with missing data requirements.</p>
  </div>

```mermaid
flowchart LR;
  CA["CA IX"] --> PH["Extracellular pH"];
  PH --> PROT["Proteases"];
  PROT --> INV["Invasiveness"];
```

</div>

<div class="landing-section">
  <h2>Diagram: evidence and provenance per edge</h2>

```mermaid
flowchart TB;
  S["Source (paper / dataset)"] --> C["Claim"];
  C --> E["Edge assertion"];
  E --> P["Path candidate"];
  P --> T["Trace object"];
```

</div>

<div class="landing-section">
  <h2>Outputs</h2>
  <div class="landing-grid">
    <div class="landing-card"><h3>Traceable paths</h3><p>Causal chains with supporting sources and versioned evidence.</p></div>
    <div class="landing-card"><h3>Hypotheses</h3><p>Candidates ranked by mechanistic plausibility, not by rhetorical fluency.</p></div>
    <div class="landing-card"><h3>Falsification plan</h3><p>Clear missing evidence and which link would change the conclusion.</p></div>
    <div class="landing-card"><h3>Iterability</h3><p>A model that improves as new studies arrive without losing auditability.</p></div>
    <div class="landing-card"><h3>Experiment prioritization</h3><p>Targeted follow-ups: which intervention would most reduce uncertainty in the mechanism chain.</p></div>
    <div class="landing-card"><h3>Evidence gaps map</h3><p>A structured view of missing links, contradictory studies, and where new data would unlock a valid path.</p></div>
  </div>
</div>

<div class="landing-section">
  <h2>Next steps</h2>
  <div class="landing-card">
    <p>
      <a class="md-button md-button--primary" href="/services/start/">Start a Conversation</a>
      <a class="md-button" href="/methodology/">Explore Methodology</a>
    </p>
  </div>
</div>
