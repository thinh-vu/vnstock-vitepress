<template>
  <div class="echarts" ref="chart"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
const props = defineProps<{ option?: any }>();

const chart = ref();

onMounted(() => {
  let c = echarts.init(chart.value);
  c.setOption(props.option);
});
</script>

<style scoped lang="less">
.echarts {
  width: 100%;
  height: 100%;
  min-width: 400px;
  min-height: 300px;
}
</style>
