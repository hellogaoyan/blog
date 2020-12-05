const path = require("path");

module.exports = {
  title: "GAOYAN-BLOG",
  tagline: "医疗-产品-实施",
  titleDelimiter: "-",
  url: "http://www.gaoyantongxue.cn/",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "zxuqian", // Usually your GitHub org/user name.
  projectName: "zxuqian.cn", // Usually your repo name.
  stylesheets: ["https://fonts.font.im/css?family=Raleway:500,700"],
  themeConfig: {
    navbar: {
      title: "GAOYAN",
      logo: {
        alt: "GAOYAN",
        src: "img/logo.png",
        srcDark: "img/logo.png",
      },
      items: [
        {
          to: "/",
          label: "博客",
          position: "right",
          items: [
            {
              label: "产品",
              to: "tags/产品",
            },
            {
              label: "医疗",
              to: "tags/医疗",
            },
            {
              label: "实施",
              to: "tags/实施",
            },
          ],
        },
  /*      
        {
          label: "视频",
          position: "right",
          to: "docs/videos/js/01-event-loop/event-loop",
        },
*/
        /*
        {
          label: "课程",
          position: "right",
          items: [
            {
              label: "React 即时通信 UI 开发实战",
              to: "docs/course/react-chat-ui/react-chat-ui",
            },
          ],
        },



*/

/*      
{
          label: "教程",
          position: "right",
          items: [
            {
              label: "CSS",
              to: "docs/css/box-model/box-model",
            },
          ],
        },

        */
       /*
        {
          href: "https://github.com/zxuqian/zxuqian.cn",
          label: "GitHub",
          position: "right",
        },
        */
       /*
        {
          href: "https://github.com/zxuqian/frontend-questions/issues",
          label: "社区讨论",
          position: "right",
        },
        */
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Docs",
        //   items: [
        //     {
        //       label: "Style Guide",
        //       to: "docs/doc1"
        //     },
        //     {
        //       label: "Second Doc",
        //       to: "docs/doc2"
        //     }
        //   ]
        // },
        // {
        //   title: "Community",
        //   items: [
        //     {
        //       label: "Stack Overflow",
        //       href: "https://stackoverflow.com/questions/tagged/docusaurus"
        //     },
        //     {
        //       label: "Discord",
        //       href: "https://discordapp.com/invite/docusaurus"
        //     }
        //   ]
        // },
        {
          title: "Social",
          items: [
            {
              label: "博客",
              to: "/",
            },
          /*
            {
              label: "GitHub",
              href: "https://github.com/zxuqian/zxuqian.cn",
            },

            */
           /*
            {
              label: "Bilibili 哔哩哔哩",
              href: "https://space.bilibili.com/302954484",
            },
            */
           /*
            {
              label: "网易云课堂",
              href:
                "https://study.163.com/course/courseMain.htm?courseId=1210022809&share=2&shareId=480000002172128",
            },
            */
           /*
            {
              label: "腾讯课堂",
              href: "https://ke.qq.com/course/2839093?tuin=3850fdc6",
            },
            */
          ],
        },
        {
          title: "友情链接",
          items: [
            {
              label: "gaoyantongxueのblog",
              to: "http://hellogaoyan.github.io/",
            },
          ],
        },
      ],
     /* copyright: `Copyright © ${new Date().getFullYear()} 高言<p>备案号</p>`,*/
    },
    prism: {
      darkTheme: require("prism-react-renderer/themes/vsDark"),
      defaultLanguage: "javascript",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/zxuqian/zxuqian.cn/tree/master/docs",
        },
        blog: {
          path: "./blog",
          routeBasePath: "/",
          feedOptions: {
            type: "all",
            title: "高言",
            /*copyright: `Copyright © ${new Date().getFullYear()}高言<p>备案号</p>`,*/
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: "daily",
          priority: 0.5,
        },
      },
    ],
  ],
  themes: ["@docusaurus/theme-live-codeblock"],
  plugins: [
    path.resolve(__dirname, "./src/plugin/plugin-baidu-analytics"),
    path.resolve(__dirname, "./src/plugin/plugin-baidu-push"),
    // path.resolve(__dirname, "./src/plugin/plugin-google-adsense"),
  ],
};
