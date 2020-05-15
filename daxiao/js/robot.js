var robot1 = document.getElementById('left');
var robot2 = document.getElementById('right');
var items1 = [
	'二元少女',
	'仙女爷爷',
	'二智少女',
	'全球萌主',
	'普通网名',
	'时屿',
	'糊涂少女',
	'嵨六',
	'小幼稚',
	'阔不',
	'爱你成疯',
	'淘气蛋',
	'只留旧人心',
	'我宣安',
	'电影里的梦',
	'他说',
	'情過к',
	'魅瞳',
	'那間',
	'猫男',
	'殇',
	'花落瞬间',
	'把酒临风',
	'电爱公主',
	'吹愁',
	'黑黑掉毛',
	'尘世',
	'疯头',
	'陌生',
	'肃杀',
	'鈴鐺人',
	'笨笨',
	'周瑜爱',
	'凉席',
	'犀利哥',
	'多愁善感',
	'错过世界',
	'代替品',
	'演绎',
	'朴先森＂',
	'骷髅女生',
	'孤独的人',
	'不懂忧伤',
	'描述卟清',
	'小姐安好',
	'原來是硪',
	'錯覺',
	'偏爱',
	'枕惊鸿',
	'路人甲已',
	'上邪',
	'箛槝盳杺',
	'锁骨艸莓',
	'烟花易冷',
	'慢摇dj',
	'最嗨青年',
	'此情谁赋',
	'小子',
	'老娘',
	'本颗奋斗心',
	'虎了吧唧',
	'琼琚',
	'执意要走',
	'如何留',
	'一副鬼样',
	'妹子',
	'掀起刘海',
	'女汉纸',
	'当我浮夸',
	'地狱异类',
	'无法言说',
	'丑小鸭',
	'烤鸭',
	'最近的心跳',
	'田里',
	'记忆清除',
	'爱你的心',
	'嘴硬成瘾',
	'二次函数',
	'See',
	'Jack',
	'kacav',
	'初与友歌',
	'最后伪装',
	'那些年'
];
var items2 = [ 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'A', 'S',

				'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B',

				'N', 'M', 'P' ];
//console.log(items1[1]);

var result = [];
var result1 = [];
var ranNum = 8;
for(var i = 0; i < ranNum; i++) {
	var ran = Math.floor(Math.random() * (items1.length - i));
	result.push(items1[ran]);
	items1[ran] = items1[items1.length - i - 1];
}
for(var j = 0; j < ranNum; j++) {
	var ran = Math.floor(Math.random() * (items2.length - j));
	result1.push(items2[ran]);
	items2[ran] = items2[items2.length - j - 1];
}
for(k=0;k<4;k++){
robot1.innerHTML +="<div id='one' class='one'><img src='img/"+result1[k]+".jpg'/>"+result[k]+"</div>";
}
for(l=4;l<8;l++){
robot2.innerHTML +="<div id='one' class='one'><img src='img/"+result1[l]+".jpg'/>"+result[l]+"</div>";
}
