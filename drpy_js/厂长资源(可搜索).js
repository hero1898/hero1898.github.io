// 地址发布页 https://www.czzy.site
// 地址发布页 https://cz01.vip
var rule = {
    title: '厂长资源',
    //host: 'https://www.czzy88.com',
    host: 'https://www.czys.pro',
    //hostJs: 'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});HOST = html.match(/推荐访问<a href="(.*)"/)[1];print("厂长跳转地址 =====> " + HOST)',
    url: '/fyclassfyfilter',
    filterable: 1,//是否启用分类筛选,
    filter_url: '{{fl.cateId}}{{fl.class}}{{fl.area}}/page/fypage',
    filter: 'H4sIAAAAAAAAA42V3U7iQBTH36XXJt77KhtjBql0EFqlHbUYE79AQEXcVfwiarJi8QOVNborUniZTluufIXtiO1U7LRe9KLT3/+cOWfO/LvIpaU5yE/EFG7sxyI3zavcGAcyPOBGOBGkeecNF/JW69V5nwMpxL9jc84yAcjXXKO/1uCWRgaro264CZnPQF4ezQpAnHSehIJgEgLxQ2bdHPX3e2a5YW9X2OK4qrr83hPWWyGkE1oWYBJR3tbyuKiFSCQBAbeKUsPae2WzCSSRIrzw+EQ32lpo+HTS3Uq3HApmXNA8qIeCggv2z67CwXkv5NNffFF14LdOAeeejdfqW6cYIkRARaSVKhQTbqnbZfu+GdX/NA+dHg1JzVvNKT5KmoExXhxWHtTN2m2UkozVl6SkOSd6lJQIvmrtzdY3tFMgoNTH/e9ljX/t7wNuX0Yp+RSSZDgkNXrrln5gVu+j1OTigTgYzlw6Nzd7+EKL7DOCKgJi1hkPcda9AkbnGO8eGv9+4a02tzROxAP3mEwBWab24XgHPt38ZB8+3xgZeAlRD4Ke23cPH6t0HwpIyKOTJH0Seixe71k39WCWV3iFgvmf/aOrYDANpAXiSh5b1My1XDCbRLOkeR5aahh6LRiNS1kk+Umzc8Mi0/70Ax8KJgWBcuU83vkTzKWgY4SU3LmwfzMKSqD3I/WVVNkyl7VgWJHExMKn+qs14kKB8AJxYg+sb+AXRlGzkOyAonfPuN1ktB8CxZ/fXKmYy9VgdhrFaH5z9daq7jI2isiVoOhazi4y+koOX+Z9aMlcPWakJ6jk32vh0GgXg2Hyh8wKPG2C2dyyC6eMI5v3YZdG9zwYm0fOVHuktdLtH3cZ2QEUfQdgFVrM+Qfw0/xbpXtLvw5Gp5ySEG2rdda0ihuMsZ6hmLbLHJRpOvxW+xrr+8yAydQMDWnXe9Rmhs8+RrFexbl6wZga97D+2aPxUmFgKnHB8aX/CTefD1IJAAA=',
    searchUrl: '/daoyongjiekoshibushiyoubing?q=**',

    searchable: 2,
    filterable: 0,
    headers: {
        'User-Agent': 'PC_UA',
        // 'Cookie': 'esc_search_captcha=1'
    },
    class_name: '全部&豆瓣电影Top250&高分影视&最新电影&热映中&站长推荐&电影&电视剧&动画&国产剧&日剧&韩剧&美剧&海外剧&俄罗斯电影&加拿大电影&华语电影&印度电影&日本电影&欧美电影&法国电影&英国电影&韩国电影',
    class_url: 'movie_bt&dbtop250&gaofenyingshi&zuixindianying&reyingzhong&/movie_bt_series/zhanchangtuijian&/movie_bt_series/dyy&/movie_bt_series/dianshiju&/movie_bt_series/dohua&/movie_bt_series/guochanju&/movie_bt_series/rj&/movie_bt_series/hj&/movie_bt_series/mj&/movie_bt_series/hwj&/movie_bt_series/eluosidianying&/movie_bt_series/jianadadianying&/movie_bt_series/huayudianying&/movie_bt_series/yindudianying&/movie_bt_series/ribendianying&/movie_bt_series/meiguodianying&/movie_bt_series/faguodianying&/movie_bt_series/yingguodianying&/movie_bt_series/hanguodianying',
    play_parse: true,

    // lazy代码:源于海阔香雅情大佬 / 小程序：香情影视 https://pastebin.com/L4tHdvFn
    lazy: `js:
        pdfh = jsp.pdfh;
        var html = request(input);
        var ohtml = pdfh(html, '.videoplay&&Html');
        var url = pdfh(ohtml, "body&&iframe&&src");
        if (url) {
            var _obj={};
            eval(pdfh(request(url),'body&&script&&Html')+'\\n_obj.player=player;_obj.rand=rand');
            function js_decrypt(str, tokenkey, tokeniv) {
                eval(getCryptoJS());
                var key = CryptoJS.enc.Utf8.parse(tokenkey);
                var iv = CryptoJS.enc.Utf8.parse(tokeniv);
                return CryptoJS.AES.decrypt(str, key, {iv: iv,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
            };
            let config = JSON.parse(js_decrypt(_obj.player,'VFBTzdujpR9FWBhe', _obj.rand));
            input = {
                 jx: 0,
                 url: config.url,
                 parse: 0
            };
        }else if (/decrypted/.test(ohtml)) {
            var phtml = pdfh(ohtml, "body&&script:not([src])&&Html");
            eval(getCryptoJS());
            var script = phtml.match(/var.*?\\)\\);/g)[0];
            var data = [];
            eval(script.replace(/md5/g, 'CryptoJS').replace('eval', 'data = '));
            input = {
                jx: 0,
                url: data.match(/url:.*?['"](.*?)['"]/)[1],
                parse: 0
            }


        } 
    `,
    推荐: '.bt_img;ul&&li;*;*;*;*',
    double: true,
    一级: '.bt_img&&ul&&li;h3.dytit&&Text;img.lazy&&data-original;.jidi&&Text;a&&href',
    二级: {
        "title": "h1&&Text;.moviedteail_list li&&a&&Text",
        "img": "div.dyimg img&&src",
        "desc": ".moviedteail_list li:eq(3) a&&Text;.moviedteail_list li:eq(2) a&&Text;.moviedteail_list li:eq(1) a&&Text;.moviedteail_list li:eq(7)&&Text;.moviedteail_list li:eq(5)&&Text",
        "content": ".yp_context&&Text",
        "tabs": ".mi_paly_box span",
        "lists": ".paly_list_btn:eq(#id) a"
    },
     搜索: '.search_list&&ul&&li;*;*;*;*',
    // 预处理:'rule_fetch_params.headers.Cookie="68148872828e9f4d64e7a296f6c6b6d7=5429da9a54375db451f7f9e4f16ce0ea;esc_search_captcha=1";let new_host="https://czspp.com";let new_html=request(new_host);if(/正在进行人机识别/.test(new_html)){let new_src=pd(new_html,"script&&src",new_host);log(new_src);let hhtml=request(new_src,{withHeaders:true});let json=JSON.parse(hhtml);let html=json.body;let key=html.match(new RegExp(\'var key="(.*?)"\'))[1];let avalue=html.match(new RegExp(\'value="(.*?)"\'))[1];let c="";for(let i=0;i<avalue.length;i++){let a=avalue[i];let b=a.charCodeAt();c+=b}let value=md5(c);log(value);let yz_url="https://czspp.com/a20be899_96a6_40b2_88ba_32f1f75f1552_yanzheng_ip.php?type=96c4e20a0e951f471d32dae103e83881&key="+key+"&value="+value;log(yz_url);hhtml=request(yz_url,{withHeaders:true});json=JSON.parse(hhtml);let setCk=Object.keys(json).find(it=>it.toLowerCase()==="set-cookie");let cookie=setCk?json[setCk].split(";")[0]:"";log("cookie:"+cookie);rule_fetch_params.headers.Cookie=cookie;setItem(RULE_CK,cookie)}',
}