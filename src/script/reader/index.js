const streamZip = require("node-stream-zip");

function* reader(filePath) {
  const projectFile = new streamZip.async({ file: filePath });
  let maindatas;
  projectFile.entryData(filePath).then((buffer) => {
    maindatas = JSON.parse(buffer.toString("utf-8"));
  });
  yield 1;
}
