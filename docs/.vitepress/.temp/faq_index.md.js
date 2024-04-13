import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Câu hỏi thường gặp (FAQ)","description":"","frontmatter":{},"headers":[],"relativePath":"faq/index.md","filePath":"faq/index.md","lastUpdated":null}');
const _sfc_main = { name: "faq/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="cau-hoi-thuong-gap-faq" tabindex="-1">Câu hỏi thường gặp (FAQ) <a class="header-anchor" href="#cau-hoi-thuong-gap-faq" aria-label="Permalink to &quot;Câu hỏi thường gặp (FAQ)&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
