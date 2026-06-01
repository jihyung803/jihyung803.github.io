---
layout: post
title: hidden-state monitoring for safer dialogue
date: 2026-05-20 09:00:00
description: A short note on why implicit harmfulness is hard to catch from text alone.
tags: llm systems
categories: research
featured: true
---

Some harmful conversations do not look obviously harmful at the surface level. A reply can seem normal while the conversation is gradually moving toward a risky goal.

That is the motivation behind AERIC. Instead of only asking whether the current text is unsafe, the project looks at whether internal model behavior changes as a conversation develops. The research question is simple: can hidden-state shifts help detect implicit harmfulness earlier than output-only classifiers?

The current direction is to compare conversation-level risk signals across turns, then check whether those signals align with human judgments of escalation.
