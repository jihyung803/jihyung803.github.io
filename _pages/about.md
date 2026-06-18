---
layout: about
title: About
permalink: /
subtitle: jihyung803 [AT] utexas.edu

profile:
  align: right
  image: profile_photo.jpeg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Austin, TX</p>
    <p>M.S. Computer Science</p>
    <p>The University of Texas at Austin</p>

selected_papers: false
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false

latest_posts:
  enabled: false
---

Hello. I am a computer science researcher who recently completed an M.S. in Computer Science at [The University of Texas at Austin](https://www.utexas.edu/), where I worked as a graduate research assistant in the [Urban Information Lab](https://sites.utexas.edu/uil/).

My work focuses on language models, multimodal understanding, and practical AI systems for public-interest settings. I am especially interested in pragmatic reasoning, self-reinforcing training, safety monitoring, digital twins, and multimodal datasets.

Before UT Austin, I received my B.S. in Computer Science from [The University of Texas at Dallas](https://www.utdallas.edu/), where I worked with the Human Language Technology Research Institute on meme understanding. I have also worked on LLM data generation and validation as an LLM trainer at Turing.

<style>
  .home-news,
  .home-pubs {
    margin-top: 1.7rem;
  }

  .home-news-row {
    display: grid;
    grid-template-columns: 120px minmax(0, 1fr);
    column-gap: 2rem;
    margin-bottom: 1.45rem;
  }

  .home-news-date {
    font-weight: 700;
    white-space: nowrap;
  }

  .home-news-text {
    margin: 0;
  }

  .home-pub-item {
    display: grid;
    grid-template-columns: 88px minmax(0, 1fr);
    column-gap: 1.8rem;
    margin-bottom: 2.4rem;
    align-items: start;
  }

  .home-pub-venue {
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

  .home-pub-title {
    margin: 0 0 0.3rem;
    color: var(--global-text-color);
    font-size: 1.05rem;
    font-weight: 600;
    line-height: 1.35;
  }

  .home-pub-title a {
    color: inherit;
    text-decoration: none;
  }

  .home-pub-title a:hover {
    color: var(--global-theme-color);
    text-decoration: none;
  }

  .home-pub-authors,
  .home-pub-venue-line,
  .home-pub-note {
    margin: 0.15rem 0;
    line-height: 1.35;
  }

  .home-pub-venue-line {
    font-style: italic;
  }

  .home-pub-links {
    margin-top: 0.7rem;
  }

  .home-pub-links .btn {
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

  .home-pub-links .btn:hover {
    border-color: var(--global-theme-color);
    color: var(--global-theme-color);
  }

  @media (max-width: 768px) {
    .home-news-row,
    .home-pub-item {
      grid-template-columns: 1fr;
      row-gap: 0.45rem;
    }
  }
</style>

## News

<div class="home-news">
  <div class="home-news-row">
    <div class="home-news-date">Jun 2026</div>
    <p class="home-news-text"><strong>XR-DT</strong> accepted to <strong>IROS 2026</strong>.</p>
  </div>
  <div class="home-news-row">
    <div class="home-news-date">May 2026</div>
    <p class="home-news-text">Completed my M.S. in Computer Science at the <strong>University of Texas at Austin</strong>.</p>
  </div>
  <div class="home-news-row">
    <div class="home-news-date">Nov 2025</div>
    <p class="home-news-text">Decentralized digital twin accepted to the <strong>AAAI AI4UP Workshop</strong>.</p>
  </div>
  <div class="home-news-row">
    <div class="home-news-date">Sept 2025</div>
    <p class="home-news-text">LLM-Powered Interactive Urban Mobility Simulation accepted to the <strong>NeurIPS Workshop on UrbanAI</strong>.</p>
  </div>
  <div class="home-news-row">
    <div class="home-news-date">Aug 2025</div>
    <p class="home-news-text"><strong>MemeInterpret</strong> accepted to <strong>EMNLP Finding 2025</strong>.</p>
  </div>
  <div class="home-news-row">
    <div class="home-news-date">May 2024</div>
    <p class="home-news-text">Completed my B.S. in Computer Science at the <strong>University of Texas at Dallas</strong>.</p>
  </div>
</div>

## Publications

<div class="home-pubs">
  <div class="home-pub-item">
    <div><span class="home-pub-venue">arXiv</span></div>
    <div>
      <p class="home-pub-title">
        <a href="https://arxiv.org/abs/2606.18624" target="_blank" rel="noopener">
          PRAGREST: Self-Reinforcing Counterfactual Reasoning for Pragmatic Language Understanding
        </a>
      </p>
      <p class="home-pub-authors"><strong>Jihyung Park</strong>, M. Huang, L. Liu, and E. Stangel-Eskin</p>
      <p class="home-pub-venue-line">In submission (EMNLP)</p>
      <p class="home-pub-links">
        <a class="btn btn-sm z-depth-0" href="https://arxiv.org/abs/2606.18624" target="_blank" rel="noopener">arxiv</a>
        <a class="btn btn-sm z-depth-0" href="https://arxiv.org/pdf/2606.18624" target="_blank" rel="noopener">pdf</a>
      </p>
    </div>
  </div>

  <div class="home-pub-item">
    <div><span class="home-pub-venue">arXiv</span></div>
    <div>
      <p class="home-pub-title">
        <a href="https://arxiv.org/abs/2605.23974" target="_blank" rel="noopener">
          AERIC: Anticipatory Hidden-State Monitoring for Implicit Harmful Dialogue
        </a>
      </p>
      <p class="home-pub-authors"><strong>Jihyung Park</strong>, S. Afroogh, and J. Jiao</p>
      <p class="home-pub-venue-line">In submission (Neurips)</p>
      <p class="home-pub-links">
        <a class="btn btn-sm z-depth-0" href="https://arxiv.org/abs/2605.23974" target="_blank" rel="noopener">arxiv</a>
        <a class="btn btn-sm z-depth-0" href="https://arxiv.org/pdf/2605.23974" target="_blank" rel="noopener">pdf</a>
      </p>
    </div>
  </div>

  <div class="home-pub-item">
    <div><span class="home-pub-venue">IROS</span></div>
    <div>
      <p class="home-pub-title">
        <a href="https://arxiv.org/abs/2512.05270" target="_blank" rel="noopener">
          XR-DT: Extended Reality-Enhanced Digital Twin for Safe Motion Planning via Human-Aware Model Predictive Path Integral Control
        </a>
      </p>
      <p class="home-pub-authors">
        T. Wang, J. Byeon, A. Yehia, Y. Xu, <strong>Jihyung Park</strong>, T. Zeng, S. Chen, Z. Wang, J. Jiao, and C. Claudel
      </p>
      <p class="home-pub-venue-line">In IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2026</p>
      <p class="home-pub-links">
        <a class="btn btn-sm z-depth-0" href="https://arxiv.org/abs/2512.05270" target="_blank" rel="noopener">arxiv</a>
        <a class="btn btn-sm z-depth-0" href="https://arxiv.org/pdf/2512.05270v2" target="_blank" rel="noopener">pdf</a>
      </p>
    </div>
  </div>

  <div class="home-pub-item">
    <div><span class="home-pub-venue">AAAI</span></div>
    <div>
      <p class="home-pub-title">
        <a href="https://openreview.net/pdf?id=RYsPyMhgUM" target="_blank" rel="noopener">
          A Decentralized Digital Twin via Crowdsourced Sensing and Browser-Based Edge Computation
        </a>
      </p>
      <p class="home-pub-authors">S. H. Lewis, J. Jiao, Y. Xu, <strong>Jihyung Park</strong>, and C. Phillips</p>
      <p class="home-pub-venue-line">In AAAI Workshop on AI for Urban Planning, 2026</p>
      <p class="home-pub-links">
        <a class="btn btn-sm z-depth-0" href="https://openreview.net/pdf?id=RYsPyMhgUM" target="_blank" rel="noopener">paper</a>
      </p>
    </div>
  </div>

</div>

For the full list, see [Publications]({{ '/publications/' | relative_url }}).

## Work Experience

**Urban Information Lab, UT Austin**<br />
Graduate Research Assistant

**Turing**<br />
LLM Trainer

**Human Language Technology Research Institute, UT Dallas**<br />
Undergraduate Research Assistant

## Education

**The University of Texas at Austin**<br />
M.S. in Computer Science

**The University of Texas at Dallas**<br />
B.S. in Computer Science
