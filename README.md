### js汉字 -> 拼音

#### 字库

字库方面使用了 http://github.com/fayland/perl-lingua-han/tree/master/Lingua-Han-PinYin/
#### 使用

<pre><code>
window.Pinyin.t('华鑫加油') => 'hua xin jia you';
window.Pinyin.t('华鑫加油', '-') => 'hua-xin-jia-you';
window.Pinyin.t('华鑫加油huaxinjiayou', '-') => 'hua-xin-jia-you-huaxinjiayou';
</code></pre>