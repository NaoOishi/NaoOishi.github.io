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
  description: "Test",
  host: "127.0.0.1",
  markdown: {
    extendMarkdown: md => {
      md.set({ breaks: true })
      md.use(require("./extendMarkdown/nonLinkHeader.js"))
    }
  },
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    smoothScroll: true,
    searchPlaceholder: "Search...",
    lastUpdated: "Last Updated",
    logo: "/logo.png",
    nextLinks: true,
    prevLinks: true,
    nav: [
      { text: "Top", link: "/pages/Home" },
      { text: "AAA", link: "/pages/aaa" },
      { text: "BBB", link: "/pages/bbb" }
    ]
  },
  plugins: ["vuepress-plugin-element-tabs"]
}
