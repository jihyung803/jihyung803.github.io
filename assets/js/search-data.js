// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-resume",
          title: "Resume",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-hidden-state-monitoring-for-safer-dialogue",
        
          title: "hidden-state monitoring for safer dialogue",
        
        description: "A short note on why implicit harmfulness is hard to catch from text alone.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/hidden-state-monitoring/";
          
        },
      },{id: "post-llm-powered-digital-twins-for-urban-mobility",
        
          title: "llm-powered digital twins for urban mobility",
        
        description: "Notes on connecting simulation, traffic data, and AI agents.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/llm-digital-twins/";
          
        },
      },{id: "post-what-makes-meme-understanding-difficult",
        
          title: "what makes meme understanding difficult",
        
        description: "A brief note on captions, background knowledge, and surface messages.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/meme-understanding/";
          
        },
      },{id: "post-building-practical-ai-systems",
        
          title: "building practical ai systems",
        
        description: "A compact note on pipelines, interfaces, and evaluation.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/building-practical-ai-systems/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-memeinterpret-appeared-in-findings-of-emnlp-2025",
          title: 'MemeInterpret appeared in Findings of EMNLP 2025.',
          description: "",
          section: "News",},{id: "news-presented-work-on-llm-powered-digital-twins-for-interactive-urban-mobility-simulation-at-the-neurips-urbanai-workshop",
          title: 'Presented work on LLM-powered digital twins for interactive urban mobility simulation at the...',
          description: "",
          section: "News",},{id: "news-paper-accepted-to-the-aaai-workshop-on-ai-for-urban-planning-a-decentralized-digital-twin-via-crowdsourced-sensing-and-browser-based-edge-computation",
          title: 'Paper accepted to the AAAI Workshop on AI for Urban Planning: “A Decentralized...',
          description: "",
          section: "News",},{id: "projects-aeric",
          title: 'AERIC',
          description: "Monitoring hidden-state shifts for implicit harmful dialogue.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aeric/";
            },},{id: "projects-code-switch-asr",
          title: 'Code Switch ASR',
          description: "Speech recognition experiments for multilingual utterances.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/code-switch-asr/";
            },},{id: "projects-memeinterpret",
          title: 'MemeInterpret',
          description: "Dataset work for multimodal meme understanding.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/memeinterpret/";
            },},{id: "projects-ready2interview",
          title: 'Ready2Interview',
          description: "RAG-based interview practice from user documents.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ready2interview/";
            },},{id: "projects-safemate",
          title: 'SafeMate',
          description: "Emergency response and preparedness assistant chatbot.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/safemate/";
            },},{id: "projects-web-sumo",
          title: 'Web-SUMO',
          description: "Traffic information digital twin with simulation and RL.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/web-sumo/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%69%68%79%75%6E%67%38%30%33@%75%74%65%78%61%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jihyung803", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jihyung-park", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=BZM-K8EAAAAJ", "_blank");
        },
      },];
