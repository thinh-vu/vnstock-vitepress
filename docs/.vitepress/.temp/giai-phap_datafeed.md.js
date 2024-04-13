import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Kết nối dữ liệu","description":"","frontmatter":{},"headers":[],"relativePath":"giai-phap/datafeed.md","filePath":"giai-phap/datafeed.md","lastUpdated":null}');
const _sfc_main = { name: "giai-phap/datafeed.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ket-noi-du-lieu" tabindex="-1">Kết nối dữ liệu <a class="header-anchor" href="#ket-noi-du-lieu" aria-label="Permalink to &quot;Kết nối dữ liệu&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("giai-phap/datafeed.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const datafeed = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  datafeed as default
};
