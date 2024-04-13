import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Đào tạo thực chiến","description":"","frontmatter":{},"headers":[],"relativePath":"giai-phap/dao-tao.md","filePath":"giai-phap/dao-tao.md","lastUpdated":null}');
const _sfc_main = { name: "giai-phap/dao-tao.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="đao-tao-thuc-chien" tabindex="-1">Đào tạo thực chiến <a class="header-anchor" href="#đao-tao-thuc-chien" aria-label="Permalink to &quot;Đào tạo thực chiến&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("giai-phap/dao-tao.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const daoTao = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  daoTao as default
};
