export type SourceLink = {
  label: string;
  url: string;
};

export type TimelineItem = {
  date: string;
  category: string;
  title: string;
  summary: string;
  details?: string;
  sources: SourceLink[];
  metric?: string;
  storyTag?: string;
};

export type EvergreenLink = SourceLink & {
  description: string;
};

const sources = {
  codex2021: {
    label: "OpenAI Codex, 2021",
    url: "https://openai.com/index/openai-codex/"
  },
  introducingCodex: {
    label: "Introducing Codex",
    url: "https://openai.com/index/introducing-codex/"
  },
  codexProduct: {
    label: "Codex product page",
    url: "https://openai.com/codex/"
  },
  changelog: {
    label: "Codex changelog",
    url: "https://developers.openai.com/codex/changelog"
  },
  quickstart: {
    label: "Developer quickstart",
    url: "https://developers.openai.com/codex/quickstart"
  },
  useCases: {
    label: "Codex use cases",
    url: "https://developers.openai.com/codex/use-cases"
  },
  github: {
    label: "openai/codex",
    url: "https://github.com/openai/codex"
  },
  releases: {
    label: "GitHub releases",
    url: "https://github.com/openai/codex/releases"
  },
  app: {
    label: "Codex app announcement",
    url: "https://openai.com/index/introducing-the-codex-app/"
  },
  april2026: {
    label: "Codex for almost everything",
    url: "https://openai.com/index/codex-for-almost-everything/"
  },
  academy: {
    label: "OpenAI Academy: Codex",
    url: "https://openai.com/academy/codex/"
  }
} satisfies Record<string, SourceLink>;

export const timeline: TimelineItem[] = [
  {
    date: "2021-08-10",
    category: "Origin",
    title: "OpenAI Codex enters API private beta",
    summary:
      "OpenAI releases the improved Codex system, built to translate natural language into code and invite developers to build on it through the API.",
    details:
      "This is the origin point for the archive: Codex is framed as a system that can turn plain-language intent into working code across common programming languages. The beta also makes the core Codex promise explicit: developers should be able to describe a task, inspect the result, and keep control of the implementation.",
    sources: [sources.codex2021],
    storyTag: "The spark"
  },
  {
    date: "2023-03-01",
    category: "Transition",
    title: "Original Codex models are deprecated",
    summary:
      "OpenAI marks the first Codex model era as retired, setting up the later shift from code model to full coding agent.",
    details:
      "The early completion-style Codex models sunset before the product name returns with a different shape. In hindsight, this transition matters because the later Codex is not just a code model, but a tool-using agent that can read repositories, edit files, run commands, and hand work back for review.",
    sources: [sources.codex2021]
  },
  {
    date: "2025-04-16",
    category: "CLI",
    title: "Codex CLI launches as an open-source local agent",
    summary:
      "Codex returns as a local terminal coding agent in the openai/codex repository, bringing agentic edits and command execution into developer machines.",
    details:
      "The CLI makes Codex feel native to the working developer loop: open a repository, ask for a change, inspect the diff, and let commands run locally when approved. Open-sourcing the project gives the community a concrete place to track releases, file issues, and understand how the agent fits into terminal workflows.",
    sources: [sources.codex2021, sources.github],
    storyTag: "Terminal native"
  },
  {
    date: "2025-05-16",
    category: "Cloud",
    title: "Cloud Codex research preview arrives in ChatGPT",
    summary:
      "OpenAI introduces a cloud-based software engineering agent powered by codex-1, able to work on parallel tasks in isolated repository environments.",
    details:
      "The research preview moves Codex beyond one local session. Developers can assign several jobs at once, let each run in a separate environment, and come back to proposed changes, logs, and test results. That parallelism becomes a defining Codex pattern rather than a novelty.",
    sources: [sources.introducingCodex],
    storyTag: "Agent era"
  },
  {
    date: "2025-05-16",
    category: "Stories",
    title: "Early testers show real production workflows",
    summary:
      "OpenAI highlights real usage across OpenAI, Cisco, Temporal, Superhuman, and Kodiak, from refactoring and testing to product-manager code changes.",
    details:
      "The launch story is stronger because it includes work that sounds like normal engineering, not only demos: writing tests, fixing integrations, understanding unfamiliar code, refactoring, debugging, and preparing reviewable changes. The customer mix also shows Codex being evaluated in enterprise, infrastructure, productivity, and autonomous-vehicle codebases.",
    sources: [sources.introducingCodex],
    storyTag: "External proof"
  },
  {
    date: "2025-05-19",
    category: "Mobile",
    title: "Codex reaches the ChatGPT iOS app",
    summary:
      "The changelog adds mobile task starts, diff review, and PR pushes for developers away from a desk.",
    details:
      "This update turns Codex into something developers can supervise from a phone. Starting a task, checking the diff, and pushing a pull request from iOS makes the cloud-agent model more credible because the heavy work happens remotely while the human still reviews the result.",
    sources: [sources.changelog]
  },
  {
    date: "2025-05-22",
    category: "Reliability",
    title: "Environment setup and latency get sharper",
    summary:
      "OpenAI reports reduced GitHub disconnects, faster PR creation, lower tool-call latency, and better task completion latency.",
    details:
      "Reliability improvements matter because coding agents spend much of their time on setup, repository sync, and command execution. This changelog entry tightens the unglamorous parts of the loop: fewer broken GitHub connections, faster PR creation, and lower latency while the agent works through a task.",
    sources: [sources.changelog],
    metric: "90% fewer GitHub disconnects"
  },
  {
    date: "2025-06-03",
    category: "Access",
    title: "Codex expands to ChatGPT Plus and gains internet access controls",
    summary:
      "Codex becomes available to Plus users and adds opt-in internet access during task execution for dependency installs, package upgrades, and tests.",
    details:
      "Access broadens beyond higher-tier users while OpenAI adds controls for a practical blocker: modern projects often need packages, docs, registries, or external resources. The opt-in framing keeps the trust boundary visible because internet access changes what the agent can reach during execution.",
    sources: [sources.introducingCodex, sources.changelog]
  },
  {
    date: "2025-06-13",
    category: "Workflow",
    title: "Best of N makes parallel exploration a product pattern",
    summary:
      "Codex gains the ability to generate multiple responses for one task, letting developers compare approaches before choosing a direction.",
    details:
      "Instead of betting on the first attempt, developers can ask Codex to explore several implementation paths and compare tradeoffs. That is especially useful for ambiguous refactors, design-sensitive frontend work, or bug fixes where one passing solution may still not be the best one.",
    sources: [sources.changelog]
  },
  {
    date: "2025-08-21",
    category: "Speed",
    title: "Image inputs, container caching, and automatic setup land",
    summary:
      "Codex adds image prompts for frontend work, cached containers, and automatic environment setup across common package managers.",
    details:
      "This is one of the most practical workflow upgrades in the archive. Image inputs make visual UI requests easier to express, automatic setup reduces the blank-project tax, and cached containers cut the median cached start time from 48 seconds to 5 seconds in OpenAI's reported numbers.",
    sources: [sources.changelog],
    metric: "48s to 5s median cached starts"
  },
  {
    date: "2025-08-27",
    category: "IDE",
    title: "IDE extension, ChatGPT sign-in, handoff, and Code Reviews arrive",
    summary:
      "Codex moves into VS Code-compatible editors, adds one-click ChatGPT authentication, enables local-cloud handoff, and starts reviewing PRs against intent.",
    details:
      "Codex stops being only a chat or terminal surface and enters the editor, where developers already inspect files and diffs. The same update connects local and cloud work, adds easier sign-in, and introduces review behavior that checks whether a pull request matches what the author meant to build.",
    sources: [sources.changelog]
  },
  {
    date: "2025-09-15",
    category: "Model",
    title: "GPT-5-Codex launches for agentic coding",
    summary:
      "OpenAI introduces GPT-5-Codex, optimized for Codex workflows and powering the cloud agent plus GitHub Code Review.",
    details:
      "The model line becomes explicitly tuned for long-running coding work rather than general chat alone. Codex can lean on a model built for repository context, tool calls, edits, reviews, and the kind of multi-step debugging that makes agentic coding hard.",
    sources: [sources.changelog]
  },
  {
    date: "2025-09-23",
    category: "API",
    title: "GPT-5-Codex becomes available in the Responses API",
    summary:
      "Developers can call GPT-5-Codex through the API and use it with API-key workflows in Codex CLI.",
    details:
      "The specialized coding model moves from product surface to programmable building block. That gives teams a path to integrate GPT-5-Codex into custom tools while still using API-key authentication in the CLI for local development workflows.",
    sources: [sources.changelog]
  },
  {
    date: "2025-10-06",
    category: "GA",
    title: "Codex reaches general availability",
    summary:
      "Codex becomes generally available with @Codex in Slack, a TypeScript SDK, a GitHub Action, and new admin controls.",
    details:
      "General availability marks Codex as something teams can adopt with fewer preview caveats. The launch also widens the control plane: Slack mentions, SDK hooks, GitHub Actions, and admin settings make Codex easier to fit into team workflows instead of treating it as a standalone assistant.",
    sources: [sources.changelog],
    storyTag: "GA"
  },
  {
    date: "2025-10-22",
    category: "GitHub",
    title: "Developers can tag @Codex on GitHub issues and PRs",
    summary:
      "GitHub issue and pull request mentions become a way to ask Codex questions, request follow-ups, or assign changes from existing workflows.",
    details:
      "This is a workflow win because it lets Codex live where engineering discussion already happens. A developer can move from review feedback or an issue thread directly into an agent task without translating the context into a separate prompt from scratch.",
    sources: [sources.changelog]
  },
  {
    date: "2025-11-07",
    category: "Model",
    title: "GPT-5-Codex-Mini adds longer-running usage",
    summary:
      "OpenAI adds a smaller, cost-effective Codex model and automatic switching suggestions near usage limits.",
    details:
      "The Mini variant gives users a way to keep working when they need more volume or lower-cost turns. OpenAI positions it as especially useful near usage limits, with roughly four times more usage compared with the larger default in the relevant plan context.",
    sources: [sources.changelog],
    metric: "about 4x more usage"
  },
  {
    date: "2025-11-13",
    category: "Model",
    title: "GPT-5.1-Codex and Mini join the picker",
    summary:
      "Codex adds GPT-5.1-Codex options tuned for long-running agentic coding tasks in the CLI and IDE extension.",
    details:
      "Model choice becomes part of the Codex workflow. Developers can select newer Codex-tuned options from the CLI or IDE extension, choosing between stronger reasoning and lighter variants depending on task complexity and available usage.",
    sources: [sources.changelog]
  },
  {
    date: "2025-11-18",
    category: "Model",
    title: "GPT-5.1-Codex-Max and xhigh reasoning arrive",
    summary:
      "OpenAI releases a new frontier agentic coding model and adds Extra High reasoning for non-latency-sensitive tasks.",
    details:
      "The Max model and xhigh reasoning setting target the harder end of the coding-agent spectrum: migrations, deep debugging, cross-file refactors, and tasks where waiting longer is acceptable if the reasoning is better. It also shows Codex becoming a family of modes, not a single fixed assistant.",
    sources: [sources.changelog]
  },
  {
    date: "2025-12-04",
    category: "Integration",
    title: "Codex for Linear turns issues into cloud tasks",
    summary:
      "Teams can assign or mention @Codex in Linear to kick off tasks and get progress links back in the issue.",
    details:
      "Linear support makes Codex useful from product and planning workflows, not just code-hosting tools. Assigning an issue or mentioning @Codex can start a cloud task, then the result comes back as a progress link that keeps the issue as the shared coordination point.",
    sources: [sources.changelog]
  },
  {
    date: "2025-12-18",
    category: "Model",
    title: "GPT-5.2-Codex becomes the default for ChatGPT sign-in",
    summary:
      "The CLI and IDE extension default to GPT-5.2-Codex for ChatGPT-authenticated users, emphasizing refactors, migrations, Windows work, and cybersecurity.",
    details:
      "The default model update matters because most users do not constantly tune settings. By moving ChatGPT-authenticated CLI and IDE users to GPT-5.2-Codex, OpenAI pushes a stronger baseline for larger code transformations, platform-specific work, and security-sensitive tasks.",
    sources: [sources.changelog]
  },
  {
    date: "2025-12-19",
    category: "Skills",
    title: "Agent skills give Codex reusable workflows",
    summary:
      "Codex gains skill bundles with instructions, scripts, references, and assets that can be installed per user or checked into repositories.",
    details:
      "Skills turn repeated agent guidance into shareable project infrastructure. A team can package domain instructions, helper scripts, references, and assets so Codex behaves more consistently across machines and contributors.",
    sources: [sources.changelog]
  },
  {
    date: "2026-01-14",
    category: "API",
    title: "GPT-5.2-Codex reaches API-key workflows",
    summary:
      "OpenAI makes GPT-5.2-Codex available in the API and for Codex users signed in with an API key.",
    details:
      "This closes the gap between ChatGPT-authenticated Codex use and API-key-based workflows. Teams that manage access through API projects can use the newer Codex model in local tooling and custom automation without switching authentication models.",
    sources: [sources.changelog]
  },
  {
    date: "2026-01-23",
    category: "Team",
    title: "Team Config standardizes Codex across repositories",
    summary:
      "Shared config.toml defaults, rules, and skills can live in project, user, or system layers, giving teams common behavior across machines.",
    details:
      "Team Config makes Codex behavior more predictable in real organizations. Rules can live close to a repository, merge with user and system defaults, and define the conventions that matter for a codebase before an agent starts editing.",
    sources: [sources.changelog]
  },
  {
    date: "2026-01-28",
    category: "Search",
    title: "Web search is enabled by default for local tasks",
    summary:
      "Codex CLI and the IDE extension gain cached web search by default, with live and disabled modes configurable by users.",
    details:
      "Local agents often need current docs, release notes, or examples to avoid guessing. Cached web search gives Codex a more useful research path while preserving configuration options for teams that need live search, restricted search, or no search at all.",
    sources: [sources.changelog]
  },
  {
    date: "2026-02-02",
    category: "App",
    title: "The Codex app launches on macOS",
    summary:
      "OpenAI introduces a desktop command center for running multiple agents in parallel with worktrees, review surfaces, skills, automations, and personalities.",
    details:
      "The macOS app gives Codex a dedicated home for parallel work instead of forcing everything through a terminal pane or browser tab. Worktrees, review flows, automations, and skills make the app feel like an orchestration layer for many coding agents at once.",
    sources: [sources.app, sources.changelog],
    metric: "1M+ developers in the prior month"
  },
  {
    date: "2026-02-05",
    category: "Model",
    title: "Codex app adds GPT-5.3-Codex support and steering",
    summary:
      "The app adds GPT-5.3-Codex, mid-turn steering, broad file attachment support, and more stable desktop behavior.",
    details:
      "Mid-turn steering is the important interaction change: users can redirect an agent while work is underway instead of waiting for an imperfect final result. Combined with broad attachments and model updates, the app becomes better suited for messy, real project context.",
    sources: [sources.changelog]
  },
  {
    date: "2026-03-25",
    category: "Plugins",
    title: "Plugins package skills, apps, and MCP servers",
    summary:
      "Codex adds installable plugins across the app, CLI, and IDE extensions, making reusable workflows and integrations portable.",
    details:
      "Plugins raise the abstraction above one-off skills. A plugin can bundle instructions, app connections, MCP servers, and workflow pieces so users can install a capability and make it available across Codex surfaces.",
    sources: [sources.changelog]
  },
  {
    date: "2026-04-16",
    category: "Platform",
    title: "Codex expands toward almost everything",
    summary:
      "A major update adds background computer use, image generation, memory preview, more than 90 plugins, deeper PR review flows, and longer-running automations.",
    details:
      "This update reframes Codex as a broader work agent rather than a code-only helper. OpenAI says weekly developer use has passed 3 million, while features like background computer use, image generation, memory preview, and plugins point toward agents that can move across tools, assets, and review workflows.",
    sources: [sources.april2026],
    metric: "3M+ weekly developers"
  },
  {
    date: "2026-04-23",
    category: "Cutoff",
    title: "GPT-5.5 and Codex app updates close this archive",
    summary:
      "The last included update adds GPT-5.5 availability, in-app browser operation for local development pages, automatic approval reviews, and CLI 0.124.0.",
    details:
      "This is the archive cutoff, not the end of Codex. By April 23, 2026, the changelog shows Codex adding newer model access, browser operation for local development verification, automatic approval-review behavior, and another CLI release, which makes the timeline feel like a product still accelerating.",
    sources: [sources.changelog],
    storyTag: "Archive cutoff"
  }
];

export const evergreenLinks: EvergreenLink[] = [
  {
    ...sources.codexProduct,
    description: "Current product positioning, surfaces, and examples."
  },
  {
    ...sources.quickstart,
    description: "Install, sign in, and run Codex in a local project."
  },
  {
    ...sources.changelog,
    description: "Official release log for Codex app, CLI, and platform updates."
  },
  {
    ...sources.useCases,
    description: "Workflow examples for engineering, design, QA, data, and operations."
  },
  {
    ...sources.github,
    description: "Open-source repository for the Codex CLI and related packages."
  },
  {
    ...sources.releases,
    description: "Tagged CLI releases and binary assets."
  },
  {
    ...sources.academy,
    description: "Academy lessons, workshops, and events for learning Codex."
  }
];
