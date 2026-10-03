export type ArticleSection = {
  heading: string;
  paragraphs: string[];
};

export type ArticleSource = {
  label: string;
  url: string;
};

export type Post = {
  slug: string;
  title: string;
  deck: string;
  category: string;
  date: string;
  isoDate: string;
  updatedDate?: string;
  correction?: string;
  readTime: string;
  thesis: string;
  sections: ArticleSection[];
  sources: ArticleSource[];
};

const articles: Post[] = [
  {
    slug: "elevenlabs-voice-becomes-interface",
    title: "ElevenLabs is turning voice into infrastructure",
    deck:
      "A $22 billion tender valuation is the headline. The more important story is how quickly synthetic voice is becoming a default interface for software.",
    category: "AI & Interfaces",
    date: "October 3, 2026",
    isoDate: "2026-10-03",
    readTime: "4 min",
    thesis:
      "Voice AI is moving from impressive demo to operating layer, and ElevenLabs is being valued as if it can own that transition.",
    sections: [
      {
        heading: "What happened",
        paragraphs: [
          "ElevenLabs announced a $300 million employee tender that values the company at $22 billion, double the valuation attached to its February Series D. That February round brought in $500 million; by May, the company said annual recurring revenue had passed $500 million. The sequence matters: investors are not merely rewarding a research milestone, but a steep commercial curve.",
          "The product has expanded well beyond text-to-speech. ElevenLabs now sells conversational agents, dubbing, transcription, music, and voice infrastructure to creators and enterprises. The ambition is to become the audio layer underneath customer support, media localization, education, and any interface where speaking is more natural than typing.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "The old voice stack was fragmented: one vendor for recognition, another for synthesis, another for telephony, and a systems integrator to make it all work. Foundation models compress that stack. If quality, latency, emotion, and reliability converge in one platform, voice becomes a programmable primitive rather than a specialist feature.",
          "The difficult part is no longer making a voice sound human for a sentence. It is keeping identity, tone, context, interruption handling, and safety coherent across a live conversation. That is where defensibility may accumulate: in evaluation data, orchestration, enterprise controls, and distribution rather than in a single spectacular model sample.",
        ],
      },
      {
        heading: "What to watch",
        paragraphs: [
          "Watch the mix between creative tools and enterprise agents, gross margins as real-time usage grows, and whether customers standardize on one audio layer. Also watch consent and provenance. The company that makes synthetic voice ubiquitous will inherit the burden of making it attributable and controllable.",
          "The maniacal take: voice is not a novelty category. It is a new piece of application infrastructure, but its winner will be judged by trust under pressure, not by the beauty of a demo reel.",
        ],
      },
    ],
    sources: [
      { label: "ElevenLabs — $22B tender announcement", url: "https://elevenlabs.io/blog/tender-22bn" },
      { label: "ElevenLabs — Series D", url: "https://elevenlabs.io/blog/series-d" },
      { label: "ElevenLabs — $500M ARR", url: "https://elevenlabs.io/blog/500m-arr-and-new-investors" },
    ],
  },
  {
    slug: "openai-scale-governance-gap",
    updatedDate: "2026-10-03",
    correction: "Updated October 3, 2026: added the March financing close and clarified that the FTC investigation is separate from the training pause.",
    title: "OpenAI’s scale is now its central product problem",
    deck:
      "The largest financing in private technology history buys enormous capability. It also makes reliability, governance, and institutional trust inseparable from the product.",
    category: "AI & Institutions",
    date: "October 2, 2026",
    isoDate: "2026-10-02",
    readTime: "4 min",
    thesis:
      "OpenAI no longer has a clean boundary between model company, consumer platform, cloud buyer, and critical infrastructure provider.",
    sections: [
      {
        heading: "The capitalization of a platform",
        paragraphs: [
          "OpenAI announced $110 billion in new investment in February at a $730 billion pre-money valuation. In March, it closed the round with $122 billion in committed capital at an $852 billion post-money valuation, anchored by Amazon, Nvidia, and SoftBank. Financing at that scale is an industrial decision. It secures compute, distribution, and strategic alignment while raising the performance bar from ‘best model’ to ‘durable global platform.’",
          "That platform now touches writing, software, education, search, customer service, and increasingly autonomous work. Each new surface creates revenue, but it also creates another failure mode. AP reported that OpenAI paused training after disclosures of unexpected agent activity on government websites. Separately, the FTC confirmed an industry-wide investigation into potential consumer harms. These events make the operating question concrete: how should a company constrain systems whose capabilities are still changing?",
        ],
      },
      {
        heading: "Why the story changed",
        paragraphs: [
          "The first era of generative AI was organized around benchmark leadership. The next one is organized around dependable deployment. A model that acts on the open internet or inside a business must be legible enough to audit, constrained enough to trust, and economical enough to run continuously.",
          "OpenAI’s advantage is the feedback loop between a massive consumer product, developer adoption, and capital access. Its risk is the same loop moving too quickly. When one release can shift work patterns across millions of people, product governance becomes a core engineering function rather than a policy appendix.",
        ],
      },
      {
        heading: "What to watch",
        paragraphs: [
          "Look beyond model names. Watch usage depth, agent permissions, incident response, enterprise retention, and the economics of inference. Pay attention to whether safety controls arrive as native product architecture or as restrictions added after deployment.",
          "The maniacal take: OpenAI’s hardest benchmark is no longer intelligence. It is whether an institution built at startup speed can earn infrastructure-grade trust.",
        ],
      },
    ],
    sources: [
      { label: "OpenAI — February financing announcement", url: "https://openai.com/index/scaling-ai-for-everyone/" },
      { label: "OpenAI — March financing close", url: "https://openai.com/index/accelerating-the-next-phase-ai/" },
      { label: "AP — security pause after agent activity", url: "https://apnews.com/article/2f8a2b9024d4f06793bcca12f8089d20" },
      { label: "AP — FTC investigation", url: "https://apnews.com/article/89ac416717adbfb1d72f2d85e6ce83d1" },
    ],
  },
  {
    slug: "anduril-software-eats-the-arsenal",
    title: "Anduril wants software to eat the arsenal",
    deck:
      "The defense startup is pairing autonomy software with a manufacturing system designed for volume. That combination, not any single vehicle, is the real bet.",
    category: "Defense & Industry",
    date: "October 1, 2026",
    isoDate: "2026-10-01",
    readTime: "4 min",
    thesis:
      "Anduril is trying to make defense production behave less like bespoke procurement and more like a software-enabled industrial platform.",
    sections: [
      {
        heading: "From autonomy to production",
        paragraphs: [
          "Anduril raised $5 billion at a $61 billion valuation earlier this year, according to Axios, and has since continued to widen its industrial footprint. Its September Armory announcement and strategic partnership with Voyager connect weapons, propulsion, manufacturing, and autonomy into a single narrative: build more capable systems, then build far more of them.",
          "The organizing idea is Lattice, Anduril’s software platform for sensing, command, and autonomous behavior. Hardware gives that software a physical footprint; factories give the company a way to deliver at the scale national security customers increasingly demand.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "Traditional defense programs optimize for exquisite systems produced slowly. Recent conflicts have made the cost of that model visible. Attritable drones, electronic warfare, and rapidly changing software favor shorter iteration cycles and higher production volumes.",
          "Anduril’s wager is that vertical integration can collapse the distance between battlefield feedback, software updates, and factory output. The risk is equally large: capital intensity, contracting complexity, and mission-critical reliability do not disappear because the product culture looks like Silicon Valley.",
        ],
      },
      {
        heading: "What to watch",
        paragraphs: [
          "Track awarded programs, delivery cadence, factory utilization, and how often Lattice becomes the connective layer across third-party systems. Partnerships such as Voyager are useful because they test whether Anduril can be a platform rather than a closed portfolio.",
          "The maniacal take: the company’s most consequential product may be the feedback loop between code and manufacturing. If it works, the moat is operational tempo.",
        ],
      },
    ],
    sources: [
      { label: "Axios — Anduril’s financing and $100B talks", url: "https://www.axios.com/2026/07/24/anduril-defense-100-billion" },
      { label: "Axios — the Armory manufacturing system", url: "https://www.axios.com/2026/09/23/anduril-armory-steckman-b2b-defense-tech" },
      { label: "Anduril — Voyager partnership", url: "https://www.anduril.com/news/anduril-and-voyager-establish-strategic-partnership-across-advanced-weapons-and-propulsion" },
    ],
  },
  {
    slug: "isomorphic-labs-computation-meets-clinic",
    title: "Isomorphic Labs is approaching the clinical reality test",
    deck:
      "AI drug design becomes meaningful when elegant predictions survive chemistry, biology, and the clinic. A $2.1 billion round funds that difficult translation.",
    category: "Science & AI",
    date: "September 30, 2026",
    isoDate: "2026-09-30",
    readTime: "4 min",
    thesis:
      "The next proof point for AI-designed medicine is not a model benchmark; it is a repeatable path from target to candidate to patient.",
    sections: [
      {
        heading: "The new capital base",
        paragraphs: [
          "Isomorphic Labs raised $2.1 billion in a May Series B to advance its AI drug design engine and move programs toward the clinic. The Alphabet-born company builds on the intellectual lineage of AlphaFold, but its commercial task is broader: integrate structural biology, chemistry, and disease understanding into a system that can propose useful medicines.",
          "Drug discovery is a punishing test for AI because the objective is not merely prediction. A candidate has to be synthesizable, selective, safe, manufacturable, and effective in humans. Each stage contains sparse data and long feedback cycles.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "If computational systems improve the quality of early decisions, they can reduce wasted laboratory work and explore chemical space more systematically. That does not make biology programmable in the software sense. It changes the probability distribution of the experiments a team chooses to run.",
          "The business model also matters. Partnerships can validate the platform and generate near-term economics, while wholly owned programs preserve more upside. The balance between those two paths will reveal whether Isomorphic is primarily a discovery engine, a biotech pipeline, or eventually both.",
        ],
      },
      {
        heading: "What to watch",
        paragraphs: [
          "Follow named development candidates, time saved between target selection and nomination, partner milestones, and eventually clinical readouts. Treat model improvements as leading indicators, not as clinical evidence.",
          "The maniacal take: AI can make drug discovery more rational without making it easy. The winners will pair computational ambition with experimental humility.",
        ],
      },
    ],
    sources: [
      { label: "Isomorphic Labs — $2.1B Series B", url: "https://www.isomorphiclabs.com/press/isomorphic-labs-funding" },
      { label: "Isomorphic Labs — company announcements", url: "https://www.isomorphiclabs.com/announcements" },
    ],
  },
  {
    slug: "skild-ai-generalist-robot-brain",
    title: "Skild AI is selling a generalist robot brain",
    deck:
      "A $1.4 billion round and a rapid rise to $100 million in ARR suggest physical AI is leaving the laboratory. Generality remains the decisive claim.",
    category: "Robotics",
    date: "September 29, 2026",
    isoDate: "2026-09-29",
    readTime: "4 min",
    thesis:
      "Skild’s value depends on whether one learned system can transfer across bodies, tasks, and environments better than specialized robotics stacks.",
    sections: [
      {
        heading: "Commercial velocity",
        paragraphs: [
          "Skild AI raised $1.4 billion in January at a valuation above $14 billion. In September, the company said it had crossed $100 million in annual recurring revenue ten months after commercial deployment. Those numbers pull the company into a rare category: robotics businesses showing software-like demand before physical automation is widespread.",
          "Its product thesis is a general-purpose foundation model for robots. Rather than hand-engineering every task, Skild aims to let a shared model perceive, reason, and act across different hardware and settings. Its S1 work pushes the idea further, showing task learning from a single video in context.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "Robotics has long been constrained by the cost of edge cases. A system can perform brilliantly in a controlled demo and still fail under different lighting, clutter, grip geometry, or human behavior. Generalist models promise to amortize learning across deployments instead of starting over for each workflow.",
          "But revenue quality matters. Paid pilots, hardware-linked services, and durable software subscriptions are very different signals. The strongest proof will be repeated deployment in messy environments with falling intervention rates.",
        ],
      },
      {
        heading: "What to watch",
        paragraphs: [
          "Ask how performance transfers between robot types, how much fresh data a new task requires, and who owns the operating data. Also track safety, latency, and the economics of human supervision.",
          "The maniacal take: the robot brain is a compelling abstraction. Its reality will be measured in boring hours of reliable work.",
        ],
      },
    ],
    sources: [
      { label: "Skild AI — Series C", url: "https://www.skild.ai/blogs/series-c" },
      { label: "Skild AI — $100M ARR", url: "https://skild.ai/blogs/skild-crosses-100m-arr" },
      { label: "Skild AI — research and product updates", url: "https://skild.ai/blogs" },
    ],
  },
  {
    slug: "mistral-european-ai-sovereignty",
    title: "Mistral is making sovereignty a product feature",
    deck:
      "Europe’s flagship model company raised €3 billion at a valuation above €21 billion. Its differentiation is increasingly about control, deployment, and geography.",
    category: "AI & Europe",
    date: "September 28, 2026",
    isoDate: "2026-09-28",
    readTime: "4 min",
    thesis:
      "Mistral’s best opening may be serving institutions that want frontier capability without surrendering operational control to an American platform.",
    sections: [
      {
        heading: "A European champion scales up",
        paragraphs: [
          "Mistral announced a €3 billion Series D in September at a valuation above €21 billion. Later that month it expanded its German presence with a Munich hub. The combination of capital and regional infrastructure reinforces a clear positioning: capable models, flexible deployment, and a European home base.",
          "Sovereignty can sound abstract until it becomes a procurement requirement. Governments and regulated companies care where data moves, who controls upgrades, whether models can run in private environments, and which legal system governs the provider.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "Mistral does not need to win every benchmark to build a large business. It needs to be excellent enough while being more deployable, more controllable, or more aligned with regional constraints. Open models and on-premise options can make that trade attractive.",
          "The challenge is economic. Training and serving frontier models requires extraordinary capital, while open distribution can weaken direct monetization. Mistral must convert technical credibility into enterprise systems, developer loyalty, and recurring workloads.",
        ],
      },
      {
        heading: "What to watch",
        paragraphs: [
          "Watch enterprise adoption outside France, the ratio of model access to higher-value platform revenue, and whether public-sector sovereignty requirements become durable budgets. Also watch how much performance Mistral can deliver per euro of compute.",
          "The maniacal take: geography is not a moat by itself. Control can be—when it is expressed in the architecture, contracts, and daily experience of the product.",
        ],
      },
    ],
    sources: [
      { label: "Mistral AI — company news", url: "https://mistral.ai/news/?category=company" },
    ],
  },
  {
    slug: "anthropic-capitalized-like-infrastructure",
    title: "Anthropic is being capitalized like infrastructure",
    deck:
      "A $65 billion Series H at a $965 billion valuation says investors expect the model lab to become a foundational layer of the economy.",
    category: "AI & Markets",
    date: "September 25, 2026",
    isoDate: "2026-09-25",
    readTime: "4 min",
    thesis:
      "Anthropic’s valuation rests on converting research leadership and Claude adoption into a dependable enterprise and developer platform.",
    sections: [
      {
        heading: "The round behind the number",
        paragraphs: [
          "Anthropic announced a $65 billion Series H in May at a $965 billion post-money valuation. The company said run-rate revenue had reached $47 billion and framed the capital around compute, safety research, and product expansion. Even in the inflated arithmetic of frontier AI, those are infrastructure-scale figures.",
          "Claude’s strength in coding and knowledge work gives Anthropic a valuable wedge. Developers produce frequent, measurable usage, while enterprises pay for reliability, governance, and integration. The same workloads also consume large amounts of inference, making efficiency as important as demand.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "The market is pricing a small group of labs as future operating systems for cognition. That thesis assumes model quality remains differentiated, customers do not fully commoditize providers, and the labs can capture value after cloud and chip costs.",
          "Anthropic’s brand is unusually tied to safety and interpretability. That positioning can win cautious enterprise buyers, but it creates a higher standard. The company must show that safer systems are not merely a philosophy; they are more predictable products with fewer expensive failures.",
        ],
      },
      {
        heading: "What to watch",
        paragraphs: [
          "Track Claude’s share of production coding and agent workloads, net revenue retention, inference margins, and evidence that interpretability work improves real controls. Watch customer concentration across cloud partners as well.",
          "The maniacal take: the valuation is a forecast about dependency. Anthropic earns it only if companies build workflows they would be reluctant to run without Claude.",
        ],
      },
    ],
    sources: [
      { label: "Anthropic — Series H", url: "https://www.anthropic.com/news/series-h" },
    ],
  },
  {
    slug: "helsing-europe-defense-stack",
    title: "Helsing is building Europe’s defense stack",
    deck:
      "The German defense AI company raised $1.8 billion at an $18 billion valuation. The larger question is whether Europe can turn strategic urgency into repeatable software and production capacity.",
    category: "Defense & Europe",
    date: "September 23, 2026",
    isoDate: "2026-09-23",
    readTime: "4 min",
    thesis:
      "Helsing’s opportunity comes from joining AI software, autonomous systems, and European industrial policy at exactly the moment defense procurement is being reconsidered.",
    sections: [
      {
        heading: "Capital meets urgency",
        paragraphs: [
          "Helsing raised €1.8 billion in a July Series E at an €18 billion valuation. The company develops AI-enabled defense systems and autonomy, with a mission explicitly tied to protecting democratic societies. Its growth mirrors a broader European realization that strategic autonomy requires domestic technical capability.",
          "Defense buyers increasingly need software that fuses sensor data, supports decisions, and updates faster than traditional procurement cycles. They also need physical systems that can operate in contested environments. Helsing is positioning itself across that seam.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "Europe has aerospace and industrial depth, but its defense market is fragmented by national requirements and procurement systems. A software-first company can potentially create common layers across programs, yet sovereignty concerns may also limit standardization.",
          "The funding signals that investors expect defense technology to remain a structural category rather than a temporary response to war. That increases the responsibility on founders: rapid iteration must coexist with democratic oversight and clear rules for autonomous systems.",
        ],
      },
      {
        heading: "What to watch",
        paragraphs: [
          "Follow multinational contracts, field deployment, manufacturing partnerships, and whether Helsing’s software becomes interoperable infrastructure. Examine governance with the same seriousness as performance.",
          "The maniacal take: Europe does not need a copy of an American defense startup. It needs institutions and products designed for its own alliances, laws, and industrial base.",
        ],
      },
    ],
    sources: [
      { label: "Helsing — Series E", url: "https://helsing.ai/newsroom/helsing-raises-1-8bn-in-series-e" },
    ],
  },
  {
    slug: "waymo-autonomy-scales-city-by-city",
    title: "Waymo’s moat is becoming operational density",
    deck:
      "A $16 billion round gives Waymo time to expand. Its real advantage is the accumulated work of running a dependable service, one city at a time.",
    category: "Mobility",
    date: "September 21, 2026",
    isoDate: "2026-09-21",
    readTime: "4 min",
    thesis:
      "Autonomous driving is shifting from a contest of demos to a test of fleet operations, geographic expansion, and public trust.",
    sections: [
      {
        heading: "The expansion phase",
        paragraphs: [
          "Waymo raised $16 billion in February at a $126 billion valuation and said it planned to reach more than 20 additional cities. Later that month, the Associated Press reported roughly 400,000 weekly paid rides across ten markets. The service is no longer a science project with passengers; it is a transportation network with a difficult scaling curve.",
          "Each city introduces weather, road design, regulation, local behavior, and operational edge cases. Expansion therefore tests whether Waymo has built a reusable system or a collection of painstaking local solutions.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "The economic case for robotaxis depends on utilization, vehicle cost, maintenance, remote assistance, insurance, and the price riders will pay. A technically driverless trip can still be a weak business if the fleet sits idle or requires heavy human support behind the scenes.",
          "Waymo’s accumulated miles and incident history create a data advantage, but the deeper moat may be institutional: permits, depot operations, rider habits, and credibility with cities. Those assets compound slowly and are hard to reproduce in a model release cycle.",
        ],
      },
      {
        heading: "What to watch",
        paragraphs: [
          "Track rides per vehicle, service hours, new-city launch time, intervention rates, and pricing relative to human-driven alternatives. Safety reporting should be compared on consistent exposure, not anecdotes alone.",
          "The maniacal take: autonomy wins when it becomes boring. The leading indicator is not spectacle; it is a rider opening the app without thinking about who—or what—is driving.",
        ],
      },
    ],
    sources: [
      { label: "Waymo — $16B investment round", url: "https://waymo.com/blog/2026/02/waymo-raises-usd16-billion-investment-round/" },
      { label: "AP — Waymo expansion and ride volume", url: "https://apnews.com/article/2b976e3a71e7a53719c6ab9927469729" },
    ],
  },
  {
    slug: "replit-software-creation-market",
    title: "Replit is expanding the software creation market",
    deck:
      "A $400 million round at a $9 billion valuation backs a simple thesis: the next wave of software will be made by people who never planned to become developers.",
    category: "Software & Agents",
    date: "September 18, 2026",
    isoDate: "2026-09-18",
    readTime: "4 min",
    thesis:
      "Agentic coding is valuable not only because it makes programmers faster, but because it changes who can turn an idea into working software.",
    sections: [
      {
        heading: "From IDE to creation system",
        paragraphs: [
          "Replit raised $400 million in March at a $9 billion valuation. The company said 85% of the Fortune 500 used the platform and set a goal of reaching a $1 billion revenue run rate by the end of 2026. Agent 4 pushes Replit further from browser IDE toward a system that can plan, build, deploy, and maintain applications.",
          "That shift changes the target customer. Traditional developer tools compete for professional seats. Replit can sell to operations teams, founders, students, marketers, and domain experts who need a tool built but do not want to assemble a software team first.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "Lowering the cost of creation increases the supply of software, including small and temporary applications that were never economical to commission. The result may resemble spreadsheets: countless bespoke systems created close to the problem they solve.",
          "The risk is invisible complexity. Generated applications still need security, data modeling, observability, and maintenance. A platform that makes creation effortless inherits responsibility for the long tail of what gets created.",
        ],
      },
      {
        heading: "What to watch",
        paragraphs: [
          "Measure how many generated apps remain active after 30 and 90 days, how often users need expert intervention, and whether enterprise governance keeps pace with adoption. Retention will reveal whether the product creates durable systems or disposable demos.",
          "The maniacal take: the largest coding market may not be coding. It may be the conversion of organizational intent into software, with the platform absorbing everything in between.",
        ],
      },
    ],
    sources: [
      { label: "Replit — $400M financing", url: "https://replit.com/blog/replit-raises-400-million-dollars" },
    ],
  },
  {
    slug: "databricks-data-ai-control-plane",
    title: "Databricks wants to be the control plane for enterprise AI",
    deck:
      "The company says revenue is growing above 65% at a $5.4 billion run rate. Its latest financing turns the data platform battle into an AI distribution battle.",
    category: "Data & Enterprise",
    date: "September 16, 2026",
    isoDate: "2026-09-16",
    readTime: "4 min",
    thesis:
      "Enterprises will adopt AI where their governed data already lives, giving data platforms a privileged position in the stack.",
    sections: [
      {
        heading: "The numbers behind the platform",
        paragraphs: [
          "Databricks said in February that revenue had grown more than 65% year over year and passed a $5.4 billion run rate. The company also announced more than $7 billion in financing: $5 billion in equity at a $134 billion valuation and $2 billion in debt.",
          "The funding supports a broad product surface spanning lakehouse infrastructure, governance, analytics, model training, serving, and enterprise agents. That breadth is deliberate. Databricks wants customers to move from raw data to AI applications without leaving its control plane.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "Most enterprise AI projects fail in the seams: permissions, data quality, evaluation, lineage, and deployment. A platform that already governs the underlying data can reduce those handoffs. It can also bundle aggressively and make standalone tools harder to justify.",
          "The counterweight is complexity. Broad platforms can become difficult to operate, and customers may resist placing data, models, and applications with one vendor. Open formats help, but practical portability is the real test.",
        ],
      },
      {
        heading: "What to watch",
        paragraphs: [
          "Track AI product revenue separately from core data workloads, the adoption of agents in production, and customer movement between Databricks and competing clouds. Watch whether open ecosystem promises survive commercial pressure.",
          "The maniacal take: the enterprise AI winner may not own the most famous model. It may own the governed path from company data to a useful decision.",
        ],
      },
    ],
    sources: [
      { label: "Databricks — growth and financing update", url: "https://www.databricks.com/company/newsroom/press-releases/databricks-grows-65-yoy-surpasses-5-4-billion-revenue-run-rate" },
    ],
  },
  {
    slug: "harvey-legal-ai-workflow",
    title: "Harvey is learning that legal AI is a workflow business",
    deck:
      "A $200 million round at an $11 billion valuation reflects exceptional demand. The enduring value will come from embedding agents inside how legal work is actually reviewed and trusted.",
    category: "Vertical AI",
    date: "September 14, 2026",
    isoDate: "2026-09-14",
    readTime: "4 min",
    thesis:
      "The legal market rewards systems that combine model capability with permissions, precedent, review, and institutional context.",
    sections: [
      {
        heading: "A vertical leader emerges",
        paragraphs: [
          "Harvey raised $200 million in March at an $11 billion valuation to scale agents across law firms and enterprises. In July, it announced strategic investment from Goldman Sachs and JPMorgan and said it had added more than $100 million in annual recurring revenue during the first quarter alone.",
          "Legal work is unusually attractive for AI: it is language-dense, expensive, document-heavy, and full of repeatable research and drafting tasks. It is also unusually unforgiving. Errors can create liability, waive privilege, or damage a client relationship.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "Harvey’s moat is unlikely to be a legal chatbot. It is the system around the model: matter context, firm knowledge, citations, permissions, review queues, billing logic, and integrations. Those features transform a probabilistic model into an accountable workflow.",
          "Adoption may also reshape the economics of professional services. If junior work takes fewer hours, firms must reconsider training, pricing, and leverage. The product can succeed technically while forcing customers to redesign their own business model.",
        ],
      },
      {
        heading: "What to watch",
        paragraphs: [
          "Watch expansion within firms, usage by senior lawyers, auditability, and whether clients accept AI-assisted work under alternative fee arrangements. Pay attention to the quality of institutional knowledge the product can retrieve safely.",
          "The maniacal take: vertical AI becomes durable when it understands not only the documents, but the chain of responsibility around every answer.",
        ],
      },
    ],
    sources: [
      { label: "Harvey — $11B financing", url: "https://www.harvey.ai/blog/harvey-raises-at-dollar11-billion-valuation-to-scale-agents-across-law-firms-and-enterprises" },
      { label: "Harvey — Goldman Sachs and JPMorgan investment", url: "https://www.harvey.ai/blog/harvey-announces-strategic-investment-from-goldman-sachs-and-jp-morgan" },
    ],
  },
  {
    slug: "synthesia-video-becomes-software",
    title: "Synthesia is turning video from media into software",
    deck:
      "The AI video company raised $200 million at a $4 billion valuation. Its next act is less about generating clips and more about creating adaptive training and communication systems.",
    category: "AI & Work",
    date: "September 12, 2026",
    isoDate: "2026-09-12",
    readTime: "4 min",
    thesis:
      "Synthetic video becomes strategically important when it is generated, localized, and personalized as part of a workflow rather than produced as a static asset.",
    sections: [
      {
        heading: "Beyond the talking avatar",
        paragraphs: [
          "Synthesia raised $200 million in January at a $4 billion valuation and outlined a future centered on conversational agents and workforce learning. The company built its early business by making corporate video faster and cheaper; it is now moving toward interactive content that can respond to the learner.",
          "That evolution mirrors a broader pattern in generative media. The first product replaces production. The more valuable product changes the format itself—from a fixed video to a dynamic interface connected to company knowledge and user progress.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "Large organizations spend heavily on onboarding, compliance, product education, and internal communication. Most material becomes stale quickly and is difficult to localize. Programmatic video can make updates and translation dramatically cheaper.",
          "The danger is synthetic sameness. If every company produces frictionless but generic avatar content, attention collapses. Quality will depend on instructional design, brand voice, and whether interactivity improves learning rather than merely adding novelty.",
        ],
      },
      {
        heading: "What to watch",
        paragraphs: [
          "Look for measured learning outcomes, enterprise renewal, editing depth, and the share of usage that is interactive rather than linear. Provenance and employee consent should remain first-class product features.",
          "The maniacal take: video becomes software when it can change at runtime. That is a larger opportunity—and a higher design standard—than automated production alone.",
        ],
      },
    ],
    sources: [
      { label: "Synthesia — Series E", url: "https://www.synthesia.io/post/series-e-200-million-4-billion-valuation-future-work" },
    ],
  },
  {
    slug: "runway-world-models",
    title: "Runway is betting that video models become world models",
    deck:
      "A $315 million Series E funds a move beyond content generation toward systems that understand and simulate environments.",
    category: "Generative Media",
    date: "September 10, 2026",
    isoDate: "2026-09-10",
    readTime: "4 min",
    thesis:
      "Video generation may be the commercial entry point for models whose deeper value lies in predicting how the visual world changes over time.",
    sections: [
      {
        heading: "The next frame is a research agenda",
        paragraphs: [
          "Runway raised $315 million in February and described its mission in terms of world simulation. Generating coherent video requires a model to represent objects, motion, camera behavior, lighting, and some approximation of physical cause and effect.",
          "Creative tools monetize that capability today. Filmmakers, advertisers, and designers can produce shots that would otherwise require large crews or simply would not be attempted. The same underlying representations may eventually support robotics, games, planning, and synthetic training data.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "A world model does not need perfect physics to be useful. It needs consistent enough dynamics for the task. That threshold is different for a music video, a warehouse robot, and a safety-critical simulator, which means the market may fragment by reliability requirement.",
          "Runway’s strategic challenge is defending a product layer while base models improve across the industry. Workflow, controllability, rights management, collaboration, and professional trust become more durable than raw generation quality alone.",
        ],
      },
      {
        heading: "What to watch",
        paragraphs: [
          "Watch temporal consistency, editability, unit economics, and adoption in professional production. For the world-model thesis, look for external validation in simulation or embodied tasks rather than relying on cinematic examples.",
          "The maniacal take: beautiful video is the visible output. The deeper asset is a model learning what can plausibly happen next.",
        ],
      },
    ],
    sources: [
      { label: "Runway — Series E", url: "https://runway.com/news/runway-series-e-funding" },
    ],
  },
  {
    slug: "groq-inference-economy",
    title: "Groq is making inference the main event",
    deck:
      "After a $750 million round and another $650 million in growth capital, Groq is betting the AI market will care as much about serving models as training them.",
    category: "Chips & Compute",
    date: "September 8, 2026",
    isoDate: "2026-09-08",
    readTime: "4 min",
    thesis:
      "As AI usage shifts toward persistent agents and real-time interfaces, predictable low-latency inference becomes a strategic resource.",
    sections: [
      {
        heading: "The workload moves downstream",
        paragraphs: [
          "Groq raised $750 million at a $6.9 billion valuation in September 2025, then added $650 million in growth capital in June 2026. The company specializes in inference—the repeated act of running trained models—and emphasizes speed and predictable performance.",
          "That focus looks increasingly well timed. Training creates a model; inference creates the user experience and the recurring bill. Agents that reason across many steps, voice systems that must respond immediately, and high-volume enterprise applications all magnify serving cost and latency.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "Nvidia’s ecosystem remains formidable, but alternative architectures can win where workload characteristics reward specialization. Groq’s opportunity is to turn hardware advantage into a cloud developers can adopt without redesigning their application.",
          "The strategic relationship with Nvidia adds nuance. Licensing and talent arrangements can validate Groq’s technology while complicating the picture of independent competition. Customers will care most about supply, price, model availability, and reliable throughput.",
        ],
      },
      {
        heading: "What to watch",
        paragraphs: [
          "Compare cost per completed task rather than tokens per second alone. Track capacity expansion, developer retention, supported models, and whether large customers commit meaningful production volume.",
          "The maniacal take: in an agentic world, inference is not the exhaust of training. It is where the product lives—and where the economics are decided.",
        ],
      },
    ],
    sources: [
      { label: "PR Newswire — Groq’s $750M round", url: "https://www.prnewswire.com/news-releases/groq-raises-750-million-as-inference-demand-surges-302558961.html" },
      { label: "Groq — $650M growth capital", url: "https://groq.com/newsroom/groq-raises-usd650m-to-scale-its-ai-inference-cloud-business" },
    ],
  },
  {
    slug: "figure-humanoid-production",
    title: "Figure’s real milestone is the factory, not the demo",
    deck:
      "More than $1 billion at a $39 billion valuation gives Figure room to scale humanoid robots. Manufacturing and deployment discipline will determine whether the category escapes spectacle.",
    category: "Robotics",
    date: "September 5, 2026",
    isoDate: "2026-09-05",
    readTime: "4 min",
    thesis:
      "Humanoid robotics becomes a business when capable machines can be produced, maintained, and improved at repeatable cost.",
    sections: [
      {
        heading: "Capital for embodiment",
        paragraphs: [
          "Figure announced more than $1 billion in Series C funding at a $39 billion valuation in September 2025. The company said it would scale its Helix intelligence system and BotQ manufacturing. Those two investments belong together: intelligence without production is a research program, while production without useful autonomy is inventory.",
          "The humanoid form is attractive because the built world already accommodates human bodies. In theory, one platform can move through warehouses, factories, and homes without rebuilding the environment around it.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "Generative models have improved perception and language instruction, but manipulation remains difficult. Hands, balance, force, uncertainty, and safety all interact in real time. The model must also learn from a fleet whose data is expensive to collect.",
          "The business case depends on uptime and total cost per productive hour. A humanoid can perform many tasks in a demo and still lose to specialized automation if it is fragile, slow, or supervision-heavy.",
        ],
      },
      {
        heading: "What to watch",
        paragraphs: [
          "Look for sustained deployment hours, task diversity at a single customer, manufacturing yield, service intervals, and falling intervention rates. Production partners matter more than viral clips.",
          "The maniacal take: the category will be won in the least cinematic moments—battery swaps, repair queues, edge cases, and the thousandth identical shift.",
        ],
      },
    ],
    sources: [
      { label: "Figure — Series C", url: "https://www.figure.ai/news/series-c" },
    ],
  },
  {
    slug: "xai-capital-compute-distribution",
    title: "xAI is assembling capital, compute, and distribution at once",
    deck:
      "A $20 billion Series E illustrates a distinctive strategy: train at enormous scale and place the model inside an existing global network.",
    category: "AI & Platforms",
    date: "September 2, 2026",
    isoDate: "2026-09-02",
    readTime: "4 min",
    thesis:
      "xAI’s advantage is the tight coupling of infrastructure and distribution; its risk is that the same coupling concentrates technical, financial, and governance exposure.",
    sections: [
      {
        heading: "A vertically connected lab",
        paragraphs: [
          "xAI announced a $20 billion Series E in January. The company highlighted roughly one million H100-equivalent GPUs, approximately 600 million monthly users across X and Grok, and continued work on Grok 5. Few AI labs can combine that compute base with an immediately available consumer distribution channel.",
          "Distribution accelerates feedback, awareness, and product iteration. It also makes the model part of a live social information system, where errors, incentives, and moderation decisions propagate quickly.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "Frontier AI is becoming a contest of integrated systems: chips, data centers, model research, applications, and audience. xAI is pursuing all of them simultaneously. That can shorten coordination loops but demands extraordinary execution across unrelated disciplines.",
          "The economics will depend on converting reach into high-value usage. Consumer attention is not the same as durable enterprise revenue, and infrastructure spending must be supported by workloads that justify it.",
        ],
      },
      {
        heading: "What to watch",
        paragraphs: [
          "Watch paid retention, developer adoption, enterprise controls, data-center efficiency, and evidence that X distribution improves the model without degrading trust. Separate audience size from repeated productive use.",
          "The maniacal take: xAI has compressed the AI stack into one corporate orbit. That is a powerful accelerator and a very large single point of failure.",
        ],
      },
    ],
    sources: [
      { label: "xAI — Series E", url: "https://x.ai/news/series-e" },
    ],
  },
  {
    slug: "cursor-software-development-interface",
    title: "Cursor is becoming the interface to software development",
    deck:
      "Anysphere’s valuation reached $29.3 billion after a $2.3 billion round. The bet is that the coding agent, not the editor, becomes the center of the developer workflow.",
    category: "Software & Agents",
    date: "August 30, 2026",
    isoDate: "2026-08-30",
    readTime: "4 min",
    thesis:
      "Coding tools are evolving from autocomplete toward delegated work, shifting value to context, orchestration, and trust in proposed changes.",
    sections: [
      {
        heading: "A remarkable adoption curve",
        paragraphs: [
          "Cursor maker Anysphere raised $900 million at a $9.9 billion valuation in June 2025, when it said annual recurring revenue had passed $500 million and more than half of the Fortune 500 used the product. A later $2.3 billion Series D valued the company at $29.3 billion, with reported annualized revenue around $1 billion.",
          "The speed reflects a rare alignment: a familiar interface, an urgent user need, and models that improve visibly. Developers can feel the value within minutes, which shortens the path from trial to habit.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "The product is moving from line completion to task execution. That changes the competitive terrain. The critical assets become codebase understanding, retrieval, tool use, review experience, model routing, and the ability to keep an agent productive over longer horizons.",
          "It also changes the bottleneck in software teams. Producing code gets cheaper; specifying intent, reviewing behavior, and maintaining architecture become more important. Faster output can create more technical debt if judgment does not scale with it.",
        ],
      },
      {
        heading: "What to watch",
        paragraphs: [
          "Track accepted changes rather than generated tokens, expansion across teams, security posture, and how often agents complete meaningful tasks without repair. Model independence will matter as labs compete for the same developer surface.",
          "The maniacal take: the winning coding product will feel less like a faster text editor and more like a disciplined collaborator whose work is easy to inspect.",
        ],
      },
    ],
    sources: [
      { label: "Cursor — Series C", url: "https://www.cursor.com/blog/series-c" },
      { label: "Cinco Días — Series D and valuation", url: "https://cincodias.elpais.com/companias/2025-11-13/la-fulgurante-subida-del-valor-de-anysphere-y-su-ia-de-2300-a-29300-millones-de-dolares-en-11-meses.html" },
    ],
  },
  {
    slug: "cerebras-compute-diversity",
    title: "Cerebras is a test of how much AI compute can diversify",
    deck:
      "The wafer-scale chipmaker raised $1.1 billion at an $8.1 billion valuation and later returned to the public-market path. Its argument is architectural: bigger silicon can remove expensive bottlenecks.",
    category: "Chips & Compute",
    date: "August 27, 2026",
    isoDate: "2026-08-27",
    readTime: "4 min",
    thesis:
      "Cerebras can matter without replacing GPUs if its architecture wins distinct workloads on speed, simplicity, or total cost.",
    sections: [
      {
        heading: "A different shape of chip",
        paragraphs: [
          "Cerebras raised $1.1 billion in a September 2025 Series G at an $8.1 billion valuation. Its wafer-scale systems use an enormous single piece of silicon rather than connecting many conventional chips, aiming to reduce the communication overhead that slows large AI workloads.",
          "The company’s 2026 public filing gives investors a more detailed way to evaluate that thesis. It also exposes the usual hard-tech questions: customer concentration, supply, capital requirements, and the pace at which a novel architecture becomes a repeatable product business.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "AI demand is large enough to support specialized compute. Training, fine-tuning, and inference have different memory and communication patterns, and no single design must dominate every segment. Alternatives can also improve bargaining power for customers facing constrained supply.",
          "The barrier is software. Developers adopt hardware through compilers, frameworks, models, and cloud access. Architectural elegance matters only when workloads move without heroic integration work.",
        ],
      },
      {
        heading: "What to watch",
        paragraphs: [
          "Focus on repeat customers, workload breadth, system utilization, and performance per dollar on real applications. Read the public filings for concentration and margin trends rather than relying on headline speed records.",
          "The maniacal take: Nvidia does not need to lose for Cerebras to win. The market is becoming large enough for useful differences in the shape of computation.",
        ],
      },
    ],
    sources: [
      { label: "Cerebras — Series G", url: "https://www.cerebras.ai/press-release/series-g" },
      { label: "Cerebras — SEC registration statement", url: "https://investors.cerebras.ai/static-files/69e853fd-a7f2-438a-a0b0-79cb2807ebed" },
    ],
  },
  {
    slug: "langchain-agent-engineering-layer",
    title: "LangChain is formalizing agent engineering",
    deck:
      "A $125 million round at a $1.25 billion valuation backs the tooling around agents: orchestration, evaluation, tracing, and deployment.",
    category: "Developer Tools",
    date: "August 24, 2026",
    isoDate: "2026-08-24",
    readTime: "4 min",
    thesis:
      "As agents move into production, the durable category may be the engineering discipline that makes probabilistic systems observable and controllable.",
    sections: [
      {
        heading: "From framework to platform",
        paragraphs: [
          "LangChain announced a $125 million round at a $1.25 billion valuation in October 2025. At the time it cited roughly 90 million combined monthly downloads and adoption across 35% of the Fortune 500. The company has expanded from an open-source framework into LangGraph for orchestration and LangSmith for development, evaluation, and observability.",
          "That progression follows the needs of production teams. A demo can call a model and a tool. A deployed agent needs state, retries, permissions, human review, test sets, traces, and a way to understand why behavior changed.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "Model providers will keep absorbing popular abstractions. LangChain therefore has to move faster than the platform layer below it, turning operational pain into neutral infrastructure across models and clouds.",
          "Its open-source reach creates distribution, while hosted tooling creates revenue. The tension is familiar: keep the ecosystem open enough to remain a standard, but make the managed product valuable enough to support the company.",
        ],
      },
      {
        heading: "What to watch",
        paragraphs: [
          "Track production traces rather than package downloads, paid conversion, model neutrality, and whether evaluation becomes embedded in deployment gates. The most valuable feature may be faster diagnosis when an agent fails in a way no unit test anticipated.",
          "The maniacal take: agents will not become dependable through prompting alone. They need an engineering substrate, and LangChain is trying to define it.",
        ],
      },
    ],
    sources: [
      { label: "LangChain — Series B", url: "https://www.langchain.com/blog/series-b" },
    ],
  },
];

// Keep the full collection: homepage limits must never delete published URLs.
export const posts: Post[] = [...articles]
  .sort((a, b) => b.isoDate.localeCompare(a.isoDate))
  .map((post) => {
    const words = [post.title, post.deck, post.thesis, ...post.sections.flatMap((section) => [section.heading, ...section.paragraphs])].join(" ").split(/\s+/).length;
    return { ...post, readTime: `${Math.max(1, Math.ceil(words / 200))} min` };
  });

export const HOME_POST_LIMIT = 20;
export const homepagePosts = posts.slice(0, HOME_POST_LIMIT);

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
