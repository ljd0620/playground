(function() {
  var LIGHT_VARS = {
    '--bg-primary': '#f7f8fb',
    '--bg-card': '#ffffff',
    '--bg-elevated': '#f0f3f8',
    '--bg-input': '#ebeef4',
    '--border': '#d4dae5',
    '--border-hover': '#a8b4c6',
    '--text-primary': '#111827',
    '--text-secondary': '#4b5563',
    '--text-muted': '#9ca3af',
    '--accent-blue': '#2563eb',
    '--accent-green': '#059669',
    '--accent-purple': '#7c3aed',
    '--accent-orange': '#d97706',
    '--accent-red': '#dc2626',
    '--accent-cyan': '#0891b2',
    '--accent-pink': '#db2777',
    '--glow-blue': 'rgba(37,99,235,0.1)',
    '--glow-green': 'rgba(5,150,105,0.08)',
    '--glow-purple': 'rgba(124,58,237,0.08)'
  };

  var LIGHT_STYLE_ID = 'pg-light-theme-css';

  var LIGHT_CSS = '\
/* === Light Theme Global Overrides === */\n\
body::before { background: radial-gradient(ellipse 80% 60% at 50% -20%, rgba(37,99,235,0.03), transparent 70%), radial-gradient(ellipse 60% 40% at 80% 10%, rgba(124,58,237,0.02), transparent 60%) !important; }\n\
\n\
/* Navigation */\n\
.pg-nav { background: rgba(247,248,251,0.92) !important; border-bottom-color: #d4dae5 !important; }\n\
.pg-nav-home, .pg-nav-prev, .pg-nav-next, .pg-nav-theme-btn { background: #f0f3f8 !important; border-color: #d4dae5 !important; }\n\
.pg-nav-title { color: #111827 !important; }\n\
\n\
/* Headers */\n\
.header { background: linear-gradient(180deg, rgba(37,99,235,0.03) 0%, transparent 100%) !important; }\n\
.header h1, header h1 { background: linear-gradient(135deg, #111827 0%, #2563eb 60%, #7c3aed 100%) !important; -webkit-background-clip: text !important; background-clip: text !important; -webkit-text-fill-color: transparent !important; }\n\
\n\
/* Cards and panels */\n\
.card, .panel, .sec, .info-panel, .message-trace { border-radius: var(--radius); border-color: #d4dae5 !important; box-shadow: 0 1px 3px rgba(0,0,0,0.04) !important; }\n\
.card:hover, .panel:hover { border-color: #a8b4c6 !important; box-shadow: 0 8px 24px rgba(37,99,235,0.06), 0 2px 8px rgba(0,0,0,0.04) !important; }\n\
\n\
/* Elevated surfaces */\n\
.loop-step, .producer-node, .ctx-item, .info-card, .param-group { background: #f0f3f8 !important; border-color: #d4dae5 !important; }\n\
\n\
/* Active states */\n\
.loop-step.active { background: linear-gradient(135deg, rgba(37,99,235,0.06), rgba(37,99,235,0.02)) !important; border-color: #2563eb !important; }\n\
.loop-step.completed { border-color: rgba(5,150,105,0.4) !important; }\n\
\n\
/* Trace entries */\n\
.trace-entry { backdrop-filter: none !important; }\n\
.trace-user { background: rgba(37,99,235,0.05) !important; border-color: #2563eb !important; }\n\
.trace-harness { background: rgba(5,150,105,0.04) !important; border-color: #059669 !important; }\n\
.trace-llm { background: rgba(124,58,237,0.04) !important; border-color: #7c3aed !important; }\n\
.trace-tool { background: rgba(217,119,6,0.04) !important; border-color: #d97706 !important; }\n\
.trace-error { background: rgba(220,38,38,0.04) !important; border-color: #dc2626 !important; }\n\
\n\
/* Inputs and controls */\n\
select, input[type="text"], input[type="range"], textarea { background: #ebeef4 !important; border-color: #d4dae5 !important; color: #111827 !important; }\n\
select:focus, input:focus, textarea:focus { border-color: #2563eb !important; box-shadow: 0 0 0 3px rgba(37,99,235,0.1) !important; }\n\
\n\
/* Buttons — keep gradients but lighten */\n\
.btn-run { background: linear-gradient(135deg, #059669, #047857) !important; }\n\
.btn-step { background: linear-gradient(135deg, #2563eb, #1d4ed8) !important; }\n\
.btn-inject { background: linear-gradient(135deg, #d97706, #b45309) !important; }\n\
.btn-reset { background: #f0f3f8 !important; border-color: #d4dae5 !important; color: #4b5563 !important; }\n\
\n\
/* Presets */\n\
.preset-btn, .pbtn { background: #f0f3f8 !important; border-color: #d4dae5 !important; color: #4b5563 !important; }\n\
.preset-btn:hover, .pbtn:hover { border-color: #2563eb !important; color: #2563eb !important; background: rgba(37,99,235,0.04) !important; }\n\
.preset-btn.active, .pbtn.on, .pbtn.active { background: rgba(37,99,235,0.08) !important; border-color: #2563eb !important; color: #2563eb !important; }\n\
\n\
/* Tabs */\n\
.tab { color: #4b5563 !important; }\n\
.tab:hover { color: #111827 !important; background: rgba(37,99,235,0.03) !important; }\n\
.tab.active { color: #2563eb !important; border-bottom-color: #2563eb !important; background: rgba(37,99,235,0.04) !important; }\n\
\n\
/* Logs and monospace areas */\n\
.event-log, .log-area, .ack-flow, .message-trace { background: #f7f8fb !important; border-color: #d4dae5 !important; }\n\
.log-entry { color: #4b5563 !important; border-bottom-color: #ebeef4 !important; }\n\
.log-entry .time { color: #9ca3af !important; }\n\
\n\
/* Context bar */\n\
.context-bar-track { background: #ebeef4 !important; border-color: #d4dae5 !important; }\n\
\n\
/* Scrollbars */\n\
::-webkit-scrollbar-track { background: #f7f8fb !important; }\n\
::-webkit-scrollbar-thumb { background: #d4dae5 !important; }\n\
::-webkit-scrollbar-thumb:hover { background: #a8b4c6 !important; }\n\
\n\
/* Section titles */\n\
.section-title, .sec-t, .panel-title { color: #4b5563 !important; }\n\
\n\
/* Info text */\n\
.info-text { color: #374151 !important; }\n\
\n\
/* Sidebar pages */\n\
.sb, .controls-sidebar, .controls { background: #ffffff !important; border-color: #d4dae5 !important; }\n\
\n\
/* Phase bars and step indicators */\n\
.phase-tab, .phase-bar { border-color: #d4dae5 !important; }\n\
.phase-tab.active { background: rgba(37,99,235,0.04) !important; }\n\
.phase-tab.done { color: #059669 !important; }\n\
\n\
/* Chunks and items */\n\
.chunk { background: #f0f3f8 !important; border-color: #d4dae5 !important; }\n\
.chunk.highlight { border-color: #7c3aed !important; background: rgba(124,58,237,0.04) !important; }\n\
.chunk.selected { border-color: #059669 !important; background: rgba(5,150,105,0.04) !important; }\n\
\n\
/* Copy button */\n\
.copy-btn, .cb { background: #f0f3f8 !important; border-color: #d4dae5 !important; color: #4b5563 !important; }\n\
.copy-btn:hover, .cb:hover { border-color: #2563eb !important; color: #2563eb !important; }\n\
\n\
/* Badges */\n\
.iter-badge { background: #f0f3f8 !important; border-color: #d4dae5 !important; }\n\
\n\
/* Key legend */\n\
.key-item { color: #4b5563 !important; }\n\
\n\
/* Toggle switches */\n\
.toggle-sw { background: #d4dae5 !important; }\n\
.toggle-row.on .toggle-sw { background: #059669 !important; }\n\
\n\
/* Mobile hint */\n\
.pg-mobile-hint { background: rgba(37,99,235,0.06) !important; border-top-color: #2563eb !important; color: #4b5563 !important; }\n\
\n\
/* ====== SVG & Canvas — Global Light Mode ====== */\n\
/* SVG text colors */\n\
svg text { fill: #374151 !important; }\n\
svg text[fill="#4da3ff"], svg text[fill="#58a6ff"] { fill: #2563eb !important; }\n\
svg text[fill="#b07aff"], svg text[fill="#d2a8ff"], svg text[fill="#8957e5"] { fill: #7c3aed !important; }\n\
svg text[fill="#36d986"], svg text[fill="#7ee787"], svg text[fill="#238636"] { fill: #059669 !important; }\n\
svg text[fill="#ff9f43"], svg text[fill="#f0b849"], svg text[fill="#e3b341"] { fill: #d97706 !important; }\n\
svg text[fill="#ff5c6c"], svg text[fill="#f85149"], svg text[fill="#da3633"] { fill: #dc2626 !important; }\n\
svg text[fill="#22d3ee"] { fill: #0891b2 !important; }\n\
svg text[fill="#f472b6"] { fill: #db2777 !important; }\n\
svg text[fill="#7d8da0"], svg text[fill="#8b949e"] { fill: #4b5563 !important; }\n\
svg text[fill="#4a5568"], svg text[fill="#484f58"] { fill: #6b7280 !important; }\n\
svg text[fill="#e8edf5"], svg text[fill="#c9d1d9"], svg text[fill="#fff"], svg text[fill="#ffffff"], svg text[fill="white"] { fill: #111827 !important; }\n\
\n\
/* SVG rect/circle/path — dark backgrounds → light */\n\
svg rect[fill^="#0"], svg rect[fill^="#1"],\n\
svg circle[fill^="#0"], svg circle[fill^="#1"],\n\
svg path[fill^="#0"], svg path[fill^="#1"] {\n\
  fill: #f0f3f8 !important;\n\
}\n\
/* Preserve colored accents strokes/fills (override the above for colored elements) */\n\
svg rect[fill="#4da3ff"], svg rect[fill="#2563eb"], svg circle[fill="#4da3ff"], svg circle[fill="#2563eb"] { fill: #2563eb !important; }\n\
svg rect[fill="#b07aff"], svg rect[fill="#7c3aed"], svg circle[fill="#b07aff"] { fill: #7c3aed !important; }\n\
svg rect[fill="#36d986"], svg rect[fill="#059669"], svg circle[fill="#36d986"] { fill: #059669 !important; }\n\
svg rect[fill="#ff9f43"], svg rect[fill="#d97706"], svg circle[fill="#ff9f43"] { fill: #d97706 !important; }\n\
svg rect[fill="#ff5c6c"], svg rect[fill="#dc2626"], svg circle[fill="#ff5c6c"] { fill: #dc2626 !important; }\n\
svg rect[fill="#22d3ee"], svg circle[fill="#22d3ee"] { fill: #0891b2 !important; }\n\
svg rect[fill="#f472b6"], svg circle[fill="#f472b6"] { fill: #db2777 !important; }\n\
\n\
/* SVG gradient fills → flat light */\n\
svg rect[fill^="url(#"] { fill: #f7f8fb !important; }\n\
\n\
/* SVG strokes — dark utility strokes → light */\n\
svg line[stroke="#3a4f6b"], svg line[stroke="#21262d"], svg line[stroke="#30363d"] { stroke: #c8d0dc !important; }\n\
svg rect[stroke="#2d4a6f"], svg rect[stroke="#30363d"], svg rect[stroke="#21262d"] { stroke: #d4dae5 !important; }\n\
svg path[stroke="#3a4f6b"], svg path[stroke="#30363d"] { stroke: #c8d0dc !important; }\n\
svg marker path[fill="#3a4f6b"] { fill: #a8b4c6 !important; }\n\
\n\
/* SVG containers */\n\
.arch-svg-container, .viz-container, .svg-container { background: #f7f8fb !important; border-color: #d4dae5 !important; }\n\
\n\
/* Canvas */\n\
canvas { border-radius: 8px; }\n\
\n\
/* Slot grids and small viz elements */\n\
.slot-cell { opacity: 0.85; }\n\
.node-badge { background: #f0f3f8 !important; border: 1px solid #d4dae5; }\n\
\n\
/* Override for inline style dark backgrounds on divs */\n\
[style*="background"][style*="#0"], [style*="background"][style*="#1"] {\n\
  background-color: var(--bg-elevated) !important;\n\
}\n\
';

  var stored = localStorage.getItem('pg-theme');
  var isDark = stored !== 'light';

  function applyTheme(dark) {
    var root = document.documentElement;
    if (dark) {
      root.removeAttribute('data-theme');
      Object.keys(LIGHT_VARS).forEach(function(k) {
        root.style.removeProperty(k);
      });
      var existing = document.getElementById(LIGHT_STYLE_ID);
      if (existing) existing.remove();
    } else {
      root.setAttribute('data-theme', 'light');
      Object.keys(LIGHT_VARS).forEach(function(k) {
        root.style.setProperty(k, LIGHT_VARS[k]);
      });
      if (!document.getElementById(LIGHT_STYLE_ID)) {
        var style = document.createElement('style');
        style.id = LIGHT_STYLE_ID;
        style.textContent = LIGHT_CSS;
        document.head.appendChild(style);
      }
    }
    var btn = document.querySelector('.pg-nav-theme-btn');
    if (btn) btn.innerHTML = dark ? '&#9788;' : '&#9790;';
  }

  window.pgToggleTheme = function() {
    isDark = !isDark;
    localStorage.setItem('pg-theme', isDark ? 'dark' : 'light');
    applyTheme(isDark);
  };

  if (!isDark) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() { applyTheme(false); });
    } else {
      applyTheme(false);
    }
  }
})();
