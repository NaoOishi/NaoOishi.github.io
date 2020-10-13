import sanitizeHTML from "sanitize-html"
export default ({ Vue }) => {
  Vue.prototype.$sanitize = sanitizeHTML
}
