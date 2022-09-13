import{_ as n,o as a,c as s,e}from"./app.d2a2caf0.js";const i={},c=e(`<h3 id="docker\u955C\u50CF\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#docker\u955C\u50CF\u547D\u4EE4" aria-hidden="true">#</a> docker\u955C\u50CF\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5217\u51FA\u672C\u5730\u4E3B\u673A\u4E0A\u7684\u955C\u50CF</span>
<span class="token function">sudo</span> <span class="token function">docker</span> images
<span class="token comment"># OPTIONS</span>
<span class="token comment"># -a\uFF1A\u5217\u51FA\u672C\u5730\u6240\u6709\u955C\u50CF</span>
<span class="token comment"># -q\uFF1A\u53EA\u663E\u793A\u955C\u50CFID</span>
<span class="token comment"># --digests\uFF1A\u663E\u793A\u955C\u50CF\u7684\u6458\u8981</span>
<span class="token comment"># --no-trunc\uFF1A\u663E\u793A\u5B8C\u6210\u955C\u50CF\u4FE1\u606F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#</span>
<span class="token function">sudo</span> <span class="token function">docker</span> search imgName
<span class="token comment"># </span>
<span class="token function">sudo</span> <span class="token function">docker</span> pull imgName
<span class="token comment">#</span>
<span class="token function">sudo</span> <span class="token function">docker</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker\u5BB9\u5668\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#docker\u5BB9\u5668\u547D\u4EE4" aria-hidden="true">#</a> docker\u5BB9\u5668\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6709\u955C\u50CF\u624D\u80FD\u521B\u5EFA\u5BB9\u5668</span>
<span class="token comment"># \u65B0\u5EFA\u542F\u52A8\u5BB9\u5668</span>
<span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token punctuation">[</span>OPTIONs<span class="token punctuation">]</span> IMAGE <span class="token punctuation">[</span>COMMAND<span class="token punctuation">]</span><span class="token punctuation">[</span>ARG<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
<span class="token comment"># OPTIONS\u8BF4\u660E</span>
<span class="token comment"># --name=&quot;\u5BB9\u5668\u65B0\u540D\u5B57&quot;\uFF1A\u4E3A\u5BB9\u5668\u6307\u5B9A\u4E00\u4E2A\u540D\u79F0\uFF1B</span>
<span class="token comment"># -d\uFF1A\u540E\u53F0\u8FD0\u884C\u5BB9\u5668\uFF0C\u5E76\u8FD4\u56DE\u5BB9\u5668ID\uFF0C\u5373\u542F\u52A8\u5B88\u62A4\u5F0F\u5BB9\u5668\uFF1B</span>
<span class="token comment"># -i\uFF1A\u4EE5\u4EA4\u4E92\u5F0F\u6A21\u5F0F\u8FD0\u884C\u5BB9\u5668\uFF0C\u901A\u5E38\u4E0E-t\u540C\u65F6\u4F7F\u7528\uFF1B</span>
<span class="token comment"># -t\uFF1A\u4E3A\u5BB9\u5668\u5206\u914D\u4E00\u4E2A\u4F2A\u8F93\u5165\u7EC8\u7AEF\uFF0C\u901A\u5E38\u4E0E-i\u540C\u65F6\u4F7F\u7528\uFF1B</span>
<span class="token comment"># -P\uFF1A\u968F\u673A\u7AEF\u53E3\u6620\u5C04</span>
<span class="token comment"># -p\uFF1A\u6307\u5B9A\u7AEF\u53E3\u6620\u5C04\uFF0C\u6709\u4EE5\u4E0B\u56DB\u79CD\u683C\u5F0F</span>
<span class="token comment">#     ip:hostPort:containerPort</span>
<span class="token comment">#     ip::containerPort</span>
<span class="token comment">#     hostPort:conatinerPort</span>
<span class="token comment">#     containerPort</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5217\u51FA\u5F53\u524D\u6240\u6709\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">ps</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span>
<span class="token comment"># -a</span>
<span class="token comment"># -l \u4E0A\u6B21\u8FD0\u884C\u7684</span>
<span class="token comment"># -n</span>
<span class="token comment"># -q \u53EA\u663E\u793A\u5BB9\u5668\u7F16\u53F7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u9000\u51FA\u5BB9\u5668\u7684\u4E24\u79CD\u65B9\u5F0F</span>
<span class="token builtin class-name">exit</span>
<span class="token comment"># CTRL+P+Q \u5BB9\u5668\u4E0D\u505C\u6B62\u9000\u51FA</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u542F\u52A8\u5BB9\u5668</span>
<span class="token function">sudo</span> <span class="token function">docker</span> start <span class="token punctuation">[</span>\u5BB9\u5668ID\u6216\u5BB9\u5668\u540D<span class="token punctuation">]</span>
<span class="token comment"># \u91CD\u542F\u5BB9\u5668</span>
<span class="token function">sudo</span> <span class="token function">docker</span> restart <span class="token punctuation">[</span>\u5BB9\u5668ID\u6216\u5BB9\u5668\u540D<span class="token punctuation">]</span>
<span class="token comment"># \u505C\u6B62\u5BB9\u5668</span>
<span class="token function">sudo</span> <span class="token function">docker</span> stop <span class="token punctuation">[</span>\u5BB9\u5668ID\u6216\u5BB9\u5668\u540D<span class="token punctuation">]</span>
<span class="token comment"># \u5F3A\u5236\u505C\u6B62</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">kill</span> <span class="token punctuation">[</span>\u5BB9\u5668ID\u6216\u5BB9\u5668\u540D<span class="token punctuation">]</span>
<span class="token comment"># \u5220\u9664\u5DF2\u505C\u6B62\u7684\u5BB9\u5668</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">rm</span> <span class="token punctuation">[</span>\u5BB9\u5668ID\u6216\u5BB9\u5668\u540D<span class="token punctuation">]</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-aq</span><span class="token variable">)</span></span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-aq</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">docker</span> <span class="token function">rm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u542F\u52A8\u5B88\u62A4\u5F0F</span>
<span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>images<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u5BB9\u5668\u65E5\u5FD7</span>
<span class="token function">sudo</span> <span class="token function">docker</span> logs <span class="token parameter variable">-f</span> <span class="token parameter variable">-t</span> <span class="token parameter variable">--tail</span> <span class="token punctuation">[</span>Container ID<span class="token punctuation">]</span>
<span class="token comment"># -f \u8DDF\u968F\u6700\u65B0\u7684\u65E5\u5FD7\u6253\u5370</span>
<span class="token comment"># -t \u662F\u52A0\u5165\u65F6\u95F4\u6233</span>
<span class="token comment"># --tail [num] \u663E\u793A\u6700\u540E\u591A\u5C11\u6761</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u5BB9\u5668\u5185\u7684\u8FDB\u7A0B</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">top</span> <span class="token punctuation">[</span>\u5BB9\u5668 ID<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u5BB9\u5668\u5185\u90E8\u7EC6\u8282</span>
<span class="token function">sudo</span> <span class="token function">docker</span> inspect <span class="token punctuation">[</span>container ID<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FDB\u5165\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-t</span> <span class="token punctuation">[</span>container ID<span class="token punctuation">]</span> <span class="token punctuation">[</span>bashShell<span class="token punctuation">]</span>

<span class="token function">sudo</span> <span class="token function">docker</span> attach <span class="token punctuation">[</span>container ID<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u628A\u5BB9\u5668\u6587\u4EF6\u62F7\u8D1D\u5230\u5BBF\u4E3B\u673A</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">cp</span> <span class="token punctuation">[</span>contianer ID<span class="token punctuation">]</span>:<span class="token punctuation">[</span>filePath<span class="token punctuation">]</span> <span class="token punctuation">[</span>filePath<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u955C\u50CF\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u955C\u50CF\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u955C\u50CF\u662F\u4EC0\u4E48</h3><p>\u955C\u50CF\u662F\u4E00\u79CD\u8F7B\u91CF\u7EA7\u3001\u53EF\u6267\u884C\u7684\u72EC\u7ACB\u8F6F\u4EF6\u5305\uFF0C\u7528\u6765\u6253\u5305\u8F6F\u4EF6\u8FD0\u884C\u73AF\u5883\u548C\u57FA\u4E8E\u8FD0\u884C\u73AF\u5883\u5F00\u53D1\u7684\u8F6F\u4EF6\uFF0C\u5B83\u5305\u6362\u8FD0\u884C\u67D0\u4E2A\u8F6F\u4EF6\u6240\u9700\u8981\u7684\u6240\u6709\u5185\u5BB9\uFF0C\u5305\u62EC\u4EE3\u7801\u3001\u8FD0\u884C\u65F6\u3001\u5E93\u3001\u73AF\u5883\u53D8\u91CF\u548C\u914D\u7F6E\u6587\u4EF6\u3002</p><h4 id="unionfs-\u8054\u5408\u6587\u4EF6\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#unionfs-\u8054\u5408\u6587\u4EF6\u7CFB\u7EDF" aria-hidden="true">#</a> UnionFS\uFF08\u8054\u5408\u6587\u4EF6\u7CFB\u7EDF\uFF09</h4><p>\u662F\u4E00\u79CD\u5206\u5C42\u3001\u8F7B\u91CF\u7EA7\u5E76\u9AD8\u6027\u80FD\u7684\u6587\u4EF6\u7CFB\u7EDF</p><h4 id="docker\u52A0\u8F7D\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#docker\u52A0\u8F7D\u539F\u7406" aria-hidden="true">#</a> Docker\u52A0\u8F7D\u539F\u7406</h4><p>docker\u7684\u955C\u50CF\u52A0\u8F7D\u5B9E\u9645\u4E0A\u662F\u7531\u4E00\u5C42\u4E00\u5C42\u7684\u6587\u4EF6\u7CFB\u7EDF\u7EC4\u6210</p><h4 id="\u5206\u5C42\u7684\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u5206\u5C42\u7684\u955C\u50CF" aria-hidden="true">#</a> \u5206\u5C42\u7684\u955C\u50CF</h4><h4 id="\u4E3A\u4EC0\u4E48\u8981\u91C7\u7528\u5206\u5C42\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u91C7\u7528\u5206\u5C42\u955C\u50CF" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u8981\u91C7\u7528\u5206\u5C42\u955C\u50CF</h4><p>\u6700\u5927\u7684\u597D\u5904\u5C31\u662F\u5171\u4EAB\u8D44\u6E90</p><h4 id="\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7279\u70B9" aria-hidden="true">#</a> \u7279\u70B9</h4><p>docker\u955C\u50CF\u90FD\u53EA\u662F\u53EF\u8BFB\u7684\uFF0C\u5F53\u5BB9\u5668\u542F\u52A8\u65F6\uFF0C\u4E00\u4E2A\u65B0\u7684\u53EF\u5199\u5C42\u88AB\u52A0\u8F7D\u5230\u955C\u50CF\u7684\u9876\u90E8\u3002\u8FD9\u4E00\u5C42\u901A\u5E38\u88AB\u79F0\u4F5C\u5BB9\u5668\u5C42\uFF0C\u5BB9\u5668\u5C42\u4E4B\u4E0B\u7684\u90FD\u53EB\u505A\u955C\u50CF\u5C42\u3002</p><h3 id="\u5BB9\u5668\u5377" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u5668\u5377" aria-hidden="true">#</a> \u5BB9\u5668\u5377</h3><p>\u4E3A\u4E86\u80FD\u4FDD\u5B58docker\u4E2D\u7684\u6570\u636E\uFF0C\u5BB9\u5668\u4E4B\u95F4\u5E0C\u671B\u5171\u4EAB\u6570\u636E\u3002\u7C7B\u4F3CRedis\u91CC\u9762\u7684rdb\u548Caof\u6587\u4EF6</p><h4 id="\u5BB9\u5668\u6301\u4E45\u5316" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u5668\u6301\u4E45\u5316" aria-hidden="true">#</a> \u5BB9\u5668\u6301\u4E45\u5316</h4><h4 id="\u5BB9\u5668\u95F4\u7EE7\u627F\u3001\u6570\u636E\u5171\u4EAB" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u5668\u95F4\u7EE7\u627F\u3001\u6570\u636E\u5171\u4EAB" aria-hidden="true">#</a> \u5BB9\u5668\u95F4\u7EE7\u627F\u3001\u6570\u636E\u5171\u4EAB</h4><p>\u7279\u70B9\uFF1A</p><ol><li>\u6570\u636E\u5377\u53EF\u5728\u5BB9\u5668\u4E4B\u95F4\u5171\u4EAB\u6216\u91CD\u7528\u6570\u636E</li><li>\u5377\u4E2D\u7684\u66F4\u6539\u53EF\u4EE5\u76F4\u63A5\u751F\u6548</li><li>\u6570\u636E\u5377\u4E2D\u7684\u66F4\u6539\u4E0D\u4F1A\u5305\u542B\u5728\u955C\u50CF\u7684\u66F4\u65B0\u4E2D</li><li>\u6570\u636E\u5377\u7684\u751F\u547D\u5468\u671F\u4E00\u76F4\u6301\u7EED\u5230\u6CA1\u6709\u5BB9\u5668\u4F7F\u7528\u5B83\u4E3A\u6B62</li></ol><h4 id="\u5BB9\u5668\u5377\u6DFB\u52A0" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u5668\u5377\u6DFB\u52A0" aria-hidden="true">#</a> \u5BB9\u5668\u5377\u6DFB\u52A0</h4><h5 id="\u76F4\u63A5\u547D\u4EE4\u6DFB\u52A0" tabindex="-1"><a class="header-anchor" href="#\u76F4\u63A5\u547D\u4EE4\u6DFB\u52A0" aria-hidden="true">#</a> \u76F4\u63A5\u547D\u4EE4\u6DFB\u52A0</h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">-v</span> /\u5BBF\u4E3B\u673A\u7EDD\u5BF9\u8DEF\u5F84:/\u5BB9\u5668\u76EE\u5F55 \u955C\u50CF\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u547D\u4EE4 read only</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">-v</span> /\u5BBF\u4E3B\u673A\u7EDD\u5BF9\u8DEF\u5F84:/\u5BB9\u5668\u76EE\u5F55:ro \u955C\u50CF\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="dockerfile\u6DFB\u52A0" tabindex="-1"><a class="header-anchor" href="#dockerfile\u6DFB\u52A0" aria-hidden="true">#</a> Dockerfile\u6DFB\u52A0</h5><p>sudo docker build -f /etc/Dockerfile -t imageName .</p><h3 id="dockerfile\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#dockerfile\u89E3\u6790" aria-hidden="true">#</a> Dockerfile\u89E3\u6790</h3><h4 id="\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u662F\u4EC0\u4E48</h4><p>\u662F\u7528\u6765\u6784\u5EFAdocker\u955C\u50CF\u7684\u6587\u4EF6\uFF0C\u662F\u7531\u4E00\u7CFB\u5217\u547D\u4EE4\u6784\u6210</p><h4 id="\u4FDD\u7559\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u4FDD\u7559\u6307\u4EE4" aria-hidden="true">#</a> \u4FDD\u7559\u6307\u4EE4</h4><h5 id="from" tabindex="-1"><a class="header-anchor" href="#from" aria-hidden="true">#</a> FROM</h5><p>\u57FA\u7840\u955C\u50CF\uFF0C\u5F53\u524D\u955C\u50CF\u57FA\u4E8E\u90A3\u4E2A\u955C\u50CF</p><h5 id="maintainer" tabindex="-1"><a class="header-anchor" href="#maintainer" aria-hidden="true">#</a> MAINTAINER</h5><p>\u955C\u50CF\u7EF4\u62A4\u8005\u59D3\u540D\u548C\u90AE\u7BB1</p><h5 id="run" tabindex="-1"><a class="header-anchor" href="#run" aria-hidden="true">#</a> RUN</h5><p>\u5BB9\u5668\u6784\u5EFA\u65F6\u9700\u8981\u8FD0\u884C\u7684\u547D\u4EE4</p><h5 id="expose" tabindex="-1"><a class="header-anchor" href="#expose" aria-hidden="true">#</a> EXPOSE</h5><p>\u5F53\u524D\u5BB9\u5668\u5BF9\u5916\u66B4\u9732\u7684\u7AEF\u53E3</p><h5 id="workdir" tabindex="-1"><a class="header-anchor" href="#workdir" aria-hidden="true">#</a> WORKDIR</h5><p>\u6307\u5B9A\u5BB9\u5668\u521B\u5EFA\u540E\uFF0C\u9ED8\u8BA4\u7EC8\u7AEF\u767B\u5F55\u7684\u5DE5\u4F5C\u76EE\u5F55</p><h5 id="env" tabindex="-1"><a class="header-anchor" href="#env" aria-hidden="true">#</a> ENV</h5><p>\u7528\u6765\u6784\u5EFA\u955C\u50CF\u8FC7\u7A0B\u4E2D\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF</p><h5 id="add" tabindex="-1"><a class="header-anchor" href="#add" aria-hidden="true">#</a> ADD</h5><p>\u5C06\u5BBF\u4E3B\u673A\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u62F7\u8D1D\u8FDB\u955C\u50CF\u4E14ADD\u547D\u4EE4\u4F1A\u81EA\u52A8\u5904\u7406URL\u548C\u89E3\u538Btar\u538B\u7F29\u5305</p><h5 id="copy" tabindex="-1"><a class="header-anchor" href="#copy" aria-hidden="true">#</a> COPY</h5><p>\u7C7B\u4F3CADD\uFF0C\u62F7\u8D1D\u6587\u4EF6\u548C\u76EE\u5F55\u5230\u955C\u50CF\u4E2D\u3002</p><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">COPY</span> src dest</span>
<span class="token instruction"><span class="token keyword">COPY</span> [<span class="token string">&quot;src&quot;</span>, <span class="token string">&quot;dest&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="volume" tabindex="-1"><a class="header-anchor" href="#volume" aria-hidden="true">#</a> VOLUME</h5><p>\u5BB9\u5668\u6570\u636E\u5377\uFF0C\u7528\u4E8E\u6570\u636E\u4FDD\u5B58\u548C\u6301\u4E45\u5316\u5DE5\u4F5C</p><h5 id="cmd" tabindex="-1"><a class="header-anchor" href="#cmd" aria-hidden="true">#</a> CMD</h5><p>\u6307\u5B9A\u4E00\u4E2A\u5BB9\u5668\u542F\u52A8\u65F6\u8981\u8FD0\u884C\u7684\u547D\u4EE4</p><p>dockerfile\u4E2D\u53EF\u4EE5\u6709\u591A\u4E2ACMD\u6307\u4EE4\uFF0C\u4F46\u53EA\u6709\u6700\u540E\u4E00\u4E2A\u751F\u6548\uFF0CCMD\u4F1A\u88ABdocker run\u4E4B\u540E\u7684\u53C2\u6570\u66FF\u6362</p><h5 id="entrypont" tabindex="-1"><a class="header-anchor" href="#entrypont" aria-hidden="true">#</a> ENTRYPONT</h5><p>\u6307\u5B9A\u4E00\u4E2A\u5BB9\u5668\u542F\u52A8\u65F6\u8981\u8FD0\u884C\u7684\u547D\u4EE4</p><p>\u5728\u6307\u5B9A\u5BB9\u5668\u542F\u52A8\u7A0B\u5E8F\u53CA\u53C2\u6570</p><h5 id="onbuild" tabindex="-1"><a class="header-anchor" href="#onbuild" aria-hidden="true">#</a> ONBUILD</h5><p>\u5F53\u6784\u5EFA\u4E00\u4E2A\u88AB\u7EE7\u627F\u7684dockerfile\u65F6\u8FD0\u884C\u7684\u547D\u4EE4\uFF0C\u7236\u955C\u50CF\u5728\u88AB\u5B50\u955C\u50CF\u7EE7\u627F\u540E\u7236\u955C\u50CF\u7684ONBUILD\u88AB\u89E6\u53D1</p>`,69),d=[c];function t(o,l){return a(),s("div",null,d)}const r=n(i,[["render",t],["__file","docker_command.html.vue"]]);export{r as default};
