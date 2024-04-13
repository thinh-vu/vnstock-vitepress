import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Khám phá dữ liệu","description":"","frontmatter":{},"headers":[],"relativePath":"giai-phap/kham-pha-du-lieu.md","filePath":"giai-phap/kham-pha-du-lieu.md","lastUpdated":null}');
const _sfc_main = { name: "giai-phap/kham-pha-du-lieu.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="kham-pha-du-lieu" tabindex="-1">Khám phá dữ liệu <a class="header-anchor" href="#kham-pha-du-lieu" aria-label="Permalink to &quot;Khám phá dữ liệu&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("giai-phap/kham-pha-du-lieu.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const khamPhaDuLieu = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  khamPhaDuLieu as default
};
