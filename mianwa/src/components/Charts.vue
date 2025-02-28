<template>
  <div id="chart" style="width: 600px; height: 400px;"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  mounted() {
    // 基于准备好的 DOM，初始化 echarts 实例
    const myChart = echarts.init(this.$el.querySelector('#chart'));

    // 指定图表的配置项和数据
    const option = {
      title: {
        text: 'ECharts 示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表
    myChart.setOption(option);
  }
};
</script>
