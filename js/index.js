$(function () {
    char1();
    char2();
    char3();
    char4();
});

// 统计分析图
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
            data: ["人", "汽车", "履带车", "飞行器"],
        },
        series: [
            {
                name: "事件类型",
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
                    { value: 335, name: "人" },
                    { value: 310, name: "汽车" },
                    { value: 234, name: "履带车" },
                    { value: 135, name: "飞行器" },
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
    var myChart = echarts.init(document.getElementById("char2"), null, { width: '370px', height: '250px' });

    var option = {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
            },
        },
        grid: {
            show: true,
            borderWidth: 0,
        },
        legend: {
            data: ["正常", "GPS异常", "角度倾斜", "检波器异常"],
            textStyle: {
                color: "#ffffff",
            },
        },
        xAxis: {
            type: "value",
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#fff",
                },
            },
            splitLine: {
                lineStyle: {
                    color: ["#f2f2f2"],
                    width: 0,
                    type: "solid",
                },
            },
        },
        yAxis: {
            type: "category",
            data: ["正常", "GPS异常", "角度倾斜", "检波器异常"],
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#fff",
                },
            },
            splitLine: {
                lineStyle: {
                    width: 0,
                    type: "solid",
                },
            },
        },
        series: [
            {
                name: "数量",
                type: "bar",
                stack: "总量",
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: "insideRight",
                        },
                    },
                },
                data: [320, 302, 301, 334],
            },
        ],
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

function char3() {
    var myChart = echarts.init(document.getElementById("char3"));

    var data = [
        ["2023-06-01 00:00:00", 0],
        ["2023-06-01 01:00:00", 15],
        ["2023-06-01 02:00:00", 20],
        ["2023-06-01 03:00:00", 45],
        ["2023-06-01 04:00:00", 50],
        ["2023-06-01 05:00:00", 55],
        ["2023-06-01 06:00:00", 60],
        ["2023-06-01 07:00:00", 65],
        ["2023-06-01 08:00:00", 88],
        ["2023-06-01 09:00:00", 90],
        ["2023-06-01 10:00:00", 95],
        ["2023-06-01 11:00:00", 100],
        ["2023-06-01 12:00:00", 105],
        ["2023-06-01 13:00:00", 110],
        ["2023-06-01 14:00:00", 115],
        ["2023-06-01 15:00:00", 120],
        ["2023-06-01 16:00:00", 125],
        ["2023-06-01 17:00:00", 130],
        ["2023-06-01 18:00:00", 135],
        ["2023-06-01 19:00:00", 140],
        ["2023-06-01 20:00:00", 145],
        ["2023-06-01 21:00:00", 150],
        ["2023-06-01 22:00:00", 155],
        ["2023-06-01 23:00:00", 160],
    ];

    var option = {
        grid: {
            show: true,
            borderWidth: 0,
        },
        tooltip: {
            trigger: "axis",
            showDelay: 20,
            axisPointer: {
                type: "line",
                axis: "x",
                animation: false,
            },
            formatter: function (params) {
                var time = new Date(params[0].value[0]);
                var count = params[0].value[1];
                return "日期: " + time.toLocaleString() + "<br/>数量: " + count;
            },
        },
        xAxis: {
            type: "time",
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#fff",
                },
            },
            splitLine: {
                show: false,
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        var time = new Date(params.value);
                        return echarts.format.formatTime("yyyy-MM-dd HH:mm:ss", time);
                    },
                },
            },
        },
        yAxis: {
            type: "value",
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#fff",
                },
            },
            splitLine: {
                show: false,
            },
        },
        dataZoom: [
            {
                type: "slider",
                start: 100 - Math.floor((data.length / 12) * 100), // 计算初始的dataZoom范围
                end: 100,
                filterMode: "empty",
                handleSize: "80%", // 设置滑块的大小
                handleStyle: {
                    color: "#fff", // 滑块的颜色
                },
                textStyle: {
                    color: "#fff", // 文本颜色
                },
            },
        ],
        series: [
            {
                name: "报警数",
                type: "line",
                smooth: true,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            shadowColor: "rgba(0, 0, 0, 0.4)",
                        },
                    },
                },
                data: data,
            },
        ],
    };


    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

function char4() {
    var myChart = echarts.init(document.getElementById("char4"));

    var option = {
        grid: {
            show: true,
            borderWidth: 0,
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
            },
            formatter: function (params) {
                var tar = params[0];
                return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
            },
        },
        xAxis: [
            {
                type: "category",
                splitLine: {
                    show: false,
                },
                data: ["人", "汽车", "履带车", "飞行器"],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#fff",
                    },
                },
            },
        ],
        yAxis: [
            {
                type: "value",
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#fff",
                    },
                },
            },
        ],
        series: [
            {
                name: "出现次数",
                type: "bar",
                stack: "总量",
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: "inside",
                        },
                    },
                },
                data: [320, 302, 301, 334],
            },
        ],
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}
