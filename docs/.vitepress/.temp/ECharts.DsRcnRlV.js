import { defineComponent, ref, onMounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import * as echarts from "echarts";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ECharts",
  __ssrInlineRender: true,
  props: {
    option: {}
  },
  setup(__props) {
    const props = __props;
    const chart = ref();
    onMounted(() => {
      let c = echarts.init(chart.value);
      c.setOption(props.option);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "echarts",
        ref_key: "chart",
        ref: chart
      }, _attrs))} data-v-950f97f0></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/ECharts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ECharts = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-950f97f0"]]);
export {
  ECharts as E
};
