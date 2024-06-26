import fs from "fs";
import vueLiveMd from "./vue-live-md-it.mjs";

function nav() {
  return [
    { text: 'Trang chủ', link: '/' },
    { text: 'App', link: '/app/' },
    {
      text: 'Giải pháp',
      activeMatch: `^/giai-phap/`,
      items: [
        { text: 'Kết nối dữ liệu', link: '/giai-phap/datafeed' },
        { text: 'Khám phá dữ liệu', link: '/giai-phap/kham-pha-du-lieu' },
        { text: 'Ứng dụng phân tích', link: '/giai-phap/phan-tich' },
        { text: 'Bot chứng khoán', link: '/giai-phap/bot-app-chung-khoan' },
        { text: 'Đào tạo thực chiến', link: '/giai-phap/dao-tao' },
      ]
    },
    {
      text: 'Tài liệu',
      activeMatch: `^/(tinh-nang|tai-lieu)/`,
      items: [
        { text: 'Hướng dẫn nhanh', link: '/huong-dan/index' },
        { text: 'Dữ liệu chứng khoán', link: '/tinh-nang/datafeed/' },
        { text: 'Khám phá dữ liệu', link: '/tinh-nang/kham-pha/' },
        { text: 'Tích hợp', link: '/tich-hop/' },
        { text: 'Câu hỏi thường gặp', link: '/faq/' },
        { text: 'Lịch sử thay đổi', link: '/huong-dan/phien-ban' },
      ]
    },
    { text: 'Cộng đồng', link: '/cong-dong/' },
    { text: 'Blog', link: '/blog/'},
    { text: 'Khoá học', link: '/khoa-hoc/'},
    { text: 'Giới thiệu', link: '/gioi-thieu/' },
  ];
}

// Dynamic sidebar generation from docs folder, produce name of the md files
// function sidebar() {
//   const side = {};
//   let files = fs.readdirSync("./docs");
//   // console.log(files);
//   files.forEach((item) => {
//     // console.log(fs.statSync("./docs/" + item).isDirectory());
//     if (item !== "public" && !item.startsWith(".")) {
//       if (fs.statSync("./docs/" + item).isDirectory()) {
//         const items = [];
//         let mds = fs.readdirSync("./docs/" + item);
//         mds.forEach((md) => {
//           if (md !== "index.md" && md.endsWith(".md")) {
//             if (fs.statSync("./docs/" + item + "/" + md).isFile()) {
//               let name = md.replace(".md", "");
//               items.push({
//                 text: name,
//                 link: "/" + item + "/" + name,
//                 activeMatch: "/" + item + "/" + name,
//               });
//             }
//           }
//         });
//         items.sort();
//         side[`/${item}/`] = [
//           {
//             text: item,
//             items,
//           },
//         ];
//       }
//     }
//   });
//   return side;
// }


module.exports = {
  base: "/vnstock-vitepress/",
  lang: "vi-VN",
  title: "Vnstock - API dữ liệu chứng khoán",
  description: "",
  cleanUrls: "with-subfolders",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "author", content: "vnstock" }],
    [
      "meta",
      { name: "keywords", content: "vnstock, api dữ liệu chứng khoán, api dữ liệu, tải dữ liệu chứng khoán, thinhvu, learn-anything" },
    ],

    ["meta", { name: "HandheldFriendly", content: "True" }],
    ["meta", { name: "MobileOptimized", content: "320" }],
    // ['meta', { name: 'theme-color', content: '#3c8772' }],

    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "vi-VN" }],
    ["meta", { property: "og:title", content: "Vnstock Official" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "Giải pháp phân tích thị trường chứng khoán hàng đầu Việt Nam",
      },
    ],
    ["meta", { property: "og:site", content: "https://vnstock.site" }],
    ["meta", { property: "og:site_name", content: "Vnstock Official" }],
    ["meta", { property: "og:image", content: "/vnstock_logo_rec.png" }],
    [
      "script",
      {},
      `
        if (localStorage.getItem('theme') === null) {
          localStorage.setItem('theme', 'light'); // Set default theme to light
        }
      `
    ],
    [
      "script",
      {},
      `
      var inMobile = window.location.pathname.startsWith('/mobile')
      if (window.innerWidth < 960) {
        if (!inMobile) {
          window.location.assign(window.location.href.replace(window.location.origin, window.location.origin + '/mobile'))
        }
      } else {
        if (inMobile) {
          window.location.assign(window.location.href.replace(window.location.origin + '/mobile', window.location.origin))
        }
      }
      `,
    ],
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?80ab9d52812826bfb0d5ece6fde1758e";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `,
    ],
  ],
  // mpa: true,
  themeConfig: {
    siteTitle: "Vnstock",
    socialLinks: [
      { icon: "github", link: "https://github.com/thinh-vu/vnstock" },
    ],
    docFooter: {
      prev: "Trước",
      next: "Tiếp theo",
    },
    footer: {
      license: {
        text: 'MIT License',
        link: 'https://opensource.org/licenses/MIT'
      },
      copyright: `Copyright © 2022-${new Date().getFullYear()} Thinh Vu @ Vnstock`
    },
    logo: "/vnstock_logo_rec.png",
    outline: "deep",
    outlineTitle: "Mục lục", 
    outlineBadges: true, 
    lastUpdated: {
      text: "Mới nhất",
      formatOptions: {
        forceLocale: true,
        dateStyle: "medium",
        timeStyle: "short",
        timeZone: "Asia/Ho_Chi_Minh",
      },
    },
    nav: nav(),
    sidebar: {
      '/tai-lieu/': [
        {
          text: 'Tài liệu',
          items: [
            { text: 'Demo Echarts', link: '/tai-lieu/ECharts' },
            { text: 'Đồ thị nến Echarts', link: '/tai-lieu/echarts-candlestick' },
            { text: 'Cửa sổ lệnh', link: '/tai-lieu/split-code-block' },
          ]
        }
      ],
      '/gioi-thieu/': [
        {
          text: 'Giới thiệu',
          items: [
            { text: 'Tác giả', link: '/gioi-thieu/tac-gia-vnstock' },
            { text: 'Tri ân', link: '/gioi-thieu/tri-an' },
          ]
        }
      ],
      // Default sidebar used if no other sidebar is matched
      '/': [
        { text: 'Trang chủ', link: '/' },
        // other links for the homepage or root section
      ]
    }
  },

  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(vueLiveMd);
      const defaultRender = md.renderer.rules.fence;
      md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        if (process.env.BLOG_TARGET === "mobile") {
          return defaultRender(tokens, idx, options, env);
        } else {
          let token = tokens[idx];
          if (token) {
            // const orgInfo = token.info;
            let info = token.info ? String(token.info).trim() : "";
            if (info.indexOf("echarts") > -1) {
              env.sfcBlocks.scripts = JSON.parse(
                JSON.stringify(env.sfcBlocks.scripts),
              );
              if (env.sfcBlocks.scripts.length === 0) {
                env.sfcBlocks.scripts[0] = {
                  content: "<script setup>\n</script>",
                  tagOpen: "<script setup>",
                  type: "script",
                  contentStripped: "\n",
                  tagClose: "</script>",
                };
              }
              env.sfcBlocks.scripts[0].contentStripped +=
                `let ec${idx}_` + token.content.trim();
              env.sfcBlocks.scripts[0].content =
                env.sfcBlocks.scripts[0].content.replace("</script>", "") +
                `\n let ec${idx}_` +
                token.content.trim() +
                "\n import ECharts from '@/components/ECharts.vue';\n </script>";
              token.info = "javascript";
              return (
                defaultRender(tokens, idx, options, env) +
                `<e-charts :option="ec${idx}_option"/>`
              );
            } else if (info.indexOf("livecode") > -1) {
              token.info = info.replace("livecode", "");
              const lang =
                info.replace("livecode").trim().split(" ")[0] || "html";
              let code = token.content; //.replaceAll("sscript", "script");
              const codeClean = md.utils
                .escapeHtml(code)
                .replace(/\`/g, "\\`")
                .replace(/\$/g, "\\$");
              const markdownGenerated = `<live-editor lang="${lang}" 
      :rcode="\`${codeClean}\`" 
       />`;
              return markdownGenerated;
              // return `<live-editor lang="${lang}" :rcode="\`${codeClean}\`"/>`;
            } else if (info.indexOf("run") > -1) {
              token.info = info.replace("livecode", "");
              const lang =
                info.replace("run").trim().split(" ")[0] || "javascript";

              let con = defaultRender(tokens, idx, options, env);

              let cleanCon =
                con.slice(0, -6) +
                `<button title="Run Code" class="run iconfont icon-run"></button></div>`;
              return cleanCon;
            }
          }
        }
        return defaultRender(tokens, idx, options, env);
      };
    },
  },
};
