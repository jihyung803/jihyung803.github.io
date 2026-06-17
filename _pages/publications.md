---
layout: page
permalink: /publications/
title: Publications
description:
nav: true
nav_order: 1
_styles: >
  .pub-list {
    border-top: 1px solid var(--global-divider-color);
    margin-top: 2.5rem;
    padding-top: 2rem;
  }

  .pub-item {
    display: grid;
    grid-template-columns: 120px minmax(0, 1fr) 90px;
    column-gap: 2.5rem;
    margin-bottom: 3.2rem;
    align-items: start;
  }

  .pub-venue {
    display: inline-block;
    min-width: 78px;
    padding: 0.18rem 0.75rem;
    border-radius: 3px;
    background: var(--global-theme-color);
    color: #fff;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.18);
  }

  .pub-title {
    margin: 0 0 0.35rem;
    color: var(--global-text-color);
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.35;
  }

  .pub-title a {
    color: inherit;
    text-decoration: none;
  }

  .pub-title a:hover {
    color: var(--global-theme-color);
    text-decoration: none;
  }

  .pub-authors,
  .pub-venue-line,
  .pub-note {
    margin: 0.2rem 0;
    font-size: 1.05rem;
    line-height: 1.35;
  }

  .pub-venue-line {
    font-style: italic;
  }

  .pub-links {
    margin-top: 0.8rem;
  }

  .pub-links .btn {
    min-width: 76px;
    margin-right: 0.75rem;
    border: 1px solid var(--global-text-color);
    border-radius: 2px;
    color: var(--global-text-color);
    box-shadow: none;
    font-weight: 600;
    text-transform: uppercase;
  }

  .pub-links .btn:hover {
    border-color: var(--global-theme-color);
    color: var(--global-theme-color);
  }

  .pub-year {
    color: var(--global-divider-color);
    font-size: 2.6rem;
    font-weight: 300;
    line-height: 1;
    text-align: right;
  }

  @media (max-width: 768px) {
    .pub-item {
      grid-template-columns: 1fr;
      row-gap: 0.7rem;
      margin-bottom: 2.4rem;
    }

    .pub-year {
      order: -1;
      text-align: left;
      font-size: 1.4rem;
    }
  }
---

<div class="pub-list">
  <div class="pub-item">
    <div><span class="pub-venue">AAAI</span></div>
    <div>
      <p class="pub-title">
        <a href="https://openreview.net/pdf?id=RYsPyMhgUM" target="_blank" rel="noopener">
          A Decentralized Digital Twin via Crowdsourced Sensing and Browser-Based Edge Computation
        </a>
      </p>
      <p class="pub-authors">S. H. Lewis, J. Jiao, Y. Xu, <strong>Jihyung Park</strong>, and C. Phillips</p>
      <p class="pub-venue-line">In AAAI Workshop on AI for Urban Planning, 2026</p>
      <p class="pub-links">
        <a class="btn btn-sm z-depth-0" href="https://openreview.net/pdf?id=RYsPyMhgUM" target="_blank" rel="noopener">paper</a>
      </p>
    </div>
    <div class="pub-year">2026</div>
  </div>

  <div class="pub-item">
    <div><span class="pub-venue">arXiv</span></div>
    <div>
      <p class="pub-title">
        <a href="https://arxiv.org/abs/2605.23974" target="_blank" rel="noopener">
          AERIC: Anticipatory Hidden-State Monitoring for Implicit Harmful Dialogue
        </a>
      </p>
      <p class="pub-authors"><strong>Jihyung Park</strong>, S. Afroogh, and J. Jiao</p>
      <p class="pub-venue-line">arXiv preprint, 2026</p>
      <p class="pub-links">
        <a class="btn btn-sm z-depth-0" href="https://arxiv.org/abs/2605.23974" target="_blank" rel="noopener">arxiv</a>
        <a class="btn btn-sm z-depth-0" href="https://arxiv.org/pdf/2605.23974" target="_blank" rel="noopener">pdf</a>
      </p>
    </div>
    <div class="pub-year">2026</div>
  </div>

  <div class="pub-item">
    <div><span class="pub-venue">EMNLP</span></div>
    <div>
      <p class="pub-title">
        <a href="https://aclanthology.org/2025.findings-emnlp.871/" target="_blank" rel="noopener">
          MemeInterpret: Towards an All-in-one Dataset for Meme Understanding
        </a>
      </p>
      <p class="pub-authors">
        J. Park, K. P. N. Nguyen, <strong>Jihyung Park</strong>, M. Kim, J. Lee, J. W. Choi, K. Ganta, P. A. Kasu, R.
        Sarakinti, S. Vipperla, S. Sathanapalli, N. Vaghani, and V. Ng
      </p>
      <p class="pub-venue-line">In Findings of EMNLP, 2025</p>
      <p class="pub-links">
        <a class="btn btn-sm z-depth-0" href="https://aclanthology.org/2025.findings-emnlp.871/" target="_blank" rel="noopener">acl</a>
        <a class="btn btn-sm z-depth-0" href="https://aclanthology.org/2025.findings-emnlp.871.pdf" target="_blank" rel="noopener">pdf</a>
        <a class="btn btn-sm z-depth-0" href="https://github.com/npnkhoi/MemeInterpret" target="_blank" rel="noopener">code</a>
      </p>
    </div>
    <div class="pub-year">2025</div>
  </div>

  <div class="pub-item">
    <div><span class="pub-venue">NeurIPS</span></div>
    <div>
      <p class="pub-title">
        <a href="https://openreview.net/pdf?id=vEZtmnqmtO" target="_blank" rel="noopener">
          LLM-Powered Digital Twins for Interactive Urban Mobility Simulation: Integrating SUMO with AI Agents
        </a>
      </p>
      <p class="pub-authors">Y. Xu, <strong>Jihyung Park</strong>, and J. Jiao</p>
      <p class="pub-venue-line">In NeurIPS Workshop on UrbanAI, 2025</p>
      <p class="pub-links">
        <a class="btn btn-sm z-depth-0" href="https://openreview.net/pdf?id=vEZtmnqmtO" target="_blank" rel="noopener">paper</a>
      </p>
    </div>
    <div class="pub-year">2025</div>
  </div>

  <div class="pub-item">
    <div><span class="pub-venue">Manuscript</span></div>
    <div>
      <p class="pub-title">PragReST: Self-Reinforcing Counterfactual Reasoning for Pragmatic Language Understanding</p>
      <p class="pub-authors"><strong>Jihyung Park</strong>, M. Huang, L. Liu, and E. Stangel-Eskin</p>
      <p class="pub-venue-line">In submission</p>
    </div>
    <div class="pub-year">2026</div>
  </div>
</div>
