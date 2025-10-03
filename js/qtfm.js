var rule = {
    title:'蜻蜓FM',
    host:'http://www.qingting.fm',
    url:'/categories/fyclass/fypage',
    searchUrl:'',
    searchable:0,
    quickSearch:0,
    class_name:'头条&湖南&资讯&网络',
    class_url:'545&202&433&407',
    headers:{
        'User-Agent':'PC_UA'
    },
    timeout:5000,
    play_parse:true,
    play_json:0,
    lazy:'js:input=input.replace("www.qingting.fm/channels/","lhttp.qingting.fm/live/")+"/programs/25827031"+"/64k.mp3"',
    limit:6,
    double:false,
    //推荐:'*',
    一级:'.contentSec&&.radio;span&&Text;img&&src;.descRadio&&Text;a&&href',
    二级:'*',
    搜索:'',
    //是否启用辅助嗅探: 1,0
    sniffer:1,
    // 辅助嗅探规则
    isVideo:"http((?!http).){26,}\\.(m3u8|mp4|flv|avi|mkv|wmv|mpg|mpeg|mov|ts|3gp|rm|rmvb|asf|m4a|mp3|wma)"
}
