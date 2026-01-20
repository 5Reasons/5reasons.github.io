---
title: "Wizard (Full-Width Diagram Template)"
description: "A distraction-free, full-width template page for large Mermaid diagrams: no side navigation, no table of contents, just the model."
hide:
  - navigation
  - toc
---

# Wizard (Full-Width Diagram Template)

Use this page as a sandbox for diagrams that need horizontal space.

The goal is simple: keep context around the diagram (what it is, why it matters, what to do next), while removing side navigation and the right-hand table of contents so the visual model fits.

## Diagram

<div class="wizard-wide">

```mermaid
flowchart LR
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef s fill:#FFB3B3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef r fill:#FFFFB3,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;
subgraph N_Visitors["Visitors (Subjects)"]
    direction LR
    S_Buyer("Buyer / Operator"):::s
    S_Engineer("Engineer / Architect"):::s
    S_Reader("Reader / Analyst"):::s
end
subgraph N_Actions["Engagement (Processes)"]
    direction TB
    P_Learn("Learning / Exploration"):::p
    P_Inquiry("Inquiry Process"):::p
    P_Audit("Epistemic Audit"):::p
end
subgraph N_Web["Knowledge Base (Sources)"]
    direction TB
    I_Home("Home / Start Here"):::i
    I_Method("Methodology"):::i
    I_Services("Services"):::i
    I_Cases("Case Studies"):::i
    I_Phil("Philosophy"):::i
    I_Blog("Blog"):::i
end
R_Team("Reasoner Team"):::r
R_Contract("Partnership / Engagement"):::r
O_Form("Inquiry Form Data"):::o
O_Blueprint("Architecture Blueprint"):::o
S_Buyer -- "performs" --> P_Learn
S_Engineer -- "performs" --> P_Learn
S_Reader -- "performs" --> P_Learn

P_Learn -- "consumes" --> I_Home
P_Learn -- "consumes" --> I_Blog
S_Buyer -. "subjects" .-> I_Services
S_Buyer -. "subjects" .-> I_Cases
S_Engineer -. "subjects" .-> I_Method
S_Engineer -. "subjects" .-> I_Phil
S_Buyer -- "sends" --> R_Team
P_Inquiry -- "produces" --> O_Form
O_Form -- "requests" --> R_Team
R_Team -- "connects" --> S_Buyer
R_Team -- "realizes" --> P_Audit
P_Audit -- "produces" --> O_Blueprint
click S_Buyer "/home/start-here/" "Go to Start Here"
click S_Engineer "/home/start-here/" "Go to Start Here"
click I_Home "/" "Home"
click I_Method "/methodology/" "Methodology"
click I_Services "/services/" "Services"
click I_Cases "/case-studies/" "Case Studies"
click I_Phil "/philosophy/" "Philosophy"
click I_Blog "/blog/" "Blog"
click P_Inquiry "/home/inquiry/" "Open Inquiry Form"
click P_Audit "/services/epistemic-audit/" "About Epistemic Audit"
```

</div>

## Notes below the diagram

Put interpretation here: what the diagram claims causally, what you want the reader to notice first, and what data (or page) would falsify the model.

If you want, the next iteration can also:

- Add a second diagram (e.g., a feedback loop view) under this one.
- Add a small legend and “assumptions” box above the diagram.
- Turn this into a step-by-step wizard (tabs/sections) while keeping the full-width layout.
