const folders = ['./personal/', './science/', './work/']
const fs = require('fs')

let output = []

for (let folder of folders) {
  fs.readdirSync(folder).forEach(file => {
    let content = fs.readFileSync(folder + file, 'utf8')
    content = `TITLE = ${file}\n` + content
    content = `TAGS = ${folder}\n` + content
    output.push({ content })
  })
}

let jsonOutput = JSON.stringify(output)

fs.writeFileSync("generated.json", jsonOutput)
