$(function(){
    char1();
    char2();
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