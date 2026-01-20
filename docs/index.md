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
<p><strong>The question this section answers</strong>: What are the three building blocks of a decision-grade AI system — and where should you start reading?</p>
<p>If you only read three pages, follow the diagram: start with services (why), then methodology (how), then constraints (what stops failures).</p>

```mermaid
flowchart TB
%% Styles (brModel Standard)
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;

P_Start("🧭 Start"):::p
I_Services("🧰 Services"):::i
I_Method("📐 Methodology"):::i
I_Constraints("🧱 Constraints"):::i
O_System("✅ Decision-grade system"):::o

P_Start --> I_Services --> I_Method --> I_Constraints --> O_System

click I_Services "/services/" "Services"
click I_Method "/methodology/" "Methodology"
click I_Constraints "/methodology/constraints/" "Constraints & SHACL"
```
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

click P_Gap "/methodology/constraints/" "Constraints & SHACL"
click P_Risk "/philosophy/probabilistic-ai/" "Why Probabilistic AI Fails"
```
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

click P_Audit "/services/epistemic-audit/" "Epistemic Audit"
click P_Blueprint "/services/blueprint/" "Architecture Blueprint"
click P_Impl "/services/implementation/" "Implementation"
```
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

click I_Bio "/case-studies/biomedicine/" "Biomedicine"
click I_Fin "/case-studies/finance/" "Finance"
click I_Legal "/case-studies/legal/" "Legal"
```
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

click I_Reasoners "/reasoners/" "Reasoners"
click I_5Reasons "/blog/" "Blog"
click I_Inquiry "/home/inquiry/" "Inquiry"
```
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
