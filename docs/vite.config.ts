import { defineConfig } from "vite";
import { SearchPlugin } from "vitepress-plugin-search";
import path from "path";

//default options
var options = {
  buttonLabel: "Tìm kiếm",
  placeholder: "Tìm kiếm tài liệu",
};

export default defineConfig({
  plugins: [SearchPlugin(options)],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, ".vitepress/theme"),
    },
  },
});
