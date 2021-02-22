let checkForUpdate = false;
let currentHtmlFile = '';

const readFile = (file) => {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = () => {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        const latestHtmlFile = rawFile.responseText;
        if (currentHtmlFile != latestHtmlFile && checkForUpdate) {
          location.reload()
        } else {
          currentHtmlFile = latestHtmlFile;
          checkForUpdate = true;
        }
      }
    }
  }
  rawFile.send(null);
}
setInterval(() => {
  readFile(window.location.pathname);
}, 1000);