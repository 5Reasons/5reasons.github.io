---
title: "Insurance: Claims & Underwriting Under Constraints"
description: "How constraint-gated reasoning and traceable evidence reduce claims leakage and underwriting risk—without turning policy into prompt text."
---

<!-- markdownlint-disable MD033 MD025 -->

--8<-- "includes/quicknav.html"

# Insurance: Claims & Underwriting Under Constraints

<div class="landing-hero">
  <div class="landing-hero__grid">
    <div>
      <p class="landing-kicker">Case study → insurance</p>
      <h2 class="landing-title">Insurance decisions are governed actions, not “smart guesses”.</h2>
      <p class="landing-subtitle">
        Claims and underwriting workflows combine policy rules, evidence, exceptions, and legal constraints.
        A decision-grade system must be able to <strong>prove why</strong> a decision was allowed — or refuse.
      </p>
      <div class="landing-cta">
        <a class="md-button md-button--primary" href="/services/start/">Start a Conversation</a>
        <a class="md-button" href="/methodology/constraints/">Constraints &amp; SHACL</a>
        <a class="md-button" href="/services/epistemic-audit/">Epistemic Audit</a>
      </div>
    </div>
  </div>
</div>

## The question

<div class="landing-section">
  <div class="landing-card">
    <p>
      Can AI assist claims and underwriting decisions while enforcing policy, fraud controls, and regulatory constraints —
      and producing an audit-ready trail?
    </p>
  </div>
</div>

## Failure modes to avoid

<div class="landing-section">
  <div class="landing-grid">
    <div class="landing-card"><h3>Policy as prose</h3><p>Policies contain non-local exceptions and precedence rules that text summaries routinely flatten.</p></div>
    <div class="landing-card"><h3>Evidence leakage</h3><p>Approvals without defensible evidence paths lead to leakage, disputes, and adverse selection.</p></div>
    <div class="landing-card"><h3>Fraud blind spots</h3><p>Fraud signals are multi-source and relational; similarity search misses structured contradictions.</p></div>
    <div class="landing-card"><h3>Unbounded automation</h3><p>High-risk actions must be constrained and sometimes escalated, not “handled end-to-end”.</p></div>
    <div class="landing-card"><h3>Coverage misclassification</h3><p>Small wording differences can flip eligibility; mistakes compound into denials, complaints, and regulatory risk.</p></div>
    <div class="landing-card"><h3>Adversarial behavior</h3><p>Claimants and intermediaries adapt; systems need controls against gaming, not just better summaries.</p></div>
  </div>
</div>

## What changes with constraint-gated reasoning

<div class="landing-section">
  <div class="landing-callout">
    <p><strong>The model can propose; the system decides what is allowed.</strong></p>
    <p class="landing-mini">Every step is validated against policy shapes, required evidence, and role permissions.</p>
  </div>

```mermaid
flowchart TB
%% Styles (brModel Standard)
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef r fill:#FFFFB3,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;
classDef s fill:#FFB3B3,stroke-width:0px,color:#000;

I_C(["📥 Claim / quote request"]):::i
I_Role(["👤 Role + authority limits"]):::i

R_Pol(["📜 Policy + endorsements<br>(versioned)"]):::r
R_Ev(["📎 Evidence set<br>(docs, telemetry, notes)"]):::r
R_Hist(["🧠 Prior claims + exposure history"]):::r
R_Reg(["⚖️ Regulatory constraints"]):::r

P_Norm("🧼 Normalize + de-duplicate sources"):::p
P_Ent("🕸️ Resolve entities + relationships"):::p
R_Ent(["🧾 Entity graph<br>(people, assets, events)"]):::r

P_Find("🔎 Derive findings"):::p
R_Find(["📌 Findings<br>(what happened?)"]):::r

G_Ev{"Evidence sufficient?"}:::s
S_Req(["🛑 Request missing evidence"]):::s

P_Cov("📐 Evaluate coverage + exclusions"):::p
G_Elig{"Coverage eligible?"}:::s
S_Deny(["🛑 Deny / decline<br>(with policy triggers)"]):::s

P_Fraud("🕵️ Fraud signal evaluation"):::p
G_Fraud{"Fraud risk high?"}:::s
S_SIU(["🛑 Escalate to SIU / investigation"]):::s

P_Gate("🔒 Constraint gate"):::p
G_Auth{"Authorized?"}:::s
G_OK{"Gates pass?"}:::s

O_OK(["✅ Approve / pay / bind"]):::o
S_Esc(["🛑 Escalate to adjuster / underwriter"]):::s
R_T(["🧾 Decision trace bundle<br>(evidence + rules + rationale)"]):::r
O_Pack(["✅ Audit-ready decision pack"]):::o

I_C --> P_Norm
R_Pol --> P_Norm
R_Ev --> P_Norm
R_Hist --> P_Norm
R_Reg --> P_Norm

P_Norm --> P_Ent --> R_Ent --> P_Find --> R_Find --> G_Ev
G_Ev -->|"no"| S_Req --> R_T
G_Ev -->|"yes"| P_Cov --> G_Elig

G_Elig -->|"no"| S_Deny --> R_T
G_Elig -->|"yes"| P_Fraud --> G_Fraud

G_Fraud -->|"yes"| S_SIU --> R_T
G_Fraud -->|"no"| P_Gate --> G_Auth

I_Role --> G_Auth
G_Auth -->|"no"| S_Esc --> R_T
G_Auth -->|"yes"| G_OK

G_OK -->|"yes"| O_OK --> R_T --> O_Pack
G_OK -->|"no"| S_Esc --> R_T --> O_Pack

%% Clickable nodes
click P_Gate "/methodology/constraints/" "Constraints & SHACL"
```

<p>🧾 “Decision-grade” means the system creates explicit artifacts (policy versions, entity graph, findings) and then forces decisions through gates: <strong>evidence sufficiency</strong>, <strong>coverage eligibility</strong>, <strong>fraud risk</strong>, and <strong>authority</strong>. Every outcome emits a trace bundle — approvals included.</p>

</div>

## Diagram: typical causal/evidence path (illustrative)

<div class="landing-section">

```mermaid
flowchart TB
%% Styles (brModel Standard)
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef r fill:#FFFFB3,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;
classDef s fill:#FFB3B3,stroke-width:0px,color:#000;

R_EV1(["📎 Evidence<br>(documents)"]):::r
R_EV2(["📎 Evidence<br>(external data)"]):::r
R_EV3(["📎 Evidence<br>(internal history)"]):::r

P_F("🔎 Findings"):::p
R_F(["📌 Finding set<br>(facts + uncertainty)"]):::r

P_C("🧭 Causal hypotheses"):::p
G_Alt{"Alternative explanation?"}:::s
P_Dis("🧪 Disambiguate"):::p

P_R("⚠️ Risk factors"):::p
R_R(["📈 Risk profile"]):::r

P_D("⚖️ Decision impact"):::p
G_CF{"Counterfactual stable?"}:::s
S_Ask(["🛑 Request missing info"]):::s

R_T(["🧾 Trace object<br>(evidence → findings → risk)"]):::r
O_Out(["✅ Decision-ready rationale"]):::o

R_EV1 --> P_F
R_EV2 --> P_F
R_EV3 --> P_F

P_F --> R_F --> P_C --> G_Alt
G_Alt -->|"yes"| P_Dis --> P_R
G_Alt -->|"no"| P_R

P_R --> R_R --> P_D --> G_CF
G_CF -->|"no"| S_Ask --> R_T --> O_Out
G_CF -->|"yes"| R_T --> O_Out
```

<p>🧭 This is the accountability unit: the system must show how evidence produced findings, how findings produced risk factors, and where uncertainty remains. If alternative explanations exist or counterfactuals aren’t stable, the system asks for data instead of “closing the loop” with confidence.</p>

</div>

## Diagram: fraud triage gates (when to escalate)

<div class="landing-section">

```mermaid
flowchart TB
%% Styles (brModel Standard)
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef r fill:#FFFFB3,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;
classDef s fill:#FFB3B3,stroke-width:0px,color:#000;

I_Cl(["📥 Claim intake"]):::i
R_Src(["📎 Sources<br>(docs, call notes, photos)"]):::r
P_Link("🕸️ Link entities<br>(people, vehicles, addresses)"):::p
R_G(["🕸️ Relationship graph"]):::r

P_Sig("🔎 Derive fraud signals"):::p
R_Sig(["🔎 Signal set<br>(anomalies, contradictions)"]):::r

G_Ev{"Evidence sufficient?"}:::s
S_Req(["🛑 Request additional documents"]):::s

G_Net{"Network risk high?"}:::s
G_Exp{"Exposure high?"}:::s

O_Pay(["✅ Pay / approve"]):::o
O_Hold(["⏸️ Hold + verify"]):::o
S_Esc(["🛑 Escalate to SIU"]):::s
R_Tr(["🧾 Trace bundle<br>(signals + triggers)"]):::r

I_Cl --> P_Link
R_Src --> P_Link
P_Link --> R_G --> P_Sig --> R_Sig --> G_Ev

G_Ev -->|"no"| S_Req --> O_Hold --> R_Tr
G_Ev -->|"yes"| G_Net

G_Net -->|"yes"| G_Exp
G_Net -->|"no"| G_Exp

G_Exp -->|"yes"| S_Esc --> R_Tr
G_Exp -->|"no"| O_Pay --> R_Tr
```

<p>🚦 Fraud triage is a gated system: link entities into a relationship graph, derive contradiction/anomaly signals, then gate on evidence sufficiency, network risk, and exposure. The safe default is to hold or escalate — and record the triggers in a trace bundle.</p>

</div>

## Outputs

<div class="landing-section">
  <div class="landing-grid">
    <div class="landing-card"><h3>Audit-ready traces</h3><p>Decision, evidence, rules applied, and policy violations (if any).</p></div>
    <div class="landing-card"><h3>Deterministic abstention</h3><p>If required evidence is missing, the system refuses and states what must be provided.</p></div>
    <div class="landing-card"><h3>Fraud investigation graph</h3><p>Relational signals and contradictions surfaced as navigable structures.</p></div>
    <div class="landing-card"><h3>Governable automation</h3><p>Explicit boundaries for what can be auto-approved vs what must escalate.</p></div>
    <div class="landing-card"><h3>Dispute-ready justification</h3><p>When challenged, the system can point to the exact evidence path and policy rule that drove the outcome.</p></div>
    <div class="landing-card"><h3>Leakage reduction</h3><p>Fewer unforced errors from missing documentation, inconsistent evidence, or bypassed exclusions and limits.</p></div>
  </div>
</div>

## Next steps

<div class="landing-section">
  <div class="landing-card">
    <p>
      <a class="md-button md-button--primary" href="/services/epistemic-audit/">Epistemic Audit</a>
      <a class="md-button" href="/services/blueprint/">Architecture Blueprint</a>
    </p>
  </div>
</div>
