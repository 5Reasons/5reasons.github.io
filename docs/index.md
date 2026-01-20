# Cognitive Technolgies & Services

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
        We turn messy enterprise reality (PDF + SQL + policies + domain expertise) into <strong>decision-grade cognitive infrastructure</strong>:
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

## What we build

<div class="landing-card">
<p><strong>The question this section answers</strong>: What are the main paths through this site — and which next step should you take based on your intent?</p>
<p>This diagram is intentionally minimal: it shows only the <em>top-level processes</em> that open the pages in the horizontal tabs, plus key Home subpages.</p>

```mermaid
flowchart TB
%% Styles (brModel Standard)
classDef s fill:#FFB3B3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef r fill:#FFFFB3,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;

%% Entry
S_Visitor("👤 Visitor"):::s
P_Orient("🧭 Orientation"):::p
P_About("ℹ️ Understand who we are"):::p
P_Ident("🧭 Self-identification"):::p

S_Visitor --> P_Orient --> P_About --> P_Ident

%% Home subpage (key conversion)
P_Inquiry("📝 Inquiry"):::p
P_Ident -. "ready to engage" .-> P_Inquiry

%% Top-tab processes (each opens a top-level tab)
P_Services("🧰 Explore services"):::p
P_Methodology("📐 Explore methodology"):::p
P_Philosophy("🧠 Explore philosophy"):::p
P_Reasoners("🤝 Explore Reasoners"):::p
P_CaseStudies("🧾 Explore case studies"):::p
P_Blog("📰 Explore the blog"):::p

%% Minimal mental dependencies (no duplication of detailed role diagrams)
P_Ident --> P_Services
P_Ident --> P_Methodology
P_Ident --> P_Blog

P_Blog --> P_Philosophy
P_Philosophy --> P_Methodology

P_Methodology --> P_Reasoners
P_Services --> P_Reasoners
P_CaseStudies --> P_Reasoners

P_Services --> P_CaseStudies

%% Engagement (keep at top level here; details live in Services)
P_Contact("📞 Start a conversation"):::p
R_Engage("🤝 Engagement"):::r

P_Reasoners --> P_Contact --> R_Engage
P_Inquiry --> R_Engage

%% Delivery lifecycle (high-level)
O_Audit("🟢 Epistemic audit"):::o
O_Blueprint("🟢 Architecture blueprint"):::o
P_Impl("🛠️ Implementation"):::p
O_Software("🟢 Software release"):::o
O_Memory("🟢 Memory for AI agents"):::o
P_Maint("🔧 Maintenance"):::p
O_Reporting("🟢 Reporting"):::o

R_Engage --> O_Audit
R_Engage --> O_Blueprint
R_Engage --> P_Impl --> O_Software --> O_Memory
O_Software --> P_Maint --> O_Reporting

%% Links (process → detailed explanation)
click P_Orient "/home/start-here/" "Start Here"
click P_Ident "/home/start-here/#choose-your-role" "Choose your role"
click P_Inquiry "/home/inquiry/" "Inquiry"
click P_About "/reasoners/about/" "About"

click P_Services "/services/" "Services"
click P_Methodology "/methodology/" "Methodology"
click P_Philosophy "/philosophy/" "Philosophy"
click P_Reasoners "/reasoners/" "Reasoners"
click P_CaseStudies "/case-studies/" "Case Studies"
click P_Blog "/blog/" "Blog"

click P_Contact "/services/start/" "Start a conversation"
click R_Engage "/services/" "Engagement model"

click O_Audit "/services/epistemic-audit/" "Epistemic Audit"
click O_Blueprint "/services/blueprint/" "Architecture Blueprint"
click P_Impl "/services/implementation/" "Implementation"
click O_Software "/services/implementation/" "Implementation"
click O_Memory "/methodology/" "Methodology"
click P_Maint "/services/partnership/" "Ongoing Partnership"
click O_Reporting "/reasoners/governance/" "Governance Approach"
```

<p>In this map, the <strong>👤 Visitor</strong> begins with <strong>🧭 Orientation</strong>, quickly uses <strong>ℹ️ Understand who we are</strong> to anchor context, then enters <strong>🧭 Self-identification</strong> to pick the next best path: <strong>🧰 Explore services</strong>, <strong>📐 Explore methodology</strong>, or <strong>📰 Explore the blog</strong> (which often leads into <strong>🧠 Explore philosophy</strong> and back into <strong>📐 methodology</strong>). Once ready, they move into <strong>📞 Start a conversation</strong> and <strong>🤝 Engagement</strong>, which can yield <strong>🟢 Epistemic audit</strong> or <strong>🟢 Architecture blueprint</strong>, and then progress through <strong>🛠️ Implementation</strong> to a <strong>🟢 Software release</strong> (delivering <strong>🟢 memory for AI agents</strong>), followed by <strong>🔧 Maintenance</strong> and <strong>🟢 Reporting</strong>.</p>

<p><strong>Rule of thumb:</strong> orient → self-identify → pick a tab → return here when you feel lost.</p>
</div>

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

<div class="landing-card">
<p><strong>The question this section answers</strong>: Why do LLMs fail precisely where you need correctness, provenance, and enforceable rules?</p>
<p>The failure mode is predictable: pattern completion + missing constraints + missing audit trail → confident errors.</p>

```mermaid
flowchart LR
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;

I_LLM("🧠 LLM output"):::i
P_Gap("🧩 No constraints / weak provenance"):::p
P_Risk("⚠️ Failure risk"):::p
O_Harm("💥 High-stakes harm"):::o

I_LLM --> P_Gap --> P_Risk --> O_Harm

P_Home("⬆️ Back to Home overview"):::p

click P_Gap "/methodology/constraints/" "Constraints & SHACL"
click P_Risk "/philosophy/probabilistic-ai/" "Why Probabilistic AI Fails"
click P_Home "/#what-we-build" "Back to the main process map"
```

<p>Here the story is: <strong>🧠 LLM output</strong> becomes dangerous when there are <strong>🧩 no constraints / weak provenance</strong>, which increases <strong>⚠️ failure risk</strong> and can cause <strong>💥 high-stakes harm</strong>. Use <strong>⬆️ Back to Home overview</strong> to return to the main process map.</p>
</div>

<div class="landing-section">
  <div class="landing-callout">
    <p><strong>Similarity is not truth.</strong> LLMs are powerful pattern-completers, but without durable semantics and constraints they fail exactly where your organization can’t afford errors: medicine, finance, law, and critical engineering.</p>
    <p class="landing-mini">If hallucination is unacceptable, the question is no longer “Which model?” — it’s “Where is the memory, logic, and audit trail?”</p>
    <p><a class="md-button" href="philosophy/probabilistic-ai/">Read the Philosophy</a></p>
  </div>
</div>

## How we work (risk-minimizing engagement)

<div class="landing-card">
<p><strong>The question this section answers</strong>: What is the lowest-risk path from curiosity to a real deployment?</p>
<p>We start by measuring failure modes, then design the architecture, then implement with auditable traces and enforcement.</p>

```mermaid
flowchart LR
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;

P_Audit("🧪 Audit"):::p
P_Blueprint("🏗️ Blueprint"):::p
P_Impl("🛠️ Implementation"):::p
O_Deliver("✅ Working system"):::o

P_Audit --> P_Blueprint --> P_Impl --> O_Deliver

P_Home("⬆️ Back to Home overview"):::p

click P_Audit "/services/epistemic-audit/" "Epistemic Audit"
click P_Blueprint "/services/blueprint/" "Architecture Blueprint"
click P_Impl "/services/implementation/" "Implementation"
click P_Home "/#what-we-build" "Back to the main process map"
```

<p>This is the delivery chain: start with <strong>🧪 Audit</strong> to surface failure modes and constraints, convert that into a <strong>🏗️ Blueprint</strong> your team can own, then execute <strong>🛠️ Implementation</strong> until you have a <strong>✅ working system</strong>. Use <strong>⬆️ Back to Home overview</strong> to return to the main process map.</p>
</div>

<div class="landing-section">
  <div class="landing-grid">
    <div class="landing-card">
      <h3>1) Epistemic Audit</h3>
      <p>Reality check: data readiness, failure modes, hallucination risk, concept/ontology gaps, and a staged roadmap.</p>
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
  <p><a class="md-button md-button--primary" href="services/">See services</a></p>
</div>

## Validated where it hurts

<div class="landing-card">
<p><strong>The question this section answers</strong>: Where do these failure modes show up in the real world — and what does “good” look like?</p>
<p>Pick one domain and follow the diagram into a concrete case study.</p>

```mermaid
flowchart TB
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;

P_Choose("🧭 Choose a domain"):::p
I_Bio("🧬 Biomedicine"):::i
I_Fin("💳 Finance"):::i
I_Legal("⚖️ Legal"):::i

P_Choose --> I_Bio
P_Choose --> I_Fin
P_Choose --> I_Legal

P_Home("⬆️ Back to Home overview"):::p

click I_Bio "/case-studies/biomedicine/" "Biomedicine"
click I_Fin "/case-studies/finance/" "Finance"
click I_Legal "/case-studies/legal/" "Legal"
click P_Home "/#what-we-build" "Back to the main process map"
```

<p>Pick your operating context: <strong>🧭 Choose a domain</strong> routes you into <strong>🧬 Biomedicine</strong>, <strong>💳 Finance</strong>, or <strong>⚖️ Legal</strong>. Use <strong>⬆️ Back to Home overview</strong> to return to the main process map.</p>
</div>

<div class="landing-section">
  <div class="landing-grid">
    <div class="landing-card">
      <h3>Biomedicine</h3>
      <p>Mechanism discovery over PDFs + omics: explain <em>why</em> a therapy fails, not just which sentences look similar.</p>
    </div>
    <div class="landing-card">
      <h3>Finance</h3>
      <p>Compliance-by-design: enforce policy constraints so agents cannot approve what regulators would reject.</p>
    </div>
    <div class="landing-card">
      <h3>Legal</h3>
      <p>Contract analysis as a knowledge graph: detect logical conflicts across clauses you’d never spot with keyword search.</p>
    </div>
  </div>
</div>

## Two complementary tracks

<div class="landing-card">
<p><strong>The question this section answers</strong>: Where should you go next — consulting infrastructure, public writing, or an inquiry?</p>
<p>Use the diagram as your navigation: pick the track that matches your intent and click straight into it.</p>

```mermaid
flowchart LR
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;

P_Pick("🧭 Pick your path"):::p
I_Reasoners("🤝 Reasoners"):::i
I_5Reasons("📝 5Reasons"):::i
I_Inquiry("📝 Inquiry"):::i

P_Pick --> I_Reasoners
P_Pick --> I_5Reasons
P_Pick --> I_Inquiry

P_Home("⬆️ Back to Home overview"):::p

click I_Reasoners "/reasoners/" "Reasoners"
click I_5Reasons "/blog/" "Blog"
click I_Inquiry "/home/inquiry/" "Inquiry"
click P_Home "/#what-we-build" "Back to the main process map"
```

<p>This is the “next step” chooser: start at <strong>🧭 Pick your path</strong>, then go to <strong>🤝 Reasoners</strong> if you need infrastructure and governance, <strong>📝 5Reasons</strong> if you want analysis and diagrams, or <strong>📝 Inquiry</strong> if you want a fast fit check. Use <strong>⬆️ Back to Home overview</strong> to return to the main process map.</p>
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
        <a class="md-button" href="about/terms/">Terms of Use</a>
        <a class="md-button" href="services/start/">Request a license</a>
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
