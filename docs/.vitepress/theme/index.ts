/**
 * index
 * @author vnstock
 * @create_date 2024/04/10
 * @modify_date 2024/14/12
 * @modify_content
 */

import Theme from "vitepress/theme";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./style/var.less";
import "element-plus/theme-chalk/dark/css-vars.css";
import VueLiveWithLayout from "./components/vue-live-with-layout";
import liveEditor from "./components/liveEditor.vue";
import NotFound from "./components/NotFound.vue";

export default {
  ...Theme,
  NotFound,
  enhanceApp(ctx: any) {
    Theme.enhanceApp(ctx);
    ctx.app.use(ElementPlus);
    ctx.app.component("live-editor", liveEditor);
    ctx.app.component("VueLive", VueLiveWithLayout);
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          // @ts-ignore:next-line
          document.querySelector(".modal-back")?.click();
        }
      });
      window.addEventListener("click", (e) => {
        const el = e.target as HTMLElement;
        if (el.matches('div[class*="language-"] > button.run')) {
          const parent = el.parentElement;
          if (!parent) {
            return;
          }

          const sibling = parent.querySelector("code");

          if (!sibling) return;
          let text = "";
          sibling
            .querySelectorAll("span.line:not(.diff.remove)")
            .forEach((node) => (text += (node.textContent || "") + "\n"));
          text = text.slice(0, -1);
          // console.log(text);
          let func = new Function(text);

          try {
            let result = func();
          } catch (e) {
            alert(e);
          }
        }
      });
    }
  },
};
