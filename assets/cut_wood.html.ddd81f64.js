import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as e,e as s}from"./app.6abff923.js";const d={},l=s(`<h2 id="\u95EE\u98981" tabindex="-1"><a class="header-anchor" href="#\u95EE\u98981" aria-hidden="true">#</a> \u95EE\u98981</h2><p><img src="https://img-blog.csdnimg.cn/img_convert/685a6e9f87ddbf8f2ef4c62c2a4f1954.png" alt="\u56FE\u7247" loading="lazy"></p><ul><li><p>\u6709\u8FD9\u4E48\u4E00\u7EC4\u6728\u5934\uFF08\u7528\u6570\u7EC4int[]\u8868\u793A\uFF09\uFF0C\u6728\u5934\u957F\u5EA6&gt;=1\u4E14\u957F\u77ED\u4E0D\u4E00</p></li><li><p>\u6728\u5934\u53EA\u80FD\u5207\u77ED\u3001\u4E0D\u80FD\u62FC\u63A5</p></li><li><p>\u7ED9\u5B9A\u4E00\u4E2A\u8981\u6C42\u7684\u6728\u5934\u957F\u5EA6len\u548C\u4E00\u7EC4\u6728\u5934woods\uFF0C\u8981\u6C42\u5C06woods\u5207\u6210\u957F\u5EA6\u5747\u4E3Alen\u7684\u6728\u5934\uFF0C\u8BF7\u95EE\u6700\u591A\u80FD\u5207\u51FA\u591A\u5C11\u6839\uFF1F</p></li></ul><h3 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a> \u89E3\u9898\u601D\u8DEF</h3><p>\u9898\u76EE\u4E0D\u96BE\uFF0C\u56E0\u4E3A\u53EA\u80FD\u5207\u77ED\u4E0D\u80FD\u62FC\u63A5\uFF0C\u6240\u4EE5\u76F4\u63A5\u5FAA\u73AF\u904D\u5386woods\uFF0C\u5206\u522B\u5C06\u6BCF\u6839\u6728\u5934\u5207\u6210\u8981\u6C42\u7684\u957F\u5EA6</p><p>\u53E0\u52A0\u6BCF\u6839\u6728\u5934\u80FD\u5207\u51FA\u7684\u8981\u6C42\u957F\u5EA6\u6728\u5934\u7684\u6570\u91CF\uFF0C\u5373\u53EF\u6C42\u89E3</p><h3 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public static Integer cutWoods2SpecifyLen(int[] woods, int len) {
        if (woods == null || woods.length == 0) {
            return 0;
        }
        int result = 0;
        for (int wood : woods) {
            result += wood / len;
        }
        return result;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65F6\u95F4\u590D\u6742\u5EA6O(n)</p><p>\u7A7A\u95F4\u590D\u6742\u5EA6O(1)</p><p>\u6D4B\u8BD5\u9A8C\u8BC1\u4E00\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    public static void main(String[] args) {
        int[] woods = {100, 110, 50, 60, 100, 90};
        int specifyLen = 30;
        System.out.println(Arrays.toString(woods));
        System.out.printf(&quot;\u7ED9\u5B9A\u4E00\u7EC4\u6728\u5934\uFF0C\u8981\u6C42\u5207\u6210%d\u957F\u5EA6\uFF0C\u6700\u591A\u80FD\u5207\u6210%d\u6839%n&quot;, specifyLen, cutWoods2SpecifyLen(woods, specifyLen));
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/img_convert/cc7a6a511cd357cf975f1c6baf6da7aa.png" alt="\u56FE\u7247" loading="lazy"></p><h2 id="\u95EE\u98982" tabindex="-1"><a class="header-anchor" href="#\u95EE\u98982" aria-hidden="true">#</a> \u95EE\u98982</h2><ul><li><p>\u95EE\u98981\u662F\u8981\u6C42\u7ED9\u5B9A\u8981\u6C42\u7684\u957F\u5EA6\uFF0C\u6C42\u80FD\u5207\u6210\u591A\u5C11\u6BB5\u7B49\u957F\u7684\u6728\u5934</p></li><li><p>\u8FDB\u9636\u4E00\u4E0B\uFF0C\u5982\u679C\u7ED9\u5B9A\u9700\u8981\u7684\u7B49\u957F\u6728\u5934\u7684\u6570\u91CF\uFF0C\u6C42\u5207\u51FA\u6728\u5934\u7684\u6700\u957F\u957F\u5EA6\u5462\uFF1F</p></li></ul><p><img src="https://img-blog.csdnimg.cn/img_convert/54bc11208f830b9bc4c5f45c30522155.png" alt="\u56FE\u7247" loading="lazy"></p><p>\u5982\u4E0A\u56FE\uFF0C\u7ED9\u5B9A\u4E00\u7EC4\u6728\u5934\uFF0C\u8981\u6C42\u5207\u51FA9\u6839\u7B49\u957F\u7684\u6728\u5934\uFF0C\u6C42\u80FD\u6EE1\u8DB3\u6761\u4EF6\u6728\u5934\u7684\u6700\u957F\u7684\u957F\u5EA6\uFF1F</p><h3 id="\u89E3\u9898\u601D\u8DEF-1" tabindex="-1"><a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF-1" aria-hidden="true">#</a> \u89E3\u9898\u601D\u8DEF</h3><p>\u9996\u5148\uFF0C\u8FD9\u9053\u9898\u4E2D\u5176\u5B9E\u4E00\u5171\u6709\u4E24\u4E2A\u53D8\u91CF\uFF1A\u5207\u9664\u6728\u5934\u7684\u957F\u5EA6len\u3001\u6700\u7EC8\u5207\u51FA\u7684\u6728\u5934\u6839\u6570num</p><p>\u5E76\u4E14\u8FD9\u4E24\u4E2A\u53D8\u91CF\u4E4B\u95F4\u662F\u76F8\u4E92\u5236\u7EA6\u7684\u5173\u7CFB\uFF0C\u6B64\u6D88\u5F7C\u957F</p><p>\u5982\u679Clen\u5927\uFF0C\u5219num\u5FC5\u7136\u4F1A\u53D8\u5C0F</p><p>\u53CD\u4E4B\uFF0C\u5219num\u5FC5\u7136\u4F1A\u53D8\u5927</p><p>num\u7684\u5927\u5C0F\u540C\u6837\u4E5F\u4F1A\u5F71\u54CDlen\u5927\u5C0F\uFF0C\u540C\u6837\u6210\u53CD\u6BD4</p><p>\u90A3\u4E48\u6211\u4EEC\u5C31\u53EF\u4EE5\u8003\u8651\u5148\u56FA\u5B9A\u5176\u4E2D\u4E00\u4E2A\u53D8\u91CF\uFF0C\u7136\u540E\u5C31\u80FD\u6C42\u51FA\u53E6\u5916\u4E00\u4E2A\u53D8\u91CF\u4E86</p><p>\u5176\u6B21\u6211\u4EEC\u5E94\u8BE5\u601D\u8003\uFF0C\u80FD\u6EE1\u8DB3\u8981\u6C42\u7684\u6728\u5934\u957F\u5EA6\u7684\u8303\u56F4</p><p>\u6700\u77ED\u80AF\u5B9A\u662F1\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\u6728\u5934\u53EF\u4EE5\u5207\u6210100+110+50+60+100+90=510\u6839</p><p>510&gt;9\uFF0C\u6EE1\u8DB3\u6761\u4EF6</p><p><img src="https://img-blog.csdnimg.cn/img_convert/a048ef0871cbbece47b1ab6cf0f73b33.png" alt="\u56FE\u7247" loading="lazy"></p><p>\u6613\u77E5\u8FD9\u7EC4\u6728\u5934\u4E2D\u6700\u957F\u7684\u957F\u5EA6\u662Fmax=110\uFF0C</p><p>\u8FD9\u79CD\u60C5\u51B5\u4E0B\u80FD\u5207\u51FA\u6EE1\u8DB3\u6761\u4EF6\u7684\u6728\u5934\u6839\u6570\u662F1</p><p>1&lt;9\uFF0C\u4E0D\u6EE1\u8DB3\u6761\u4EF6</p><p>\u6240\u4EE5\u9898\u76EE\u8981\u6C42\u7684\u8303\u56F4\u5FC5\u5B9A\u662F\u5728\uFF081\uFF0C110\uFF09\u8303\u56F4\u5185</p><p>\u90A3\u4E48\u6211\u4EEC\u73B0\u5728\u5C31\u662F\u9700\u8981\u5728\uFF081\uFF0C110\uFF09\u8FD9\u4E2A\u8303\u56F4\u5185\u627E\u5230\u90A3\u4E2A\u5408\u9002\u7684\u503C</p><p>\u4E00\u4E2A\u589E\u5E8F\u7684\u8FDE\u7EED\u533A\u95F4\uFF0C\u8981\u627E\u5230\u76EE\u6807\u503C\uFF0C\u5E94\u8BE5\u7528\u4EC0\u4E48\u529E\u6CD5\u5462\uFF1F</p><p>\u5F88\u660E\u663E\uFF1A<strong>\u4E8C\u5206\u6CD5</strong>\u561B</p><p>\u6240\u4EE5\u8FD9\u9053\u9898\u7684\u89E3\u9898\u601D\u8DEF\u5C31\u662F\u5728\uFF081\uFF0C110\uFF09\u8303\u56F4\u5185\u4F7F\u7528\u4E8C\u5206\u67E5\u627E</p><p>\u5728\u6307\u5B9A\u80FD\u5207\u51FA\u7684\u6700\u5927\u6728\u5934\u957F\u5EA6len\u7684\u60C5\u51B5\u4E0B\uFF0C\u5224\u65AD\u5F97\u51FA\u7684nums\u662F\u5426\u6EE1\u8DB3\u6761\u4EF6\uFF08nums&gt;=9\uFF09</p><p>\u4ECE\u800C\u6C42\u51FA\u6700\u5927\u7684nums</p><h3 id="\u4EE3\u7801\u5B9E\u73B0-1" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0-1" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public static Integer cutWoods2SpecifyNum(int[] woods, int num) {
        if (woods == null || woods.length == 0) {
            return 0;
        }
        int result = 0;
        int min = 1;
        int max = getMaxLen(woods);
        while (min + 1 &lt; max) {
            result = (min + max) / 2;
            // \u8BA1\u7B97\u5728\u7ED9\u5B9A\u957F\u5EA6result\u7684\u60C5\u51B5\uFF0C\u80FD\u591F\u5207\u51FA\u51E0\u6839
            int numTemp = cutWoods2SpecifyLen(woods, result);
            if (numTemp &gt;= num) {
                min = result;
            } else {
                max = result;
            }
        }
        if (cutWoods2SpecifyLen(woods, max) &gt;= num) {
            return max;
        }
        if (cutWoods2SpecifyLen(woods, min) &gt;= num) {
            return min;
        }

        return result;
    }

    private static int getMaxLen(int[] woods) {
        int result = woods[0];
        for (int i = 1; i &lt; woods.length; i++) {
            if (woods[i] &gt; result) {
                result = woods[i];
            }
        }
        return result;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65F6\u95F4\u590D\u6742\u5EA6O(l*logmax)\uFF0Cl\u4E3Awoods\u7684\u6570\u91CF\uFF0Cmax\u4E3Awoods\u4E2D\u6700\u957F\u6728\u5934\u7684\u957F\u5EA6</p><p>\u7A7A\u95F4\u590D\u6742\u5EA6O(1)</p><p>\u53EF\u80FD\u6709\u4E9B\u4EBA\u4F1A\u89C9\u5F97\u8FD9\u4E2A\u4E8C\u5206\u5B9E\u73B0\u6709\u70B9\u522B\u626D</p><p>\u8FD9\u662F\u6211\u4ECE\u4E00\u4F4D\u5927\u725B\u90A3\u91CC\u5B66\u5230\u7684\u4E00\u4E2A\u4E8C\u5206\u6CD5\u901A\u7528\u516C\u5F0F</p><p>\u5BB9\u6613\u7406\u89E3\u800C\u4E14\u5BB9\u6613\u638C\u63E1\uFF0C\u6709\u5174\u8DA3\u7684\u8BDD\u6211\u56DE\u5934\u53EF\u4EE5\u4E13\u95E8\u5199\u4E00\u7BC7\u535A\u5BA2\u8BB2\u8BB2\u8FD9\u4E2A\u4E8C\u5206\u6A21\u677F\u4EE3\u7801</p><p>\u6D4B\u8BD5\u9A8C\u8BC1\u4E00\u4E0B</p><p>\u6CA1\u6709\u95EE\u9898</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    public static void main(String[] args) {
        int[] woods = {100, 110, 50, 60, 100, 90};
        int specifyNum = 9;
        System.out.println(Arrays.toString(woods));
        System.out.printf(&quot;\u7ED9\u5B9A\u4E00\u7EC4\u6728\u5934\uFF0C\u8981\u6C42\u5207\u6210\u7B49\u957F\u7684%d\u8DDF\uFF0C\u80FD\u5F97\u5230\u7684\u6700\u957F\u957F\u5EA6\u4E3A%d%n&quot;, specifyNum, cutWoods2SpecifyNum(woods, specifyNum));
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/img_convert/14c532d3e6348053ca1473f0cf5ad14b.png" alt="\u56FE\u7247" loading="lazy"></p><div style="text-align:right;"><p>\u6587/\u6234\u5148\u751F@2021\u5E7411\u670815\u65E5</p></div>`,50),a=[l];function t(r,c){return n(),e("div",null,a)}var o=i(d,[["render",t],["__file","cut_wood.html.vue"]]);export{o as default};
