import{_ as e,c as o,o as r,a as t}from"./app.705411ad.js";const b='{"title":"\u8DE8\u57DF\u95EE\u9898","description":"","frontmatter":{},"headers":[],"relativePath":"doc/advanced/cors.md"}',a={},c=t('<h1 id="\u8DE8\u57DF\u95EE\u9898" tabindex="-1">\u8DE8\u57DF\u95EE\u9898 <a class="header-anchor" href="#\u8DE8\u57DF\u95EE\u9898" aria-hidden="true">#</a></h1><p>\u5E73\u65F6\u88AB\u95EE\u5230\u6700\u591A\u7684\u95EE\u9898\u8FD8\u662F\u5173\u4E8E\u8DE8\u57DF\u7684\uFF0C\u5176\u5B9E\u8DE8\u57DF\u95EE\u9898\u771F\u7684\u4E0D\u662F\u4E00\u4E2A\u5F88\u96BE\u89E3\u51B3\u7684\u95EE\u9898\u3002\u8FD9\u91CC\u6211\u6765\u7B80\u5355\u603B\u7ED3\u4E00\u4E0B\u6211\u63A8\u8350\u7684\u51E0\u79CD\u8DE8\u57DF\u89E3\u51B3\u65B9\u6848\u3002</p><p>\u6211\u6700\u63A8\u8350\u7684\u4E5F\u662F\u6211\u5DE5\u4F5C\u4E2D\u5728\u4F7F\u7528\u7684\u65B9\u5F0F\u5C31\u662F\uFF1A\xA0<code>cors</code>\xA0\u5168\u79F0\u4E3A Cross Origin Resource Sharing\uFF08\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB\uFF09\u3002\u8FD9\u79CD\u65B9\u6848\u5BF9\u4E8E\u524D\u7AEF\u6765\u8BF4\u6CA1\u6709\u4EC0\u4E48\u5DE5\u4F5C\u91CF\uFF0C\u548C\u6B63\u5E38\u53D1\u9001\u8BF7\u6C42\u5199\u6CD5\u4E0A\u6CA1\u6709\u4EFB\u4F55\u533A\u522B\uFF0C\u5DE5\u4F5C\u91CF\u57FA\u672C\u90FD\u5728\u540E\u7AEF\u8FD9\u91CC\u3002\u6BCF\u4E00\u6B21\u8BF7\u6C42\uFF0C\u6D4F\u89C8\u5668\u5FC5\u987B\u5148\u4EE5\xA0<code>OPTIONS</code>\xA0\u8BF7\u6C42\u65B9\u5F0F\u53D1\u9001\u4E00\u4E2A\u9884\u8BF7\u6C42\uFF08\u4E5F\u4E0D\u662F\u6240\u6709\u8BF7\u6C42\u90FD\u4F1A\u53D1\u9001 options\uFF0C\u5C55\u5F00\u4ECB\u7ECD\xA0<a href="https://panjiachen.github.io/awesome-bookmarks/blog/cs.html#cors" target="_blank" rel="noopener noreferrer">\u70B9\u6211\xA0</a>\uFF09\uFF0C\u901A\u8FC7\u9884\u68C0\u8BF7\u6C42\u4ECE\u800C\u83B7\u77E5\u670D\u52A1\u5668\u7AEF\u5BF9\u8DE8\u6E90\u8BF7\u6C42\u652F\u6301\u7684\xA0<code>HTTP</code>\xA0\u65B9\u6CD5\u3002\u5728\u786E\u8BA4\u670D\u52A1\u5668\u5141\u8BB8\u8BE5\u8DE8\u6E90\u8BF7\u6C42\u7684\u60C5\u51B5\u4E0B\uFF0C\u518D\u4EE5\u5B9E\u9645\u7684\xA0<code>HTTP</code>\xA0\u8BF7\u6C42\u65B9\u6CD5\u53D1\u9001\u90A3\u4E2A\u771F\u6B63\u7684\u8BF7\u6C42\u3002\u63A8\u8350\u7684\u539F\u56E0\u662F\uFF1A\u53EA\u8981\u7B2C\u4E00\u6B21\u914D\u597D\u4E86\uFF0C\u4E4B\u540E\u4E0D\u7BA1\u6709\u591A\u5C11\u63A5\u53E3\u548C\u9879\u76EE\u590D\u7528\u5C31\u53EF\u4EE5\u4E86\uFF0C\u4E00\u52B3\u6C38\u9038\u7684\u89E3\u51B3\u4E86\u8DE8\u57DF\u95EE\u9898\uFF0C\u800C\u4E14\u4E0D\u7BA1\u662F\u5F00\u53D1\u73AF\u5883\u8FD8\u662F\u6B63\u5F0F\u73AF\u5883\u90FD\u80FD\u65B9\u4FBF\u7684\u4F7F\u7528\u3002\u8BE6\u7EC6\xA0<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS" target="_blank" rel="noopener noreferrer">MDN \u6587\u6863</a></p><p>\u4F46\u603B\u6709\u540E\u7AEF\u89C9\u5F97\u9EBB\u70E6\u4E0D\u60F3\u8FD9\u4E48\u641E\uFF0C\u90A3\u7EAF\u524D\u7AEF\u4E5F\u662F\u6709\u89E3\u51B3\u65B9\u6848\u7684\u3002</p><p>\u5728\xA0<code>dev</code>\xA0\u5F00\u53D1\u6A21\u5F0F\u4E0B\u53EF\u4EE5\u4E0B\u4F7F\u7528 webpack \u7684\xA0<code>proxy</code>\xA0\u4F7F\u7528\u4E5F\u662F\u5F88\u65B9\u4FBF\uFF0C\u53C2\u7167\xA0<a href="https://www.webpackjs.com/configuration/dev-server/#devserver-proxy" target="_blank" rel="noopener noreferrer">\u6587\u6863</a>\u5C31\u4F1A\u4F7F\u7528\u4E86\uFF0C\u697C\u4E3B\u4E00\u4E9B\u4E2A\u4EBA\u9879\u76EE\u4F7F\u7528\u7684\u8BE5\u65B9\u6CD5\u3002\u4F46\u8FD9\u79CD\u65B9\u6CD5\u5728\u751F\u4EA7\u73AF\u5883\u662F\u4E0D\u80FD\u4F7F\u7528\u7684\u3002\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u9700\u8981\u4F7F\u7528\xA0<code>nginx</code>\xA0\u8FDB\u884C\u53CD\u5411\u4EE3\u7406\u3002\u4E0D\u7BA1\u662F\xA0<code>proxy</code>\xA0\u548C\xA0<code>nginx</code>\xA0\u7684\u539F\u7406\u90FD\u662F\u4E00\u6837\u7684\uFF0C\u901A\u8FC7\u642D\u5EFA\u4E00\u4E2A\u4E2D\u8F6C\u670D\u52A1\u5668\u6765\u8F6C\u53D1\u8BF7\u6C42\u89C4\u907F\u8DE8\u57DF\u7684\u95EE\u9898\u3002</p><table><thead><tr><th>\u5F00\u53D1\u73AF\u5883</th><th>\u751F\u4EA7\u73AF\u5883</th></tr></thead><tbody><tr><td>cors</td><td>cors</td></tr><tr><td>proxy</td><td>nginx</td></tr></tbody></table><p>\u8FD9\u91CC\u6211\u53EA\u63A8\u8350\u8FD9\u4E24\u79CD\u65B9\u5F0F\u8DE8\u57DF\uFF0C\u5176\u5B83\u7684\u8DE8\u57DF\u65B9\u5F0F\u90FD\u8FD8\u6709\u5F88\u591A\u4F46\u90FD\u4E0D\u63A8\u8350\uFF0C\u771F\u5FC3\u4E3B\u6D41\u7684\u4E5F\u5C31\u8FD9\u4E24\u79CD\u65B9\u5F0F\u3002</p>',7),d=[c];function n(s,p,_,i,h,l){return r(),o("div",null,d)}var g=e(a,[["render",n]]);export{b as __pageData,g as default};
