# Cognitive Technologies & Services

--8<-- "includes/quicknav.html"

<div class="landing-section">
    <img class="glightbox" src="/assets/img/br-008792.png"/>
</div>

<div class="landing-hero">
  <div class="landing-hero__grid">
    <div>
      <p class="landing-kicker">We are building memory for AI agents</p>
      <h2 class="landing-title">Architects of mental model— and causal analytics for machines and humans.</h2>
      <p class="landing-subtitle">
        We turn messy enterprise reality (files + databases + policies + domain expertise) into <strong>decision-grade cognitive infrastructure</strong>:
        causal graph memory, governance constraints, and auditable reasoning traces for LLMs and agentic systems.
      </p>
      <div class="landing-cta">
        <a class="md-button md-button--primary" href="services/start/">Start a conversation</a>
        <a class="md-button" href="methodology/">Explore brModel™ methodology</a>
        <a class="md-button" href="reasoners/vision-2026/">Read the 2026 vision</a>
      </div>
    </div>
  </div>
</div>

## Home Navigation
🧭 Some nodes in the diagram are **clickable** — hover to see a pointer cursor, then click to navigate to the relevant page.
<div class="landing-card">
<p><strong>Rule of thumb:</strong> orient → self-identify → pick a tab → return here when you feel lost.</p>

```mermaid
flowchart TB
%% Styles (brModel Standard)
classDef s fill:#FFB3B3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef r fill:#FFFFB3,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;

%% Entry
S_Visitor("👤 Visitor (YOU)"):::s
P_Orient("🧭 Orientation"):::p
P_About("ℹ️ Understand who we are"):::p

S_Visitor --> P_Orient --> P_About

%% Home subpage (key conversion)
P_Inquiry("📝 Inquiry Form"):::p
P_Contact -. "ready to engage" .-> P_Inquiry

%% Top-tab processes (each opens a top-level tab)
P_Services("🧰 Explore services"):::p
P_Methodology("📐 Explore methodology"):::p
P_Philosophy("🧠 Explore philosophy"):::p
P_CaseStudies("🧾 Explore case studies"):::p
P_Blog("📰 Explore the blog"):::p

%% Minimal mental dependencies (no duplication of detailed role diagrams)
P_Orient --> P_Services
P_Orient --> P_Methodology
P_Orient --> P_Blog

P_Blog --> P_Philosophy
P_Philosophy --> P_Methodology

P_Services --> P_CaseStudies

%% Engagement (keep at top level here; details live in Services)
P_Contact("📞 Start a conversation"):::p
R_Engage("🤝 Engagement"):::r

P_About --> P_Contact --> R_Engage
P_Methodology --> P_Contact
P_Services --> P_Contact
P_CaseStudies --> P_Contact
P_Inquiry --> R_Engage

%% Delivery lifecycle (high-level)
P_Audit("🔎 Epistemic audit"):::p
R_AuditReport("🧾 Audit report"):::r
P_ArchPlan("🗺️ Architectural planning"):::p
R_Blueprint("📐 Architecture blueprint"):::r
P_Impl("🧑‍💻 Implementation"):::p
O_Memory("🧠 Memory for AI agents"):::o
P_Ops("🛰️ Agentic system providing"):::p
R_Logs("🧾 Reasoning logs"):::r
P_Maint("🛠️ Maintenance"):::p
O_Reporting("📊 Reporting"):::o
R_Change("🧩 Change proposals"):::r

R_Engage --> P_Audit --> R_AuditReport --> P_ArchPlan --> R_Blueprint --> P_Impl --> O_Memory
O_Memory --> P_Ops --> R_Logs --> P_Maint --> O_Reporting
P_Maint --> R_Change --> P_ArchPlan

%% Links (process → detailed explanation)
click P_Orient "/home/start-here/" "Start Here"
click P_Inquiry "/home/inquiry/" "Inquiry"
click P_About "/reasoners/about/" "About"

click P_Services "/services/" "Services"
click P_Methodology "/methodology/" "Methodology"
click P_Philosophy "/philosophy/" "Philosophy"
click P_CaseStudies "/case-studies/" "Case Studies"
click P_Blog "/blog/" "Blog"

click P_Contact "/services/start/" "Start a conversation"
click R_Engage "/services/" "Engagement model"

click P_Audit "/services/epistemic-audit/" "Epistemic Audit"
click P_ArchPlan "/services/blueprint/" "Architecture Blueprint"
click R_Blueprint "/services/blueprint/" "Architecture Blueprint"
click P_Impl "/services/implementation/" "Implementation"
click O_Memory "/methodology/" "Methodology"
click P_Ops "/reasoners/operating-model/" "Operating model"
click P_Maint "/services/partnership/" "Ongoing Partnership"
click O_Reporting "/reasoners/governance/" "Governance Approach"
```
<p>In this navigation map, the <strong>👤 Visitor (YOU)</strong> begins with <strong>🧭 Orientation</strong> and uses <strong>ℹ️ Understand who we are</strong> to anchor context. From there they can branch into <strong>🧰 Explore services</strong>, <strong>📐 Explore methodology</strong>, or <strong>📰 Explore the blog</strong> (which often leads into <strong>🧠 Explore philosophy</strong> and back into <strong>📐 methodology</strong>). Once ready, they move into <strong>📞 Start a conversation</strong> and <strong>🤝 Engagement</strong>, then follow a risk-minimizing delivery chain: <strong>🔎 Epistemic audit</strong> produces an <strong>🧾 audit report</strong>, which feeds <strong>🗺️ architectural planning</strong> and yields an <strong>📐 architecture blueprint</strong> that drives <strong>🧑‍💻 implementation</strong>. Implementation produces <strong>🧠 memory for AI agents</strong>, which then enables <strong>🛰️ agentic system operations</strong> that emit <strong>🧾 reasoning logs</strong> into <strong>🛠️ maintenance</strong>. Maintenance produces <strong>📊 reporting</strong> and also generates <strong>🧩 change proposals</strong> that flow back into <strong>🗺️ architectural planning</strong>, closing the loop.</p>
</div>

## What we build

<div class="landing-section">
  <div class="landing-grid">
    <div class="landing-card">
      <h3>Epistemic safety</h3>
      <p>Systems that say <em>“I don’t know”</em> when the graph has no valid path — instead of hallucinating a plausible paragraph.</p>
    </div>
    <div class="landing-card">
      <h3>Causal memory for agents</h3>
      <p>Graph-based memory that stores meaning, mechanisms, and source provenance — not just text similarity.</p>
    </div>
    <div class="landing-card">
      <h3>Governance you can enforce</h3>
      <p>Hard constraints (policy, compliance, safety) that block invalid actions at the data layer — not via prompt begging.</p>
    </div>
  </div>
</div>

<div class="landing-card" style="margin-top: 14px;">
  <p class="landing-mini"><strong>Audio:</strong> Hidden complexity makes AI memory toxic</p>
  <audio controls preload="none" style="width: 100%;">
    <source src="/assets/Hidden_Complexity_Makes_AI_Memory_Toxic.m4a" type="audio/mp4" />
    Your browser does not support the audio element.
  </audio>
</div>

## Why “statistical AI” fails in high-stakes domains


<div class="landing-section">
  <div class="landing-callout">
    <p><strong>Similarity is not truth.</strong> LLMs are powerful pattern-completers, but without durable semantics and constraints they fail exactly where your organization can’t afford errors: medicine, finance, law, and critical engineering.</p>
    <p class="landing-mini">If hallucination is unacceptable, the question is no longer “Which model?” — it’s “Where is the memory, logic, and audit trail?”</p>
    <p><a class="md-button" href="philosophy/probabilistic-ai/">Read the Philosophy</a></p>
  </div>
</div>

<div class="landing-card">
<p><strong>The question this section answers</strong>: Why do LLMs fail precisely where you need correctness, provenance, and enforceable rules?</p>
<p>The failure mode is predictable: pattern completion + missing constraints + missing audit trail → confident errors.</p>

```mermaid
flowchart TB
%% Styles (brModel Standard)
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef r fill:#FFFFB3,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;
classDef s fill:#FFB3B3,stroke-width:0px,color:#000;

subgraph S1["Statistical AI"]
direction TB
I_Q1(["📥 Question + sources + context"]):::i
P_LLM1("🧠 Generate an answer"):::p
R_Text1["📝 Plausible text (no guarantees)"]:::r
P_Check1{"Can we justify it?"}:::s
S_Error1("⚠️ Confident error"):::i
I_Q1 --> P_LLM1 --> R_Text1 --> P_Check1 --> S_Error1
end

subgraph S2["brModel"]
direction TB
I_Q2(["📥 Question + sources"]):::i
P_Memory("🧭 Retrieve causal memory"):::p
R_Trace["🧾 Reasoning trace + provenance"]:::r
P_Constraints("🔒 Enforce constraints"):::p
O_Safe("✅ Auditable action"):::o
S_Block("🛑 Refuse ask for missing data"):::s
I_Q2 --> P_Memory --> R_Trace --> P_Constraints --> O_Safe
P_Constraints -. "blocked" .-> S_Block
end



click P_Memory "/methodology/causalgraphrag/" "CausalGraphRAG"
click P_Constraints "/methodology/constraints/" "Constraints & SHACL"
click R_Trace "/methodology/llm-tool-rag/" "LLM + Tool + RAG"
```

<p>This diagram contrasts two causal mechanisms. In <strong>Statistical AI</strong>, a model turns <strong>📥 question + context</strong> into <strong>📝 plausible text</strong>, but when you can’t justify it you get <strong>⚠️ confident error</strong>. In <strong>brModel</strong>, you route the same question through <strong>🧭 causal memory</strong>, produce a <strong>🧾 trace + provenance</strong>, and <strong>🔒 enforce constraints</strong> so the system either produces an <strong>✅ auditable action</strong> or <strong>🛑 blocks</strong> and asks for missing evidence.</p>
</div>


## How we work (risk-minimizing engagement)

<div class="landing-section">
  <div class="landing-grid">
    <div class="landing-card">
      <h3>1) Epistemic Audit</h3>
      <p>Reality check: data readiness, failure modes, hallucination risk, concept/ontology gaps, and a staged roadmap.</p>
  <p><a class="md-button md-button--primary" href="services/">See services</a></p>
    </div>
    <div class="landing-card">
      <h3>2) Causal Architecture Blueprint</h3>
      <p>We design the “physics” of your domain: ontology, constraints, ingestion strategy, and a reference architecture your team can own.</p>
    </div>
    <div class="landing-card">
      <h3>3) Glass-Box Implementation</h3>
      <p>Production delivery: graph memory, CausalGraphRAG reasoning traces, monitoring, and an operational playbook.</p>
    </div>
  </div>
</div>

<div class="landing-card">
<p><strong>What is the lowest-risk path from curiosity to a real deployment?</strong></p>
<p>We start by measuring failure modes, then design the architecture, then implement with auditable traces and enforcement.</p>

```mermaid
flowchart TB
%% Styles (brModel Standard)
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef r fill:#FFFFB3,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;
classDef s fill:#FFB3B3,stroke-width:0px,color:#000;

I_Goal(["🎯 Decision + constraints + failure modes"]):::i

P_Audit("🔎 Epistemic audit"):::p
R_AuditReport["🧾 Audit report: gaps, risks, hypotheses"]:::r
G1{"Proceed?"}:::s

P_Plan("🗺️ Architectural planning"):::p
R_Blueprint["📐 Blueprint: ontology + constraints + ingestion"]:::r
G2{"Proceed?"}:::s

P_Impl("🧑‍💻 Implementation"):::p
O_Memory("🧠 Memory + governance in production"):::o

P_Ops("🛰️ Operations"):::p
R_Logs["🧾 Reasoning logs"]:::r
P_Maint("🛠️ Maintenance"):::p
R_Change["🧩 Change proposals"]:::r

S_Stop("🛑 Stop / rescope"):::i

I_Goal --> P_Audit --> R_AuditReport --> G1
G1 -->|"no"| S_Stop
G1 -->|"yes"| P_Plan --> R_Blueprint --> G2
G2 -->|"no"| S_Stop
G2 -->|"yes"| P_Impl --> O_Memory --> P_Ops --> R_Logs --> P_Maint --> R_Change --> P_Plan



click P_Audit "/services/epistemic-audit/" "Epistemic Audit"
click R_AuditReport "/services/epistemic-audit/" "Audit report"
click P_Plan "/services/blueprint/" "Architecture Blueprint"
click R_Blueprint "/services/blueprint/" "Architecture Blueprint"
click P_Impl "/services/implementation/" "Implementation"
click O_Memory "/methodology/" "Methodology"
click P_Ops "/reasoners/operating-model/" "Operating model"
click R_Logs "/reasoners/governance/" "Governance Approach"
click P_Maint "/services/partnership/" "Ongoing Partnership"
```

<p>This is a <strong>gated delivery system</strong>: each phase produces a concrete artifact and a <strong>go/no-go</strong> decision (diamonds). You begin with <strong>🔎 Epistemic audit</strong> to produce a <strong>🧾 audit report</strong>, then move into <strong>🗺️ planning</strong> to produce a <strong>📐 blueprint</strong>. Only then do you execute <strong>🧑‍💻 implementation</strong> into <strong>🧠 production memory</strong> with <strong>🛰️ operations</strong>, <strong>🧾 logs</strong>, and <strong>🛠️ maintenance</strong>. Maintenance yields <strong>🧩 change proposals</strong> that loop back into planning — so the system improves without rewriting everything. </p>
</div>

## Validated where it hurts

<div class="landing-card">
<p><strong> Where do these failure modes show up in the real world — and what does “good” look like?</strong></p>
<p>Pick one domain and follow the diagram into a concrete case study.</p>

```mermaid
flowchart LR
%% Styles (brModel Standard)
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef r fill:#FFFFB3,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;
classDef s fill:#FFB3B3,stroke-width:0px,color:#000;

P_Route(["🎯 What failure is unacceptable? Choose a case study"]):::i

subgraph G_Reg["Regulated decisions"]
direction LR
P_Fin("💳 Finance Constraints that cannot be bypassed"):::p
P_Ins("🛡️ Insurance Policy logic + controlled approvals"):::p
P_Legal("⚖️ Legal Clause logic + conflict detection"):::p
end

subgraph G_Bio["Bio & clinical"]
direction LR
P_Bio("🧬 Biomedicine Mechanisms + evidence chains"):::p
P_Pharma("🧪 Pharma & Clinical Ops Traceable decisions in workflows"):::p
end

subgraph G_Ops["Operational systems"]
direction LR
P_Cyber("🧯 Cybersecurity Reasoning under adversarial conditions"):::p
P_Energy("⚡ Energy & Utilities Safety + critical operations"):::p
P_Manu("🏭 Manufacturing Process constraints + reliability"):::p
end

subgraph G_Org["Enterprise memory"]
direction LR
P_ECM("🏢 Enterprise Central Memory Shared semantics + governance"):::p
end

P_Route --> G_Reg
P_Route --> G_Bio
P_Route --> G_Ops
P_Route --> G_Org
click P_Route "/case-studies/" "Case studies"

click P_ECM "/case-studies/enterprise-central-memory/" "Enterprise Central Memory"
click P_Fin "/case-studies/finance/" "Finance"
click P_Ins "/case-studies/insurance/" "Insurance"
click P_Legal "/case-studies/legal/" "Legal"
click P_Bio "/case-studies/biomedicine/" "Biomedicine"
click P_Pharma "/case-studies/pharma-clinical-ops/" "Pharma & Clinical Ops"
click P_Cyber "/case-studies/cybersecurity/" "Cybersecurity"
click P_Energy "/case-studies/energy-utilities/" "Energy & Utilities"
click P_Manu "/case-studies/manufacturing/" "Manufacturing"
```

<p>In high-stakes work, “accuracy” is not abstract — it is tied to a <strong>decision</strong> and a <strong>failure mode</strong>. This diagram routes you by domain and shows the kind of <strong>decision-grade artifacts</strong> (yellow) each case study focuses on: mechanism/evidence chains (biomedicine), enforceable constraints (finance), and logical conflict detection (legal).</p>
</div>

<div class="landing-section">
  <div class="landing-grid">
    <div class="landing-card">
      <h3>Enterprise Central Memory</h3>
      <p>Cross-team semantics and governance: the memory layer that makes agents consistent across time, tools, and departments.</p>
      <p><a class="md-button" href="case-studies/enterprise-central-memory/">Read case study</a></p>
    </div>
    <div class="landing-card">
      <h3>Biomedicine</h3>
      <p>Mechanism discovery over PDFs + omics: explain <em>why</em> a therapy fails, not just which sentences look similar.</p>
      <p><a class="md-button" href="case-studies/biomedicine/">Read case study</a></p>
    </div>
    <div class="landing-card">
      <h3>Finance</h3>
      <p>Compliance-by-design: enforce policy constraints so agents cannot approve what regulators would reject.</p>
      <p><a class="md-button" href="case-studies/finance/">Read case study</a></p>
    </div>
    <div class="landing-card">
      <h3>Legal</h3>
      <p>Contract analysis as a knowledge graph: detect logical conflicts across clauses you’d never spot with keyword search.</p>
      <p><a class="md-button" href="case-studies/legal/">Read case study</a></p>
    </div>
    <div class="landing-card">
      <h3>Insurance</h3>
      <p>Policy logic and underwriting decisions: explicit constraints and traceable approvals that don’t depend on “prompt discipline”.</p>
      <p><a class="md-button" href="case-studies/insurance/">Read case study</a></p>
    </div>
    <div class="landing-card">
      <h3>Cybersecurity</h3>
      <p>Reasoning under adversarial pressure: enforceable guardrails, provenance, and incident-ready audit trails.</p>
      <p><a class="md-button" href="case-studies/cybersecurity/">Read case study</a></p>
    </div>
    <div class="landing-card">
      <h3>Manufacturing</h3>
      <p>Operational reliability: process constraints and repeatable decisions across shifts, machines, and exception handling.</p>
      <p><a class="md-button" href="case-studies/manufacturing/">Read case study</a></p>
    </div>
    <div class="landing-card">
      <h3>Energy &amp; Utilities</h3>
      <p>Safety-critical operations: enforce policies and constraints so an agent cannot do what engineers would never allow.</p>
      <p><a class="md-button" href="case-studies/energy-utilities/">Read case study</a></p>
    </div>
    <div class="landing-card">
      <h3>Pharma &amp; Clinical Ops</h3>
      <p>Traceable decisions in regulated workflows: provenance, constraints, and reasoning logs for real operational governance.</p>
      <p><a class="md-button" href="case-studies/pharma-clinical-ops/">Read case study</a></p>
    </div>
  </div>
</div>

## Two complementary tracks

<div class="landing-card">
<p><strong>The question this section answers</strong>: Where should you go next — consulting infrastructure, public writing, or an inquiry?</p>
<p>Use the diagram as your navigation: pick the track that matches your intent and click straight into it.</p>

```mermaid
flowchart TB
%% Styles (brModel Standard)
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef r fill:#FFFFB3,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;
classDef s fill:#FFB3B3,stroke-width:0px,color:#000;

I_Intent(["🧭 What do you need now?"]):::i
P_Pick{"Pick intent"}:::s

P_Reasoners("🤝 Reasoners"):::p
R_Reasoners["📐 Governance + operating model + architecture"]:::r
O_Reasoners("✅ Build cognitive infrastructure"):::o

P_5Reasons("📝 5Reasons (blog)"):::p
R_5Reasons["🧾 Causal posts + diagrams + counterfactuals"]:::r
O_5Reasons("✅ Understand mechanisms"):::o

P_Inquiry("📝 Inquiry"):::p
R_Inquiry["🧾 Problem statement + constraints + fit check"]:::r
O_Inquiry("✅ Clear next step"):::o

I_Intent --> P_Pick
P_Pick -->|"build"| P_Reasoners --> R_Reasoners --> O_Reasoners
P_Pick -->|"learn"| P_5Reasons --> R_5Reasons --> O_5Reasons
P_Pick -->|"decide"| P_Inquiry --> R_Inquiry --> O_Inquiry



click P_Reasoners "/reasoners/" "Reasoners"
click O_Reasoners "/reasoners/" "Reasoners"
click P_5Reasons "/blog/" "Blog"
click O_5Reasons "/blog/" "Blog"
click P_Inquiry "/home/inquiry/" "Inquiry"
click O_Inquiry "/home/inquiry/" "Inquiry"
```

<p>This is an <strong>intent router</strong>. If you want to <strong>build</strong>, go to <strong>🤝 Reasoners</strong> (architecture + governance + operating model). If you want to <strong>learn</strong>, go to <strong>📝 5Reasons</strong> (public causal analysis with diagrams and counterfactuals). If you want to <strong>decide</strong> quickly, use <strong>📝 Inquiry</strong> to express your decision, constraints, and unacceptable failure modes so we can recommend a next step. </p>
</div>

<div class="landing-section">
  <div class="landing-grid">
    <div class="landing-card">
      <h3>Reasoners (consulting & infrastructure)</h3>
      <p>For organizations where hallucination is unacceptable — we build durable semantics, governance, and auditable reasoning.</p>
      <p>
        <a class="md-button" href="reasoners/">Start with Reasoners</a>
        <a class="md-button" href="methodology/">Technical core</a>
      </p>
    </div>
    <div class="landing-card">
      <h3>5Reasons (writing & diagrams)</h3>
      <p>Public causal analysis you can argue with: models, counterfactuals, diagrams, mechanisms, and leverage points.</p>
      <p>
        <a class="md-button" href="blog/">Read the blog</a>
      </p>
      <p>
        <a class="md-button" href="reasoners/terms/">Terms of Use</a>
        <a class="md-button" href="services/start/">Request a license (brModel)</a>
      </p>
    </div>
    <div class="landing-card">
      <h3>Inquiry (fast fit check)</h3>
      <p>Tell us your domain, the decision you need to support, the constraints that must be enforced, and what failure is unacceptable.</p>
      <p>
        <a class="md-button md-button--primary" href="home/inquiry/">Open the inquiry form</a>
        <a class="md-button" href="services/">Services</a>
      </p>
    </div>
  </div>
</div>
