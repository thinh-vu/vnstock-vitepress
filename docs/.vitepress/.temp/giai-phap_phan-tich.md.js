import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Phân tích dữ liệu","description":"","frontmatter":{},"headers":[],"relativePath":"giai-phap/phan-tich.md","filePath":"giai-phap/phan-tich.md","lastUpdated":null}');
const _sfc_main = { name: "giai-phap/phan-tich.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="phan-tich-du-lieu" tabindex="-1">Phân tích dữ liệu <a class="header-anchor" href="#phan-tich-du-lieu" aria-label="Permalink to &quot;Phân tích dữ liệu&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("giai-phap/phan-tich.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const phanTich = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  phanTich as default
};
