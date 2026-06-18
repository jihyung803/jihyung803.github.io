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
    grid-template-columns: 88px minmax(0, 1fr) 72px;
    column-gap: 1.8rem;
    margin-bottom: 3.2rem;
    align-items: start;
  }

  .pub-item.has-thumb {
    grid-template-columns: 88px 112px minmax(0, 1fr) 72px;
  }

  .pub-venue {
    display: inline-block;
    min-width: 62px;
    padding: 0.12rem 0.45rem;
    border-radius: 3px;
    background: var(--global-theme-color);
    color: #fff;
    font-size: 0.78rem;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
    white-space: nowrap;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.18);
  }

  .pub-title {
    margin: 0 0 0.35rem;
    color: var(--global-text-color);
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.35;
  }

  .pub-thumb {
    margin: 0;
  }

  .pub-thumb img {
    width: 108px;
    height: 108px;
    object-fit: cover;
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    background: #fff;
    display: block;
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
    min-width: 52px;
    margin-right: 0.45rem;
    padding: 0.16rem 0.45rem;
    border: 1px solid var(--global-text-color);
    border-radius: 2px;
    color: var(--global-text-color);
    font-size: 0.72rem;
    box-shadow: none;
    font-weight: 600;
    line-height: 1.2;
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

    .pub-item.has-thumb {
      grid-template-columns: 1fr;
    }

    .pub-year {
      order: -1;
      text-align: left;
      font-size: 1.4rem;
    }
  }
---

<div class="pub-list">
  <div class="pub-item has-thumb">
    <div><span class="pub-venue">arXiv</span></div>
    <div class="pub-thumb">
      <img src="{{ '/assets/img/publication_preview/pragrest_thumb.png' | relative_url }}" alt="PRAGREST pipeline overview" />
    </div>
    <div>
      <p class="pub-title">
        <a href="https://arxiv.org/abs/2606.18624" target="_blank" rel="noopener">
          PRAGREST: Self-Reinforcing Counterfactual Reasoning for Pragmatic Language Understanding
        </a>
      </p>
      <p class="pub-authors"><strong>Jihyung Park</strong><sup>*</sup>, M. Huang<sup>*</sup>, L. Liu, and E. Stangel-Eskin</p>
      <p class="pub-venue-line">In submission (EMNLP)</p>
      <p class="pub-links">
        <a class="btn btn-sm z-depth-0" href="https://arxiv.org/abs/2606.18624" target="_blank" rel="noopener">arxiv</a>
        <a class="btn btn-sm z-depth-0" href="https://arxiv.org/pdf/2606.18624" target="_blank" rel="noopener">pdf</a>
      </p>
    </div>
    <div class="pub-year">2026</div>
  </div>

  <div class="pub-item has-thumb">
    <div><span class="pub-venue">arXiv</span></div>
    <div class="pub-thumb">
      <img src="{{ '/assets/img/publication_preview/aeric_thumb.png' | relative_url }}" alt="AERIC framework overview" />
    </div>
    <div>
      <p class="pub-title">
        <a href="https://arxiv.org/abs/2605.23974" target="_blank" rel="noopener">
          AERIC: Anticipatory Hidden-State Monitoring for Implicit Harmful Dialogue
        </a>
      </p>
      <p class="pub-authors"><strong>Jihyung Park</strong>, S. Afroogh, and J. Jiao</p>
      <p class="pub-venue-line">In submission (Neurips)</p>
      <p class="pub-links">
        <a class="btn btn-sm z-depth-0" href="https://arxiv.org/abs/2605.23974" target="_blank" rel="noopener">arxiv</a>
        <a class="btn btn-sm z-depth-0" href="https://arxiv.org/pdf/2605.23974" target="_blank" rel="noopener">pdf</a>
      </p>
    </div>
    <div class="pub-year">2026</div>
  </div>

  <div class="pub-item has-thumb">
    <div><span class="pub-venue">IROS</span></div>
    <div class="pub-thumb">
      <img src="{{ '/assets/img/publication_preview/xrdt_thumb.png' | relative_url }}" alt="XR-DT framework overview" />
    </div>
    <div>
      <p class="pub-title">
        <a href="https://arxiv.org/abs/2512.05270" target="_blank" rel="noopener">
          XR-DT: Extended Reality-Enhanced Digital Twin for Safe Motion Planning via Human-Aware Model Predictive Path Integral Control
        </a>
      </p>
      <p class="pub-authors">
        T. Wang<sup>*</sup>, J. Byeon<sup>*</sup>, A. Yehia<sup>*</sup>, Y. Xu, <strong>Jihyung Park</strong>, T. Zeng, S. Chen, Z. Wang, J. Jiao, and C. Claudel
      </p>
      <p class="pub-venue-line">In IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2026</p>
      <p class="pub-links">
        <a class="btn btn-sm z-depth-0" href="https://arxiv.org/abs/2512.05270" target="_blank" rel="noopener">arxiv</a>
        <a class="btn btn-sm z-depth-0" href="https://arxiv.org/pdf/2512.05270v2" target="_blank" rel="noopener">pdf</a>
      </p>
    </div>
    <div class="pub-year">2026</div>
  </div>

  <div class="pub-item has-thumb">
    <div><span class="pub-venue">AAAI</span></div>
    <div class="pub-thumb">
      <img src="{{ '/assets/img/publication_preview/digital_twin_thumb.png' | relative_url }}" alt="Digital twin system overview" />
    </div>
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

  <div class="pub-item has-thumb">
    <div><span class="pub-venue">NeurIPS</span></div>
    <div class="pub-thumb">
      <img src="{{ '/assets/img/publication_preview/websumo_thumb.png' | relative_url }}" alt="Web-SUMO architecture overview" />
    </div>
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

  <div class="pub-item has-thumb">
    <div><span class="pub-venue">EMNLP</span></div>
    <div class="pub-thumb">
      <img src="{{ '/assets/img/publication_preview/memeinterpret_thumb.png' | relative_url }}" alt="MemeInterpret examples" />
    </div>
    <div>
      <p class="pub-title">
        <a href="https://aclanthology.org/2025.findings-emnlp.871/" target="_blank" rel="noopener">
          MemeInterpret: Towards an All-in-one Dataset for Meme Understanding
        </a>
      </p>
      <p class="pub-authors">
        J. Park<sup>*</sup>, K. P. N. Nguyen<sup>*</sup>, <strong>Jihyung Park</strong>, M. Kim, J. Lee, J. W. Choi, K. Ganta, P. A. Kasu, R.
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

</div>
