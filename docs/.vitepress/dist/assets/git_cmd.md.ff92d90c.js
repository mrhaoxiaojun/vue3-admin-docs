import{_ as e,c as t,o as i,a as o}from"./app.8b34496d.js";const u='{"title":"\u66B4\u529B\u6307\u5357","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u66B4\u529B\u6307\u5357","slug":"\u66B4\u529B\u6307\u5357"},{"level":2,"title":"\u8FDC\u7A0B\u4ED3\u5E93\u76F8\u5173\u547D\u4EE4","slug":"\u8FDC\u7A0B\u4ED3\u5E93\u76F8\u5173\u547D\u4EE4"},{"level":2,"title":"\u5206\u652F(branch)\u64CD\u4F5C\u76F8\u5173\u547D\u4EE4","slug":"\u5206\u652F-branch-\u64CD\u4F5C\u76F8\u5173\u547D\u4EE4"},{"level":2,"title":"\u7248\u672C(tag)\u64CD\u4F5C\u76F8\u5173\u547D\u4EE4","slug":"\u7248\u672C-tag-\u64CD\u4F5C\u76F8\u5173\u547D\u4EE4"},{"level":2,"title":"\u5B50\u6A21\u5757(submodule)\u76F8\u5173\u64CD\u4F5C\u547D\u4EE4","slug":"\u5B50\u6A21\u5757-submodule-\u76F8\u5173\u64CD\u4F5C\u547D\u4EE4"},{"level":2,"title":"\u5FFD\u7565\u4E00\u4E9B\u6587\u4EF6\u3001\u6587\u4EF6\u5939\u4E0D\u63D0\u4EA4","slug":"\u5FFD\u7565\u4E00\u4E9B\u6587\u4EF6\u3001\u6587\u4EF6\u5939\u4E0D\u63D0\u4EA4"}],"relativePath":"git/cmd.md"}',a={},c=o(`<h2 id="\u66B4\u529B\u6307\u5357" tabindex="-1">\u66B4\u529B\u6307\u5357 <a class="header-anchor" href="#\u66B4\u529B\u6307\u5357" aria-hidden="true">#</a></h2><div class="language-sh"><pre><code>git branch # \u67E5\u770B\u672C\u5730\u6240\u6709\u5206\u652F
git status # \u67E5\u770B\u5F53\u524D\u72B6\u6001 
git commit # \u63D0\u4EA4 
git branch -a # \u67E5\u770B\u6240\u6709\u7684\u5206\u652F
git branch -r # \u67E5\u770B\u672C\u5730\u6240\u6709\u5206\u652F
git commit -am &quot;init&quot; # \u63D0\u4EA4\u5E76\u4E14\u52A0\u6CE8\u91CA 
git remote add origin git@192.168.1.119:ndshow
git push origin master # \u5C06\u6587\u4EF6\u7ED9\u63A8\u5230\u670D\u52A1\u5668\u4E0A 
git remote show origin # \u663E\u793A\u8FDC\u7A0B\u5E93origin\u91CC\u7684\u8D44\u6E90 
git push origin master:develop
git push origin master:hb-dev # \u5C06\u672C\u5730\u5E93\u4E0E\u670D\u52A1\u5668\u4E0A\u7684\u5E93\u8FDB\u884C\u5173\u8054 
git checkout --track origin/dev # \u5207\u6362\u5230\u8FDC\u7A0Bdev\u5206\u652F
git branch -D master develop # \u5220\u9664\u672C\u5730\u5E93develop
git checkout -b dev # \u5EFA\u7ACB\u4E00\u4E2A\u65B0\u7684\u672C\u5730\u5206\u652Fdev
git merge origin/dev # \u5C06\u5206\u652Fdev\u4E0E\u5F53\u524D\u5206\u652F\u8FDB\u884C\u5408\u5E76
git checkout dev # \u5207\u6362\u5230\u672C\u5730dev\u5206\u652F
git remote show # \u67E5\u770B\u8FDC\u7A0B\u5E93
git add . # \u6DFB\u52A0\u6240\u6709\u6539\u52A8\u5230\u6682\u5B58\u533A
git rm \u6587\u4EF6\u540D(\u5305\u62EC\u8DEF\u5F84) # \u4ECEgit\u4E2D\u5220\u9664\u6307\u5B9A\u6587\u4EF6
git clone git://github.com/schacon/grit.git # \u4ECE\u670D\u52A1\u5668\u4E0A\u5C06\u4EE3\u7801\u7ED9\u62C9\u4E0B\u6765
git config --list # \u770B\u6240\u6709\u7528\u6237
git ls-files # \u770B\u5DF2\u7ECF\u88AB\u63D0\u4EA4\u7684
git rm [file name] # \u5220\u9664\u4E00\u4E2A\u6587\u4EF6
git commit -a # \u63D0\u4EA4\u5F53\u524Drepos\u7684\u6240\u6709\u7684\u6539\u53D8
git add [file name] # \u6DFB\u52A0\u4E00\u4E2A\u6587\u4EF6\u5230git index
git commit -v # \u5F53\u4F60\u7528\uFF0Dv\u53C2\u6570\u7684\u65F6\u5019\u53EF\u4EE5\u770Bcommit\u7684\u5DEE\u5F02
git commit -m &quot;This is the message describing the commit&quot; # \u6DFB\u52A0commit\u4FE1\u606F
git commit -a # -a\u662F\u4EE3\u8868add\uFF0C\u628A\u6240\u6709\u7684change\u52A0\u5230git index\u91CC\u7136\u540E\u518Dcommit
git commit -a -v # \u4E00\u822C\u63D0\u4EA4\u547D\u4EE4
git log # \u770B\u4F60commit\u7684\u65E5\u5FD7
git diff # \u67E5\u770B\u5C1A\u672A\u6682\u5B58\u7684\u66F4\u65B0
git rm a.a # \u79FB\u9664\u6587\u4EF6(\u4ECE\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\u4E2D\u5220\u9664)
git rm --cached a.a # \u79FB\u9664\u6587\u4EF6(\u53EA\u4ECE\u6682\u5B58\u533A\u4E2D\u5220\u9664)
git commit -m &quot;remove&quot; # \u79FB\u9664\u6587\u4EF6(\u4ECEGit\u4E2D\u5220\u9664)
git rm -f a.a # \u5F3A\u884C\u79FB\u9664\u4FEE\u6539\u540E\u6587\u4EF6(\u4ECE\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\u4E2D\u5220\u9664)
git diff --cached \u6216 $ git diff --staged # \u67E5\u770B\u5C1A\u672A\u63D0\u4EA4\u7684\u66F4\u65B0
git stash push # \u5C06\u6587\u4EF6\u7ED9push\u5230\u4E00\u4E2A\u4E34\u65F6\u7A7A\u95F4\u4E2D
git stash pop # \u5C06\u6587\u4EF6\u4ECE\u4E34\u65F6\u7A7A\u95F4pop\u4E0B\u6765
---------------------------------------------------------
git remote add origin git@github.com:username/Hello-World.git
git push origin master # \u5C06\u672C\u5730\u9879\u76EE\u7ED9\u63D0\u4EA4\u5230\u670D\u52A1\u5668\u4E2D
-----------------------------------------------------------
git pull # \u672C\u5730\u4E0E\u670D\u52A1\u5668\u7AEF\u540C\u6B65
-----------------------------------------------------------------
git push (\u8FDC\u7A0B\u4ED3\u5E93\u540D) (\u5206\u652F\u540D) # \u5C06\u672C\u5730\u5206\u652F\u63A8\u9001\u5230\u670D\u52A1\u5668\u4E0A\u53BB\u3002
git push origin serverfix:awesomebranch
------------------------------------------------------------------
git fetch # \u76F8\u5F53\u4E8E\u662F\u4ECE\u8FDC\u7A0B\u83B7\u53D6\u6700\u65B0\u7248\u672C\u5230\u672C\u5730\uFF0C\u4E0D\u4F1A\u81EA\u52A8merge
git commit -a -m &quot;log_message&quot; # (-a\u662F\u63D0\u4EA4\u6240\u6709\u6539\u52A8\uFF0C-m\u662F\u52A0\u5165log\u4FE1\u606F) \u672C\u5730\u4FEE\u6539\u540C\u6B65\u81F3\u672C\u5730\u4ED3\u5E93
git branch branch_0.1 master # \u4ECE\u4E3B\u5206\u652Fmaster\u521B\u5EFAbranch_0.1\u5206\u652F
git branch -m branch_0.1 branch_1.0 #@ \u5C06branch_0.1\u91CD\u547D\u540D\u4E3Abranch_1.0
git checkout branch_1.0/master # \u5207\u6362\u5230branch_1.0/master\u5206\u652F
</code></pre></div><h2 id="\u8FDC\u7A0B\u4ED3\u5E93\u76F8\u5173\u547D\u4EE4" tabindex="-1">\u8FDC\u7A0B\u4ED3\u5E93\u76F8\u5173\u547D\u4EE4 <a class="header-anchor" href="#\u8FDC\u7A0B\u4ED3\u5E93\u76F8\u5173\u547D\u4EE4" aria-hidden="true">#</a></h2><p>\u68C0\u51FA\u4ED3\u5E93\uFF1A<code>$ git clone xxx</code></p><p>\u67E5\u770B\u8FDC\u7A0B\u4ED3\u5E93\uFF1A<code>$ git remote -v</code></p><p>\u6DFB\u52A0\u8FDC\u7A0B\u4ED3\u5E93\uFF1A<code>$ git remote add [name] [url]</code></p><p>\u5220\u9664\u8FDC\u7A0B\u4ED3\u5E93\uFF1A<code>$ git remote rm [name]</code></p><p>\u4FEE\u6539\u8FDC\u7A0B\u4ED3\u5E93\uFF1A<code>$ git remote set-url --push [name] [newUrl]</code></p><p>\u62C9\u53D6\u8FDC\u7A0B\u4ED3\u5E93\uFF1A<code>$ git pull [remoteName] [localBranchName]</code></p><p>\u63A8\u9001\u8FDC\u7A0B\u4ED3\u5E93\uFF1A<code>$ git push [remoteName] [localBranchName]</code></p><p>\u5982\u679C\u60F3\u628A\u672C\u5730\u7684\u67D0\u4E2A\u5206\u652Ftest\u63D0\u4EA4\u5230\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u5E76\u4F5C\u4E3A\u8FDC\u7A0B\u4ED3\u5E93\u7684master\u5206\u652F\uFF0C\u6216\u8005\u4F5C\u4E3A\u53E6\u5916\u4E00\u4E2A\u540D\u53EBtest\u7684\u5206\u652F\uFF0C\u5982\u4E0B\uFF1A</p><p><code>$git push origin test:master</code> // \u63D0\u4EA4\u672C\u5730test\u5206\u652F\u4F5C\u4E3A\u8FDC\u7A0B\u7684master\u5206\u652F</p><p><code>$git push origin test:test</code> // \u63D0\u4EA4\u672C\u5730test\u5206\u652F\u4F5C\u4E3A\u8FDC\u7A0B\u7684test\u5206\u652F</p><h2 id="\u5206\u652F-branch-\u64CD\u4F5C\u76F8\u5173\u547D\u4EE4" tabindex="-1">\u5206\u652F(branch)\u64CD\u4F5C\u76F8\u5173\u547D\u4EE4 <a class="header-anchor" href="#\u5206\u652F-branch-\u64CD\u4F5C\u76F8\u5173\u547D\u4EE4" aria-hidden="true">#</a></h2><p>\u67E5\u770B\u672C\u5730\u5206\u652F\uFF1A<code>$ git branch</code></p><p>\u67E5\u770B\u8FDC\u7A0B\u5206\u652F\uFF1A<code>$ git branch -r</code></p><p>\u521B\u5EFA\u672C\u5730\u5206\u652F\uFF1A<code>$ git branch [name]</code> ----\u6CE8\u610F\u65B0\u5206\u652F\u521B\u5EFA\u540E\u4E0D\u4F1A\u81EA\u52A8\u5207\u6362\u4E3A\u5F53\u524D\u5206\u652F</p><p>\u5207\u6362\u5206\u652F\uFF1A<code>$ git checkout [name]</code></p><p>\u521B\u5EFA\u65B0\u5206\u652F\u5E76\u7ACB\u5373\u5207\u6362\u5230\u65B0\u5206\u652F\uFF1A<code>$ git checkout -b [name]</code></p><p>\u5220\u9664\u5206\u652F\uFF1A<code>$ git branch -d [name] </code>---- -d\u9009\u9879\u53EA\u80FD\u5220\u9664\u5DF2\u7ECF\u53C2\u4E0E\u4E86\u5408\u5E76\u7684\u5206\u652F\uFF0C\u5BF9\u4E8E\u672A\u6709\u5408\u5E76\u7684\u5206\u652F\u662F\u65E0\u6CD5\u5220\u9664\u7684\u3002\u5982\u679C\u60F3\u5F3A\u5236\u5220\u9664\u4E00\u4E2A\u5206\u652F\uFF0C\u53EF\u4EE5\u4F7F\u7528-D\u9009\u9879</p><p>\u5408\u5E76\u5206\u652F\uFF1A<code>$ git merge [name] </code>----\u5C06\u540D\u79F0\u4E3A[name]\u7684\u5206\u652F\u4E0E\u5F53\u524D\u5206\u652F\u5408\u5E76</p><p>\u521B\u5EFA\u8FDC\u7A0B\u5206\u652F(\u672C\u5730\u5206\u652Fpush\u5230\u8FDC\u7A0B)\uFF1A<code>$ git push origin [name]</code></p><p>\u5220\u9664\u8FDC\u7A0B\u5206\u652F\uFF1A<code>$ git push origin :heads/[name] \u6216 $ gitpush origin :[name] </code></p><h2 id="\u7248\u672C-tag-\u64CD\u4F5C\u76F8\u5173\u547D\u4EE4" tabindex="-1">\u7248\u672C(tag)\u64CD\u4F5C\u76F8\u5173\u547D\u4EE4 <a class="header-anchor" href="#\u7248\u672C-tag-\u64CD\u4F5C\u76F8\u5173\u547D\u4EE4" aria-hidden="true">#</a></h2><p>\u67E5\u770B\u7248\u672C\uFF1A<code>$ git tag</code></p><p>\u521B\u5EFA\u7248\u672C\uFF1A<code>$ git tag [name]</code></p><p>\u5220\u9664\u7248\u672C\uFF1A<code>$ git tag -d [name]</code></p><p>\u67E5\u770B\u8FDC\u7A0B\u7248\u672C\uFF1A<code>$ git tag -r</code></p><p>\u521B\u5EFA\u8FDC\u7A0B\u7248\u672C(\u672C\u5730\u7248\u672Cpush\u5230\u8FDC\u7A0B)\uFF1A<code>$ git push origin [name]</code></p><p>\u5220\u9664\u8FDC\u7A0B\u7248\u672C\uFF1A<code>$ git push origin :refs/tags/[name]</code></p><p>\u5408\u5E76\u8FDC\u7A0B\u4ED3\u5E93\u7684tag\u5230\u672C\u5730\uFF1A<code>$ git pull origin --tags</code></p><p>\u4E0A\u4F20\u672C\u5730tag\u5230\u8FDC\u7A0B\u4ED3\u5E93\uFF1A<code>$ git push origin --tags</code></p><p>\u521B\u5EFA\u5E26\u6CE8\u91CA\u7684tag\uFF1A<code>$ git tag -a [name] -m &#39;yourMessage&#39;</code></p><h2 id="\u5B50\u6A21\u5757-submodule-\u76F8\u5173\u64CD\u4F5C\u547D\u4EE4" tabindex="-1">\u5B50\u6A21\u5757(submodule)\u76F8\u5173\u64CD\u4F5C\u547D\u4EE4 <a class="header-anchor" href="#\u5B50\u6A21\u5757-submodule-\u76F8\u5173\u64CD\u4F5C\u547D\u4EE4" aria-hidden="true">#</a></h2><p>\u6DFB\u52A0\u5B50\u6A21\u5757\uFF1A<code>$ git submodule add [url] [path]</code></p><p>\u5982\uFF1A<code>$git submodule add git://github.com/soberh/ui-libs.git src/main/webapp/ui-libs</code></p><p>\u521D\u59CB\u5316\u5B50\u6A21\u5757\uFF1A<code>$ git submodule init</code> ----\u53EA\u5728\u9996\u6B21\u68C0\u51FA\u4ED3\u5E93\u65F6\u8FD0\u884C\u4E00\u6B21\u5C31\u884C</p><p>\u66F4\u65B0\u5B50\u6A21\u5757\uFF1A<code>$ git submodule update </code>----\u6BCF\u6B21\u66F4\u65B0\u6216\u5207\u6362\u5206\u652F\u540E\u90FD\u9700\u8981\u8FD0\u884C\u4E00\u4E0B</p><p>\u5220\u9664\u5B50\u6A21\u5757\uFF1A\uFF08\u52064\u6B65\u8D70\u54E6\uFF09</p><ul><li><ol><li><code>$ git rm --cached [path]</code></li></ol></li><li><ol start="2"><li>\u7F16\u8F91<code>.gitmodules</code>\u6587\u4EF6\uFF0C\u5C06\u5B50\u6A21\u5757\u7684\u76F8\u5173\u914D\u7F6E\u8282\u70B9\u5220\u9664\u6389</li></ol></li><li><ol start="3"><li>\u7F16\u8F91<code>.git/config</code>\u6587\u4EF6\uFF0C\u5C06\u5B50\u6A21\u5757\u7684\u76F8\u5173\u914D\u7F6E\u8282\u70B9\u5220\u9664\u6389</li></ol></li><li><ol start="4"><li>\u624B\u52A8\u5220\u9664\u5B50\u6A21\u5757\u6B8B\u7559\u7684\u76EE\u5F55</li></ol></li></ul><h2 id="\u5FFD\u7565\u4E00\u4E9B\u6587\u4EF6\u3001\u6587\u4EF6\u5939\u4E0D\u63D0\u4EA4" tabindex="-1">\u5FFD\u7565\u4E00\u4E9B\u6587\u4EF6\u3001\u6587\u4EF6\u5939\u4E0D\u63D0\u4EA4 <a class="header-anchor" href="#\u5FFD\u7565\u4E00\u4E9B\u6587\u4EF6\u3001\u6587\u4EF6\u5939\u4E0D\u63D0\u4EA4" aria-hidden="true">#</a></h2><p>\u5728\u4ED3\u5E93\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA\u540D\u79F0\u4E3A<code>.gitignore</code>\u7684\u6587\u4EF6\uFF0C\u5199\u5165\u4E0D\u9700\u8981\u7684\u6587\u4EF6\u5939\u540D\u6216\u6587\u4EF6\uFF0C\u6BCF\u4E2A\u5143\u7D20\u5360\u4E00\u884C\u5373\u53EF\uFF0C\u5982</p><div class="language-sh"><pre><code>.idea
node_modules/
vuepress
.temp
dist
bin
*.db
</code></pre></div>`,43),d=[c];function n(g,r,s,p,m,h){return i(),t("div",null,d)}var b=e(a,[["render",n]]);export{u as __pageData,b as default};
