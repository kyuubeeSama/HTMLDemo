	function choose(ee) {
		var a = document.getElementById('a');
		var b = document.getElementById('b');
		var c = document.getElementById('c');
		var d = document.getElementById('d');
		var e = document.getElementById('e');
		var f = document.getElementById('num');
		var cc = ee + " " + "choose";
		//console.log(cc);
		if(ee == 'a') {
			a.className = cc;
			b.className = 'b';
			c.className = 'c';
			d.className = 'd';
			f.value = '10';
		} else if(ee == 'b') {
			a.className = 'a';
			b.className = cc;
			c.className = 'c';
			d.className = 'd';
			f.value = '20';
		} else if(ee == 'c') {
			a.className = 'a';
			b.className = 'b';
			c.className = cc;
			d.className = 'd';
			f.value = '50';
		} else if(ee == 'd') {
			a.className = 'a';
			b.className = 'b';
			c.className = 'c';
			d.className = cc;
			f.value = '100';
		} else if(ee == 'e') {
			a.className = 'a';
			b.className = 'b';
			c.className = 'c';
			d.className = 'd';
			f.value = '0';
			$(".my").remove();
			$('#mynum1').text(0);
			$('#mynum2').text(0);
			$('#mynum3').text(0);
			$('#mynum4').text(0);
			$('#tbn1').val(0);
			$('#tbn2').val(0);
			$('#tbn3').val(0);
			$('#tbn4').val(0);
		}
		//console.log(f.value);
		//ch.className=cc;
	}

	function add(b) {
		var width=document.body.clientWidth;
		var awidth = width*0.23;
		var bwidth = width*0.77;
		var height = 140;
		var tbn1=document.getElementById('tbn1');
		var tbn2=document.getElementById('tbn2');
		var tbn3=document.getElementById('tbn3');
		var tbn4=document.getElementById('tbn4');
		var f = document.getElementById('num').value;
		var g = document.getElementById(b);
	//	console.log(b);
	//	console.log(f);
		
	document.onclick=function(event){
    var e = event || window.event;
    var yy = e.clientY + document.body.scrollTop;
    var xx = e.clientX;
 // console.log(yy+'，'+xx);
    var top = yy-151.5;
    var left = xx-awidth-15;
	if(xx > bwidth && yy > 410){
    	//alert("在范围内下注");
    	return;
    }else if(xx > bwidth){
    	alert("请正确点击");
    	return;
    }
     if(xx < awidth){
    	alert("请正确点击");
    	return;
    }
    if(yy < 142){
    	alert("请正确点击");
    	return;
    }
    if(yy > 405){
    	//alert("在范围内下注");
    	return;
    } 
     
//  if(top>bwidth){
//  	left =bwidth;
//  }    
	if(b=="onee"){
		top =top;
	}
    if(b=="twoe"){
    	top =top-80;
    }
    if(b=="foure"){
    	top =top-80;
    }
     if(b=="threee"){
    	top =top-165;
    }

		if(f == 0) {
			alert("请选择积分");
		} else if(f == 20) {
			g.innerHTML += "<div class='my' style='position: absolute; left:"+left+"px;top: "+top+"px; '><img src='img/20.png' width='20px'/></div>";
		} else if(f == 50) {
			g.innerHTML += "<div class='my' style='position: absolute; left:"+left+"px;top: "+top+"px; '><img src='img/50.png' width='20px'/></div>";
		} else if(f == 100) {
			g.innerHTML += "<div class='my' style='position: absolute; left:"+left+"px;top: "+top+"px; '><img src='img/100.png' width='20px'/></div>";
		} else if(f == 10) {
			g.innerHTML += "<div class='my' style='position: absolute; left:"+left+"px;top: "+top+"px; '><img src='img/10.png' width='20px'/></div>";
		}

		// console.log(left+'，'+top);


}
		
		if(b=='onee'){
		tbn1.value =parseInt(tbn1.value)+parseInt(f);
		$('#mynum1').text(tbn1.value);
		//$('#anum1').text(tbn1.value);
		}
		else if(b=='twoe'){
		tbn2.value =parseInt(tbn2.value)+parseInt(f);
		$('#mynum2').text(tbn2.value);
		//$('#anum2').text(tbn2.value);		
		}
		else if(b=='threee'){
		tbn3.value =parseInt(tbn3.value)+parseInt(f);
		$('#mynum3').text(tbn3.value);	
		//$('#anum3').text(tbn3.value);
		}
			else if(b=='foure'){
		tbn4.value =parseInt(tbn4.value)+parseInt(f);
		$('#mynum4').text(tbn4.value);
		//$('#anum4').text(tbn4.value);		
	
		}
		//console.log(tbn1.value);
	}

	function up(c) {

		if(c == 10) {
			$('#qq').siblings('button').removeClass('as');
			$('#qq').siblings().addClass('mon');
			$('#qq').removeClass('mon');
			$('#qq').addClass('as');
			$('#fff').val('10');
		} else if(c == 20) {
			$('#ww').siblings().removeClass('as');
			$('#ww').siblings().addClass('mon');
			$('#ww').removeClass('mon');
			$('#ww').addClass('as');
			$('#fff').val('20');
		} else if(c == 30) {
			$('#ee').siblings().removeClass('as');
			$('#ee').siblings().addClass('mon');
			$('#ee').removeClass('mon');
			$('#ee').addClass('as');
			$('#fff').val('30');
		} else if(c == 50) {
			$('#rr').siblings().removeClass('as');
			$('#rr').siblings().addClass('mon');
			$('#rr').removeClass('mon');
			$('#rr').addClass('as');
			$('#fff').val('50');
		} else if(c == 100) {
			$('#tt').siblings().removeClass('as');
			$('#tt').siblings().addClass('mon');
			$('#tt').removeClass('mon');
			$('#tt').addClass('as');
			$('#fff').val('100');
		} else if(c == 200) {
			$('#yy').siblings().removeClass('as');
			$('#yy').siblings().addClass('mon');
			$('#yy').removeClass('mon');
			$('#yy').addClass('as');
			$('#fff').val('10');
		}
	}
	
	

