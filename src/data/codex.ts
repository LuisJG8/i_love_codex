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
};

export type EvergreenLink = SourceLink & {
  description: string;
};

const sources = {
  codex2021: {
    label: "OpenAI Codex, 2021",
    url: "https://openai.com/index/openai-codex/"
  },
  copilotPreview: {
    label: "GitHub Copilot preview",
    url: "https://github.blog/news-insights/product-news/introducing-github-copilot-ai-pair-programmer/"
  },
  introducingCodex: {
    label: "Introducing Codex",
    url: "https://openai.com/index/introducing-codex/"
  },
  codexCli: {
    label: "Codex CLI docs",
    url: "https://developers.openai.com/codex/cli"
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
  gpt5Codex: {
    label: "Introducing upgrades to Codex",
    url: "https://openai.com/index/introducing-upgrades-to-codex/"
  },
  gpt53Codex: {
    label: "Introducing GPT-5.3-Codex",
    url: "https://openai.com/index/introducing-gpt-5-3-codex/"
  },
  academy: {
    label: "OpenAI Academy: Codex",
    url: "https://openai.com/academy/codex/"
  },
  workAnywhere: {
    label: "Work with Codex from anywhere",
    url: "https://openai.com/index/work-with-codex-from-anywhere/"
  }
} satisfies Record<string, SourceLink>;

export const timeline: TimelineItem[] = [
  {
    date: "2021-06-29",
    category: "Adoption",
    title: "GitHub Copilot launches powered by Codex",
    summary:
      "GitHub launches the Copilot technical preview, built with OpenAI and powered by OpenAI Codex.",
    details:
      "This is the first massive Codex adoption story. Before Codex was opened through the API, it was already inside a new developer workflow: suggesting whole lines and functions directly in the editor while drawing context from the code being written.",
    sources: [sources.copilotPreview, sources.codex2021]
  },
  {
    date: "2021-08-10",
    category: "Origin",
    title: "OpenAI Codex enters API private beta",
    summary:
      "OpenAI releases the improved Codex system, built to translate natural language into code and invite developers to build on it through the API.",
    details:
      "This is the origin point for the archive: Codex is framed as a system that can turn plain-language intent into working code across common programming languages. The beta also makes the core Codex promise explicit: developers should be able to describe a task, inspect the result, and keep control of the implementation.",
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
    sources: [sources.codexCli, sources.github]
  },
  {
    date: "2025-05-16",
    category: "Cloud",
    title: "Cloud Codex research preview arrives in ChatGPT",
    summary:
      "OpenAI introduces a cloud-based software engineering agent powered by codex-1, able to work on parallel tasks in isolated repository environments.",
    details:
      "The research preview moves Codex beyond one local session. Developers can assign several jobs at once, let each run in a separate environment, and come back to proposed changes, logs, and test results. OpenAI also highlighted real production use across OpenAI, Cisco, Temporal, Superhuman, and Kodiak, making the launch feel like normal engineering work rather than a demo.",
    sources: [sources.introducingCodex]
  },
  {
    date: "2025-06-03",
    category: "Access",
    title: "Codex expands to Plus and controlled internet access",
    summary:
      "Codex becomes available to Plus users and adds opt-in internet access during task execution for dependency installs, package upgrades, and tests.",
    details:
      "Access broadens beyond higher-tier users while OpenAI adds controls for a practical blocker: modern projects often need packages, docs, registries, or external resources. The opt-in framing keeps the trust boundary visible because internet access changes what the agent can reach during execution.",
    sources: [sources.introducingCodex, sources.changelog]
  },
  {
    date: "2025-08-21",
    category: "Speed",
    title: "Image inputs, caching, and automatic setup make Codex practical",
    summary:
      "Codex adds image prompts for frontend work, cached containers, and automatic environment setup across common package managers.",
    details:
      "This is one of the most practical workflow upgrades in the archive. Image inputs make visual UI requests easier to express, automatic setup reduces the blank-project tax, and cached containers cut the median cached start time from 48 seconds to 5 seconds. OpenAI also reported a 40% reduction in test failures for new environments.",
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
    sources: [sources.gpt5Codex, sources.changelog]
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
    sources: [sources.changelog]
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
    title: "GPT-5.3-Codex adds frontier capability and live steering",
    summary:
      "OpenAI releases GPT-5.3-Codex with stronger long-running capability, faster performance, and support for steering while the agent works.",
    details:
      "This is a major capability jump, not just a model-picker update. OpenAI positions GPT-5.3-Codex as expanding Codex across professional computer work, and the live steering behavior changes the interaction model: users can redirect the agent mid-turn without losing context.",
    sources: [sources.gpt53Codex, sources.changelog],
    metric: "25% faster"
  },
  {
    date: "2026-03-04",
    category: "App",
    title: "The Codex app reaches Windows",
    summary:
      "The desktop app becomes available on Windows with native PowerShell support, a native Windows sandbox, worktrees, skills, and automations.",
    details:
      "Windows support expands Codex from a Mac-first desktop workflow into the larger developer ecosystem. The important part is that it is not just a wrapper: OpenAI describes native PowerShell execution and a native Windows sandbox, so users can keep bounded permissions without moving into WSL or a virtual machine.",
    sources: [sources.app, sources.changelog]
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
    date: "2026-05-07",
    category: "Browser",
    title: "Codex for Chrome brings agents into browser tabs",
    summary:
      "The Chrome extension lets Codex work with apps and websites across background tabs while users control which sites it can access.",
    details:
      "This is a key beyond-code milestone because it gives Codex a direct path into browser-based tools without taking over the user's active browser session. It builds on the app's in-browser work and makes web workflows feel like part of the same agent surface.",
    sources: [sources.changelog]
  },
  {
    date: "2026-05-14",
    category: "Mobile",
    title: "Codex comes to ChatGPT mobile",
    summary:
      "Codex rolls out in preview on iOS and Android across all plans, letting users steer active work from their phones.",
    details:
      "This is the strongest mobile milestone: the ChatGPT mobile app can load live state from connected machines, including threads, approvals, plugins, screenshots, terminal output, diffs, and tests. The same announcement says more than 4 million people use Codex weekly, and adds Remote SSH general availability, hooks, access tokens, and HIPAA-compliant local use for eligible Enterprise workspaces.",
    sources: [sources.workAnywhere],
    metric: "4M+ weekly users"
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
