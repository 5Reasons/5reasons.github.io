---
title: "Wizard (Full-Width Diagram Template)"
description: "A distraction-free, full-width template page for large Mermaid diagrams: no side navigation, no table of contents, just the model."
hide:
  - navigation
  - toc
---

# Wizard — Visitor → Role → Value

This page is a full-width workspace for “big picture → drill-down” causal/flow diagrams.

**How to use it**

- Start with a compact overview diagram.
- Click a node (role/process) to jump to its detailed section below.
- Keep each detailed diagram small enough to read without zoom.

<div class="wizard-jumps">
  <a class="md-button md-button--primary" href="#overview">Overview</a>
  <a class="md-button" href="#buyer">Buyer / Operator</a>
  <a class="md-button" href="#engineer">Engineer / Architect</a>
  <a class="md-button" href="#reader">Reader / Analyst</a>
  <a class="md-button" href="#inquiry-inputs">Inquiry inputs</a>
</div>

## Overview {#overview .wizard-section}

<div class="landing-card">
<p><strong>The causal question this page answers</strong>: How does a first-time visitor self-identify, and which mental path leads them to real value (learning, dialogue, or an actionable engagement)?</p>

```mermaid
flowchart TB
%% Styles (brModel Standard)
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef s fill:#FFB3B3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef r fill:#FFFFB3,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;


I_Home("? 5Reason web"):::i

%% Subjects
S_Visitor("👤 Visitor"):::s
S_Buyer("🧑‍💼 Buyer / Operator"):::s
S_Eng("🧑‍💻 Engineer / Architect"):::s
S_Read("🧑‍🔬 Reader / Analyst"):::s

%% Processes
P_Ident("🧭 Self-Identification"):::p
P_Biz("💬 Business evaluation"):::p
P_Tech("🧩 Technical deep-dive"):::p
P_Learn("📚 Causal learning"):::p


%% Flow
I_Home --> S_Visitor
S_Visitor --> P_Ident
P_Ident --> S_Buyer
P_Ident --> S_Eng
P_Ident --> S_Read

S_Buyer --> P_Biz
S_Eng --> P_Tech 
S_Read --> P_Learn 

%% Links (existing pages + wizard drill-down sections)
click I_Home "/" "Home"
click S_Visitor "/home/start-here/" "Start Here"
click S_Buyer "/wizard/#buyer" "Jump to Buyer flow"
click S_Eng "/wizard/#engineer" "Jump to Engineer flow"

```
</div>

### Legend (icon intent)

- **People/roles** use a human icon (👤/🧑‍💼/🧑‍💻/🧑‍🔬).
- **Processes** use action/route icons (🧭/💬/🧩/📚).
- **Sources/pages** use “object” icons (🧰/📐/📰/🧾).
- **Outputs/value** use outcome icons (💹/🏗️/🔎).

---

## Buyer / Operator {#buyer .wizard-section}

**Typical intent:** “Can you solve my problem with acceptable risk, budget, and governance?”

The causal hinge here is *trust formation*: the buyer needs enough evidence to justify a next step (call, written response, or a formal inquiry).

<div class="wizard-wide">

```mermaid
flowchart TB
classDef s fill:#FFB3B3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef r fill:#FFFFB3,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;

S_Buyer("🧑‍💼 Buyer / Operator"):::s
P_Biz("💬 Business evaluation"):::p
I_Services("🧰 Services"):::i
I_Cases("🧾 Case Studies"):::i
P_Call("📞 Quick contact"):::p
P_Inquiry("📝 Formal inquiry"):::p
R_Team("🤝 Reasoner team"):::r
O_Trust("💹 Trust / ROI"):::o

S_Buyer --> P_Biz
P_Biz --> I_Services
P_Biz --> I_Cases
P_Biz --> P_Call
P_Biz --> P_Inquiry
P_Call --> R_Team
P_Inquiry --> R_Team
R_Team --> O_Trust

click I_Services "/services/" "Services"
click I_Cases "/case-studies/" "Case Studies"
click P_Call "/contact/" "Contact"
click P_Inquiry "/home/inquiry/" "Inquiry"
```

</div>

Back to [Overview](#overview).

---

## Engineer / Architect {#engineer .wizard-section}

**Typical intent:** “Is this technically real? Where does it plug in? What fails, and how do you make it enforceable?”

The causal hinge here is *implementation credibility*: you earn trust by making constraints, integration boundaries, and failure modes explicit.

<div class="wizard-wide">

```mermaid
flowchart TB
classDef s fill:#FFB3B3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef r fill:#FFFFB3,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;

S_Eng("🧑‍💻 Engineer / Architect"):::s
P_Tech("🧩 Technical deep-dive"):::p
I_Method("📐 Methodology"):::i
P_Audit("🧪 Epistemic audit"):::p
P_Blueprint("🏗️ Blueprint engagement"):::p
O_Blueprint("🏗️ System architecture"):::o
R_Team("🤝 Reasoner team"):::r

S_Eng --> P_Tech
P_Tech --> I_Method
P_Tech --> P_Audit --> R_Team
P_Tech --> P_Blueprint --> R_Team
R_Team --> O_Blueprint

click I_Method "/methodology/" "Methodology"
click P_Audit "/services/epistemic-audit/" "Epistemic Audit"
click P_Blueprint "/services/blueprint/" "Blueprint"
```

</div>

Back to [Overview](#overview).

---

## Reader / Analyst {#reader .wizard-section}

**Typical intent:** “Teach me the model. Show me the mechanism. Give me a diagram I can argue with.”

The causal hinge here is *learning-to-insight conversion*: the reader needs structure (models, counterfactuals, diagrams), not just prose.

<div class="wizard-wide">

```mermaid
flowchart TB
classDef s fill:#FFB3B3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;

S_Read("🧑‍🔬 Reader / Analyst"):::s
P_Learn("📚 Causal learning"):::p
I_Blog("📰 Blog"):::i
I_Diagrams("🗺️ Diagram gallery"):::i
O_Insight("🔎 Causal insight"):::o

S_Read --> P_Learn
P_Learn --> I_Blog
P_Learn --> I_Diagrams
P_Learn --> O_Insight

click I_Blog "/blog/" "Blog"
click I_Diagrams "/diagrams/" "Diagram Gallery"
```

</div>

Back to [Overview](#overview).

---

## Inquiry inputs (two forms) {#inquiry-inputs .wizard-section}

You mentioned two key inputs that convert “interest” into an actionable engagement:

1) **Contact / callback request** (fast, lightweight)
2) **Inquiry form** (structured, decision-grade)

These are currently specified in the workspace source file `localSource/forms-descrition.md` (used as internal truth for field design).

<div class="wizard-wide">

```mermaid
flowchart LR
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;
classDef r fill:#FFFFB3,stroke-width:0px,color:#000;

P_Call("📞 Contact / callback request"):::p
P_Inquiry("📝 Inquiry form"):::p
R_Team("🤝 Reasoner team"):::r
O_Next("✅ Next step: triage → audit/blueprint"):::o

P_Call --> R_Team
P_Inquiry --> R_Team
R_Team --> O_Next

click P_Call "/contact/" "Contact"
click P_Inquiry "/home/inquiry/" "Inquiry"
```

</div>

Back to [Overview](#overview).
