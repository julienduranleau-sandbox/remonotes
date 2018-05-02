export default class Notes {

  static fetch() {
    return new Promise((resolve, reject) => {
      fetch('/static/generated.json').then(r => r.json()).then(notesJson => {
        let noteList = []

        for (let noteJson of notesJson) {
          let title = null
          let tags = null
          let rawContent = null
          let content = null

          rawContent = noteJson.content

          let tagsParts = /TAGS ?= ?(.*)/.exec(noteJson.content)
          if (tagsParts.length === 2) {
            tags = tagsParts[1].split(',')
            noteJson.content = noteJson.content.replace(/TAGS ?= ?(.*)\n/, ' ')
          }

          let titleParts = /TITLE ?= ?(.*)/.exec(noteJson.content)
          if (titleParts.length === 2) {
            title = titleParts[1]
            noteJson.content = noteJson.content.replace(/TITLE ?= ?(.*)\n/, ' ')
          }

          content = noteJson.content

          let note = {title, tags, content, rawContent}
          noteList.push(note)
        }

        resolve(noteList)
      })
    })
  }

}
