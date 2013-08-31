describe('test pinyin', function() {

    it('.translate', function() {
        var fTranslate = window.Pinyin.translate;

        expect(fTranslate('华鑫加油')).toEqual('hua xin jia you');
        expect(fTranslate('huaxinjiayou@126.com')).toEqual('huaxinjiayou@126.com');

        expect(fTranslate('华鑫huaxin加油jiayou', '-')).toEqual('hua-xin-huaxin-jia-you-jiayou');
        expect(fTranslate('华,，鑫,，加,，油', '-')).toEqual('hua-,，-xin-,，-jia-,，-you');
    });

});