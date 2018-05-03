export default class Notes {

  static fetch() {
    return new Promise((resolve, reject) => {
      fetch('/static/generated.json').then(r => r.json()).then(notesJson => {
        let noteList = []

        for (let noteJson of notesJson) {
          let title = null
          let tags = null
          let content = null

          let tagsParts = /TAGS ?= ?(.*)/.exec(noteJson.content)
          if (tagsParts.length === 2) {
            tags = tagsParts[1].split(',')
          }

          let titleParts = /TITLE ?= ?(.*)/.exec(noteJson.content)
          if (titleParts.length === 2) {
            title = titleParts[1]
          }

          content = noteJson.content

          let note = {title, tags, content}
          noteList.push(note)
        }

        resolve(noteList)
      })
    })
  }

  static filterMetasFromContent(content) {
    content = content.replace(/TAGS ?= ?(.*)\n/, '')
    content = content.replace(/TITLE ?= ?(.*)\n/, '')
    return content
  }

}
