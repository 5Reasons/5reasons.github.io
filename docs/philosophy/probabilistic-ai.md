---
title: "Why Probabilistic AI Fails"
description: "Why next-token prediction breaks in high-stakes domains, why RAG is not enough, and what ‘glass-box’ systems change about reliability."
---

--8<-- "includes/quicknav.html"

# Why Probabilistic AI Fails (in High-Stakes Work)

<div class="landing-hero">
	<div class="landing-hero__grid">
		<div>
			<p class="landing-kicker">Failure mechanics</p>
			<h2 class="landing-title">Plausibility is not epistemic validity.</h2>
			<p class="landing-subtitle">
				Next-token prediction is a powerful compression engine. In high-stakes work, its core risk is not “inaccuracy” —
				it’s <strong>unverifiable confidence</strong>.
			</p>
			<div class="landing-cta">
				<a class="md-button md-button--primary" href="/methodology/constraints/">Constraints &amp; SHACL</a>
				<a class="md-button" href="/philosophy/three-laws/">The three laws</a>
				<a class="md-button" href="/reasoners/governance/">Governance approach</a>
			</div>
		</div>
	</div>
</div>

<div class="landing-section">
	<h2>The illusion</h2>
	<div class="landing-callout">
		<p><strong>LLMs are excellent at generating text that resembles correct answers.</strong> But resemblance is not the same as truth.</p>
		<p class="landing-mini">In practice, fluency can mask missing sources, missing constraints, and missing causal structure.</p>
	</div>
</div>

<div class="landing-section">
	<div class="landing-card">
		<img class="glightbox" src="/assets/img/br-008768.png" alt="Illustration of the illusion: plausible text can appear decision-grade without epistemic validity." />
		<p class="landing-mini"><strong>Click to enlarge:</strong> a concrete example of how “plausible” can look like “valid”.</p>
	</div>
</div>

<div class="landing-section">
	<h2>Why RAG helps — and why it still fails</h2>
	<div class="landing-grid">
		<div class="landing-card">
			<h3>Causal questions</h3>
			<p>“Why did X happen?” requires mechanisms and context, not just relevant passages.</p>
		</div>
		<div class="landing-card">
			<h3>Exceptions and footnotes</h3>
			<p>Policies and regulations live in edge cases. Retrieval often misses the clause that flips the decision.</p>
		</div>
		<div class="landing-card">
			<h3>Cross-document constraints</h3>
			<p>“This is allowed only if A and B and not C” is a constraint problem. Text similarity doesn’t enforce it.</p>
		</div>
	</div>
</div>

<div class="landing-section">
	<h2>What changes with glass-box systems</h2>
	<div class="landing-grid">
		<div class="landing-card">
			<h3>Traceable path</h3>
			<p>The system shows the reasoning path it took — not just a final answer.</p>
		</div>
		<div class="landing-card">
			<h3>Explicit sources</h3>
			<p>Every claim has provenance (where it came from, why it was selected).</p>
		</div>
		<div class="landing-card">
			<h3>Enforced constraints</h3>
			<p>Constraints are gates. If a constraint fails, the system refuses or escalates.</p>
		</div>
	</div>
	<p class="landing-mini">If the system can’t provide path + sources + constraints, it must abstain. This is not a UX preference — it’s an architectural constraint.</p>
</div>

<div class="landing-section">
	<h2>Diagram: plausible text vs decision-grade pipeline</h2>

```mermaid
flowchart TB;
	U["User request"] --> L["LLM output"];
	L --> P["Plausible answer"];
	P --> R1["Risk: confident fabrication"];

	U --> G["Governed system"];
	G --> C["Constraint checks"];
	C -->|"Fail"| A["Abstain / escalate"];
	C -->|"Pass"| E["Evidence retrieval"];
	E --> T["Trace + provenance"];
	T --> O["Answer + audit trail"];
```

</div>

<div class="landing-section">
	<h2>Diagram: where RAG fails</h2>

```mermaid
graph TD;
	R["Retrieval" ] --> S["Selected snippets"];
	S --> L["LLM synthesis"];
	X["Cross-doc constraints" ] -.->|"often missing"| L;
	E["Edge-case clause" ] -.->|"often missed"| S;
	M["Mechanism / causal model" ] -.->|"not guaranteed"| L;
	L --> O["Output" ];
```

</div>
