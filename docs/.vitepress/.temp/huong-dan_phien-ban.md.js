import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Lịch sử phiên bản","description":"","frontmatter":{},"headers":[],"relativePath":"huong-dan/phien-ban.md","filePath":"huong-dan/phien-ban.md","lastUpdated":null}');
const _sfc_main = { name: "huong-dan/phien-ban.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="lich-su-phien-ban" tabindex="-1">Lịch sử phiên bản <a class="header-anchor" href="#lich-su-phien-ban" aria-label="Permalink to &quot;Lịch sử phiên bản&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("huong-dan/phien-ban.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const phienBan = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  phienBan as default
};
