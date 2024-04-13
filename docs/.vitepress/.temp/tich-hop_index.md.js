import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Kết nối Vnstock với luồng công việc bạn yêu thích","description":"","frontmatter":{},"headers":[],"relativePath":"tich-hop/index.md","filePath":"tich-hop/index.md","lastUpdated":null}');
const _sfc_main = { name: "tich-hop/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ket-noi-vnstock-voi-luong-cong-viec-ban-yeu-thich" tabindex="-1">Kết nối Vnstock với luồng công việc bạn yêu thích <a class="header-anchor" href="#ket-noi-vnstock-voi-luong-cong-viec-ban-yeu-thich" aria-label="Permalink to &quot;Kết nối Vnstock với luồng công việc bạn yêu thích&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("tich-hop/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
