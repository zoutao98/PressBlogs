import{_ as t,r,o as i,c as a,a as n,e as o,b as e,d as c}from"./app.038fac40.js";const d={},l=n("h1",{id:"nginx",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nginx","aria-hidden":"true"},"#"),e(" NGINX")],-1),h={href:"http://nginx.org/en/docs/beginners_guide.html",target:"_blank",rel:"noopener noreferrer"},_=e("\u5B98\u7F51\u65B0\u624B\u6307\u5357"),g=n("h3",{id:"\u5DE5\u4F5C\u539F\u7406\u7B80\u4ECB",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5DE5\u4F5C\u539F\u7406\u7B80\u4ECB","aria-hidden":"true"},"#"),e(" \u5DE5\u4F5C\u539F\u7406\u7B80\u4ECB")],-1),p=e("nginx\u6709\u4E00\u4E2A\u4E3B\u8FDB\u7A0B"),u=n("strong",null,"master process",-1),x=e("\u548C\u51E0\u4E2A\u5DE5\u4F5C\u8FDB\u7A0B"),m=n("strong",null,"worker processes",-1),f=e("\u3002\u4E3B\u8FDB\u7A0B\u7684\u4E3B\u8981\u76EE\u7684\u662F\u8BFB\u53D6\u3001\u8BC4\u4F30\u914D\u7F6E\u548C\u4FDD\u6301\u5DE5\u4F5C\u8FDB\u7A0B\u3002\u5DE5\u4F5C\u8FDB\u7A0B\u5904\u7406\u5B9E\u9645\u8BF7\u6C42\u3002nginx\u91C7\u7528\u57FA\u4E8E\u4E8B\u4EF6\u7684\u6A21\u578B\u548C\u4F9D\u8D56\u4E8E\u64CD\u4F5C\u7CFB\u7EDF\u7684\u673A\u5236\u5728\u5DE5\u4F5C\u8FDB\u7A0B\u4E4B\u95F4\u9AD8\u6548\u5730\u5206\u914D\u8BF7\u6C42\u3002\u5DE5\u4F5C\u8FDB\u7A0B\u7684\u6570\u91CF\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u5B9A\u4E49\uFF0C\u53EF\u4EE5\u9488\u5BF9\u7ED9\u5B9A\u7684\u914D\u7F6E\u8FDB\u884C\u4FEE\u590D\uFF0C\u4E5F\u53EF\u4EE5\u6839\u636E\u53EF\u7528CPU\u5185\u6838\u7684\u6570\u91CF\u8FDB\u884C\u81EA\u52A8\u8C03\u6574"),v={href:"http://nginx.org/en/docs/ngx_core_module.html#worker_processes",target:"_blank",rel:"noopener noreferrer"},b=e("see worker processes"),k=c(`<p>nging\u7684\u5DE5\u4F5C\u6A21\u5F0F\u7531\u914D\u7F6E\u6587\u4EF6\u51B3\u5B9A\u3002\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u540D<strong>nginx.conf</strong> \u653E\u5728\u76EE\u5F55**/usr/local/nging/conf, /etc/ngingx, /usr/local/etc/nginx**</p><h3 id="\u542F\u52A8-\u505C\u6B62\u548C\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8-\u505C\u6B62\u548C\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E" aria-hidden="true">#</a> \u542F\u52A8\uFF0C\u505C\u6B62\u548C\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E</h3><p>\u8FD0\u884C\u53EF\u6267\u884C\u6587\u4EF6\u542F\u52A8nginx\uFF0C\u4E00\u65E6nginx\u542F\u52A8\uFF0C\u5C31\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528-s\u53C2\u6570\u8C03\u7528\u53EF\u6267\u884C\u6587\u4EF6\u6765\u63A7\u5236\u5B83\u3002\u4F7F\u7528\u4EE5\u4E0B\u8BED\u6CD5\uFF1A</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code>nginx -s signal
<span class="token comment"># signal\u53EF\u4EE5\u662F</span>
<span class="token comment"># stop  (fast shutdown)</span>
<span class="token comment"># quit  (graceful shutdown)</span>
<span class="token comment"># reload(reloading the configuration file)</span>
<span class="token comment"># reopen(reopening the log file)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u5C06\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\u7684\u547D\u4EE4\u53D1\u9001\u5230nginx\u6216\u91CD\u65B0\u542F\u52A8\u4E4B\u524D\uFF0C\u4E0D\u4F1A\u5E94\u7528\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u6240\u505A\u7684\u66F4\u6539\u3002</p><p>\u4E00\u65E6\u4E3B\u8FDB\u7A0B\u6536\u5230\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\u7684\u4FE1\u53F7\uFF0C\u5B83\u5C06\u68C0\u67E5\u65B0\u914D\u7F6E\u6587\u4EF6\u7684\u8BED\u6CD5\u6709\u6548\u6027\uFF0C\u5E76\u5C1D\u8BD5\u5E94\u7528\u5176\u4E2D\u63D0\u4F9B\u7684\u914D\u7F6E\u3002\u5982\u679C\u6210\u529F\uFF0C\u4E3B\u8FDB\u7A0B\u5C06\u542F\u52A8\u65B0\u7684\u5DE5\u4F5C\u8FDB\u7A0B\uFF0C\u5E76\u5411\u65E7\u7684\u5DE5\u4F5C\u8FDB\u7A0B\u53D1\u9001\u6D88\u606F\uFF0C\u8BF7\u6C42\u5B83\u4EEC\u5173\u95ED\u3002\u5426\u5219\uFF0C\u4E3B\u8FDB\u7A0B\u5C06\u56DE\u6EDA\u66F4\u6539\u5E76\u7EE7\u7EED\u4F7F\u7528\u65E7\u914D\u7F6E\u3002\u65E7\u7684\u5DE5\u4F5C\u8FDB\u7A0B\uFF0C\u63A5\u6536\u5230\u5173\u95ED\u547D\u4EE4\uFF0C\u505C\u6B62\u63A5\u53D7\u65B0\u8FDE\u63A5\u5E76\u7EE7\u7EED\u670D\u52A1\u5F53\u524D\u8BF7\u6C42\uFF0C\u76F4\u5230\u6240\u6709\u6B64\u7C7B\u8BF7\u6C42\u90FD\u5F97\u5230\u670D\u52A1\u3002\u4E4B\u540E\uFF0C\u65E7\u7684worker\u8FDB\u7A0B\u9000\u51FA\u3002</p>`,6),w=e("\u6709\u5173\u5411nginx\u53D1\u9001\u4FE1\u53F7\u7684\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605\u63A7\u5236 "),N={href:"http://nginx.org/en/docs/control.html",target:"_blank",rel:"noopener noreferrer"},V=e("Controlling nginx"),B=e("."),C=n("h3",{id:"\u914D\u7F6E\u6587\u4EF6\u7ED3\u6784",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u914D\u7F6E\u6587\u4EF6\u7ED3\u6784","aria-hidden":"true"},"#"),e(" \u914D\u7F6E\u6587\u4EF6\u7ED3\u6784")],-1),E=n("p",null,"nginx\u5305\u542B\u7531\u914D\u7F6E\u6587\u4EF6\u4E2D\u6307\u5B9A\u7684\u6307\u4EE4\u63A7\u5236\u7684\u6A21\u5757\u3002\u6307\u4EE4\u5206\u4E3A\u7B80\u5355\u6307\u4EE4\u548C\u5757\u6307\u4EE4\u3002\u7B80\u5355\u6307\u4EE4\u7531\u540D\u79F0\u548C\u53C2\u6570\u7EC4\u6210\uFF0C\u5B83\u4EEC\u4E4B\u95F4\u7528\u7A7A\u683C\u5206\u9694\uFF0C\u5E76\u4EE5\u5206\u53F7\uFF08\uFF1B\uFF09\u7ED3\u5C3E\u3002\u5757\u6307\u4EE4\u7684\u7ED3\u6784\u4E0E\u7B80\u5355\u6307\u4EE4\u76F8\u540C\uFF0C\u4F46\u5B83\u4E0D\u662F\u4EE5\u5206\u53F7\u7ED3\u675F\uFF0C\u800C\u662F\u4EE5\u4E00\u7EC4\u9644\u52A0\u6307\u4EE4\u7ED3\u675F\uFF0C\u8FD9\u4E9B\u6307\u4EE4\u7531\u5927\u62EC\u53F7\uFF08{\u548C}\uFF09\u5305\u56F4\u3002\u5982\u679C\u5757\u6307\u4EE4\u53EF\u4EE5\u5728\u5927\u62EC\u53F7\u4E2D\u5305\u542B\u5176\u4ED6\u6307\u4EE4\uFF0C\u5219\u79F0\u4E3A\u4E0A\u4E0B\u6587\uFF08\u4F8B\u5982\uFF1Aevents\u3001http\u3001server\u548Clocation\uFF09\u3002",-1),G=n("p",null,"\u653E\u7F6E\u5728\u4EFB\u4F55\u4E0A\u4E0B\u6587\u4E4B\u5916\u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u6307\u4EE4\u88AB\u8BA4\u4E3A\u662F\u5728\u4E3B\u4E0A\u4E0B\u6587\u4E2D\u3002\u4E8B\u4EF6\u548Chttp\u6307\u4EE4\u4F4D\u4E8E\u4E3B\u4E0A\u4E0B\u6587\u3001http\u4E2D\u7684\u670D\u52A1\u5668\u548C\u670D\u52A1\u5668\u4E2D\u7684\u4F4D\u7F6E\u3002",-1),I=n("p",null,"\u7B26\u53F7\u540E\u9762\u7684\u4E00\u884C\u7684\u5176\u4F59\u90E8\u5206\u88AB\u8BA4\u4E3A\u662F\u6CE8\u91CA",-1),L=n("h3",{id:"\u63D0\u4F9B\u9759\u6001\u5185\u5BB9",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u63D0\u4F9B\u9759\u6001\u5185\u5BB9","aria-hidden":"true"},"#"),e(" \u63D0\u4F9B\u9759\u6001\u5185\u5BB9")],-1);function q(P,S){const s=r("ExternalLinkIcon");return i(),a("div",null,[l,n("p",null,[n("a",h,[_,o(s)])]),g,n("p",null,[p,u,x,m,f,n("a",v,[b,o(s)])]),k,n("p",null,[w,n("a",N,[V,o(s)]),B]),C,E,G,I,L])}const U=t(d,[["render",q],["__file","beginner'sGuide.html.vue"]]);export{U as default};