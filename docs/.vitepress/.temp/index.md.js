import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"","text":"Giải pháp phân tích chứng khoán toàn diện","tagline":"Tương lai của phân tích dữ liệu và giao dịch chứng khoán.","image":{"src":"https://vnstock.site/wp-content/uploads/elementor/thumbs/green-qaoyrwc3g05uwb475lk4nkjz1okn0a76hqrwam0758.png","alt":"Vnstock"},"actions":[{"theme":"brand","text":"Hướng dẫn nhanh","link":"/huong-dan-nhanh"},{"theme":"alt","text":"Câu hỏi thường gặp","link":"/huong-dan-nhanh"}]},"features":[{"icon":{"src":"/img/javascript.svg"},"title":"Phân tích dữ liệu thời gian thực","details":"Trải nghiệm tốc độ và hiệu suất vượt trội với công nghệ tiên tiến của chúng tôi."},{"icon":{"src":"/img/react.svg"},"title":"Thiết kế trực quan","details":"Dễ dàng tìm kiếm và sử dụng, tối ưu hóa trải nghiệm người dùng."},{"icon":{"src":"/img/css.svg"},"title":"Bảo mật mạnh mẽ","details":"Tin cậy vào các biện pháp bảo mật hàng đầu của chúng tôi để bảo vệ dữ liệu của bạn."}],"footer":"Made with ❤️ by VNStock"},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1712867361000}');
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
