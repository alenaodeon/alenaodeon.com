---
company: "Cybus"
role: "AI Product Manager"
period: "Present"
location: "Munich, Germany"
url: "https://www.cybus.io"
summary: "Leading the agentic-AI initiative on Connectware, an industrial data platform that connects factory equipment to IT systems for major German industrial players."
highlights:
  - "Shipped Connectware GPT 0→1: the platform's LLM assistant, now in public beta."
  - "Built the Cybus MCP server 0→1: an API surface that lets AI agents work with millions of live industrial data points."
  - "Own AI trust end to end: guardrails, governance, and output quality for every AI feature."
tags: ["LLM products", "MCP", "Agentic workflows", "AI governance", "Industrial IoT", "0→1"]
featured: true
order: 10
---

## Context

Connectware runs in real factories. It moves millions of live data points between machines and business systems, and the customers who rely on it are large German industrial companies. That sets the bar for any AI feature: an answer that is *probably* right is not shippable.

## What I owned

The agentic-AI initiative, from the first conversation about whether it made sense to the public beta. That includes problem framing and discovery with customers, the product definition, working day to day with engineering, and the governance work that decides what the AI is allowed to do and how we know its output is good.

## Connectware GPT

An LLM assistant inside the platform that helps users understand, configure and troubleshoot their industrial data flows.

- Took it from concept to a working 0→1 release and into public beta.
- Defined the evaluation approach for output quality, so that "does it work?" has a measurable answer rather than a demo.
- Designed the guardrails: what the assistant may access, what it may change, and how it explains itself.

## Cybus MCP server

A Model Context Protocol server that exposes Connectware's capabilities and live data to AI agents in a controlled way.

- Built 0→1 as an API surface for agents rather than a chat feature, so that customers' own agents and tools can work with factory data.
- Owned the permission and governance model: which data an agent can see, which actions it can take, and how that is audited.

## What I learned

Trust is the product. Shipping the model was the easy part; deciding what it must never do, and proving it, is where the real product work was.
