import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as e,e as d}from"./app.6abff923.js";const l={},s=d(`<p>\u6700\u8FD1\u8FD9\u6BB5\u65F6\u95F4\u300A\u6700\u5F3A\u5927\u8111\u300B\u53C8\u5F00\u64AD\u4E86</p><p>\u4F46\u662F\u600E\u4E48\u5374\u5C11\u4E86\u7ECF\u5178\u7684\u6570\u5B57\u534E\u5BB9\u9053\u6E38\u620F</p><p>\u5FC3\u8840\u6765\u6F6E\uFF0C\u60F3\u7740\u624B\u5199\u4E00\u4E2A\u89E3\u6570\u5B57\u534E\u5BB9\u9053\u6E38\u620F\u7684\u7A0B\u5E8F</p><p>\u4F46\u662F\u60F3\u89E3\u9898\u5F97\u5148\u6709\u4E2A\u9898\uFF0C\u5C31\u5148\u5B9E\u73B0\u4E86\u4E00\u4E2A\u6570\u5B57\u534E\u5BB9\u9053</p><h2 id="\u57FA\u672C\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u601D\u8DEF" aria-hidden="true">#</a> \u57FA\u672C\u601D\u8DEF</h2><p>\u4F7F\u7528\u4E00\u7EF4\u6570\u7EC4\u8868\u793A\u6570\u5B57\u534E\u5BB9\u9053\u7684\u6E38\u620F\u5185\u5BB9 \u6839\u636E\u7528\u6237\u7684\u8F93\u5165\u503Cm</p><p>\u968F\u673A\u751F\u6210\u4E00\u4E2A\u5927\u5C0F\u4E3Am*m\u5927\u5C0F\u7684\u4E00\u7EF4\u6570\u7EC4 \u4E00\u7EF4\u6570\u7EC4\u5185\u5BB9\u7684\u5927\u5C0F\u4E3A0\u5230m-1</p><p>\u5176\u4E2D0\u4EE3\u8868\u7A7A\u683C \u8003\u8651\u5230\u968F\u673A\u751F\u6210\u7684\u6570\u7EC4\u5185\u5BB9\u53EF\u80FD\u5B58\u5728\u65E0\u89E3\u7684\u60C5\u51B5</p><p>\u6211\u662F\u5148\u751F\u6210\u4E86\u4E00\u4E2A\u6709\u5E8F\u7684\u6570\u7EC4</p><p>0\u5728\u6700\u540E\u4E00\u4F4D \u7136\u540E\u968F\u673A\u79FB\u52A8300\u6B21</p><p>\u5E76\u4FDD\u8BC1\u751F\u6210\u7684\u4E00\u7EF4\u6570\u7EC4\u4E0D\u662F\u6709\u5E8F\u7684</p><p>\u7528\u6237\u901A\u8FC7\u8F93\u5165\u67D0\u4E2A\u6570\u5B57x</p><p>\u79FB\u52A8x\u548C0\u4E4B\u95F4\u7684\u6570\u5B57 \u5E76\u5C060\u6570\u5B57\u653E\u5230x\u7684\u4F4D\u7F6E \u6BCF\u6B21\u79FB\u52A8\u6570\u5B57\u540E</p><p>\u90FD\u68C0\u67E5\u4E00\u904D\u662F\u5426\u5DF2\u7ECF\u5B8C\u6210 \u76F4\u5230\u5B8C\u6210\u6570\u5B57\u534E\u5BB9\u9053 \u8BDD\u4E0D\u591A\u8BF4\u4E0A\u4EE3\u7801</p><h2 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h2><p>\u4F60\u770B\uFF0C\u826F\u597D\u7684\u4EE3\u7801\u6CE8\u91CA</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * \u6570\u5B57\u534E\u5BB9\u9053
 *
 * @author daijiyong
 */
public class Klotski {
    /**
     * \u6570\u5B57\u534E\u5BB9\u9053\u7684\u5927\u5C0F
     */
    private Integer size;
    /**
     * \u4F7F\u7528\u4E00\u7EF4\u6570\u7EC4\u8868\u793A\u6570\u5B57\u534E\u5BB9\u9053
     */
    private int[] klotski;
    /**
     * key:\u6570\u5B57
     * value\uFF1A\u6570\u5B57\u5BF9\u5E94\u7684\u7D22\u5F15
     */
    Map&lt;Integer, Integer&gt; numberIndex = new HashMap&lt;&gt;();
    /**
     * key:\u6570\u5B57
     * value\uFF1A\u6570\u5B57\u5BF9\u5E94\u5750\u6807\u4F4D\u7F6E
     */
    Map&lt;Integer, int[]&gt; numberCoordinate = new HashMap&lt;&gt;();


    public Klotski() {
    }

    public Klotski(Integer size) {
        this.size = size;
        init();
    }

    /**
     * \u521D\u59CB\u5316\u6570\u5B57\u534E\u5BB9\u9053
     * \u5728\u6392\u5E8F\u597D\u7684\u6570\u5B57\u534E\u5BB9\u9053\u7684\u57FA\u7840\u4E0A\u968F\u673A\u79FB\u52A8300\u6B21
     * \u4FDD\u8BC1\u751F\u6210\u7684\u534E\u5BB9\u9053\u662F\u6709\u89E3\u7684
     */
    public void init() {
        int totalSize = (int) Math.pow(size, 2);
        klotski = new int[totalSize];

        //\u521D\u59CB\u5316\u6210\u5458\u5C5E\u6027
        for (int i = 1; i &lt; totalSize; i++) {
            klotski[i - 1] = i;
            numberIndex.put(i, i - 1);
            numberCoordinate.put(i, getCoordinate(i));
        }
        numberIndex.put(0, totalSize - 1);
        numberCoordinate.put(0, getCoordinate(0));

        /*
         * \u521D\u59CB\u5316\u968F\u673A\u79FB\u52A8300\u6B21
         * \u5E76\u4FDD\u8BC1\u751F\u6210\u7684\u6570\u5B57\u534E\u5BB9\u9053\u4E0D\u662F\u5DF2\u6392\u5E8F\u597D\u7684
         */
        while (check()) {
            for (int i = 0; i &lt; 300; i++) {
                Random random = new Random();
                move(random.nextInt((int) Math.pow(size, 2)));
            }
        }

    }

    /**
     * \u79FB\u52A8\u67D0\u4E00\u4E2A\u6570\u5B57
     *
     * @param number \u6570\u5B57
     * @return \u662F\u5426\u79FB\u52A8\u6210\u529F
     */
    public Boolean move(Integer number) {
        /*
         *\u5982\u679C\u8981\u79FB\u52A8\u7684\u6570\u5B57\u662F0\uFF0C\u5373\u7A7A\u683C\uFF0C\u5219\u8FD4\u56DE\u5931\u8D25
         */
        if (number == 0) {
            return false;
        }
        int[] zeroCoordinate = numberCoordinate.get(0);
        int[] currentCoordinate = numberCoordinate.get(number);
        /*
         * \u5982\u679C\u8F93\u5165\u7684\u6570\u5B57\uFF0C\u4E0D\u5728\u6570\u5B57\u534E\u5BB9\u9053\u7684\u8303\u56F4\u5185\uFF0C\u5219\u8FD4\u56DE\u5931\u8D25
         */
        if (zeroCoordinate == null || currentCoordinate == null) {
            return false;
        }

        if (zeroCoordinate[0] != currentCoordinate[0] &amp;&amp; zeroCoordinate[1] != currentCoordinate[1]) {
            return false;
        }
        /*
         * \u70B9\u51FB\u7684\u6570\u5B57\u5E76\u4E0D\u57280\u5373\u7A7A\u683C\u7684\u65C1\u8FB9
         * \u5219\u79FB\u52A8\u70B9\u51FB\u6570\u5B57\u5230\u7A7A\u683C\u4E4B\u95F4\u7684\u6240\u6709\u6570\u5B57
         * \u5982\u679C\u70B9\u51FB\u6570\u5B57\u8DDF\u7A7A\u683C\u4E0D\u5728\u540C\u4E00\u4E2A\u6A2A\u8F74\u6216\u7EB5\u8F74\u4E0A\uFF0C\u5219\u79FB\u52A8\u5931\u8D25
         */
        if (zeroCoordinate[0] == currentCoordinate[0]) {
            if (zeroCoordinate[1] &gt; currentCoordinate[1]) {
                for (int i = zeroCoordinate[1] - 1; i &gt;= currentCoordinate[1]; i--) {
                    int moveNumber = klotski[coordinate2Index(new int[]{zeroCoordinate[0], i})];
                    move(0, moveNumber);
                }
            }
            if (zeroCoordinate[1] &lt; currentCoordinate[1]) {
                for (int i = zeroCoordinate[1] + 1; i &lt;= currentCoordinate[1]; i++) {
                    int moveNumber = klotski[coordinate2Index(new int[]{zeroCoordinate[0], i})];
                    move(0, moveNumber);
                }
            }
        }

        if (zeroCoordinate[1] == currentCoordinate[1]) {
            if (zeroCoordinate[0] &gt; currentCoordinate[0]) {
                for (int i = zeroCoordinate[0] - 1; i &gt;= currentCoordinate[0]; i--) {
                    int moveNumber = klotski[coordinate2Index(new int[]{i, zeroCoordinate[1]})];
                    move(0, moveNumber);
                }
            }
            if (zeroCoordinate[0] &lt; currentCoordinate[0]) {
                for (int i = zeroCoordinate[0] + 1; i &lt;= currentCoordinate[0]; i++) {
                    int moveNumber = klotski[coordinate2Index(new int[]{i, zeroCoordinate[1]})];
                    move(0, moveNumber);
                }
            }
        }
        return true;
    }

    /**
     *  \u79FB\u52A8\u4EA4\u4E92\u67D0\u4E24\u4E2A\u76F8\u90BB\u6570\u5B57\u7684\u4F4D\u7F6E
     *
     * @param number1 \u6570\u5B571 \u5728\u8FD9\u91CC\u5C31\u662F0
     * @param number2 \u6570\u5B572 \u68390\u76F8\u90BB\u7684\u4E00\u4E2A\u6570\u5B57\uFF08\u4E0A\u4E0B\u5DE6\u53F3\uFF09
     */
    private void move(Integer number1, Integer number2) {

        int indexNumber1 = numberIndex.get(number1);
        int indexNumber2 = numberIndex.get(number2);
        klotski[indexNumber1] = number2;
        klotski[indexNumber2] = number1;
        numberIndex.put(number1, indexNumber2);
        numberIndex.put(number2, indexNumber1);

        numberCoordinate.put(number1, getCoordinate(number1));
        numberCoordinate.put(number2, getCoordinate(number2));


    }

    /**
     * \u5C06\u5750\u6807\u6570\u636E\u8F6C\u53D8\u4E3A\u5728\u6570\u7EC4\u4E2D\u7684\u7D22\u5F15\u4E0B\u6807
     *
     * @param coordinate \u5728\u4E8C\u7EF4\u6570\u7EC4\u4E2D\u7684\u5750\u6807\u4F4D\u7F6E
     * @return \u5728\u4E00\u7EF4\u6570\u7EC4\u4E2D\u7684\u7D22\u5F15\u503C
     */
    private Integer coordinate2Index(int[] coordinate) {
        return (coordinate[0] - 1) * size + coordinate[1] - 1;
    }

    /**
     * \u83B7\u53D6\u67D0\u4E2A\u6570\u5B57\u7684\u5750\u6807\uFF0C
     *
     * @param number \u6570\u5B57
     * @return \u6570\u5B57\u6240\u5728\u7684\u4F4D\u7F6E\u8868\u5EA7
     */
    private int[] getCoordinate(Integer number) {
        int[] coordinate = new int[2];
        int index = numberIndex.get(number);
        coordinate[0] = (index / size) + 1;
        coordinate[1] = index % size + 1;
        return coordinate;
    }

    /**
     *  \u68C0\u67E5\u534E\u5BB9\u9053\u662F\u5426\u5DF2\u7ECF\u5B8C\u6210
     *
     * @return \u5DF2\u5B8C\u6210\u6216\u672A\u5B8C\u6210
     */
    public Boolean check() {
        for (int i = 1; i &lt; klotski.length; i++) {
            if (i != klotski[i - 1]) {
                return false;
            }
        }
        return true;
    }

    /**
     * \u6253\u5370\u534E\u878D\u7684\u9898\u9762
     * @param str \u63D0\u793A\u8BED
     */
    public void println(String str) {
        for (int i = 0; i &lt; klotski.length; i++) {
            if (i % size == 0) {
                System.out.println();
            }
            System.out.print(klotski[i] + &quot;\\t&quot;);
        }
        System.out.println();
        System.out.println(str);
        System.out.println(&quot;---------------&quot;);
    }


    public void setKlotski(int[] klotski) {
        this.klotski = klotski;
    }


    public static void main(String[] args) {
        System.out.println(&quot;\u8BF7\u8F93\u5165\u4E00\u4E2A\u5927\u4E8E\u7B49\u4E8E3\u7684\u6570\u5B57\uFF0C\u7528\u4E8E\u521D\u59CB\u5316\u6570\u5B57\u534E\u5BB9\u9053\u6E38\u620F&quot;);
        Scanner input = new Scanner(System.in);
        int size = input.nextInt();

        Klotski klotski = new Klotski(size);
        klotski.println(&quot;\u8BF7\u5F00\u59CB\u4F60\u7684\u8868\u6F14&quot;);
        while (!klotski.check()) {
            int num = input.nextInt();
            klotski.move(num);
            if (klotski.check()) {
                klotski.println(&quot;\u606D\u559C\u4F60\u5DF2\u9003\u51FA\u6570\u5B57\u534E\u5BB9\u9053&quot;);
                break;
            } else {
                klotski.println(&quot;\u8FD8\u6CA1\u5B8C\uFF0C\u8BF7\u7EE7\u7EED\u4F60\u7684\u8868\u6F14&quot;);
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6548\u679C\u56FE" tabindex="-1"><a class="header-anchor" href="#\u6548\u679C\u56FE" aria-hidden="true">#</a> \u6548\u679C\u56FE</h2><p><img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy82NzE0MjcxLWM3NjgzZGNlYTA5MDI1NGM?x-oss-process=image/format,png" alt="image" loading="lazy"></p><p><img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy82NzE0MjcxLWE2ODllM2NjNGUwOGJmYTY?x-oss-process=image/format,png" alt="image" loading="lazy"></p><p>\u4F60\u770B\uFF0C\u8FD9\u4E48\u8F7B\u677E\u5C31\u505A\u51FA\u6765\u4E86 \u4F60\u6765\u8BD5\u8BD5\u4E0B\u8FB9\u8FD9\u9053\u9898\u5427</p><p><img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy82NzE0MjcxLTcxNDZlMWVjMWUwYTc5MGI?x-oss-process=image/format,png" alt="image" loading="lazy"></p><div style="text-align:right;"><p>\u6587/\u6234\u5148\u751F@2020\u5E746\u67087\u65E5</p></div>`,23),r=[s];function v(a,u){return n(),e("div",null,r)}var c=i(l,[["render",v],["__file","digital-huorongdao-of-java.html.vue"]]);export{c as default};
