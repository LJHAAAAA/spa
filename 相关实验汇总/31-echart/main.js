$(function(){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    var xData = [];
        yData = [];
    for(var p = 0;p<=1;p+=0.1){
        xData.push(roundFractional(p,1));
        if(p===0 || p===1){
            yData.push(0)
        }else{
            yData.push(roundFractional(-1*p*Math.log2(p)-(1-p)*Math.log2(1-p),1))
        }
        
    }
        
    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '二进制熵函数曲线'
        },
        tooltip: {},
        legend: {
            data:['信息量']
        },
        xAxis: {
            data: xData
        },
        yAxis: {},
        series: [{
            name: '信息量',
            type: 'line',
            smooth:true,
            data: yData
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    //小数点后保留第n位
    function roundFractional(x, n) {
        return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
    }
});