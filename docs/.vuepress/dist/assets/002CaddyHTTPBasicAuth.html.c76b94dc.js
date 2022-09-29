import{_ as t,r as i,o as l,c as d,b as a,d as r,a as s,e as n}from"./app.1a2decc9.js";const c={},o=s(`<h2 id="caddy-http-\u57FA\u672C\u8EAB\u4EFD\u8BA4\u8BC1" tabindex="-1"><a class="header-anchor" href="#caddy-http-\u57FA\u672C\u8EAB\u4EFD\u8BA4\u8BC1" aria-hidden="true">#</a> Caddy HTTP \u57FA\u672C\u8EAB\u4EFD\u8BA4\u8BC1</h2><p>\u542F\u7528HTTP\u57FA\u672C\u8EAB\u4EFD\u9A8C\u8BC1\uFF0C\u53EF\u7528\u4E8E\u4FDD\u62A4\u5177\u6709\u7528\u6237\u540D\u548C\u6563\u5217\u5BC6\u7801\u7684\u76EE\u5F55\u548C\u6587\u4EF6\u3002</p><p>\u6CE8\u610F\uFF0C\u57FA\u672C\u8EAB\u4EFD\u9A8C\u8BC1\u5728\u666E\u901AHTTP\u4E0A\u5E76\u4E0D\u5B89\u5168\u3002\u5728\u51B3\u5B9A\u7528HTTP\u57FA\u672C\u8EAB\u4EFD\u9A8C\u8BC1\u4FDD\u62A4\u4EC0\u4E48\u65F6\uFF0C\u8981\u8C28\u614E\u3002</p><p>\u5F53\u7528\u6237\u8BF7\u6C42\u53D7\u4FDD\u62A4\u7684\u8D44\u6E90\u65F6\uFF0C\u5982\u679C\u7528\u6237\u5C1A\u672A\u63D0\u4F9B\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF0C\u6D4F\u89C8\u5668\u5C06\u63D0\u793A\u7528\u6237\u8F93\u5165\u7528\u6237\u540D\u548C\u5BC6\u7801\u3002\u5982\u679C\u5728Authorization\u5934\u4E2D\u5B58\u5728\u9002\u5F53\u7684\u51ED\u636E\uFF0C\u670D\u52A1\u5668\u5C06\u6388\u4E88\u5BF9\u8D44\u6E90\u7684\u8BBF\u95EE\u6743\u3002\u5982\u679C\u62A5\u5934\u4E22\u5931\u6216\u51ED\u636E\u4E0D\u6B63\u786E\uFF0C\u670D\u52A1\u5668\u5C06\u54CD\u5E94HTTP 401 Unauthorized\u3002</p><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>basicauth [&lt;matcher&gt;] [&lt;hash_algorithm&gt; [&lt;realm&gt;]] {
	&lt;username&gt; &lt;hashed_password&gt; [&lt;salt_base64&gt;]
	...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>&lt;hash_algorithm&gt;\u662F\u8BE5\u914D\u7F6E\u4E2D\u7528\u4E8E\u54C8\u5E0C\u7684\u5BC6\u7801\u54C8\u5E0C\u7B97\u6CD5\uFF08\u6216KDF\uFF09\u7684\u540D\u79F0\u3002\u9ED8\u8BA4\u503C\uFF1Abcrypt</li><li>&lt;realm&gt;\u662F\u81EA\u5B9A\u4E49\u9886\u57DF\u7684\u540D\u79F0\u3002</li><li>&lt;username&gt;\u662F\u7528\u6237\u540D\u6216\u7528\u6237ID\u3002</li><li>&lt;hashed_password&gt;\u662F\u5BC6\u7801\u54C8\u5E0C\u3002</li><li>\u5982\u679C\u9700\u8981\u52A0\u76D0\uFF0C\u5219&lt;salt_base64&gt;\u662F\u5BC6\u7801\u76D0\u7684base-64\u7F16\u7801\u3002</li></ol><h2 id="\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a> \u4F8B\u5B50</h2>`,8),p=n("\u9996\u5148\u4F7F\u7528"),u={href:"https://caddyserver.com/docs/command-line#caddy-hash-password",target:"_blank",rel:"noopener noreferrer"},v=a("code",null,"caddy hash-password",-1),h=n(" \u751F\u6210\u54C8\u5E0C\u5BC6\u7801"),m=s(`<p>\u57FA\u4E8E\u4E0A\u4E00\u7BC7\u7684\u9759\u6001\u6587\u4EF6\u670D\u52A1\u5668\uFF0C\u6211\u4EEC\u8FD9\u6837\u7F16\u5199Caddyfile</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>localhost {
	root /* /home/ads
    file_server
    basicauth /* {
		user JDJhJDE0JGJ4UnowMHoxN1dpSjd0clVpREpydHVXTlQ0OW1TVnpGT3NmSTJGL0czQzZYdi5TR3Q0ZTV1
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u6709\u4E2A\u9700\u8981\u6CE8\u610F\u7684\u5730\u65B9\uFF0C\u5B98\u7F51\u4E0A\u9ED8\u8BA4\u54C8\u5E0C\u51FD\u6570\u662Fbcrypt\uFF0C\u5B98\u7F51\u4E3E\u4F8B\u4E5F\u662Fbcrypt\u7684\u54C8\u5E0C\u660E\u6587\uFF0C\u4E3A\u4EC0\u4E48\u6211\u4E0A\u9762\u586B\u7684\u4E0D\u662F\u4E00\u4E2A\u957F\u5F97\u50CFbcrypt\u7684\u54C8\u5E0C\u5BC6\u7801\u5462</p><p>\u8FD9\u5C31\u9700\u8981\u770B caddy hash-password \u7684\u5E2E\u52A9\u8BF4\u660E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ caddy <span class="token builtin class-name">help</span> hash-password
Convenient way to <span class="token builtin class-name">hash</span> a plaintext password. The resulting
<span class="token builtin class-name">hash</span> is written to stdout as a base64 string.

--plaintext, when omitted, will be <span class="token builtin class-name">read</span> from stdin. If
Caddy is attached to a controlling tty, the plaintext will
not be echoed.

<span class="token parameter variable">--algorithm</span> may be bcrypt or scrypt. If script, the default
parameters are used.

Use the <span class="token parameter variable">--salt</span> flag <span class="token keyword">for</span> algorithms <span class="token function">which</span> require a salt to
be provided <span class="token punctuation">(</span>scrypt<span class="token punctuation">)</span>.

usage:
  caddy hash-password <span class="token punctuation">[</span>--algorithm <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--salt <span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--plaintext <span class="token operator">&lt;</span>password<span class="token operator">&gt;</span><span class="token punctuation">]</span>

flags:
  <span class="token parameter variable">-algorithm</span> string
        Name of the <span class="token builtin class-name">hash</span> algorithm <span class="token punctuation">(</span>default <span class="token string">&quot;bcrypt&quot;</span><span class="token punctuation">)</span>
  <span class="token parameter variable">-plaintext</span> string
        The plaintext password
  <span class="token parameter variable">-salt</span> string
        The password salt

Full documentation is available at:
https://caddyserver.com/docs/command-line
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>The resulting hash is written to stdout as a base64 string.</strong></p><p>\u6240\u4EE5\u660E\u767D\u4E3A\u4EC0\u4E48\u4E86\u5427\u3002</p>`,7);function b(g,k){const e=i("ExternalLinkIcon");return l(),d("div",null,[o,a("p",null,[p,a("a",u,[v,r(e)]),h]),m])}const y=t(c,[["render",b],["__file","002CaddyHTTPBasicAuth.html.vue"]]);export{y as default};
