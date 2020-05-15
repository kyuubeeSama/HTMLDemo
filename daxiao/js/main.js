$(document).ready(function () {

	//旋转角度
	var num2;
	var angles;
	//可抽奖次数
	var clickNum = 1;
	//旋转次数
	var rotNum = 0;
	//中奖公告
	var notice = null;
	//转盘初始化
	var color = ["rgb(255,174,23)", "rgb(255,245,149)", "rgba(0,0,0,0.1)", "black", "rgb(255,245,149)", "rgb(49,120,196)", "rgb(255,215,0)"];
	var info = ["   大", "   小", "   财", "   大", "   小", "   财", "   大", "   小", "   發", "   大", "   小", "   财 "];
	canvasRun();


	// 	$.ajax({
	// 	type:"get",
	// 	url:"http://verwirrtbear.gz01.bdysite.com/car/public/admin.php/index/test1",
	// 	success:function(num1){

	// 	num2 =num1;
	// 	},
	// 	async:false
	// });
	num2 = 10;


	$('#tupBtn').bind('click', function () {
		if (clickNum >= 1) {
			//可抽奖次数减一
			clickNum = clickNum - 1;
			//转盘旋转
			runCup();
			//转盘旋转过程“开始抽奖”按钮无法点击
			$('#tupBtn').attr("disabled", true);
			//旋转次数加一
			rotNum = rotNum + 1;
			//“开始抽奖”按钮无法点击恢复点击
			setTimeout(function () {
				shownotice(notice);
				$('#tupBtn').removeAttr("disabled", true);
			}, 6000);
		}
		else {
			alert("亲，本期已经结束！");
		}
	});


	function shownotice(notice) {
		//console.log(notice);
		if (notice == "   大") {
			var moeny = document.getElementById('tbn1').value;
			$('#zd').removeClass('noshow');
			$('#zc').addClass('noshow');
			$('#zx').addClass('noshow');
		} else if (notice == "   小") {
			var moeny = document.getElementById('tbn3').value;
			$('#zx').removeClass('noshow');
			$('#zc').addClass('noshow');
			$('#zd').addClass('noshow');
		} else if (notice == "   财") {
			var moeny = document.getElementById('tbn2').value;
			$('#zc').removeClass('noshow');
			$('#zx').addClass('noshow');
			$('#zd').addClass('noshow');
		} else if (notice == "   發") {
			var moeny = document.getElementById('tbn4').value;
			$('#zf').removeClass('noshow');
			$('#zx').addClass('noshow');
			$('#zd').addClass('noshow');
		}

		if (moeny > 0) {
			$('#notices').removeClass('noshow');
			$('#yzj').text(moeny);
			if (notice == "   财") {
				$('#zjj').text(moeny * 3);
			}
			if (notice == "   發") {
				$('#zjj').text(moeny * 5);
			} else {
				$('#zjj').text(moeny * 2);
			}
		} else {
			$('#noticef').removeClass('noshow');

		}
	}


	//转盘旋转
	function runCup() {
		probability();
		var degValue = 'rotate(' + angles + 'deg' + ')';
		$('#myCanvas').css('-o-transform', degValue);           //Opera
		$('#myCanvas').css('-ms-transform', degValue);          //IE浏览器
		$('#myCanvas').css('-moz-transform', degValue);         //Firefox
		$('#myCanvas').css('-webkit-transform', degValue);      //Chrome和Safari
		$('#myCanvas').css('transform', degValue);
	}


	//各奖项对应的旋转角度及中奖公告内容
	function probability() {
		//获取随机数


		//概率
		if (num2 == 0) {
			angles = 2160 * rotNum + 1800;
			notice = info[0];
		}
		//概率
		else if (num2 == 1) {
			angles = 2160 * rotNum + 1830;
			notice = info[11];
		}
		//概率
		else if (num2 == 2) {
			angles = 2160 * rotNum + 1860;
			notice = info[10];
		}
		//概率
		else if (num2 == 3) {
			angles = 2160 * rotNum + 1890;
			notice = info[9];
		}
		//概率
		else if (num2 == 4) {
			angles = 2160 * rotNum + 1920;
			notice = info[8];
		}
		//概率
		else if (num2 == 5) {
			angles = 2160 * rotNum + 1950;
			notice = info[7];
		}
		//概率
		else if (num2 == 6) {
			angles = 2160 * rotNum + 1980;
			notice = info[6];
		}
		//概率
		else if (num2 == 7) {
			angles = 2160 * rotNum + 2010;
			notice = info[5];
		}
		else if (num2 == 8) {
			angles = 2160 * rotNum + 2040;
			notice = info[4];
		}
		else if (num2 == 9) {
			angles = 2160 * rotNum + 2070;
			notice = info[3];
		}
		else if (num2 == 10) {
			angles = 2160 * rotNum + 2100;
			notice = info[2];
		}
		else if (num2 == 11) {
			angles = 2160 * rotNum + 2130;
			notice = info[1];
		}
	}

	//绘制转盘
	function canvasRun() {
		var canvas = document.getElementById('myCanvas');
		var canvas01 = document.getElementById('myCanvas01');
		var canvas03 = document.getElementById('myCanvas03');
		var canvas02 = document.getElementById('myCanvas02');
		var canvas04 = document.getElementById('myCanvas04');
		var ctx = canvas.getContext('2d');
		var ctx1 = canvas01.getContext('2d');
		var ctx3 = canvas03.getContext('2d');
		var ctx2 = canvas02.getContext('2d');
		//var ctx4=canvas04.getContext('2d');
		createCircle();
		createCirText();
		initPoint();

		//外圆
		function createCircle() {
			var startAngle = 0;//扇形的开始弧度
			var endAngle = 0;//扇形的终止弧度
			//画一个8等份扇形组成的圆形
			for (var i = 0; i < 12; i++) {
				startAngle = Math.PI * (i / 6 - 1 / 12);
				endAngle = startAngle + Math.PI * (1 / 6);
				ctx.save();
				ctx.beginPath();
				ctx.arc(150, 150, 100, startAngle, endAngle, false);
				ctx.lineWidth = 120;
				if (i % 3 == 0) {
					ctx.strokeStyle = color[0];
				} else if (i % 3 == 1) {
					ctx.strokeStyle = color[1];
				} else {
					ctx.strokeStyle = color[6];
				}
				ctx.stroke();
				ctx.restore();
			}
		}

		//各奖项
		function createCirText() {
			ctx.textAlign = 'start';
			ctx.textBaseline = 'middle';
			ctx.fillStyle = color[3];
			var step = 2 * Math.PI / 12;
			for (var i = 0; i < 12; i++) {
				ctx.save();
				ctx.beginPath();
				ctx.translate(150, 150);
				ctx.rotate(i * step);
				ctx.font = " 20px Microsoft YaHei";
				ctx.fillStyle = color[3];
				ctx.fillText(info[i], -30, -115, 60);
				ctx.closePath();
				ctx.restore();
			}
		}

		function initPoint() {
			//箭头指针
			ctx1.beginPath();
			ctx1.moveTo(100, 24);
			ctx1.lineTo(90, 62);
			ctx1.lineTo(110, 62);
			ctx1.lineTo(100, 24);
			ctx1.fillStyle = color[5];
			ctx1.fill();
			ctx1.closePath();
			//中间小圆
			ctx3.beginPath();
			ctx3.arc(100, 100, 40, 0, Math.PI * 2, false);
			ctx3.fillStyle = color[5];
			ctx3.fill();
			ctx3.closePath();
			//小圆文字
			ctx3.font = "Bold 30px Microsoft YaHei";
			ctx3.textAlign = 'start';
			ctx3.textBaseline = 'middle';
			ctx3.fillStyle = color[4];
			ctx3.beginPath();
			ctx3.fillText('GO', 80, 100, 40);

			ctx3.fill();
			ctx3.closePath();
			//中间圆圈
			ctx2.beginPath();
			ctx2.arc(75, 75, 75, 0, Math.PI * 2, false);
			ctx2.fillStyle = color[2];
			ctx2.fill();
			ctx2.closePath();

			//	        ctx4.beginPath();
			//	        ctx4.arc(150,150,146,Math.PI*2,false);
			//	        ctx4.fillStyle = color[5];
			//	        ctx4.fill();
			//	        ctx4.closePath();
		}
	}
});