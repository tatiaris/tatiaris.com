import pdf from "html-pdf"
import fs from "fs"
import nextConnect from "next-connect";
import middleware from "../../../middleware/database";

const handler = nextConnect();
handler.use(middleware);

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '5mb',
    },
  },
}

handler.get(async (req, res) => {
  let doc = {message: "ok"}
  let html = fs.readFileSync('./temp2.html', 'utf8');
  // let html = `<a href="https://tatiaris.com">tatiaris.com</a>`
  
  let options = {
    "directory": "/",       // The directory the file gets written into if not using .toFile(filename, callback). default: '/tmp'
    "width": "1000px",            // allowed units: mm, cm, in, px
    "height": "1500px",
    // "orientation": "portrait", // portrait or landscape
   
    "border": "0"
  }
  
  pdf.create(html, options).toFile('./test.pdf', function(err, res) {
    if (err) return console.log(err);
    console.log(res); // { filename: '/app/businesscard.pdf' }
  });
  res.json(doc);
});

handler.post(async (req, res) => {
  let data = req.body;

  let htmlBefore = `<!DOCTYPE html><html lang="en" style="width: max-content">  <head>    <meta charset="UTF-8" />    <meta name="viewport" content="width=device-width, initial-scale=1.0" />    <title>Document</title>    <link      rel="stylesheet"      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"      crossorigin="anonymous"    />    <link rel="preconnect" href="https://fonts.gstatic.com" />    <link      href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"      rel="stylesheet"    />    <link      href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"      rel="stylesheet"    />    <link      href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"      rel="stylesheet"    />    <link      rel="stylesheet"      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"    />    <style>      * {        font-family: "Roboto", sans-serif;        -webkit-box-sizing: border-box;        -moz-box-sizing: border-box;        box-sizing: border-box;        overflow: hide;        color: inherit;        transition: 200ms;        scrollbar-width: none;        font-weight: 300;      }      h1,      h2,      h4,      h6 {        margin: 0px !important;      }      .section {        margin-top: 1rem;      }      ul {        margin-bottom: 0 !important;      }      a {        text-decoration: none;      }      .h1,      .h2,      .h3,      .h4,      .h5,      .h6,      h1,      h2,      h3,      h4,      h5,      h6 {        font-weight: 400 !important;      }      b {        font-weight: 400 !important;      }    </style>  </head>`
  let htmlAfter = `</body></html>`

  let html = htmlBefore + decodeURIComponent(data.htmlCode) + htmlAfter

  let options = {
    "directory": "/",
    "width": "1050px",
    "height": `${data.pageHeight}px`,
    "border": "25px"
  }
  
  pdf.create(html, options).toFile('./test.pdf', function(err, res) {
    if (err) return console.log(err);
    console.log(res);
  });

  console.log("generated pdf");
  res.json({
    message: "success",
    data: "data"
  });
});

export default handler; 