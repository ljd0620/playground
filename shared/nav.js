(function() {
  var PAGES = [
    { file: 'rag.html', title: 'RAG 工作原理' },
    { file: 'ai-agent-harness.html', title: 'AI Agent 执行框架' },
    { file: 'claude-code.html', title: 'Claude Code 工作原理' },
    { file: 'spring-boot-startup.html', title: 'Spring Boot 启动流程' },
    { file: 'spring-circular-dep.html', title: 'Spring 循环依赖' },
    { file: 'spring-tx.html', title: 'Spring 事务管理' },
    { file: 'feign.html', title: 'Feign 声明式调用' },
    { file: 'ribbon.html', title: 'Ribbon 负载均衡' },
    { file: 'redis-cluster.html', title: 'Redis Cluster' },
    { file: 'redis-sentinel.html', title: 'Redis Sentinel' },
    { file: 'redis-db-consistency.html', title: 'Redis 与数据库一致性' },
    { file: 'mysql-explain.html', title: 'MySQL Explain' },
    { file: 'mysql-isolation.html', title: 'MySQL 事务隔离' },
    { file: 'kafka.html', title: 'Kafka 架构' },
    { file: 'kafka-offset.html', title: 'Kafka Offset 管理' },
    { file: 'rabbitmq.html', title: 'RabbitMQ 运行原理' },
    { file: 'rabbitmq-ordering.html', title: 'RabbitMQ 消息顺序' },
    { file: 'threadpool.html', title: '线程池' },
    { file: 'juc-tools.html', title: 'JUC 并发工具' },
    { file: 'classloader.html', title: '类加载机制' },
    { file: 'ha-architecture.html', title: '高可用架构' },
    { file: 'hystrix.html', title: 'Hystrix 熔断' },
    { file: 'rate-limiter.html', title: '限流算法' },
    { file: 'es-inverted-index.html', title: 'ES 倒排索引' },
    { file: 'distributed-tx.html', title: '分布式事务方案' },
    { file: 'xss-csrf.html', title: 'XSS & CSRF' }
  ];

  var SIDEBAR_PAGES = [
    'rag.html', 'redis-cluster.html', 'mysql-isolation.html',
    'xss-csrf.html', 'juc-tools.html', 'spring-boot-startup.html',
    'classloader.html', 'threadpool.html'
  ];

  var pathParts = location.pathname.replace(/\/+$/, '').split('/');
  var currentFile = pathParts.pop() || 'index.html';
  if (currentFile === 'index.html' || currentFile === '404.html') return;

  var idx = -1;
  for (var i = 0; i < PAGES.length; i++) {
    if (PAGES[i].file === currentFile || PAGES[i].file === currentFile + '.html') { idx = i; break; }
  }

  var nav = document.createElement('div');
  nav.className = 'pg-nav';

  // Home link
  var home = document.createElement('a');
  home.className = 'pg-nav-home';
  home.href = 'index.html';
  home.innerHTML = '&#8592; 首页';
  nav.appendChild(home);

  // Separator
  var sep1 = document.createElement('span');
  sep1.className = 'pg-nav-sep';
  nav.appendChild(sep1);

  // Title
  var title = document.createElement('span');
  title.className = 'pg-nav-title';
  title.textContent = idx >= 0 ? PAGES[idx].title : document.title;
  nav.appendChild(title);

  // Prev/Next
  if (idx > 0) {
    var prev = document.createElement('a');
    prev.className = 'pg-nav-prev';
    prev.href = PAGES[idx - 1].file;
    prev.textContent = '← ' + PAGES[idx - 1].title;
    nav.appendChild(prev);
  }
  if (idx >= 0 && idx < PAGES.length - 1) {
    var next = document.createElement('a');
    next.className = 'pg-nav-next';
    next.href = PAGES[idx + 1].file;
    next.textContent = PAGES[idx + 1].title + ' →';
    nav.appendChild(next);
  }

  // Separator
  var sep2 = document.createElement('span');
  sep2.className = 'pg-nav-sep';
  nav.appendChild(sep2);

  // Theme toggle button
  var themeBtn = document.createElement('button');
  themeBtn.className = 'pg-nav-theme-btn';
  themeBtn.title = '切换主题';
  themeBtn.innerHTML = '&#9788;';
  themeBtn.onclick = function() {
    if (typeof window.pgToggleTheme === 'function') {
      window.pgToggleTheme();
    }
  };
  nav.appendChild(themeBtn);

  document.body.insertBefore(nav, document.body.firstChild);
  document.body.classList.add('has-pg-nav');

  // Mobile hint for sidebar-layout pages
  var matchedFile = idx >= 0 ? PAGES[idx].file : currentFile;
  var isSidebarPage = SIDEBAR_PAGES.indexOf(matchedFile) !== -1;
  if (isSidebarPage) {
    var hint = document.createElement('div');
    hint.className = 'pg-mobile-hint';
    hint.innerHTML = '建议在桌面设备上体验此页面以获得最佳交互效果 <button class="pg-mobile-hint-close" onclick="this.parentElement.remove()">✕</button>';
    document.body.appendChild(hint);
  }
})();
