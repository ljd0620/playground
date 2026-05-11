# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A collection of self-contained, single-file HTML playgrounds for interactive visualization of technical concepts. Each file is a standalone educational tool — no build system, no server required. Currently contains 27 topic playgrounds plus an index navigation page.

## Topics Covered

| Category | Playgrounds |
|----------|------------|
| AI | `rag.html`, `ai-agent-harness.html`, `claude-code.html` |
| Spring | `spring-boot-startup.html`, `spring-circular-dep.html`, `spring-tx.html`, `feign.html`, `ribbon.html` |
| Redis | `redis-cluster.html`, `redis-sentinel.html`, `redis-db-consistency.html` |
| MySQL | `mysql-explain.html`, `mysql-isolation.html` |
| Kafka/MQ | `kafka.html`, `kafka-offset.html`, `rabbitmq-ordering.html` |
| Java 并发 | `threadpool.html`, `juc-tools.html` |
| 架构/高可用 | `ha-architecture.html`, `hystrix.html`, `rate-limiter.html`, `distributed-tx.html`, `dubbo.html` |
| JVM | `classloader.html` |
| 搜索引擎 | `es-inverted-index.html` |
| 安全 | `xss-csrf.html` |

## How to Run

Open any `.html` file directly in a browser. No build step or dev server needed. The `index.html` serves as a navigation portal with search and category filtering.

## Project Structure

```
├── index.html              # Navigation portal (search, filter, card grid)
├── 404.html                # Custom 404 page
├── favicon.svg             # Site favicon
├── shared/                 # Shared utilities loaded by all playground pages
│   ├── nav.css             # Common navigation styles
│   ├── nav.js              # Navigation bar component
│   ├── theme.js            # Dark/light theme toggle
│   └── analytics.js        # Analytics integration
├── *.html                  # Individual topic playgrounds (27 files)
└── CLAUDE.md               # This file
```

## Architecture

Each playground is a single HTML file containing:
- Embedded `<style>` block (dark theme, CSS Grid/Flexbox layout)
- Embedded `<script>` block (vanilla JS, no frameworks)
- Typical layout: left sidebar with controls/presets, main canvas/visualization area, bottom log/timeline panel
- Shared scripts loaded from `shared/` directory (nav, theme toggle, analytics)
- Language: Chinese (zh-CN)

## Conventions When Creating or Editing Playgrounds

- Single file, zero external dependencies (no CDN links, no npm packages)
- Only allowed external references: `shared/` directory utilities and Google Fonts (used by index)
- Dark theme using CSS custom properties (background ~`#0d1117`, accent colors for different states)
- Interactive controls in a sidebar: presets, sliders, toggles, dropdowns
- Animations/transitions to visualize processes step by step
- Use `Canvas` or DOM-based rendering depending on complexity
- Responsive within the viewport (`100vh`, `overflow:hidden`)
- All text in Chinese
- When adding a new playground, also add its entry to `index.html` card grid
