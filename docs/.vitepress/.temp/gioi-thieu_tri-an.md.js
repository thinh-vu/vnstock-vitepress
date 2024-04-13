import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Credit","description":"","frontmatter":{},"headers":[],"relativePath":"gioi-thieu/tri-an.md","filePath":"gioi-thieu/tri-an.md","lastUpdated":null}');
const _sfc_main = { name: "gioi-thieu/tri-an.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="credit" tabindex="-1">Credit <a class="header-anchor" href="#credit" aria-label="Permalink to &quot;Credit&quot;">​</a></h1><p>Vnstock xin gửi lời biết ơn sâu sắc tới các lập trình viên/tổ chức đã tạo ra các thư viện mã nguồn mở mà Vnstock sử dụng trong quá trình phát triển dịch vụ của mình.</p><p>Dưới đây là danh sách các thư viện mã nguồn mở mà Vnstock sử dụng:</p><h2 id="nen-tang-website" tabindex="-1">Nền tảng Website <a class="header-anchor" href="#nen-tang-website" aria-label="Permalink to &quot;Nền tảng Website&quot;">​</a></h2><ul><li>VitePress</li><li>VueJS</li></ul><p>Theme và một số tính năng của website được kế thừa từ mã nguồn từ tác giả <a href="https://blog.cugbmao.com/" target="_blank" rel="noreferrer">cugbmao.github.io</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gioi-thieu/tri-an.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const triAn = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  triAn as default
};
