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
				This site has two complementary layers: <strong>Reasoners</strong> (consulting + cognitive infrastructure) and <strong>5Reasons</strong> (public causal writing).
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
<p><strong>The question this page answers</strong>: How does a first-time visitor self-identify, and which mental path leads them to real value (learning, dialogue, or an actionable engagement)?</p>

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
P_Learn("📚 Learn about causality"):::p


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
			<a class="md-button" href="/about/terms/">Terms of Use</a>
			<a class="md-button md-button--primary" href="/services/start/">Request a license</a>
		</p>
	</div>
</div>
