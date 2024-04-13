import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bot chứng khoán","description":"","frontmatter":{},"headers":[],"relativePath":"giai-phap/bot-app-chung-khoan.md","filePath":"giai-phap/bot-app-chung-khoan.md","lastUpdated":null}');
const _sfc_main = { name: "giai-phap/bot-app-chung-khoan.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bot-chung-khoan" tabindex="-1">Bot chứng khoán <a class="header-anchor" href="#bot-chung-khoan" aria-label="Permalink to &quot;Bot chứng khoán&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("giai-phap/bot-app-chung-khoan.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const botAppChungKhoan = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  botAppChungKhoan as default
};
