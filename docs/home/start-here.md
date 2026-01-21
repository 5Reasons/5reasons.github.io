---
title: "Start Here"
description: "A quick orientation to the Reasoners × 5Reasons site: what’s where, how to use the models, and how to pick your first page."
---

--8<-- "includes/quicknav.html"

# Start Here

<div class="landing-hero">
	<div class="landing-hero__grid">
		<div>
			<p class="landing-kicker">Your first 10 minutes</p>
			<h2 class="landing-title">Pick a path. Get to signal fast.</h2>
			<p class="landing-subtitle">
				This site has two complementary layers: <strong>Reasoners</strong> (consulting + cognitive infrastructure) and <strong>5Reasons</strong> (writing about causal AI).
				Use this page to choose the fastest route based on your role.
			</p>
			<div class="landing-cta">
				<a class="md-button md-button--primary" href="/services/start/">Start a conversation</a>
				<a class="md-button" href="/methodology/">Open the methodology</a>
				<a class="md-button" href="/case-studies/">See case studies</a>
			</div>
		</div>
	</div>
</div>

## Choose your role

<div class="landing-card">
<p>How does a first-time visitor self-identify, and which mental path leads them to real value?</p>

```mermaid
flowchart TB
%% Styles (brModel Standard)
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef s fill:#FFB3B3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef r fill:#FFFFB3,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;

I_Home("Back to home"):::i
S_Visitor("👤 Visitor"):::s
P_Ident{"Choose your role"}:::p

S_Buyer("🧑‍💼 Buyer / operator"):::s
S_Eng("🧑‍💻 Engineer / architect"):::s
S_Read("🧑‍🔬 Reader / analyst"):::s

I_Home --> S_Visitor
S_Visitor --> P_Ident
P_Ident --> S_Buyer
P_Ident --> S_Eng
P_Ident --> S_Read

click S_Buyer "/home/start-here/#buyer-operator" "Jump to Buyer path"
click S_Eng "/home/start-here/#engineer-architect" "Jump to Engineer path"
click S_Read "/home/start-here/#reader-analyst" "Jump to Reader path"
click I_Home "/" "Home"
```
</div>

## Buyer / operator

<div class="landing-card" id="buyer-operator">
<p><strong>The causal question</strong>: If your job is to own risk and outcomes, what sequence of pages turns ambiguity into a safe next step?</p>

```mermaid
flowchart TB
%% Styles (brModel Standard)
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef s fill:#FFB3B3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef r fill:#FFFFB3,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;

S_Buyer("🧑‍💼 Buyer / operator"):::s
I_Problem(["🎯 Decision + constraints + unacceptable failure"]):::i

P_Services("🧰 Services"):::p
P_Case("🧾 Case studies"):::p
R_Risk["🧾 Risk picture + staged roadmap"]:::r

P_Start("📞 Start a conversation"):::p
O_Next("✅ Clear lowest-risk next step"):::o

S_Buyer --> I_Problem --> P_Services --> P_Case --> R_Risk --> P_Start --> O_Next

click P_Services "/services/" "Services"
click P_Case "/case-studies/" "Case studies"
click P_Start "/services/start/" "Start a conversation"
```

<p>For an operator, the value is not “more information” — it’s <strong>risk reduction</strong>. You start from the decision you must make, use <strong>🧰 services</strong> and <strong>🧾 case studies</strong> to surface failure modes, and convert that into a <strong>🧾 risk picture + roadmap</strong> before you invest further.</p>
</div>

## Engineer / architect

<div class="landing-card" id="engineer-architect">
<p><strong>The causal question</strong>: If you build systems, what path gets you from “interesting idea” to a concrete architecture you can implement and govern?</p>

```mermaid
flowchart TB
%% Styles (brModel Standard)
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef s fill:#FFB3B3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef r fill:#FFFFB3,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;

S_Eng("🧑‍💻 Engineer / architect"):::s
I_Stack(["🧩 What must be enforced and why?"]):::i

P_Prim("📐 Methodology"):::p
P_Traces("🧭 CausalGraphRAG"):::p
P_Constr("🔒 Constraints & SHACL"):::p

R_Design["📐 Architecture primitives + enforcement model"]:::r
O_Build("✅ Buildable, auditable system design"):::o

S_Eng --> I_Stack --> P_Prim --> P_Traces --> P_Constr --> R_Design --> O_Build

click P_Prim "/methodology/" "Methodology"
click P_Traces "/methodology/causalgraphrag/" "CausalGraphRAG"
click P_Constr "/methodology/constraints/" "Constraints & SHACL"
```

<p>For an engineer, the causal pivot is simple: <strong>constraints + provenance + traces</strong> turn an LLM from “chat” into a system that can be <strong>governed</strong>. This path gives you the primitives you need to reason about correctness, not just capability.</p>
</div>

## Reader / analyst

<div class="landing-card" id="reader-analyst">
<p><strong>The causal question</strong>: If you’re learning, what path gives you reusable mental models (not just opinions) as fast as possible?</p>

```mermaid
flowchart TB
%% Styles (brModel Standard)
classDef i fill:#D3D3D3,stroke-width:0px,color:#000;
classDef s fill:#FFB3B3,stroke-width:0px,color:#000;
classDef p fill:#B3D9FF,stroke-width:0px,color:#000;
classDef r fill:#FFFFB3,stroke-width:0px,color:#000;
classDef o fill:#C1F0C1,stroke-width:0px,color:#000;

S_Read("🧑‍🔬 Reader / analyst"):::s
I_Why(["❓ What causes failure and what fixes it?"]):::i

P_ReadHow("📝 How to read"):::p
P_Blog("📰 Blog"):::p
P_Topics("🏷️ Topics"):::p

R_Models["🧾 Causal models + diagrams + counterfactuals"]:::r
O_Transfer("✅ Transferable frameworks"):::o

S_Read --> I_Why --> P_ReadHow --> P_Blog --> P_Topics --> R_Models --> O_Transfer

click P_ReadHow "/blog/how-to-read/" "How to Read Posts"
click P_Blog "/blog/" "Blog"
click P_Topics "/blog/topics/" "Topics"
```

<p>For analysts, the output is a <strong>model you can argue with</strong>: explicit mechanisms, counterfactual claims, and diagrams that connect evidence to decisions. That’s the fastest way to build signal without getting trapped in “AI vibes”.</p>
</div>

<div class="landing-section">
	<div class="landing-grid">
		<div class="landing-card">
			<h3>Buyer / operator</h3>
			<p>If you’re evaluating fit, risk, and outcomes — start with services and one real case.</p>
			<p>
				<a class="md-button md-button--primary" href="/services/">Services</a>
				<a class="md-button" href="/case-studies/">Case studies</a>
			</p>
		</div>
		<div class="landing-card">
			<h3>Engineer / architect</h3>
			<p>If you care about how it works — start with primitives, traces, and constraints.</p>
			<p>
				<a class="md-button md-button--primary" href="/methodology/">Methodology</a>
				<a class="md-button" href="/philosophy/">Philosophy</a>
			</p>
		</div>
		<div class="landing-card">
			<h3>Reader / analyst</h3>
			<p>If you want causal writing and reusable diagrams — start with the blog index and diagram gallery.</p>
			<p>
				<a class="md-button md-button--primary" href="/blog/">Blog</a>
			</p>
		</div>
	</div>
</div>

## Three recommended “reading paths”

<div class="landing-section">
	<div class="landing-grid">
		<div class="landing-card">
			<h3>Path A: evaluate business fit (30 minutes)</h3>
			<p><strong>Goal:</strong> decide if this is relevant for your domain and risk posture.</p>
			<ol>
				<li><a href="/services/">Services</a> (how we engage)</li>
				<li><a href="/case-studies/">Case Studies</a> (mechanisms in action)</li>
				<li><a href="/services/start/">Start a Conversation</a> (minimal inputs we need)</li>
			</ol>
		</div>
		<div class="landing-card">
			<h3>Path B: understand the core (45–60 minutes)</h3>
			<p><strong>Goal:</strong> grasp the causal memory + governance stack behind “glass-box AI”.</p>
			<ol>
				<li><a href="/methodology/">Methodology overview</a></li>
				<li><a href="/methodology/causalgraphrag/">CausalGraphRAG</a> (how traces work)</li>
				<li><a href="/methodology/constraints/">Constraints &amp; SHACL</a> (enforcement)</li>
			</ol>
		</div>
		<div class="landing-card">
			<h3>Path C: learn by example (20–30 minutes)</h3>
			<p><strong>Goal:</strong> see how we write models you can argue with and operationalize.</p>
			<ol>
				<li><a href="/blog/how-to-read/">How to Read Posts</a></li>
				<li><a href="/blog/">Blog index</a> (pick one post)</li>
			</ol>
		</div>
	</div>
</div>

## The default stance (non-negotiable)

<div class="landing-section">
	<div class="landing-callout">
		<p><strong>When evidence is missing, a system should abstain rather than improvise.</strong></p>
		<p class="landing-mini">That single design choice drives everything downstream: architecture, evaluation, governance, product UX, and compliance posture.</p>
	</div>
</div>

## Licensing note

<div class="landing-section">
	<div class="landing-card">
		<p><strong>Reading is public.</strong> Reuse for commercial or research purposes requires a written license.</p>
		<p>
			<a class="md-button" href="/reasoners/terms/">Terms of Use</a>
			<a class="md-button md-button--primary" href="/services/start/">Request a license</a>
		</p>
	</div>
</div>
