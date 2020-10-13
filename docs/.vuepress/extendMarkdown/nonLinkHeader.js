/**
 * Vuepressではh2,h3までSidebarに自動で表示されるようになっている。
 * その為、Referenceで ## methods 等に設定されていると自動的にSidebarに登録されてしまう為その対応策として新規にMarkdown記法を追加。
 * #_ でSidebarに表示させないための独自のHeaderを定義できるようにする。
 */
module.exports = function container_plugin(md) {
  const start_char = "#".charCodeAt(0),
    marker_char = "_".charCodeAt(0)

  function heading(state, startLine, endLine, silent) {
    let ch,
      tmp,
      token,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine]
    if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false
    }

    // headerライクにレベルをもたせたい場合を考えてcounterを設けておく。
    // 現在は #_のみ。 増やしたい場合は min_charsの値を増やすことで _の数に応じて `class=non-link-header-${counter}`が追加される
    // classのCSS定義は ./styles/index.stylから定義する
    let counter = 0
    let min_chars = 1

    ch = state.src.charCodeAt(pos)

    if (ch !== start_char || pos >= max) {
      return false
    }

    ch = state.src.charCodeAt(++pos)
    while (ch === marker_char && pos < max) {
      counter++
      ch = state.src.charCodeAt(++pos)
    }

    if (counter !== min_chars || (pos < max && !isSpace(ch))) return false

    if (silent) return true

    max = state.skipSpacesBack(max, pos)
    tmp = state.skipCharsBack(max, marker_char, pos)
    if (tmp > pos && isSpace(state.src.charCodeAt(tmp - 1))) {
      max = tmp
    }

    state.line = startLine + 1

    token = state.push("non_link_header_open", "div", 1)
    token.attrs = [["class", `non-link-header-${counter}`]]
    token = state.push("text", "", 0)

    token.markup = `#${addUnderbar(counter)}`
    token = state.push("inline", "", 0)

    token.content = state.src.slice(pos, max).trim()
    token.map = [startLine, state.line]
    token.children = []

    token = state.push("non_link_header_close", "div", -1)
    token.markup = `#${addUnderbar(counter)}`

    return true
  }

  md.block.ruler.before("heading", "non_link_header", heading)
}

// https://github.com/markdown-it/markdown-it/blob/e6f19eab4204122e85e4a342e0c1c8486ff40c2d/lib/common/utils.js#L154
function isSpace(code) {
  switch (code) {
    case 0x09:
    case 0x20:
      return true
  }
  return false
}

function addUnderbar(val) {
  let underbar = "",
    counter = 0
  while (counter < val) {
    counter++
    underbar += "_"
  }
  return underbar
}
