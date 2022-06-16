<template>
  <div class="other-container">
    <div ref="radar" class="screen-item"></div>
    <div ref="gauge" class="screen-item"></div>
    <div ref="pie" class="screen-item"></div>
    <div ref="funnel" class="screen-item"></div>
    <div ref="heatmap" class="screen-item"></div>
    <div ref="line" class="screen-item"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
//  按需引入 echarts
import * as echarts from "echarts";
const line = ref(); // 使用ref创建虚拟DOM引用
const pie = ref(); // 使用ref创建虚拟DOM引用
const heatmap = ref();
const radar = ref();
const funnel = ref();
const gauge = ref();

onMounted(() => {
  initLineChart();
  initPieChart();
  initHeatmapChart();
  initRadarChart();
  initFunnelChart();
  initGaugeChart();
});
function initGaugeChart() {
  // 基于准备好的dom，初始化echarts实例
  let myChart = echarts.init(gauge.value);
  // 指定图表的配置项和数据
  let option = {
    title: {
      text: "Area",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Email",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "Union Ads",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "Video Ads",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: "Direct",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: "Search Engine",
        type: "line",
        stack: "Total",
        label: {
          show: true,
          position: "top",
        },
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}
function initFunnelChart() {
  // 基于准备好的dom，初始化echarts实例
  let myChart = echarts.init(funnel.value);
  // 指定图表的配置项和数据
  let option = {
    color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
    title: {
      text: "Gradient",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      data: ["Line 1", "Line 2", "Line 3", "Line 4", "Line 5"],
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Line 1",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(128, 255, 165)",
            },
            {
              offset: 1,
              color: "rgb(1, 191, 236)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [140, 232, 101, 264, 90, 340, 250],
      },
      {
        name: "Line 2",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(0, 221, 255)",
            },
            {
              offset: 1,
              color: "rgb(77, 119, 255)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [120, 282, 111, 234, 220, 340, 310],
      },
      {
        name: "Line 3",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(55, 162, 255)",
            },
            {
              offset: 1,
              color: "rgb(116, 21, 219)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [320, 132, 201, 334, 190, 130, 220],
      },
      {
        name: "Line 4",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(255, 0, 135)",
            },
            {
              offset: 1,
              color: "rgb(135, 0, 157)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [220, 402, 231, 134, 190, 230, 120],
      },
      {
        name: "Line 5",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        label: {
          show: true,
          position: "top",
        },
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(255, 191, 0)",
            },
            {
              offset: 1,
              color: "rgb(224, 62, 76)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [220, 302, 181, 234, 210, 290, 150],
      },
    ],
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}
function initRadarChart() {
  // 基于准备好的dom，初始化echarts实例
  let myChart = echarts.init(radar.value);
  // 指定图表的配置项和数据
  let option = {
    color: ["#67F9D8", "#FFE434", "#56A3F1", "#FF917C"],
    title: {
      text: "Radar",
    },
    legend: {},
    radar: [
      {
        indicator: [
          { text: "Indicator1" },
          { text: "Indicator2" },
          { text: "Indicator3" },
          { text: "Indicator4" },
          { text: "Indicator5" },
        ],
        center: ["25%", "50%"],
        radius: 120,
        startAngle: 90,
        splitNumber: 4,
        shape: "circle",
        axisName: {
          formatter: "【{value}】",
          color: "#428BD4",
        },
        splitArea: {
          areaStyle: {
            color: ["#77EADF", "#26C3BE", "#64AFE9", "#428BD4"],
            shadowColor: "rgba(0, 0, 0, 0.2)",
            shadowBlur: 10,
          },
        },
        axisLine: {
          lineStyle: {
            color: "rgba(211, 253, 250, 0.8)",
          },
        },
        splitLine: {
          lineStyle: {
            color: "rgba(211, 253, 250, 0.8)",
          },
        },
      },
      {
        indicator: [
          { text: "Indicator1", max: 150 },
          { text: "Indicator2", max: 150 },
          { text: "Indicator3", max: 150 },
          { text: "Indicator4", max: 120 },
          { text: "Indicator5", max: 108 },
          { text: "Indicator6", max: 72 },
        ],
        center: ["75%", "50%"],
        radius: 120,
        axisName: {
          color: "#fff",
          backgroundColor: "#666",
          borderRadius: 3,
          padding: [3, 5],
        },
      },
    ],
    series: [
      {
        type: "radar",
        emphasis: {
          lineStyle: {
            width: 4,
          },
        },
        data: [
          {
            value: [100, 8, 0.4, -80, 2000],
            name: "Data A",
          },
          {
            value: [60, 5, 0.3, -100, 1500],
            name: "Data B",
            areaStyle: {
              color: "rgba(255, 228, 52, 0.6)",
            },
          },
        ],
      },
      {
        type: "radar",
        radarIndex: 1,
        data: [
          {
            value: [120, 118, 130, 100, 99, 70],
            name: "Data C",
            symbol: "rect",
            symbolSize: 12,
            lineStyle: {
              type: "dashed",
            },
            label: {
              show: true,
              formatter: function (params: any) {
                return params.value;
              },
            },
          },
          {
            value: [100, 93, 50, 90, 70, 60],
            name: "Data D",
            areaStyle: {
              color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                {
                  color: "rgba(255, 145, 124, 0.1)",
                  offset: 0,
                },
                {
                  color: "rgba(255, 145, 124, 0.9)",
                  offset: 1,
                },
              ]),
            },
          },
        ],
      },
    ],
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}
function initLineChart() {
  // 基于准备好的dom，初始化echarts实例
  let myChart = echarts.init(line.value);
  // 指定图表的配置项和数据
  let option = {
    angleAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    radiusAxis: {},
    polar: {},
    series: [
      {
        type: "bar",
        data: [1, 2, 3, 4, 3, 5, 1],
        coordinateSystem: "polar",
        name: "A",
        stack: "a",
        emphasis: {
          focus: "series",
        },
      },
      {
        type: "bar",
        data: [2, 4, 6, 1, 3, 2, 1],
        coordinateSystem: "polar",
        name: "B",
        stack: "a",
        emphasis: {
          focus: "series",
        },
      },
      {
        type: "bar",
        data: [1, 2, 3, 4, 1, 2, 5],
        coordinateSystem: "polar",
        name: "C",
        stack: "a",
        emphasis: {
          focus: "series",
        },
      },
    ],
    legend: {
      show: true,
      data: ["A", "B", "C"],
    },
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}
function initPieChart() {
  // 基于准备好的dom，初始化echarts实例
  let myChart = echarts.init(pie.value);
  // 指定图表的配置项和数据
  let option = {
    title: {
      text: "Referer of a Website",
      subtext: "Fake Data",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}
function initHeatmapChart() {
  // 基于准备好的dom，初始化echarts实例
  let myChart = echarts.init(heatmap.value);
  let option = {
    dataset: {
      source: [
        ["score", "amount", "product"],
        [89.3, 58212, "Matcha Latte"],
        [57.1, 78254, "Milk Tea"],
        [74.4, 41032, "Cheese Cocoa"],
        [50.1, 12755, "Cheese Brownie"],
        [89.7, 20145, "Matcha Cocoa"],
        [68.1, 79146, "Tea"],
        [19.6, 91852, "Orange Juice"],
        [10.6, 101852, "Lemon Juice"],
        [32.7, 20112, "Walnut Brownie"],
      ],
    },
    grid: { containLabel: true },
    xAxis: { name: "amount" },
    yAxis: { type: "category" },
    visualMap: {
      orient: "horizontal",
      left: "center",
      min: 10,
      max: 100,
      text: ["High Score", "Low Score"],
      // Map the score column to color
      dimension: 0,
      inRange: {
        color: ["#65B581", "#FFCE34", "#FD665F"],
      },
    },
    series: [
      {
        type: "bar",
        encode: {
          // Map the "amount" column to X axis.
          x: "amount",
          // Map the "product" column to Y axis
          y: "product",
        },
      },
    ],
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}
</script>

<style lang="scss">
.other-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;

  .screen-item {
    width: calc(100% / 3);
    height: 50%;
  }
}
</style>
