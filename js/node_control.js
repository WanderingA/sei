$(function(){
    char1();
    char2();
    char3();
})


function char1() {
    var myChart = echarts.init(document.getElementById("char1"));

    var option = {
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
            orient: "vertical",
            x: "right",
            textStyle: {
                color: "#ffffff",
            },
            data: ["剩余电量", "已用电量"],
        },
        series: [
            {
                name: "电量",
                type: "pie",
                radius: ["40%", "70%"],
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                        },
                        labelLine: {
                            show: false,
                        },
                    },
                    emphasis: {
                        label: {
                            show: true,
                            position: "center",
                            textStyle: {
                                fontSize: "20",
                                fontWeight: "bold",
                            },
                        },
                    },
                },
                data: [
                    { value: 41, name: "剩余电量" },
                    { value: 59, name: "已用电量" },

                ],
            },
        ],
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}


function char2() {
    var myChart = echarts.init(document.getElementById("char2"));

    var option = {
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c}MB ({d}%)",
        },
        legend: {
            orient: "vertical",
            x: "right",
            textStyle: {
                color: "#ffffff",
            },
            data: ["剩余空间", "已用空间"],
        },
        series: [
            {
                name: "电量",
                type: "pie",
                radius: ["40%", "70%"],
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                        },
                        labelLine: {
                            show: false,
                        },
                    },
                    emphasis: {
                        label: {
                            show: true,
                            position: "center",
                            textStyle: {
                                fontSize: "20",
                                fontWeight: "bold",
                            },
                        },
                    },
                },
                data: [
                    { value: 421, name: "剩余空间" },
                    { value: 519, name: "已用空间" },

                ],
            },
        ],
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

// function char3() {
//     var myChart = echarts.init(document.getElementById("char3"));

//     var option = {
//         grid: {
//             show: false,
//         },
//         xAxis: {
//             type: 'category',
//             boundaryGap: false,
//             data: [], // 初始为空数组，将用于接收实时数据
//             axisLine: { 
//                 lineStyle: {
//                     color: '#ffffff'
//                 }
//             },
//             min: 0,
//             max: 1000,
//             data: []
//         },
//         yAxis: {
//             type: 'value',
//             axisLine: { // 取消 y 轴的轴线
//                 show: true,
//                 lineStyle: {
//                     color: '#ffffff'
//                 }
//             },
//             axisTick: { // 取消 y 轴的刻度线
//                 show: true
//             },
//             axisLabel: { // 取消 y 轴的刻度标签
//                 show: true
//             },
//             splitLine: { // 取消 y 轴的网格线
//                 show: false,
                
//             },
//             data: []
//         },
//         series: [{
//             name: '地震数据',
//             type: 'line',
//             data: [] // 初始为空数组，将用于接收实时数据
//         }]
//     };

//     // 设置初始配置
//     myChart.setOption(option);
//     // 模拟实时数据更新
//     var interval = 1;

//     // 模拟实时数据更新
//     setInterval(function () {
//         // 获取当前时间
//         var currentTime = new Date().getTime();

//         // 假设从数据源获取到1000个实时地震数据
//         var earthquakeData = [];
//         for (var i = 0; i < 1000; i++) {
//             earthquakeData.push(Math.random() * 10);
//         }

//         // 动态更新数据
//         option.xAxis.data = [];
//         for (var j = 0; j < 1000; j++) {
//             option.xAxis.data.push((currentTime - j * interval) / 1000);
//         }
//         option.series[0].data = earthquakeData;

//         // 更新图表
//         myChart.setOption(option);
//     }, interval); 

//     window.addEventListener("resize", function () {
//         myChart.resize();
//     });
// }


function char3() {
    var myChart = echarts.init(document.getElementById("char3"));

    var option = {
        grid: {
            show: false,
        },
        xAxis: {
            type: 'time', // 设置x轴类型为时间
            axisLine: {
                lineStyle: {
                    color: '#ffffff'
                }
            },
            min: new Date().getTime(), // 设置x轴的初始最小值为当前时间
            max: new Date().getTime() + 10000, // 设置x轴的初始最大值为当前时间+10秒
            data: []
        },
        yAxis: {
            type: 'value',
            axisLine: { // 取消 y 轴的轴线
                show: true,
                lineStyle: {
                    color: '#ffffff'
                }
            },
            axisTick: { // 取消 y 轴的刻度线
                show: true
            },
            axisLabel: { // 取消 y 轴的刻度标签
                show: true
            },
            splitLine: { // 取消 y 轴的网格线
                show: false
            }
        },
        series: [{
            name: '地震数据',
            type: 'line',
            data: []
        }]
    };

    // 设置初始配置
    myChart.setOption(option);
    // 模拟实时数据更新
    var interval = 200; // 设置每200毫秒更新一次数据

    // 模拟实时数据更新
    setInterval(function () {
        // 获取当前时间
        var currentTime = new Date().getTime();

        // 假设从数据源获取到100个实时地震数据
        var earthquakeData = [];
        for (var i = 0; i < 100; i++) {
            earthquakeData.push([
                new Date(currentTime - i * interval),
                Math.random() * 10
            ]);
        }

        // 动态更新数据
        option.series[0].data = earthquakeData;

        // 更新x轴最小值和最大值
        option.xAxis.min = currentTime - 10000; // 设置x轴的最小值为当前时间-10秒
        option.xAxis.max = currentTime; // 设置x轴的最大值为当前时间

        // 更新图表
        myChart.setOption(option);
    }, interval);

    window.addEventListener("resize", function () {
        myChart.resize();
    });
}