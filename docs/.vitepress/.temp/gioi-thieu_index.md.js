import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Vnstock giới thiệu","description":"","frontmatter":{},"headers":[],"relativePath":"gioi-thieu/index.md","filePath":"gioi-thieu/index.md","lastUpdated":null}');
const _sfc_main = { name: "gioi-thieu/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vnstock-gioi-thieu" tabindex="-1">Vnstock giới thiệu <a class="header-anchor" href="#vnstock-gioi-thieu" aria-label="Permalink to &quot;Vnstock giới thiệu&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gioi-thieu/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
