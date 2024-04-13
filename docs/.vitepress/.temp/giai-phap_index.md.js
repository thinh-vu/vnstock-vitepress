import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Hệ sinh thái Vnstock","description":"","frontmatter":{},"headers":[],"relativePath":"giai-phap/index.md","filePath":"giai-phap/index.md","lastUpdated":null}');
const _sfc_main = { name: "giai-phap/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="he-sinh-thai-vnstock" tabindex="-1">Hệ sinh thái Vnstock <a class="header-anchor" href="#he-sinh-thai-vnstock" aria-label="Permalink to &quot;Hệ sinh thái Vnstock&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("giai-phap/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
