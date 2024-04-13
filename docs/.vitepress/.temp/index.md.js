import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"","text":"Giải pháp phân tích chứng khoán toàn diện","tagline":"Tương lai của phân tích dữ liệu và giao dịch chứng khoán.","image":{"src":"https://vnstock.site/wp-content/uploads/elementor/thumbs/green-qaoyrwc3g05uwb475lk4nkjz1okn0a76hqrwam0758.png","alt":"Vnstock"},"actions":[{"theme":"brand","text":"Hướng dẫn nhanh","link":"/huong-dan"},{"theme":"alt","text":"Câu hỏi thường gặp","link":"/faq/index"}]},"features":[{"icon":{"src":"/img/coding_5486499.png"},"title":"Minh bạch & Tin cậy","details":"Mã nguồn mở, tự do tùy biến thư viện theo sở thích và kiến thức đầu tư của mình."},{"icon":{"src":"/img/puzzle-toy-svgrepo-com.svg"},"title":"Giải pháp hoàn thiện","details":"Xây dựng giải pháp giao dịch toàn diện với bộ API hoàn chỉnh cho Python tại Việt Nam."},{"icon":{"src":"/img/lightning-thunder-svgrepo-com.svg"},"title":"Đơn giản, hiệu quả","details":"Truy xuất dữ liệu nhanh chóng. Kết nối mọi nơi, hoạt động trên mọi thiết bị có internet."}],"footer":"Made with ❤️ by VNStock"},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1712867361000}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
