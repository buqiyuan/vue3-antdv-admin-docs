import{_ as e,c as o,o as c,a4 as a}from"./chunks/framework.MujF0vON.js";const p=JSON.parse('{"title":"Mock 服务","description":"","frontmatter":{},"headers":[],"relativePath":"guide/mock-service.md","filePath":"guide/mock-service.md"}'),t={name:"guide/mock-service.md"},r=a('<h1 id="mock-服务" tabindex="-1">Mock 服务 <a class="header-anchor" href="#mock-服务" aria-label="Permalink to &quot;Mock 服务&quot;">​</a></h1><p>采用 <a href="https://mswjs.io/" target="_blank" rel="noreferrer">msw</a> 作为 mock 数据服务。</p><h2 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h2><ul><li>集成于前端，不需要写 node 中间件（比如 express, koa）</li><li>语法基本和 express 一致</li><li>直接通过 chrome 快速 debugger</li><li>不存在跨域问题</li></ul><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p>当 <code>Service Worker</code> 无法浏览器中正常运行时，<code>msw</code> 将采用 <code>fallback mode</code>，回退到传统的 <code>fetch/XHR</code> 补丁方式，即通过拦截 <code>fetch</code> 或 <code>XMLHttpRequest</code> 以保证 <code>mock</code> 功能的正常使用。如果你不需要通过 <code>network</code> 查看 <code>mock</code> 相关的网络请求，则无需关心此问题。</p></div><h2 id="如何使用-msw" tabindex="-1">如何使用 msw <a class="header-anchor" href="#如何使用-msw" aria-label="Permalink to &quot;如何使用 msw&quot;">​</a></h2><p>具体的使用，可以参考<a href="https://mswjs.io/" target="_blank" rel="noreferrer">Msw Docs</a></p>',7),s=[r];function d(i,l,n,m,h,_){return c(),o("div",null,s)}const u=e(t,[["render",d]]);export{p as __pageData,u as default};
