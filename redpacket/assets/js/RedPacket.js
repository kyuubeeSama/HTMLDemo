'use strict';

function demo() {
    alert("hello");
}

var ReadPacket = React.createClass({
    displayName: 'ReadPacket',

    getInitialState: function getInitialState() {
        return {
            animation: false,
            money: '20.00',
            status: 0 // 0: 等待拆开 1: 拆开后
        };
    },
    stopAnimation: function stopAnimation() {
        this.setState({ animation: false });
    },
    showResult: function showResult() {
        this.setState({ status: 1 });
    },
    openRedPacket: function openRedPacket() {
        var done = $("#done").val();
        if (done == 0) {
            console.log('hello');
            $('#done').val('1');
            var money = '3.22';
            this.setState({ money: money });
            this.setState({ animation: true });
            setTimeout(this.stopAnimation.bind(this), 3000);
            setTimeout(this.showResult.bind(this), 1500);
            this.resetItemValue(money);
            $("#money").text('3.32');
            setTimeout(this.upToDown.bind(this), 3000);
        }else{

        }
    },
    upToDown:function upToDown() {
        $(".tishi").slideDown(600);
        setTimeout('$(".tishi").slideUp(600)', 1500);  
    },
    resetItemValue:function resetItemValue(money) {
        //随机创建八个数据，创建一个数组，将八个数字存进去，跟结果给出的数据一起
        var itemnum = $('#item').val();
        // console.log('选中的位置是'+itemnum);
        // console.log('中奖金额是'+money);
        var itemname = '#item'+itemnum;
        $(itemname).text('￥' +money);
        var moneyArr = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8);
        var arr = [];
        for (var i = 0; i < 9; i++) {
            var arrNum = parseInt(Math.random() * 9);
            var flag = true;
            for (var j = 0; j <= arr.length; j++) {
                if (arrNum == arr[j]) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                arr.push(arrNum);
            } else {
                i--;
            }
        }
        // console.log(arr);
        for (var i = 0; i < 9; i++) {
            switch (arr[i]) {
                case 0:
                    moneyArr[arr[0]] = (Math.random() * (1 - 2) + 2).toFixed(2);
                    break;
                case 1:
                    moneyArr[arr[1]] = (Math.random() * (1 - 10) + 10).toFixed(2);
                    break;
                case 2:
                    moneyArr[arr[2]] = (Math.random() * (2 - 15) + 15).toFixed(2);
                    break;
                case 3:
                    moneyArr[arr[3]] = (Math.random() * (5 - 20) + 20).toFixed(2);
                    break;
                case 4:
                    moneyArr[arr[4]] = (Math.random() * (10 - 30) + 30).toFixed(2);
                    break;
                case 5:
                    moneyArr[arr[5]] = (Math.random() * (40 - 80) + 80).toFixed(2);
                    break;
                case 6:
                    moneyArr[arr[6]] = (Math.random() * (30 - 100) + 100).toFixed(2);
                    break;
                case 7:
                    moneyArr[arr[7]] = (Math.random() * (100 - 200) + 200).toFixed(2);
                    break;
                default:
                    moneyArr[arr[8]] = (Math.random() * (100 - 200) + 200).toFixed(2);
                    break;
            }
        }
        moneyArr[parseInt(itemnum) - 1] = money;
        // console.log(moneyArr);
        for (var i = 0; i < 9; i++){
            $('#item' + (i + 1).toString()).text('￥' + moneyArr[i]);
        }  
    },
    render: function render() {
        var bonus = 88.88;

        if (this.state.status == 0) {
            return React.createElement(
                'div',
                { className: 'redpack-container', id: 'redpack-container' },
                React.createElement(
                    'div',
                    { className: 'redpack' },
                    React.createElement(
                        'div',
                        { className: 'topcontent' },
                        React.createElement(
                            'div',
                            { className: 'redpack-avatar' },
                            React.createElement('img', { src: 'img/avatar.png', alt: '头像', width: '80', height: '80' }),
                          
                        ),
                        React.createElement(
                            'h2',
                            { className: 'white-text' },
                            'Lee'
                        ),
                        React.createElement(
                            'span',
                            { className: 'redpack-text' },
                            '抽中一个红包'
                        ),
                        React.createElement(
                            'div',
                            { className: 'redpack-description white-text' },
                            '恭喜发财 大吉大利'
                        )
                    ),
                    React.createElement(
                        'div',
                        { id: 'redpack-open', className: this.state.animation ? 'rotate' : '',
                            onClick: this.openRedPacket.bind(this)
                        },
                        React.createElement(
                            'span',
                            null,
                            '拆红包'
                        )
                    )
                )
            );
        }  else {
            $('.fanhui').css('display','block');
            $('.fanhui2').css('display','block');
            $(".shouzhi").css('display', 'none');
            $(".claseDialogBtn").css('display','block');
            $(".correct").show();
            $(".well-item").find(".correct").children().removeClass();
            $(".well-item").find(".opposite").children().removeClass();
            $(".well-item").find(".correct").children().addClass("test");
            $(".well-item").find(".opposite").children().addClass('test2');
            var done = $('#done').val();
            var money = '0.00';
            // if (done == 0) {
            //     alert("hello");
            //     $('#done').val('1');
            //     money = '8.88';
                // 显示奖励金额
                return React.createElement(
                    'div',
                    { className: 'redpack-container', id: 'redpack-container' },
                    React.createElement(
                        'div',
                        { className: 'redpack' },
                        React.createElement(
                            'div',
                            { className: 'topcontent-open' },
                            React.createElement(
                                'div',
                                { className: 'redpack-avatar' },
                                React.createElement('span', { id: 'close' })
                            ),
                            React.createElement(
                                'h1',
                                { className: 'white-text', style: { marginTop: 140 } },
                                ' ',
                                // bonus.toFixed(2),
                                this.state.money,
                                ' '
                            ),
                            React.createElement(
                                'span',
                                { className: 'redpack-text' },
                                '奖励积分已经存入您的账户'
                            ),
                            // React.createElement(
                            //     'div',
                            //     null,
                            //     React.createElement(
                            //         'a',
                            //         { className: 'white-text', style: { textDecoration: 'none' } },
                            //         '去我的账户查看积分'
                            //     )
                            // ),
                            React.createElement(
                                'div',
                                { className: 'again' },
                                React.createElement(
                                    'a',
                                    { className: 'zlyj', style: { textDecoration: 'none' }, href: "https://www.baidu.com" },
                                    '再来一局'
                                ),
                                React.createElement(
                                    'p',
                                    { className: 'again-text' },
                                    '您当前的账户为：',
                                    React.createElement(
                                        'span',
                                        { className: 'again-number' },
                                        '88'
                                    ),
                                ),
                                React.createElement(
                                    'a',
                                    { className: 'zlyj2', style: { textDecoration: 'none' },onClick:tixian },
                                    '立即提现'
                                )
                            )
                        ),


                        React.createElement(
                            'div',
                            { id: 'redpack-opened' },
                            React.createElement(
                                'div',
                                { className: 'redpack-avatar' },
                                React.createElement('img', { src: 'img/avatar.png', alt: '头像', width: '80', height: '80' })
                            )
                        )
                    )
                );
            // }
            
            
        }
    }
});