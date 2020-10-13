const pagesPath = "pages"
const appendPagesPath = link => {
  return `${pagesPath}/${link}`
}

const group = (title, children, collapsable = true) => {
  return {
    title,
    collapsable,
    children
  }
}
const page = (link, title) => {
  return [appendPagesPath(link), title]
}
const externalPage = (link, title) => {
  return [link, title]
}

module.exports = {
  base: "/",
  serviceWorker: true,
  description: "Github.io",
  host: "127.0.0.1",
  markdown: {
    extendMarkdown: md => {
      md.set({ breaks: true })
      md.use(require("./extendMarkdown/nonLinkHeader.js"))
    }
  },
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  theme: "modern-blog",
  themeConfig: {
    smoothScroll: true,
    searchPlaceholder: "Search...",
    lastUpdated: "Last Updated",
    logo: "/logo.png",
    nextLinks: true,
    prevLinks: true,
    nav: [
      { text: "Top", link: "/pages/Home" },
      { text: "aaa", link: "/pages/aaa" },
      { text: "bbb", link: "/pages/bbb" }
    ],
    sidebar: [
      group("A", [
        page("aaaa", "aaaa"),
        page("bbbb", "bbbb")
      ]),
      group(
        "その他",
        [
          page("cccc", "cccc"),
          page("dddd", "dddd")
        ],
        false
      ),
      group("eeee", [
        externalPage("https://www.google.co.jp/", "Google")
      ])
    ]
  },
  plugins: ["vuepress-plugin-element-tabs"]
}
