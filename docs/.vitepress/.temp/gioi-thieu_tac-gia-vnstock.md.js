import { useSSRContext, unref, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { V as VPTeamPage, a as VPTeamPageTitle, b as VPTeamMembers } from "./VPTeamMembers.BaedpD7B.js";
import "./plugin-vue_export-helper.1tPrXgE0.js";
import "@vueuse/core";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page"},"headers":[],"relativePath":"gioi-thieu/tac-gia-vnstock.md","filePath":"gioi-thieu/tac-gia-vnstock.md","lastUpdated":null}');
const __default__ = { name: "gioi-thieu/tac-gia-vnstock.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const members = [
      {
        avatar: "img/thinhvu_avatar_about_me_square_color-1024x1024.jpg",
        name: "Thinh Vu",
        title: "Founder dự án",
        links: [
          { icon: "linkedin", link: "https://www.linkedin.com/in/thinh-vu/" },
          { icon: "github", link: "https://github.com/thinh-vu" },
          { icon: "facebook", link: "https://facebook.com/mr.thinh.ueh" },
          { icon: "youtube", link: "https://www.youtube.com/channel/UCYgG-bmk92OhYsP20TS0MbQ?sub_confirmation=1" }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(VPTeamPage), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VPTeamPageTitle), null, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Our Team `);
                } else {
                  return [
                    createTextVNode(" Our Team ")
                  ];
                }
              }),
              lead: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` The development of VitePress is guided by an international team, some of whom have chosen to be featured below. `);
                } else {
                  return [
                    createTextVNode(" The development of VitePress is guided by an international team, some of whom have chosen to be featured below. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VPTeamMembers), { members }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VPTeamPageTitle), null, {
                title: withCtx(() => [
                  createTextVNode(" Our Team ")
                ]),
                lead: withCtx(() => [
                  createTextVNode(" The development of VitePress is guided by an international team, some of whom have chosen to be featured below. ")
                ]),
                _: 1
              }),
              createVNode(unref(VPTeamMembers), { members })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gioi-thieu/tac-gia-vnstock.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
